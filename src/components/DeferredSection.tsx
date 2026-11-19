
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface DeferredSectionProps {
  id: string;
  children: ReactNode;
}

function DeferredSection({ id, children }: DeferredSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '700px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="scroll-mt-24"
    >
      {isVisible ? (
        children
      ) : (
        <div
          aria-hidden="true"
          className="min-h-[320px]"
        />
      )}
    </div>
  );
}

export default DeferredSection;
