import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const items: number[] = [15, 3, 8, 9, 7, 6, 1, 4, 5];

  return (
    <div className="h-[85vh] w-full screen">
      <section className="grid-responsive">
        {items.map((item) => (
          <Skeleton key={item} className="aspect-square" />
        ))}
      </section>
    </div>
  );
}

{
  /* <Masonry
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
      <Image />
    </Skeleton>
  )}
/>; */
}
