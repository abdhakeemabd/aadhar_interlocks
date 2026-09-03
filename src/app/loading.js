import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-slate-900 pb-16 pt-24 md:pt-32 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-8 w-64 rounded-full bg-slate-800 mb-6" />
            <Skeleton className="h-16 w-full md:w-3/4 bg-slate-800 mb-6" />
            <Skeleton className="h-16 w-full md:w-1/2 bg-slate-800 mb-6" />
            <Skeleton className="h-24 w-full bg-slate-800 mb-10" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-14 w-full sm:w-48 bg-slate-800 rounded-full" />
              <Skeleton className="h-14 w-full sm:w-48 bg-slate-800 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl w-full">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-6 w-32 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
