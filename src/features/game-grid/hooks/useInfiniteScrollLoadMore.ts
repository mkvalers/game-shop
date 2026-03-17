import { useEffect, useRef } from "react";

interface UseInfiniteScrollLoadMoreParams {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
}

const useInfiniteScrollLoadMore = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseInfiniteScrollLoadMoreParams) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (!hasNextPage || isFetchingNextPage) return;

        fetchNextPage();
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return loadMoreRef;
};

export default useInfiniteScrollLoadMore;
