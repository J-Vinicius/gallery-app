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
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Pocket Album</SheetTitle>
              <SheetDescription>
                Um cofre de bolso para suas imagens.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
