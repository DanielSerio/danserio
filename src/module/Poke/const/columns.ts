import type { TableColumn } from "#core/types";
import type { NamedItem, UnnamedItem } from "#poke/types/response.types";


export const POKE_COLUMNS: TableColumn<NamedItem | UnnamedItem>[] = [
  {
    id: 'id',
    header: 'ID',
    size: 60,
    accessorFn({ url }) {
      const slashRemoved = url.replace(/(\/)$/, '');
      const matches = slashRemoved.match(/\d+$/) ?? [];

      return matches[0] ?? '';
    }
  },
  {
    id: 'url',
    header: 'URL',
    size: 260,
    accessorKey: 'url'
  },
  {
    id: 'name',
    header: 'Name',
    size: 120,
    accessorKey: 'name'
  }
];