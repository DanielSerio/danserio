import type { WeatherParams } from "#weather/hooks/useWeather";

export interface LocationFormBaseProps {
  onLocation: (params: WeatherParams) => void;
}

export interface AutoLocationFormProps extends LocationFormBaseProps { }
export interface SearchLocationFormProps extends LocationFormBaseProps { }