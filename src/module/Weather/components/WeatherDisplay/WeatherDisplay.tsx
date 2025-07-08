import { useWeather } from "#weather/hooks/useWeather";
import { CurrentWeather } from "./CurrentWeather";
import { DailyWeather } from "./DailyWeather";
import { HourlyWeather } from "./HourlyWeather";

export function WeatherDisplay() {
  const [{ query }] = useWeather();

  if (!query.data && !query.isLoading) {
    return <></>;
  }

  return (
    <>
      <CurrentWeather
        isLoading={query.isLoading}
        current={query.data?.current}
      />
      <HourlyWeather isLoading={query.isLoading} hourly={query.data?.hourly} />
      <DailyWeather isLoading={query.isLoading} daily={query.data?.daily} />
    </>
  );
}
