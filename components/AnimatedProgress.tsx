"use client";

import React, { useEffect, useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";

interface AnimatedProgressProps {
  label: string;
  step?: number;
  intervalMs?: number;
  starting?: number;
}

export default function AnimatedProgress({
  label,
  step = 5,
  intervalMs = 700,
  starting = 0,
}: AnimatedProgressProps) {
  const [value, setValue] = useState<number>(starting);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        const nv = v + step;
        return nv > 100 ? 0 : nv;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [step, intervalMs]);

  return <ProgressBar label={label} value={value} />;
}
