import { ReactNode } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { useMediaQuery } from "@react-hook/media-query";

export const Gallery = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <ScrollArea className="h-screen w-full">
        <section className="gallery">{children}</section>
      </ScrollArea>
    );
  }

  return <section className="gallery">{children}</section>;
};
