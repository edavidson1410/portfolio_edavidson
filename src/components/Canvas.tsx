import React, { useEffect, useRef } from 'react';
import particleEffect from '@/app/utils/particleEffect';

function useCanvas() {

  const ref = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = ref.current!;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

    particleEffect(canvas, context);
  }, []);

  return <canvas width="90vw" height="100vh" ref={ref} className="hidden md:block absolute right z-0 box-content"></canvas>;
}

export default useCanvas;
