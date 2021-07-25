import * as React from "react";

interface Iprops {
  lastElement: React.LegacyRef<HTMLDivElement> | undefined;
}

export default function LastElement({ lastElement }: Iprops) {
  const ref = React.useRef<any>();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    ref.current = setTimeout(() => {
      setMounted(true);
    }, 3000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return mounted ? <div ref={lastElement} /> : null;
}
