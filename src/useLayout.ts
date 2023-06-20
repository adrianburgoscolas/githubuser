import { useRef, useEffect } from 'react';

export default function useLayout() {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHeight();
    window.addEventListener('resize', setHeight);
    window.addEventListener('orientationchange', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('orientationchange', setHeight);
    }
  });

  function setHeight() {
    (ref.current as HTMLDivElement).style.minHeight = window.innerHeight + 'px';
  }

  return ref;
}
