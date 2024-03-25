import React, { useEffect, useRef } from 'react';
import particleEffect from '@/app/utils/particleEffect';

function useCanvas() {

  const ref = useRef();

  useEffect(() => {
    const canvas: HTMLCanvasElement = ref.current;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');

    console.log(canvas)
    console.log(context)

    particleEffect(canvas, context);
  }, []);

  return <canvas width={900} height={800} ref={ref} className="absolute top-0 left-0"></canvas>;
}

export default useCanvas;
