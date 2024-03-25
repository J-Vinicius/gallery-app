import { ModeToggle } from "./mode-toggle";

const ferramentas = [
  { ferramenta: "vitejs", link: "https://vitejs.dev/" },
  { ferramenta: "tailwindcss", link: "https://tailwindcss.com/" },
  { ferramenta: "firebase", link: "https://firebase.google.com/" },
];

const handleAbrirLink = (link: string) => {
  window.open(link, "_blank");
};

export const Header = () => {
  return (
    <header className="sm:container flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2 p-4">
        <div className="flex gap-2">
          {ferramentas.map(({ ferramenta, link }) => (
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${ferramenta}/${ferramenta}-original.svg`}
              alt={`${ferramenta} logo`}
              className="cursor-pointer"
              onClick={() => handleAbrirLink(link)}
            />
          ))}
        </div>
        <h1 className="text-center">Galeria</h1>
        <ModeToggle />
      </div>
    </header>
  );
};
