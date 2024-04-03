import { ReactNode } from "react";
import { ScrollArea } from "./ui/scroll-area";

export const Gallery = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollArea className="h-screen w-full">
      <section className="gallery">{children}</section>
    </ScrollArea>
  );
};
