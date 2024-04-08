import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@react-hook/media-query";
import { MadeWith } from "./MadeWith";
import { Notes } from "./Notes";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <header className="min-h-screen w-fit p-4 flex flex-col justify-between border-r-2">
        <div className="flex flex-row items-center gap-2">
          <ModeToggle />
          <h1>PocketAlbum</h1>
        </div>
        <div className="h-full flex">
          <Notes />
        </div>
        <MadeWith />
      </header>
    );
  }
  return (
    <header className="flex items-center justify-between space-x-4 mx-4 mt-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Pocket Album</SheetTitle>
            <SheetDescription>
              Um cofre de bolso para suas imagens.
            </SheetDescription>
          </SheetHeader>
          <Notes />
          <SheetFooter className="absolute bottom-4">
            <MadeWith />
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <h1>PocketAlbum</h1>
      <ModeToggle />
    </header>
  );
};
