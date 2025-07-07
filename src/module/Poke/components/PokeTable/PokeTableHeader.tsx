import { Table } from "#core/components";
import { TableCell } from "#core/components/table/TableCell";
import { getGridTemplateColumns } from "#core/utilities";
import { POKE_COLUMNS } from "#poke/const";
import { usePokeListContext } from "#poke/hooks/usePokeListContext";

export function PokeTableHeader() {
  const [{ table, visibilityState }] = usePokeListContext();
  return (
    <Table.Section variant="header">
      <Table.Row
        gridTemplateColumns={getGridTemplateColumns(
          POKE_COLUMNS.filter((col) => visibilityState[col.id])
        )}
      >
        {table.getVisibleFlatColumns().map((col) => (
          <TableCell variant="th" key={col.columnDef.id!}>
            {col.columnDef.header as string}
          </TableCell>
        ))}
      </Table.Row>
    </Table.Section>
  );
}
