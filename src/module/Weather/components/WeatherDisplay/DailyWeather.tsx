import { Box, Flex, Skeleton, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { WeatherTile } from "./WeatherTile";
import type { DailyWeather } from "#weather/types/weather.response";

export function DailyWeather({
  daily,
  isLoading,
}: {
  daily?: DailyWeather;
  isLoading?: boolean;
}) {
  return (
    <Flex direction="column" p="md" maw="480" mx="auto">
      <Text fz="h2" mb="xs">
        Daily
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
            {!!daily &&
              daily.time.map((time, index) => {
                const item = {
                  time,
                  temperature_min: daily.temperature_2m_min[index],
                  temperature_max: daily.temperature_2m_max[index],
                  code: daily.weather_code[index],
                };

                return (
                  <Carousel.Slide key={`d:${item.time}`}>
                    <WeatherTile daily={item} />
                  </Carousel.Slide>
                );
              })}
          </Carousel>
        )}
      </Box>
    </Flex>
  );
}
