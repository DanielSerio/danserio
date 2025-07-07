import type { TableCellAlign } from '#core/components/table/TableCell';
import type { ColumnDef, RowData } from '@tanstack/react-table';

export type TableColumn<TData extends RowData, TValue = unknown> = ColumnDef<TData, TValue> & {
  align?: TableCellAlign;
  id: string;
  header: string;
  size: number;
};