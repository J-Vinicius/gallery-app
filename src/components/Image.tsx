type ImageProps = {
  src: string;
  alt: string;
  name: string;
};

export const ImageCard = ({ src, alt, name }: ImageProps) => {
  return (
    <figure>
      <img src={src} alt={alt} className="rounded object-cover w-full max-h-96" />
      <figcaption>{name}</figcaption>
    </figure>
  );
};
