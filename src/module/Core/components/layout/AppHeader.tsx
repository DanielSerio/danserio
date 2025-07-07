import { Flex, Text } from "@mantine/core";
import { Nav } from "../navigation/Nav";

export function AppHeader() {
  return (
    <Flex align="center" justify="space-between" px="md" h={48}>
      <Text>Dan Serio</Text>

      <Nav />
    </Flex>
  );
}
