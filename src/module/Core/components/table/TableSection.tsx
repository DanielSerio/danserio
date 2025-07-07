import { Flex } from "@mantine/core";
import type { PropsWithChildren } from "react";

export type TableSectionName = "header" | "body" | "footer";
export interface TableSectionProps extends PropsWithChildren {
  variant?: TableSectionName;
}

export function TableSection({ variant, children }: TableSectionProps) {
  const sectionType = variant ?? "body";

  return (
    <Flex
      direction="column"
      component={sectionType === "body" ? "div" : sectionType}
      className={sectionType}
    >
      {children}
    </Flex>
  );
}
