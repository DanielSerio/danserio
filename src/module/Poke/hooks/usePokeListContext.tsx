import { POKE_ENDPOINTS, type PokeEntityName } from "#const";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { usePaging } from "./usePaging";
import { useGetPokeList } from "./useGetPokeList";
import {
  getCoreRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import type { NamedItem, UnnamedItem } from "#poke/types/response.types";
import { POKE_COLUMNS } from "#poke/const";

export interface PokeListInitialValues {
  entity: PokeEntityName;
  limit: number;
  offset: number;
}

const blankData = [] as (UnnamedItem | NamedItem)[];

function createVisibleColumnsMap(columns: string[]) {
  const allColumns: ("name" | "url" | "id")[] = ["name", "url", "id"];
  const map = new Map<string, boolean>();

  for (const column of allColumns) {
    map.set(column, columns.includes(column));
  }

  return Object.fromEntries(map);
}

function usePokeListState(defaults?: PokeListInitialValues) {
  const [visibilityState, setVisibilityState] = useState<VisibilityState>({
    id: true,
    url: true,
    name: true,
  });
  const [entity, setEntity] = useState(defaults?.entity ?? "pokemon");
  const [paging, pagingMethods] = usePaging(defaults);

  const urlData = useMemo(
    () => ({
      search: new URLSearchParams({
        limit: `${paging.limit}`,
        offset: `${paging.offset}`,
      }),
      path: POKE_ENDPOINTS[entity],
    }),
    [entity, paging.limit, paging.offset]
  );

  const query = useGetPokeList({
    search: urlData.search,
    path: urlData.path,
    setTotalRecords: pagingMethods.setTotalRecords,
  });

  const table = useReactTable<UnnamedItem | NamedItem>({
    columns: POKE_COLUMNS,
    data: query.data ?? blankData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: visibilityState,
    },
    manualPagination: true,
    rowCount: query.data?.length ?? 0,
    onColumnVisibilityChange: setVisibilityState,
  });

  useEffect(() => {
    if (query.data && query.data.length) {
      const columns = Object.keys(query.data[0]);
      setVisibilityState(createVisibleColumnsMap([...columns, "id"]));
    }
  }, [query.data]);

  const state = {
    entity,
    limit: paging.limit,
    offset: paging.offset,
    urlData,
    query,
    visibilityState,
    table,
  };

  const methods = {
    setEntity,
    setVisibilityState,
    ...pagingMethods,
  };

  return [state, methods] as const;
}

export type PokeListState = ReturnType<typeof usePokeListState>;

const PokeListContext = createContext<null | PokeListState>(null);

export const PokeListProvider = ({
  children,
  defaults,
}: PropsWithChildren<{ defaults?: PokeListInitialValues }>) => {
  const state = usePokeListState(defaults);

  return (
    <PokeListContext.Provider value={state}>
      {children}
    </PokeListContext.Provider>
  );
};

export const usePokeListContext = () => {
  if (PokeListContext === null) {
    throw new Error(`PokeListContext must be used within a provider`);
  }

  return useContext(PokeListContext)!;
};
