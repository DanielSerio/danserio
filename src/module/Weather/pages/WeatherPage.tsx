import { AppBreadcrumbs } from "#core/components";
import { WeatherDisplay } from "#weather/components/WeatherDisplay/WeatherDisplay";
import { WeatherLocationForm } from "#weather/components/WeatherLocationForm";
import { WeatherProvider } from "#weather/hooks/useWeather";

export function WeatherPage() {
  return (
    <WeatherProvider>
      <AppBreadcrumbs />
      <WeatherLocationForm />
      <WeatherDisplay />
    </WeatherProvider>
  );
}
