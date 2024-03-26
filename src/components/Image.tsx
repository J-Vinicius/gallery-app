type ImageProps = {
  src: string;
  alt: string;
  name: string;
};

export const ImageCard = ({ src, alt, name }: ImageProps) => {
  return (
    <figure>
      <img src={src} alt={alt} className="rounded" />
      <figcaption>{name}</figcaption>
    </figure>
  );
};
