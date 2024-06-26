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
import FormImage from "./components/FormImage";
import { deleteImage } from "./lib/firebase";

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
  }, [toast]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;
    toast({
      title: `A imagem: ${file.name}`,
      description: `Foi salva com sucesso.`,
      variant: "success",
    });
    e.currentTarget.reset();
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        toast({
          title: `${result.name}`,
          description: `${result.message}`,
          variant: "destructive",
        });
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };
  const handleExclusion = async (imageName: string) => {
    try {
      // Call your deleteImage function passing the imageName
      await deleteImage(imageName);

      // Update the photos state to remove the deleted image
      const updatedPhotos = photos.filter((photo) => photo.name !== imageName);
      setPhotos(updatedPhotos);

      toast({
        title: `Imagem: ${imageName}`,
        description: "Foi excluída com sucesso!",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: `Erro ao excluir imagem: ${imageName}`,
        description: `Ocorreu um erro ao excluir a imagem: ${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="sm:flex min-h-screen">
        <Header />
        <FormImage submit={handleFormSubmit} />
        {uploading && "Enviando..."}
        {loading && <SkeletonCard />}
        {!loading && photos.length > 0 && (
          <Gallery>
            {photos.map((item, i) => (
              <ImageCard
                key={i}
                src={item.url}
                alt={item.name}
                name={item.name}
                deleteImage={() => {
                  handleExclusion(item.name);
                }}
              />
            ))}
          </Gallery>
        )}
        {!loading && photos.length === 0 && (
          <h2 className="text-center border-b-0">Nenhuma imagem!</h2>
        )}
        <Toaster />
      </main>
    </ThemeProvider>
  );
}
