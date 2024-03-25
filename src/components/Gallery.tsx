import { ReactNode } from "react";

export const Gallery = ({ children }: { children: ReactNode }) => {
  return (
    <section className="sm:container sm:grid sm:grid-cols-3 gap-4 flex flex-col p-2 mt-4">
      {children}
    </section>
  );
};

