import { useEffect, useRef, type MouseEvent, type RefObject } from "react";
import type { CursorState } from "./usePixelCanvas";
import { getCanvasMethods } from "#pixel-canvas/utilities/get-canvas-methods";

export function useRenderPixelCanvas(
  cursorState: CursorState,
  brush: {
    radius: number;
    color: string;
  },
  {
    cursorRef,
    canvasRef,
  }: {
    cursorRef: RefObject<HTMLCanvasElement | null>;
    canvasRef: RefObject<HTMLCanvasElement | null>;
  }
) {
  const cursorCtx = useRef<null | CanvasRenderingContext2D>(null);
  const canvasCtx = useRef<null | CanvasRenderingContext2D>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtx.current = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
    }
  }, [canvasRef.current]);

  useEffect(() => {
    if (cursorRef.current) {
      cursorCtx.current = cursorRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
    }
  }, [cursorRef.current]);

  return (ev: MouseEvent<HTMLCanvasElement>, force?: boolean) => {
    if (canvasCtx.current && cursorCtx.current && cursorState.position) {
      const { clientX, clientY } = ev;
      const canvas = cursorCtx.current.canvas.getBoundingClientRect();

      const canvasCtxMethods = getCanvasMethods(canvasCtx.current);
      const cursorCtxMethods = getCanvasMethods(cursorCtx.current);
      const hctx = cursorCtx.current;
      cursorCtxMethods.clear();
      cursorCtxMethods.save(() => {
        cursorCtxMethods.draw(() => {
          hctx.arc(
            clientX - canvas.left,
            clientY - canvas.top,
            brush.radius,
            0,
            Math.PI * 2
          );
          hctx.stroke();
        });
      });

      if (force || cursorState.isDown) {
        const ctx = canvasCtx.current;

        canvasCtxMethods.save(() => {
          canvasCtxMethods.draw(() => {
            ctx.fillStyle = brush.color;
            ctx.arc(
              clientX - canvas.left,
              clientY - canvas.top,
              brush.radius,
              0,
              Math.PI * 2
            );
            ctx.fill();
          });
        });
      }
    }
  };
}
