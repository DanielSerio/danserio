import { useQuery } from "@tanstack/react-query";
import { PokeService } from "#poke/poke.service";
import type { Dispatch, SetStateAction } from "react";
import type { NamedItem, UnnamedItem } from "#poke/types/response.types";

export function useGetPokeList({
  path,
  search,
  setTotalRecords,
}: {
  path: string;
  search: URLSearchParams;
  setTotalRecords: Dispatch<SetStateAction<number>>;
}) {
  return useQuery({
    enabled: !!path && !!search,
    queryKey: ["poke", "list", path, `${search}`],
    async queryFn() {
      const { results, count } = await PokeService.list<
        UnnamedItem | NamedItem
      >({
        path,
        search,
      });

      setTotalRecords(count);

      return results;
    },
    staleTime: Infinity,
  });
}
