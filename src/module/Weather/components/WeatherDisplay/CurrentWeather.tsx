import type { WeatherResponse } from "#weather/types/weather.response";
import { Box, Card, Flex, Skeleton, Text } from "@mantine/core";
import { formatDistance } from "date-fns";
import { WeatherIcon } from "./WeatherIcon";
import { getWeatherDescriptionFromCode } from "#weather/utilities";

export function CurrentWeather({
  isLoading,
  current,
}: {
  isLoading?: boolean;
  current?: WeatherResponse["current"];
}) {
  if (isLoading || !current) {
    return <Skeleton mt={48} mx="auto" maw={448} w="100%" h="360" />;
  }

  const description = getWeatherDescriptionFromCode(current.weather_code);

  return (
    <Card mt={48} mx="auto" maw={448} w="100%" h={360}>
      <Text fz="h2">Current</Text>
      <Card.Section flex={3}>
        <Box className="current-grid">
          <Flex align="center">
            <Text fz={72}>{~~current.temperature_2m}°F</Text>
            <WeatherIcon
              fallback={<Skeleton h={168} w={168} />}
              code={current.weather_code ?? 0}
              style={{ fontSize: 168 }}
            />
          </Flex>
        </Box>
      </Card.Section>
      <Card.Section
        flex={1}
        style={{ display: "grid", placeContent: "center" }}
      >
        <Text>{description}</Text>
      </Card.Section>
      <Box component="small" style={{ textAlign: "right", opacity: 0.6 }}>
        Last updated:{" "}
        {formatDistance(current.time, new Date(), { addSuffix: true })}
      </Box>
    </Card>
  );
}
