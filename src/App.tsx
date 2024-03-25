import { ThemeProvider } from "@/components/theme-provider";
import * as Photos from "@/services/photos";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Photo } from "./types/photo";
import { SkeletonCard } from "./components/Skeleton";
import { Image } from "./components/Image";

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
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      {/* Área de Upload */}
      {loading && <SkeletonCard />}
      {!loading && photos.length > 0 && (
        <Gallery>
          {photos.map((item, i) => (
            <Image key={i} src={item.url} alt={item.name} />
          ))}
        </Gallery>
      )}
      {!loading && photos.length === 0 && <h2>Nenhuma imagem!</h2>}
    </ThemeProvider>
  );
}
