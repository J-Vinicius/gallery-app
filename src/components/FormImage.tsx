import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";

interface FormImageProps {
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormImage({ submit }: FormImageProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="fixed right-4 bottom-4 z-50">
        <Button variant="default" size="circle">
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-none">Nova Imagem</SheetTitle>
        </SheetHeader>
        <form method="POST" onSubmit={submit} className="space-y-4">
          <Input id="image" name="image" type="file" />
          <SheetClose asChild className="absolute bottom-3 right-3">
            <Button type="submit">Enviar</Button>
          </SheetClose>
        </form>
      </SheetContent>
    </Sheet>
  );
}
