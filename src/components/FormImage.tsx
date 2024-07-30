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

export default function FormImage({ submit }: FormImageProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="fixed right-4 bottom-4 z-50">
          <Button variant="default" size="circle">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <ProfileForm submit={submit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="fixed right-4 bottom-4 z-50">
        <Button variant="default" size="circle">
          <Plus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4 pt-0">
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
        className="p-6 border-dashed border-2 rounded place-content-center"
      >
        <div className="flex flex-col justify-center items-center gap-2 group">
          <figure className="relative">
            <img src="/img.svg" alt="Placeholder Image" className="size-16 absolute group-hover:origin-bottom group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:translate-y-2 transition ease-in-out" />
            <img src="/img.svg" alt="Placeholder Image" className="size-16 absolute" />
            <img src="/img.svg" alt="Placeholder Image" className="size-16" />
          </figure>
          <h3 className="text-lg font-medium">Nova Imagem</h3>
          <p className="text-sm text-primary/50">
            Faça um upload de uma imagem de extensão: jpg, png e jpeg.
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
