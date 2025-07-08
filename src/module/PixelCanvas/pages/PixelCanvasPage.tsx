import { AppBreadcrumbs } from "#core/components";
import { PixelCanvas } from "#pixel-canvas/components/PixelCanvas/PixelCanvas";
import { PixelCanvasForm } from "#pixel-canvas/components/PixelCanvas/PixelCanvasForm";
import { PixelCanvasProvider } from "#pixel-canvas/hooks/usePixelCanvas";
import "#pixel-canvas/styles/output/pixel-canvas.scss";
import { Box } from "@mantine/core";

export function PixelCanvasPage() {
  return (
    <PixelCanvasProvider>
      <AppBreadcrumbs />
      <Box p="md" className="workspace">
        <PixelCanvas />
        <PixelCanvasForm />
      </Box>
    </PixelCanvasProvider>
  );
}
