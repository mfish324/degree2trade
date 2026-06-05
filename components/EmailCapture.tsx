"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Json } from "@/lib/database.types";

type Props = {
  source: string; // where the signup happened, e.g. "results"
  context?: Json; // optional extras stored with the lead
  heading?: string;
  subtext?: string;
};

export function EmailCapture({ source, context, heading, subtext }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    // Minimal validation; real validation happens via the input type + required.
    if (!trimmed || !trimmed.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    if (!supabase) {
      // Env not configured — fail gracefully rather than throwing for the user.
      setStatus("error");
      return;
    }

    // Cast to `never`: the hand-written Database types don't fully satisfy
    // supabase-js v2.86's insert-overload generic (it resolves to `never`),
    // even though the row shape is correct. Runtime/RLS are unaffected.
    const { error } = await supabase
      .from("leads")
      .insert({ email: trimmed, source, context: context ?? null } as never);

    setStatus(error ? "error" : "done");
  }

  if (status === "done") {
    return (
      <div className="bg-surface border border-success/40 rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">✅</div>
        <h3 className="font-display text-lg font-bold text-text-primary">
          You&apos;re on the list!
        </h3>
        <p className="text-text-secondary text-sm mt-1">
          Here are your best next steps right now:
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
          <Link href="/calculator" className="bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 rounded-lg transition-colors">
            Run the ROI calculator
          </Link>
          <Link href="/programs" className="border border-surface-light hover:border-primary text-text-secondary px-4 py-2 rounded-lg transition-colors">
            Find programs near you
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-surface-light rounded-xl p-6">
      <h3 className="font-display text-lg font-bold text-text-primary">
        {heading ?? "Get your personalized trade-career roadmap"}
      </h3>
      <p className="text-text-secondary text-sm mt-1">
        {subtext ?? "We'll send next steps for your top matches. No spam — unsubscribe anytime."}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@email.com"
          className="flex-1 bg-surface-light border border-surface-light rounded-lg px-3 py-2 text-text-primary focus:border-primary outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary hover:bg-primary-hover disabled:opacity-60 text-white font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "Saving…" : "Send my roadmap"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-danger text-xs mt-2">
          Something went wrong — please check your email address and try again.
        </p>
      )}
    </div>
  );
}
