import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <section className="sm:container sm:grid sm:grid-cols-3 gap-4 flex flex-col p-2 mt-4 h-96">
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
      <Skeleton className="size-full rounded border" />
    </section>
  );
}
