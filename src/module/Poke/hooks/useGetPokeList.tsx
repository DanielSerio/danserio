import { useQuery } from "@tanstack/react-query";
import { PokeService } from "#poke/poke.service";
import type { Dispatch, SetStateAction } from "react";

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
    queryKey: ["poke", "list", path, `${search}`],
    async queryFn() {
      const { results, count } = await PokeService.list({
        path,
        search,
      });

      setTotalRecords(count);

      return results;
    },
    staleTime: Infinity,
  });
}
