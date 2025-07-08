import { Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Group gap={3}>
        <Text>Dan</Text>
        <Text
          fw={500}
          variant="gradient"
          gradient={{
            from: "cyan.4",
            to: "indigo.5",
          }}
        >
          Serio
        </Text>
      </Group>
    </Link>
  );
}
