import { Flex, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <Flex align="center" justify="space-between" px="md" h={48}>
      <Text>Dan Serio</Text>

      <Flex component="nav" align="center" gap="sm">
        <NavLink to="/"> About </NavLink>
        <NavLink to="/apps">Apps</NavLink>
      </Flex>
    </Flex>
  );
}
