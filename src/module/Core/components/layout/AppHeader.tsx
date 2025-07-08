import { Flex } from "@mantine/core";
import { Nav } from "../navigation/Nav";
import { Logo } from "../navigation/Logo";

export function AppHeader() {
  return (
    <Flex align="center" justify="space-between" px="md" h={48}>
      <Logo />
      <Nav />
    </Flex>
  );
}
