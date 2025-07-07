import { Box, Flex } from "@mantine/core";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import { TableSection } from "./TableSection";
import type { PropsWithChildren } from "react";
import { getClassName } from "#core/utilities";

export interface TableProps extends PropsWithChildren {
  className?: string | null;
}

const TableComponent = ({ className, children }: TableProps) => {
  return (
    <Box className={getClassName("table", className)}>
      <Flex direction="column" className="table-inner">
        {children}
      </Flex>
    </Box>
  );
};

TableComponent.Section = TableSection;
TableComponent.Row = TableRow;
TableComponent.Cell = TableCell;

export const Table = TableComponent;
