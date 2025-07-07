import { POKE_ENDPOINTS } from "#const";
import { Flex, Group, Select, Text } from "@mantine/core";
import { ToolbarButton } from "./ToolbarButton";

export function PokeTableToolbar() {
  return (
    <Flex className="poke-table-toolbar" p="md" gap="sm">
      <Select
        label="Entity"
        size="xs"
        data={Object.keys(POKE_ENDPOINTS)}
        value="pokemon"
      />

      <Group align="flex-end" className="paging-controls">
        <Select
          label="Per Page"
          size="xs"
          data={["10", "25", "50", "100"]}
          value="100"
          style={{ maxWidth: "8ch" }}
        />

        <Group gap={4} mb={1}>
          <ToolbarButton>*</ToolbarButton>
          <ToolbarButton>*</ToolbarButton>
          <Text px="xs">55/199</Text>
          <ToolbarButton>*</ToolbarButton>
          <ToolbarButton>*</ToolbarButton>
        </Group>
      </Group>
    </Flex>
  );
}
