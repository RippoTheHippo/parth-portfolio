"use client";

import { useState, useTransition } from "react";

type FormState = "idle" | "submitted";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-8"
      onSubmit={(event) => {
        event.preventDefault();

        startTransition(() => {
          setTimeout(() => {
            setState("submitted");
            (event.currentTarget as HTMLFormElement).reset();
          }, 500);
        });
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-[0.62rem] text-muted">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-3 block w-full rounded-[1rem] border border-white/10 bg-white/[0.02] px-4 py-4 text-base text-foreground outline-none transition-colors placeholder:text-white/28 focus:border-[#c5a269]"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="eyebrow text-[0.62rem] text-muted">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-3 block w-full rounded-[1rem] border border-white/10 bg-white/[0.02] px-4 py-4 text-base text-foreground outline-none transition-colors placeholder:text-white/28 focus:border-[#c5a269]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-[0.62rem] text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-3 block w-full resize-none rounded-[1rem] border border-white/10 bg-white/[0.02] px-4 py-4 text-base leading-8 text-foreground outline-none transition-colors placeholder:text-white/28 focus:border-[#c5a269]"
          placeholder="Tell me a little about the film, song, or idea."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 text-xs uppercase tracking-[0.28em] text-foreground transition-colors duration-300 hover:border-white/28 hover:bg-white/4 disabled:cursor-wait disabled:opacity-60"
        >
          {isPending ? "Sending" : "Send Message"}
        </button>

        <p className="text-sm leading-7 text-muted">
          Instagram works too.
        </p>
      </div>

      {state === "submitted" ? (
        <p
          className="rounded-[1.25rem] border border-[#c5a269]/20 bg-[#c5a269]/6 px-5 py-4 text-sm leading-7 text-[#e7d9bf]"
          role="status"
        >
          Message staged. This preview form is ready for a backend action when
          needed.
        </p>
      ) : null}
    </form>
  );
}
