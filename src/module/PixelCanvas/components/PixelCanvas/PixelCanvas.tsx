import { usePixelCanvas } from "#pixel-canvas/hooks/usePixelCanvas";
import { Box } from "@mantine/core";

export function PixelCanvas() {
  const [
    { canvasRef, cursorRef },
    _,
    { handleMouseDown, handleMouseUp, handleMouseMove, handleMouseOut },
  ] = usePixelCanvas();
  return (
    <Box h={320} w={320} style={{ position: "relative", background: "white" }}>
      <canvas
        style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}
        ref={cursorRef}
        height={320}
        width={320}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      />
      <canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        ref={canvasRef}
        width={320}
        height={320}
      />
    </Box>
  );
}
