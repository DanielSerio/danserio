import { AppBreadcrumbs } from "#core/components";
import { PokeTable } from "#poke/components/PokeTable/PokeTable";
import { PokeProviders } from "#poke/providers/PokeProviders";
import "#poke/styles/output/poke.scss";

export function PokePage() {
  return (
    <PokeProviders>
      <AppBreadcrumbs />
      <PokeTable />
    </PokeProviders>
  );
}
