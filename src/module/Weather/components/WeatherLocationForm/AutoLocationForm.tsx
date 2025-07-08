import { Button, Flex } from "@mantine/core";
import type { AutoLocationFormProps } from "./props";
import { TbLocation } from "react-icons/tb";
import { getCurrentCoordinates } from "#weather/utilities";

export function AutoLocationForm({ onLocation }: AutoLocationFormProps) {
  return (
    <Flex h={120} align="center" justify="center">
      <Button
        rightSection={<TbLocation />}
        onClick={async () => {
          const coords = await getCurrentCoordinates();

          onLocation({
            name: "My Location",
            lat: coords.lat,
            lng: coords.lng,
          });
        }}
      >
        Use My location
      </Button>
    </Flex>
  );
}
