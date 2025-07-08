import { Card, Skeleton, Text } from "@mantine/core";
import { format } from "date-fns";
import type { DailyItem, HourlyItem, WeatherTileProps } from "./types";
import { getWeatherDescriptionFromCode } from "#weather/utilities";
import { WeatherIcon } from "./WeatherIcon";

const midSectionStyles = {
  display: "grid",
  placeContent: "center",
  flex: 1,
};

function HourlyTile({
  hourly: { time, temperature, code },
}: {
  hourly: HourlyItem;
}) {
  const description = getWeatherDescriptionFromCode(code);
  return (
    <>
      <Card.Section>
        <Text component="strong" fw={500} fz={15}>
          {format(new Date(Date.parse(time)), "h a")}
        </Text>
      </Card.Section>
      <Card.Section title={description} style={midSectionStyles}>
        <WeatherIcon
          style={{ fontSize: 36 }}
          code={code}
          fallback={<Skeleton h={16} w={16} />}
        />
      </Card.Section>
      <Card.Section>{~~temperature}°F</Card.Section>
    </>
  );
}

function DailyTime({
  daily: { code, time, temperature_min, temperature_max },
}: {
  daily: DailyItem;
}) {
  const description = getWeatherDescriptionFromCode(code);
  return (
    <>
      <Card.Section>
        <Text component="strong" fw={500} fz={15}>
          {format(new Date(Date.parse(time)), "M/d")}
        </Text>
      </Card.Section>
      <Card.Section p={0} style={midSectionStyles} title={description}>
        <WeatherIcon
          style={{ fontSize: 36 }}
          code={code}
          fallback={<Skeleton h={16} w={16} />}
        />
      </Card.Section>
      <Card.Section>
        {~~temperature_min}°F/{~~temperature_max}°F
      </Card.Section>
    </>
  );
}

export function WeatherTile({ hourly, daily }: WeatherTileProps) {
  if (!hourly && !daily) {
    throw new Error("An entity is required for WeatherTile");
  }

  return (
    <Card style={{ textAlign: "center" }} h={100} w={100}>
      {!!hourly ? <HourlyTile hourly={hourly} /> : <DailyTime daily={daily} />}
    </Card>
  );
}
