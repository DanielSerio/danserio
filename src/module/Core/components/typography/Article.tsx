import { Box, TypographyStylesProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";

export function Article({ children }: PropsWithChildren) {
  return (
    <TypographyStylesProvider>
      <Box
        component="article"
        mx="auto"
        mb={24}
        mt={36}
        w="calc(100% - 48px)"
        maw="calc(65ch + 48px)"
      >
        {children}
      </Box>
    </TypographyStylesProvider>
  );
}
