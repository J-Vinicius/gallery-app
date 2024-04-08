import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="gallery h-full">
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
    </section>
  );
}
