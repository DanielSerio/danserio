import { usePixelCanvas } from "#pixel-canvas/hooks/usePixelCanvas";

export function PixelCanvasForm() {
  const [_, state] = usePixelCanvas();
  return <div>{JSON.stringify(state)}</div>;
}
