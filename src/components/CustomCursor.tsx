import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
  const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Throttle mouse movement for better performance
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = setTimeout(() => {
          updateMousePosition(e);
          throttleTimer = null;
        }, 16); // ~60fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          borderColor: isHovering ? 'hsl(var(--neon-cyan))' : 'hsl(var(--neon-cyan) / 0.3)',
        }}
      />
    </>
  );
};

export default CustomCursor;