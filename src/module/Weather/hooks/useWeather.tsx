import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

export interface WeatherParams {
  name: string;
  lat: number;
  lng: number;
}

function useWeatherQuery(params: WeatherParams | null) {
  return useQuery({
    enabled: !!params,
    queryKey: [
      "weather",
      params?.name,
      `lat:${params?.lat}`,
      `lng:${params?.lng}`,
    ],
    async queryFn() {},
    staleTime: 960000,
  });
}

function useWeatherState() {
  const [weatherState, setWeatherState] = useState<WeatherParams | null>(null);
  const query = useWeatherQuery(weatherState);

  const state = {
    weatherState,
    query,
  };

  const methods = {
    setWeatherState,
  };

  return [state, methods] as const;
}

export type WeatherState = ReturnType<typeof useWeatherState>;

const WeatherContext = createContext<null | WeatherState>(null);

export const WeatherProvider = ({ children }: PropsWithChildren) => {
  const state = useWeatherState();
  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  if (WeatherContext === null) {
    throw new Error(`No provider for WeatherContext`);
  }

  return useContext(WeatherContext)!;
};
