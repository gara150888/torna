"use client";

import { useEffect, useRef, useState } from "react";

function getInitialState(text: string) {
  const prefersReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  return {
    displayed: prefersReducedMotion ? text : "",
    done: prefersReducedMotion,
  };
}

export function Typewriter({
  text,
  speed = 55,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [state, setState] = useState(() => getInitialState(text));
  const startRef = useRef(false);

  useEffect(() => {
    if (startRef.current) return;
    startRef.current = true;

    if (state.done) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setState({ displayed: text.slice(0, index), done: index >= text.length });
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, state.done]);

  return (
    <span className={className}>
      {state.displayed}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1.1em] w-[0.08em] bg-accent align-middle"
        style={{
          animation: state.done ? "blink 1s steps(1) infinite" : "none",
          opacity: state.done ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
    </span>
  );
}

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
