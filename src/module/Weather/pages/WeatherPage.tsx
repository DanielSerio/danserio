import { AppBreadcrumbs } from "#core/components";
import { WeatherDisplay } from "#weather/components/WeatherDisplay/WeatherDisplay";
import { WeatherLocationForm } from "#weather/components/WeatherLocationForm/WeatherLocationForm";
import { WeatherProvider } from "#weather/hooks/useWeather";
import "#weather/styles/output/weather.scss";

export function WeatherPage() {
  return (
    <WeatherProvider>
      <AppBreadcrumbs />
      <WeatherLocationForm />
      <WeatherDisplay />
    </WeatherProvider>
  );
}
