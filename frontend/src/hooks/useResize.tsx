import { useLayoutEffect, useState } from 'react';

type Resize = {
  width: number;
  height: number;
};

export default function useResize(): Resize {
  const [[width, height], setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const resize = (): void => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', resize);
    return (): void => window.removeEventListener('resize', resize);
  });
  return { width, height };
}
