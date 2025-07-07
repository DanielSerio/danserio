import { Flex } from "@mantine/core";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <Flex component="nav" align="center" gap="sm">
      <NavLink to="/">About</NavLink>
      <NavLink to="/apps">Apps</NavLink>
    </Flex>
  );
}
