import { Box } from "@mantine/core";
import type { PropsWithChildren, ReactNode } from "react";

export type TableCellVariant = "td" | "th";
export type TdLabel = string | (() => ReactNode);
export type TableCellAlign = "left" | "center" | "right";

interface TableCellBaseProps extends PropsWithChildren {
  variant?: TableCellVariant;
  label?: TdLabel;
  align?: TableCellAlign;
}

interface ThCellProps extends TableCellBaseProps {
  variant: "th";
  label?: never;
}

interface TdCellProps extends TableCellBaseProps {
  variant?: "td";
  label: TdLabel;
}

export type TableCellProps = ThCellProps | TdCellProps;

export function TableCell({ variant, label, align, children }: TableCellProps) {
  return (
    <Box className={`cell ${variant ?? "td"} align-${align ?? "left"}`}>
      {!!label && (
        <Box className="label">
          {typeof label === "string" ? label : label()}
        </Box>
      )}
      <Box className="value">{children}</Box>
    </Box>
  );
}
