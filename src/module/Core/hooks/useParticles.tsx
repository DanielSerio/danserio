import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type {
  Container,
  IOptions,
  RecursivePartial,
} from "@tsparticles/engine";

export interface UseParticlesParams {
  onLoaded?: (container?: Container) => Promise<void>;
}

export function useParticles({ onLoaded }: UseParticlesParams) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const onParticlesLoaded = async (container?: Container) =>
    await onLoaded?.(container);

  const options = useMemo<RecursivePartial<IOptions>>(
    () => ({
      fpsLimit: 120,
      fullScreen: {
        enable: false,
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 250,
          enable: true,
          opacity: 0.75,
          width: 0.25,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.95,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const state = {
    init,
    options,
  };

  const methods = {
    onParticlesLoaded,
  };

  return [state, methods] as const;
}
