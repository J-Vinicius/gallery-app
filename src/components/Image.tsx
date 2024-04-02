type ImageProps = {
  src: string;
  alt: string;
  name: string;
};

export const ImageCard = ({ src, alt, name }: ImageProps) => {
  return (
    <figure className="relative group">
      <img
        src={src}
        alt={alt}
        className="rounded object-cover w-full"
      />
      <figcaption className="hidden group-hover:flex absolute inset-0 text-foreground bg-background/50">
        <p className="p-4">{name}</p>
      </figcaption>
    </figure>
  );
};
