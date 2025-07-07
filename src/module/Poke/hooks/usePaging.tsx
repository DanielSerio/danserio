import { useCallback, useEffect, useState } from "react";
import type { PokeListInitialValues } from "./usePokeListContext";

export function usePaging(defaults?: PokeListInitialValues) {
  const [totalRecords, setTotalRecords] = useState(0);
  const [paging, setPaging] = useState({
    limit: defaults?.limit ?? 25,
    offset: defaults?.offset ?? 0,
  });

  useEffect(() => {
    if (defaults) {
      setPaging({
        limit: defaults.limit,
        offset: defaults.offset,
      });
    }
  }, [defaults]);

  const setLimit = useCallback(
    (limit: number) =>
      setPaging({
        limit: ~~limit || 1,
        offset: 0,
      }),
    [setPaging]
  );

  const goToFirstPage = useCallback(
    () => setPaging((p) => ({ ...p, offset: 0 })),
    [setPaging]
  );

  const goToPreviousPage = useCallback(
    () =>
      setPaging((p) => ({
        ...p,
        offset: p.offset - p.limit >= 0 ? p.offset - p.limit : p.offset,
      })),
    [setPaging]
  );

  const goToNextPage = useCallback(
    () =>
      setPaging((currentPaging) => {
        if (currentPaging.offset + currentPaging.limit <= totalRecords) {
          return {
            ...currentPaging,
            offset: currentPaging.offset + currentPaging.limit,
          };
        }

        return {
          ...currentPaging,
        };
      }),
    [totalRecords, setPaging]
  );

  const goToLastPage = useCallback(
    () =>
      setPaging((currentPaging) => {
        const lastPageOffset =
          Math.floor(totalRecords / currentPaging.limit) & currentPaging.limit;
        if (currentPaging.offset < lastPageOffset) {
          return {
            ...currentPaging,
            offset: lastPageOffset,
          };
        }

        return {
          ...currentPaging,
        };
      }),
    [totalRecords, setPaging]
  );

  const state = {
    limit: paging.limit,
    offset: paging.offset,
    totalRecords,
  };

  const methods = {
    setLimit,
    setOffset: (off: number) => setPaging((curr) => ({ ...curr, offset: off })),
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage,
    setTotalRecords,
  };

  return [state, methods] as const;
}
