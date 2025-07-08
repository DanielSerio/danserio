import { usePixelCanvas } from "#pixel-canvas/hooks/usePixelCanvas";
import { Box, ColorInput, Flex, Slider } from "@mantine/core";

export function PixelCanvasForm() {
  const [_, state, { setBrush }] = usePixelCanvas();

  return (
    <Flex w={320} gap={24} mt={12}>
      <ColorInput
        label="Color"
        w={148}
        value={state.brush.color}
        onChange={(value) => setBrush((curr) => ({ ...curr, color: value }))}
      />
      <label>
        <Box component="label" fz="sm" fw="500">
          Radius
        </Box>
        <Slider
          mt={8}
          label={state.brush.radius}
          w={148}
          value={state.brush.radius}
          onChange={(value) => setBrush((curr) => ({ ...curr, radius: value }))}
        />
      </label>
    </Flex>
  );
}
