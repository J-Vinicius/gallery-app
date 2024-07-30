import { Download, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

type ImageProps = {
  src: string;
  alt: string;
  name: string;
  deleteImage: () => void;
};

const downloadImage = (image: string) => {
  saveAs(image, image); // Put your image URL here.
};

export const ImageCard = ({ src, alt, name, deleteImage }: ImageProps) => {
  return (
    <figure className="relative group overflow-hidden rounded aspect-square">
      <img src={src} alt={alt} className="object-cover" />
      <small className="px-1 py-0.5 bg-accent/75 rounded absolute bottom-2 left-2">{name.split(".")[1]}</small>
      <figcaption className="hidden group-hover:flex absolute inset-0 text-foreground">
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2"
          onClick={() => deleteImage()}
        >
          <Trash />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 left-2"
          onClick={() => downloadImage(alt)}
        >
          <Download />
        </Button>
      </figcaption>
    </figure>
  );
};
