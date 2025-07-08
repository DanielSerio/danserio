import { useMyLocationMode } from "#weather/hooks/useLocationMode";
import { Box, Flex, Group, Switch, Text } from "@mantine/core";
import { AutoLocationForm } from "./AutoLocationForm";
import { SearchLocationForm } from "./SearchLocationForm";
import { useWeather, type WeatherParams } from "#weather/hooks/useWeather";

export function WeatherLocationForm() {
  const [_, methods] = useWeather();
  const [usingMyLocation, { toggle }] = useMyLocationMode();

  const onLocation = (params: WeatherParams) => methods.setWeatherState(params);

  return (
    <Box>
      <Flex align="center" justify="center">
        <Group component="label" align="center" px="md" py="xl" mt="md">
          <Text>Auto-location</Text>
          <Switch checked={usingMyLocation} onInput={toggle} />
        </Group>
      </Flex>
      <Flex align="center" justify="center">
        {usingMyLocation ? (
          <AutoLocationForm onLocation={onLocation} />
        ) : (
          <SearchLocationForm onLocation={onLocation} />
        )}
      </Flex>
    </Box>
  );
}
