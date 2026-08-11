"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  className?: string;
};

export function BeforeAfterSlider({ project, className }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }

  return (
    <figure className={cn("overflow-hidden rounded-xl bg-[var(--color-ink)]", className)}>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] touch-none select-none"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            updateFromClientX(e.clientX);
          }
        }}
      >
        <Image
          src={project.afterImage}
          alt={project.afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={project.beforeImage}
            alt={project.beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-ink)] shadow-md">
            <span className="text-xs font-bold">⟷</span>
          </div>
        </div>

        <span className="absolute top-3 left-3 rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded bg-[var(--color-green)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          After
        </span>

        <label htmlFor={labelId} className="sr-only">
          Drag to compare before and after for {project.title}
        </label>
        <input
          id={labelId}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-x-4 bottom-3 z-20 w-[calc(100%-2rem)] accent-[var(--color-green)]"
        />
      </div>

      <figcaption className="space-y-2 bg-[var(--color-surface)] p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green)]">
          <span>{project.service}</span>
          {project.location ? (
            <>
              <span className="text-[var(--color-muted)]">•</span>
              <span className="text-[var(--color-muted)]">{project.location}</span>
            </>
          ) : null}
        </div>
        <h3 className="font-display text-2xl tracking-tight text-[var(--color-ink)]">
          {project.title}
        </h3>
        <div className="grid gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-2">
          <p>
            <span className="font-semibold text-[var(--color-ink)]">Before: </span>
            {project.beforeCaption}
          </p>
          <p>
            <span className="font-semibold text-[var(--color-ink)]">After: </span>
            {project.afterCaption}
          </p>
        </div>
        {project.needsRealPhotos ? (
          <p className="text-xs text-[var(--color-muted)]">
            Photo slots ready — replace files in{" "}
            <code className="text-[var(--color-ink)]">/public/jobs</code> with real All Goode job
            photos.
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
