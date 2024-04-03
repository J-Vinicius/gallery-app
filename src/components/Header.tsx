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
    <header className="sticky sm:min-h-screen sm:w-fit p-4 container flex flex-row flex-wrap sm:items-start items-center gap-4 sm:border-r-2">
      <ModeToggle />
      <h1 className="text-center">Galeria de Fotos</h1>
      <div className="sm:mt-auto space-y-2 sm:grow">
        <p className="text-secondary-foreground/80 hidden sm:block">Feito com</p>
        <div className="flex justify-between items-start gap-4">
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
      </div>
    </header>
  );
};
