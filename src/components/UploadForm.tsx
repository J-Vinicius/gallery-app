import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const UploadForm = () => {
  return (
    <form
      action=""
      method="POST"
      className="grid w-full max-w-sm items-center gap-2"
    >
      <Label htmlFor="image">Image</Label>
      <Input id="image" type="file" />
      <Button type="submit" value="Enviar" />
    </form>
  );
};
