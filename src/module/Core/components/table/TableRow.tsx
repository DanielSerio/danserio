import { Box } from "@mantine/core";
import type { PropsWithChildren } from "react";

export interface TableRowProps extends PropsWithChildren {
  gridTemplateColumns: string;
}

export function TableRow({ children, gridTemplateColumns }: TableRowProps) {
  return (
    <Box className="row" style={{ gridTemplateColumns }}>
      {children}
    </Box>
  );
}
