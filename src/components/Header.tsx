import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="p-4">
      <div className="flex flex-row justify-between items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <h1 className="text-xl font-bold">PocketAlbum</h1>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="h-full flex flex-col justify-between"
          >
            <SheetHeader>
              <SheetTitle>Pocket Album</SheetTitle>
              <SheetDescription>
                Um cofre de bolso para suas imagens.
              </SheetDescription>
            </SheetHeader>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Atenção!</AlertTitle>
              <AlertDescription>
                Todas as imagens aqui são pegas de {" "}
                <a
                  href="https://prompthero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prompthero.com
                </a>
              </AlertDescription>
            </Alert>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
