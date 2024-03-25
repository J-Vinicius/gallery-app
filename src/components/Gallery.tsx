import { ReactNode } from "react";

export const Gallery = ({ children }: { children: ReactNode }) => {
  return (
    <section className="sm:container p-2 sm:p-0 columns-3xl mt-4">
      {children}
    </section>
  );
};

