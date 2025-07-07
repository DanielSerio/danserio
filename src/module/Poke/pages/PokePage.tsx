import { AppBreadcrumbs } from "#core/components";
import { PokeTable } from "#poke/components/PokeTable/PokeTable";
import type { PokeListInitialValues } from "#poke/hooks/usePokeListContext";
import { PokeProviders } from "#poke/providers/PokeProviders";
import "#poke/styles/output/poke.scss";

export function PokePage() {
  const queryString = decodeURIComponent(window.location.href).split("?")[1];
  const currentSearchParams = new URLSearchParams(queryString);
  const entity = currentSearchParams.get(
    "entity"
  ) as PokeListInitialValues["entity"];
  const limitString = currentSearchParams.get("limit");
  const offsetString = currentSearchParams.get("offset");
  const paramsAreTruthy = !!limitString && !!offsetString && !!entity;

  if (paramsAreTruthy) {
    console.info("Rendered PokePage", { entity, limitString, offsetString });
  }

  return (
    <PokeProviders
      defaults={
        paramsAreTruthy
          ? {
              entity,
              limit: limitString ? +limitString : 25,
              offset: offsetString ? +offsetString : 0,
            }
          : undefined
      }
    >
      <AppBreadcrumbs />
      <PokeTable />
    </PokeProviders>
  );
}
