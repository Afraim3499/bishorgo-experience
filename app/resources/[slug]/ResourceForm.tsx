"use client";

import React, { useState } from "react";

interface Props {
  resourceName: string;
}

export const ResourceForm: React.FC<Props> = ({ resourceName }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    // Simulate lead capture submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setName("");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-[#014A36]/5 border border-[#014A36]/15 p-6 rounded-2xl text-center space-y-2">
        <span className="text-xl">🎉</span>
        <h4 className="text-[15px] font-bold text-[#014A36]">Sent Successfully!</h4>
        <p className="text-xs text-[#222222]/70 leading-relaxed font-medium">
          Check your inbox. We have sent the download link for the <strong>{resourceName}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-[10px] font-mono font-bold tracking-widest text-[#222222]/55 uppercase block mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g. Shakib Ahmed"
          className="w-full bg-[#014A36]/3 border border-[#014A36]/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8922B] text-[#222222] font-semibold"
        />
      </div>

      <div>
        <label className="text-[10px] font-mono font-bold tracking-widest text-[#222222]/55 uppercase block mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="name@company.com"
          className="w-full bg-[#014A36]/3 border border-[#014A36]/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8922B] text-[#222222] font-semibold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Preparing PDF..." : "Get PDF Version"}
      </button>
    </form>
  );
};
export default ResourceForm;
