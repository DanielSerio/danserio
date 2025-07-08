import type { WeatherResponse } from "#weather/types/weather.response";

type DailyType = WeatherResponse["daily"];
type HourlyType = WeatherResponse["hourly"];
type PickHourlyValue<Key extends keyof HourlyType> = HourlyType[Key][number];
type PickDailyValue<Key extends keyof DailyType> = DailyType[Key][number];

export interface HourlyItem {
  time: PickHourlyValue<"time">;
  temperature: PickHourlyValue<"temperature_2m">;
  code: PickHourlyValue<"weather_code">;
}

export interface DailyItem {
  time: PickDailyValue<'time'>;
  temperature_min: PickDailyValue<'temperature_2m_min'>;
  temperature_max: PickDailyValue<'temperature_2m_max'>;
  code: PickDailyValue<'weather_code'>;
}

interface WeatherTilePropsBase {
  hourly?: HourlyItem;
  daily?: DailyItem;
}


interface DailyTileProps extends WeatherTilePropsBase {
  hourly?: never;
  daily: DailyItem;
}


interface HourlyTileProps extends WeatherTilePropsBase {
  daily?: never;
  hourly: HourlyItem;
}

export type WeatherTileProps = DailyTileProps | HourlyTileProps;