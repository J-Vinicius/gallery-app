import { handleAbrirLink } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ferramentas = [
  { ferramenta: "vitejs", link: "https://vitejs.dev/" },
  { ferramenta: "typescript", link: "https://www.typescriptlang.org/" },
  { ferramenta: "tailwindcss", link: "https://tailwindcss.com/" },
  { ferramenta: "firebase", link: "https://firebase.google.com/" },
];

export const MadeWith = () => {
  return (
    <div className="space-y-2">
      <p className="text-secondary-foreground/80">Feito com</p>
      <div className="flex gap-4">
        <div className="flex gap-2">
          {ferramentas.map(({ ferramenta, link }) => (
            <TooltipProvider key={ferramenta}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${ferramenta}/${ferramenta}-original.svg`}
                    alt={`${ferramenta} logo`}
                    className="cursor-pointer img"
                    onClick={() => handleAbrirLink(link)}
                  />
                </TooltipTrigger>
                <TooltipContent className="px-3 py-1 bg-background/75 border rounded-md">
                  <p className="capitalize">{ferramenta}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};
