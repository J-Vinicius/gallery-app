export const DeckImages = () => {
  return (
    <figure className="relative group-hover:-translate-y-6">
      <img
        src="/img.svg"
        alt="Placeholder Image"
        className="size-16 absolute group-hover:origin-bottom group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:translate-y-2 transition ease-in-out delay-75 -z-10 opacity-75"
      />
      <img
        src="/img.svg"
        alt="Placeholder Image"
        className="size-16 absolute group-hover:origin-bottom group-hover:rotate-12 group-hover:translate-x-4 group-hover:translate-y-2 transition ease-in-out delay-75 -z-10 opacity-75"
      />
      <img src="/img.svg" alt="Placeholder Image" className="size-16 drop-shadow group-hover:scale-105" />
    </figure>
  );
};
