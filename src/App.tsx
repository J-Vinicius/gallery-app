import { ThemeProvider } from "@/components/theme-provider";
import * as Photos from "@/services/photos";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Photo } from "./types/photo";
import { SkeletonCard } from "./components/Skeleton";
import { ImageCard } from "./components/Image";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = () => {};

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <UploadForm onSubmit={handleFormSubmit} />
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
    </ThemeProvider>
  );
}
