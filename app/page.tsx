"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setMessage("Thanks! You’re on the list.");
        setEmail("");
      }
    } catch (err) {
      setError("Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-full max-w-sm flex-col items-center gap-2"
    >
      <div className="flex w-full items-center gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@email.com"
          className="h-12 flex-1 rounded-full border border-black/10 bg-white px-4 text-sm font-normal text-black shadow-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-full bg-black px-6 text-sm font-medium text-[#FCF7ED] shadow-sm transition hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/40"
        >
          {isSubmitting ? "Submitting..." : "Join the waitlist"}
        </button>
      </div>
      <p className="h-5 text-xs text-black/60">
        {message && !error ? message : error}
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FCF7ED] font-sans">
      {/* Top left squiggle — bleeds off top and left */}
      <div className="pointer-events-none absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/TLeftSquiggle.png"
          alt=""
          width={360}
          height={360}
          priority
          loading="eager"
          className="h-40 w-40 object-left-top object-contain md:h-60 md:w-60 lg:h-72 lg:w-72"
        />
      </div>

      {/* Bottom right squiggle — bleeds off bottom and right */}
      <div className="pointer-events-none absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <Image
          src="/BRightSquiggle.png"
          alt=""
          width={360}
          height={360}
          priority
          loading="eager"
          className="h-40 w-40 object-right-bottom object-contain md:h-60 md:w-60 lg:h-72 lg:w-72"
        />
      </div>

      {/* Centered hero content */}
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center md:max-w-4xl">
        {/* Logo */}
        <div className="mb-20 text-2xl font-semibold tracking-tight text-black md:mb-20 md:text-3xl">
          pause
        </div>

        {/* Headline */}
        <h1 className="text-[2.4rem] font-semibold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
          Take control of your impulse.
        </h1>

        {/* Subheading */}
        <p
          className="mt-2 max-w-xl text-sm text-black/70 md:mt-2 md:text-base"
          style={{ fontFamily: "var(--font-sofia-medium)" }}
        >
          A calmer, clearer way to pause before you act.
        </p>

        {/* Email capture */}
        <EmailForm />
      </main>
    </div>
  );
}
