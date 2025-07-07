import { POKE_ENDPOINTS, type PokeEntityName } from "#const";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { usePaging } from "./usePaging";
import { useGetPokeList } from "./useGetPokeList";

export interface PokeListInitialValues {
  entity: PokeEntityName;
  limit: number;
  offset: number;
}

function usePokeListState(defaults?: PokeListInitialValues) {
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

  const state = {
    entity,
    limit: paging.limit,
    offset: paging.offset,
    urlData,
    query,
  };

  const methods = {
    setEntity,
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
