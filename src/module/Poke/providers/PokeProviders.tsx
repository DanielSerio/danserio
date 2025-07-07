import { PokeListProvider } from "#poke/hooks/usePokeListContext";
import { type PropsWithChildren } from "react";

export function PokeProviders({ children }: PropsWithChildren) {
  return <PokeListProvider>{children}</PokeListProvider>;
}
