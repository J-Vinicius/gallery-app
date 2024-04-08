import { Trash } from "lucide-react";
import { Button } from "./ui/button";

type ImageProps = {
  src: string;
  alt: string;
  name: string;
  deleteImage: () => void;
};

export const ImageCard = ({ src, alt, name, deleteImage }: ImageProps) => {
  return (
    <figure className="relative group">
      <img src={src} alt={alt} className="rounded object-cover w-full" />
      <figcaption className="hidden group-hover:flex absolute inset-0 text-foreground bg-background/50">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-transparent hover:border border-primary absolute top-2 right-2"
          onClick={() => deleteImage()}
        >
          <Trash />
        </Button>
        <p className="absolute inset-x-4 bottom-4">{name}</p>
      </figcaption>
    </figure>
  );
};
