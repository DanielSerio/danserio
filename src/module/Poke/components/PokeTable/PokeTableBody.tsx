import { Table } from "#core/components";
import { getGridTemplateColumns } from "#core/utilities";
import { POKE_COLUMNS } from "#poke/const";
import { usePokeListContext } from "#poke/hooks/usePokeListContext";
import { Skeleton } from "@mantine/core";
import type { VisibilityState } from "@tanstack/react-table";
import { useEffect, type ReactNode } from "react";

function SkeletonRow({
  gridTemplateColumns,
  visibilityState,
}: {
  gridTemplateColumns: string;
  visibilityState: VisibilityState;
}) {
  const colCount = Object.values(visibilityState).filter(
    (isVisible) => isVisible
  ).length;
  return (
    <Table.Row gridTemplateColumns={gridTemplateColumns}>
      {[...new Array(colCount)].map((_, ci) => (
        <Table.Cell key={`skel:col:${ci}`} label={""}>
          <Skeleton h={14} w="100%" />
        </Table.Cell>
      ))}
    </Table.Row>
  );
}

export function PokeTableBody() {
  const [{ table, visibilityState, query, limit, totalRecords }] =
    usePokeListContext();
  const gridTemplateColumns = getGridTemplateColumns(
    POKE_COLUMNS.filter((col) => visibilityState[col.id])
  );

  useEffect(() => {
    if (totalRecords === 0 && !query.isLoading) {
      query.refetch();
    }
  }, []);

  return (
    <Table.Section>
      {!!query.isLoading &&
        [...new Array(limit)].map((_, ri) => (
          <SkeletonRow
            key={`skel:row:${ri}`}
            gridTemplateColumns={gridTemplateColumns}
            visibilityState={visibilityState}
          />
        ))}
      {table.getRowModel().flatRows.map((row) => {
        return (
          <Table.Row gridTemplateColumns={gridTemplateColumns} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell
                key={cell.id}
                label={cell.column.columnDef.header as string}
              >
                {cell.renderValue() as ReactNode}
              </Table.Cell>
            ))}
          </Table.Row>
        );
      })}
    </Table.Section>
  );
}
