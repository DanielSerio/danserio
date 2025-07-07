import {
  PokeListProvider,
  type PokeListInitialValues,
} from "#poke/hooks/usePokeListContext";
import { type PropsWithChildren } from "react";

export function PokeProviders({
  children,
  defaults,
}: PropsWithChildren<{ defaults?: PokeListInitialValues }>) {
  return <PokeListProvider defaults={defaults}>{children}</PokeListProvider>;
}
