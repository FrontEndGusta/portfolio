

// useIntersectionObserver.js

import { useEffect, useState } from 'react';

export function useIntersectionObserver(ref: React.RefObject<Element>, threshold = 0): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      const isAnyIntersecting = entries.some((entry) => entry.isIntersecting);
      setIsIntersecting(isAnyIntersecting);
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref, threshold]);


  return isIntersecting;
}
export default useIntersectionObserver