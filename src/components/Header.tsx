import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="py-2 border-b">
      <div className="flex flex-row justify-between items-center gap-2 screen">
        <Sheet>
          <SheetTrigger asChild className="cursor-pointer">
            <h1 className="text-xl font-bold">PocketAlbum</h1>
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
                Todas as imagens aqui são pegas de{" "}
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
}
