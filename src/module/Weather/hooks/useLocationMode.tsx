import { useCallback, useState } from "react";

export function useMyLocationMode() {
  const [usingMyLocation, setUsingMyLocation] = useState(false);

  const toggle = useCallback(
    () => setUsingMyLocation((val) => !val),
    [setUsingMyLocation]
  );

  return [usingMyLocation, { toggle, setUsingMyLocation }] as const;
}
