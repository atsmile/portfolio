import { useEffect, useRef, useState } from "react";

export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element); // 一度表示されたら解除
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
