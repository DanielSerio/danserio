import { Box } from "@mantine/core";
import Particles from "@tsparticles/react";
import { type ComponentProps } from "react";

export function ParticlesBackground(props: ComponentProps<typeof Particles>) {
  return (
    <Box style={{ zIndex: 0, position: "relative", maxHeight: 400 }}>
      <Box
        style={{
          position: "absolute",
          background:
            "linear-gradient(rgba(0,0,0,0.3), transparent 30%, var(--mantine-color-body))",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5000,
        }}
      />
      <Particles {...props} />
    </Box>
  );
}
