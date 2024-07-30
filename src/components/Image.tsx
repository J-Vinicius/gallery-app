import { Download, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

type ImageProps = {
  src: string;
  alt: string;
  type: string;
  name: string;
  deleteImage: () => void;
};

const downloadImage = (image: string) => {
  saveAs(image, image); // Put your image URL here.
};

export const ImageCard = ({
  src,
  alt,
  name,
  type,
  deleteImage,
}: ImageProps) => {
  return (
    <figure className="relative group bg-foreground p-6 space-y-2">
      <img src={src} alt={alt} className="object-cover w-full" />
      <figcaption className="text-card">
        <p className="line-clamp-2">{name}</p>
        <small className="bg-accent/50 py-0.5 px-1 rounded font-mono">
          {type}
        </small>
      </figcaption>
      <div className="hidden group-hover:flex absolute inset-0 text-foreground">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-transparent hover:border border-primary absolute top-2 right-2"
          onClick={() => deleteImage()}
        >
          <Trash />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-transparent hover:border border-primary absolute top-2 left-2"
          onClick={() => downloadImage(alt)}
        >
          <Download />
        </Button>
      </div>
    </figure>
  );
};
