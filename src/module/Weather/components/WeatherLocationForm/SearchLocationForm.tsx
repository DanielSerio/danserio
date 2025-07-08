import { Flex } from "@mantine/core";
import type { SearchLocationFormProps } from "./props";
import { LocationSearchField } from "./LocationSearchField";

export function SearchLocationForm({ onLocation }: SearchLocationFormProps) {
  return (
    <Flex h={120} align="center" justify="center">
      <LocationSearchField onLocation={onLocation} />
    </Flex>
  );
}
