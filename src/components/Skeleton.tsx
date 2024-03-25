import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="gallery h-96">
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
    </section>
  );
}
