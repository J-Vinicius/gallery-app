/* eslint-disable prefer-const */
import { ThemeProvider } from "@/components/theme-provider";
import * as Photos from "@/services/photos";
import { useState, useEffect, FormEvent } from "react";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Photo } from "./types/photo";
import { SkeletonCard } from "./components/Skeleton";
import { ImageCard } from "./components/Image";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function App() {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;
    toast({
      title: `Está merda ${file.name}`,
      description: `Não está funcionando.`,
    });
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        toast({
          title: `${result.name}`,
          description: `${result.message}`,
        });
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <form
        method="POST"
        onSubmit={handleFormSubmit}
        className="sm:container p-2 items-center space-y-2"
      >
        <Label htmlFor="image">Image</Label>
        <div className="sm:flex gap-2">
          <Input id="image" name="image" type="file" />
          <Button type="submit">Enviar</Button>
        </div>
        {uploading && "Enviando..."}
      </form>
      {loading && <SkeletonCard />}
      {!loading && photos.length > 0 && (
        <Gallery>
          {photos.map((item, i) => (
            <ImageCard
              key={i}
              src={item.url}
              alt={item.name}
              name={item.name}
            />
          ))}
        </Gallery>
      )}
      {!loading && photos.length === 0 && (
        <h2 className="text-center border-b-0">Nenhuma imagem!</h2>
      )}
      <Toaster />
    </ThemeProvider>
  );
}
