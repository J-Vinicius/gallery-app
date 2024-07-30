import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { DeckImages } from "./DeckImages";

export default function FormImage({ submit }: FormImageProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Configurações de Css em comum
  const cssTrigger =
    "flex items-center justify-center border-2 text-secondary rounded border-dashed hover:bg-card-foreground/5";

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={cssTrigger}>
          <Plus size={24} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <ProfileForm submit={submit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className={cssTrigger}>
        <Plus size={24} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4 pt-2">
          <ProfileForm submit={submit} />
        </div>
        <DrawerFooter className="pt-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface FormImageProps {
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function ProfileForm({ submit }: FormImageProps) {
  return (
    <form
      method="POST"
      onSubmit={submit}
      className={cn("grid items-start gap-4")}
    >
      <label
        htmlFor="image"
        className="sm:px-8 sm:py-16 p-8 border-dashed border-2 rounded cursor-pointer place-content-center"
      >
        <div className="flex flex-col justify-center items-center gap-2 group">
          <DeckImages />
          <h3 className="text-lg font-medium">
            Arraste sua imagem aqui ou{" "}
            <span className="text-blue-500">busque</span>.
          </h3>
          <p className="text-sm text-primary/50">
            Extensões suportadas: jpg, png e jpeg.
          </p>
        </div>
        <Input id="image" name="image" type="file" className="hidden" />
      </label>
      <DialogClose asChild>
        <Button type="submit">Confirmar</Button>
      </DialogClose>
    </form>
  );
}
