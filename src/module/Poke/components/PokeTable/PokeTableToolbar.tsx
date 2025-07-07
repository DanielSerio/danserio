import { POKE_ENDPOINTS, type PokeEntityName } from "#const";
import { Flex, Group, Select, Text } from "@mantine/core";
import { ToolbarButton } from "./ToolbarButton";
import { usePokeListContext } from "#poke/hooks/usePokeListContext";
import { useEffect } from "react";

export function PokeTableToolbar() {
  const [{ urlData, entity }, { setEntity }] = usePokeListContext();

  useEffect(() => {
    const origin = window.location.origin;
    window.history.replaceState(
      {},
      "",
      `${origin}/#/apps/poke?entity=${urlData.path.replace(/\//g, "")}&${
        urlData.search
      }`
    );
  }, [urlData.path, urlData.search]);

  return (
    <Flex className="poke-table-toolbar" p="md" gap="sm">
      <Select
        label="Entity"
        size="xs"
        data={Object.keys(POKE_ENDPOINTS)}
        value={entity}
        onChange={(ent) => setEntity(ent as PokeEntityName)}
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
