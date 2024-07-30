import { Skeleton } from "@/components/ui/skeleton";
import { gerarArrayDeStringsAleatorias } from "@/lib/random-array";
import { Image } from "lucide-react";
import { Masonry } from "react-plock";

export function SkeletonCard() {
  const items: string[] = gerarArrayDeStringsAleatorias(
    20,
    10,
    "abcdefghijklmnopqrstuvxyz"
  );
  return (
    <Masonry
      className="p-4 h-[90vh]"
      items={items}
      config={{
        columns: [2, 3, 4, 5],
        gap: [12, 12, 12, 12],
        media: [420, 640, 768, 1024],
      }}
      render={(nada: string, i: number) => (
        <Skeleton
          key={`${i} - ${nada}`}
          className="h-32 flex rounded border justify-center items-center"
        >
          <Image className="" />
        </Skeleton>
      )}
    />
  );
}
