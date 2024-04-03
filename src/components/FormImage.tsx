import { Label } from "./ui/label";
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
          <SheetTitle>Nova Imagem</SheetTitle>
        </SheetHeader>
        <form method="POST" onSubmit={submit}>
          <Label htmlFor="image">Image</Label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input id="image" name="image" type="file" />
          </div>
          <SheetClose asChild>
            <Button type="submit" className="ml-auto">
              Enviar
            </Button>
          </SheetClose>
        </form>
      </SheetContent>
    </Sheet>
  );
}
