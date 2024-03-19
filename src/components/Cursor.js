'use client';
import useMousePosition from '@/hooks/useMousePosition.js';

function Cursor() {

  const mousePosition = useMousePosition();

  return (
      <div className={`fixed w-7 h-7 bg-black top-${mousePosition.y} right-${mousePosition.x}`}></div>
  );
}

export default Cursor;
