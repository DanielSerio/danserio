import type { RowData } from "@tanstack/react-table";
import type { TableColumn } from "../../types";

function getTotalSize<TData extends RowData, TValue>(
  columns: TableColumn<TData, TValue>[]
) {
  return columns.reduce((sum, col) => sum + col.size, 0);
}

function getColumnWidthPercent<TData extends RowData, TValue>(
  column: TableColumn<TData, TValue>,
  totalWidth: number
) {
  return (column.size / totalWidth) * 100;
}

/**
 * Calculates the width percentage for each column in a grid layout based on the total width of all
 * columns.
 * @param {TableColumn<TData, TValue>[]} columns - array of `TableColumn` objects.
 * @returns The `getGridTemplateColumns` function returns a string that represents the template columns
 * for a CSS grid layout
 */
export function getGridTemplateColumns<TData extends RowData, TValue>(
  columns: TableColumn<TData, TValue>[]
) {
  const totalWidth = getTotalSize(columns);
  const widths = columns.map(
    (col) => `${getColumnWidthPercent(col, totalWidth)}%`
  );

  return widths.join(" ");
}
