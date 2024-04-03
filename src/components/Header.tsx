import { ModeToggle } from "./mode-toggle";

const ferramentas = [
  { ferramenta: "vitejs", link: "https://vitejs.dev/" },
  { ferramenta: "typescript", link: "https://www.typescriptlang.org/" },
  { ferramenta: "tailwindcss", link: "https://tailwindcss.com/" },
  { ferramenta: "firebase", link: "https://firebase.google.com/" },
];

const handleAbrirLink = (link: string) => {
  window.open(link, "_blank");
};

export const Header = () => {
  return (
    <header className="sm:w-fit sm:flex-col-reverse container flex flex-col  gap-4">
      <div className="flex justify-between items-center gap-2 p-4">
        <div className="flex gap-2">
          {ferramentas.map(({ ferramenta, link }) => (
            <img
              key={ferramenta}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${ferramenta}/${ferramenta}-original.svg`}
              alt={`${ferramenta} logo`}
              className="cursor-pointer img"
              onClick={() => handleAbrirLink(link)}
            />
          ))}
        </div>
      </div>
        <ModeToggle />
      <h1 className="text-center">Galeria de Fotos</h1>
    </header>
  );
};
