import { ReactNode } from "react";

export const Gallery = ({ children }: { children: ReactNode }) => {
  return (
    <section className="gallery">
      {children}
    </section>
  );
};

