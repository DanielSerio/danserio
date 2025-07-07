import { POKE_ENDPOINTS, type PokeEntityName } from "#const";
import { Flex, Group, Select, Text } from "@mantine/core";
import { ToolbarButton } from "./ToolbarButton";
import { usePokeListContext } from "#poke/hooks/usePokeListContext";
import { useEffect } from "react";
import {
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";

export function PokeTableToolbar() {
  const [
    { urlData, entity, limit, offset, totalRecords },
    {
      setEntity,
      setLimit,
      goToFirstPage,
      goToPreviousPage,
      goToNextPage,
      goToLastPage,
    },
  ] = usePokeListContext();

  useEffect(() => {
    if (urlData.path) {
      const origin = window.location.origin;
      window.history.replaceState(
        {},
        "",
        `${origin}/#/apps/poke?entity=${urlData.path.replace(/\//g, "")}&${
          urlData.search
        }`
      );
    }
  }, [urlData.path, urlData.search]);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalRecords / limit);

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
          value={limit ? `${limit}` : null}
          onChange={(value) => (value ? setLimit(+value) : undefined)}
          style={{ maxWidth: "8ch" }}
        />

        <Group gap={4} mb={1}>
          <ToolbarButton disabled={currentPage === 1} onClick={goToFirstPage}>
            <TbChevronsLeft />
          </ToolbarButton>
          <ToolbarButton
            disabled={currentPage === 1}
            onClick={goToPreviousPage}
          >
            <TbChevronLeft />
          </ToolbarButton>
          <Text px="xs">
            {currentPage}/{totalPages}
          </Text>
          <ToolbarButton
            disabled={currentPage === totalPages}
            onClick={goToNextPage}
          >
            <TbChevronRight />
          </ToolbarButton>
          <ToolbarButton
            disabled={currentPage === totalPages}
            onClick={goToLastPage}
          >
            <TbChevronsRight />
          </ToolbarButton>
        </Group>
      </Group>
    </Flex>
  );
}
