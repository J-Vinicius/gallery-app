import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

type ImageProps = {
  src: string;
  alt: string;
  name: string;
};

export const ImageCard = ({ src, alt, name }: ImageProps) => {
  return (
    <figure className="relative group">
      <img src={src} alt={alt} className="rounded object-cover w-full" />
      <figcaption className="hidden group-hover:flex absolute inset-0 text-foreground bg-background/50">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-transparent hover:border border-primary absolute top-2 right-2"
          onClick={() => {
            toast({
              title: `Imagem: ${name}`,
              description: "Foi deletada com sucesso!",
              variant: "success",
            });
          }}
        >
          <Trash />
        </Button>
        <p className="absolute inset-x-4 bottom-4">{name}</p>
      </figcaption>
    </figure>
  );
};
