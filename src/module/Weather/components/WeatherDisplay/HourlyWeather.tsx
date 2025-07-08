import { Box, Flex, Skeleton, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { WeatherTile } from "./WeatherTile";
import type { HourlyWeather } from "#weather/types/weather.response";

export function HourlyWeather({
  hourly,
  isLoading,
}: {
  hourly?: HourlyWeather;
  isLoading?: boolean;
}) {
  return (
    <Flex direction="column" p="md" maw="480" mx="auto">
      <Text fz="h2" mb="xs">
        Hourly
      </Text>
      <Box>
        {!!isLoading ? (
          <Carousel
            slideSize="20%"
            height={100}
            w={"full"}
            slideGap="md"
            controlsOffset="sm"
            controlSize={26}
            withControls={false}
            withIndicators={false}
          >
            {[...new Array(4)].map((_, index) => {
              return (
                <Carousel.Slide key={`s:${index}`}>
                  <Skeleton h={100} w={100} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        ) : (
          <Carousel
            slideSize="20%"
            height={100}
            w={"full"}
            slideGap="md"
            controlsOffset="sm"
            controlSize={26}
            withControls={false}
            withIndicators={false}
          >
            {!!hourly &&
              hourly.time.map((time, index) => {
                const item = {
                  time,
                  temperature: hourly.temperature_2m[index],
                  code: hourly.weather_code[index],
                };

                return (
                  <Carousel.Slide key={`h:${item.time}`}>
                    <WeatherTile hourly={item} />
                  </Carousel.Slide>
                );
              })}
          </Carousel>
        )}
      </Box>
    </Flex>
  );
}
