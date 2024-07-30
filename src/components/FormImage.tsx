import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
          <DialogHeader>
            <DialogTitle className="border-transparent">
              Nova Imagem
            </DialogTitle>
            <DialogDescription>
              Faça um upload de uma imagem de extensão: jpg, png e jpeg.
            </DialogDescription>
          </DialogHeader>
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
        <DrawerHeader className="text-left">
          <DrawerTitle className="border-transparent">Nova Imagem</DrawerTitle>
          <DrawerDescription>
            Faça um upload de uma imagem de extensão: jpg, png e jpeg.
          </DrawerDescription>
        </DrawerHeader>
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
      <div className="grid gap-2">
        <Input id="image" name="image" type="file" className="p-6 border-dashed border-2" />
      </div>
      <DialogClose asChild>
        <Button type="submit">Enviar</Button>
      </DialogClose>
    </form>
  );
}
