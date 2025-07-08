import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type MouseEvent,
  type PropsWithChildren,
} from "react";
import { useRenderPixelCanvas } from "./useRenderPixelCanvas";

export interface CursorState {
  position: { x: number; y: number } | null;
  isDown: boolean;
}

function usePixelCanvasState() {
  const cursorRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>({
    position: null,
    isDown: false,
  });
  const [brush, setBrush] = useState({
    radius: 6,
    color: "#101219",
  });

  const refs = {
    cursorRef,
    canvasRef,
  };
  const state = {
    cursorState,
    brush,
  };

  const render = useRenderPixelCanvas(cursorState, brush, {
    cursorRef,
    canvasRef,
  });

  const handleMouseDown = useCallback(
    (ev: MouseEvent<HTMLCanvasElement>) => {
      setCursorState((curr) => ({
        ...curr,
        isDown: true,
      }));
      render(ev, true);
    },
    [setCursorState, render]
  );

  const handleMouseUp = useCallback(
    (_: MouseEvent<HTMLCanvasElement>) => {
      setCursorState((curr) => ({
        ...curr,
        isDown: false,
      }));
    },
    [setCursorState]
  );

  const handleMouseMove = useCallback(
    (ev: MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;

      if (canvas) {
        const rect = canvas.getBoundingClientRect();

        setCursorState((curr) => ({
          ...curr,
          position: {
            x: ev.clientX - rect.left,
            y: ev.clientY - rect.top,
          },
        }));
        render(ev);
      }
    },
    [setCursorState, render]
  );

  const handleMouseOut = useCallback(
    (_: MouseEvent<HTMLCanvasElement>) => {
      setCursorState({
        isDown: false,
        position: null,
      });
      const canvas = cursorRef.current;

      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
    },
    [setCursorState]
  );

  const methods = {
    setBrush,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseOut,
  };

  return [refs, state, methods] as const;
}

type PixelCanvasState = ReturnType<typeof usePixelCanvasState>;

const PixelCanvasContext = createContext<null | PixelCanvasState>(null);

export const PixelCanvasProvider = ({ children }: PropsWithChildren) => {
  const state = usePixelCanvasState();

  return (
    <PixelCanvasContext.Provider value={state}>
      {children}
    </PixelCanvasContext.Provider>
  );
};

export const usePixelCanvas = () => {
  if (PixelCanvasContext === null) {
    throw new Error("No porvider for PixelCanvasContext");
  }

  return useContext(PixelCanvasContext)!;
};
