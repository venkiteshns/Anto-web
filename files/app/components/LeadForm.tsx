"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  fontFamily: "var(--font-body)",
  fontSize: "0.95rem",
  border: "1px solid var(--line)",
  borderRadius: 2,
  background: "var(--stone)",
  color: "var(--ink)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  color: "var(--ink-soft)",
  marginBottom: 6,
};

/**
 * No backend is wired up yet. On submit this builds a pre-filled WhatsApp
 * message from the form fields and opens the developer's WhatsApp chat —
 * a standard, zero-infrastructure lead-capture pattern for Indian real
 * estate sites. Swap the onSubmit handler for a real API/CRM call
 * (e.g. a Google Sheet, HubSpot or your CRM's lead endpoint) when ready.
 */
export default function LeadForm({ whatsappNumber }: { whatsappNumber: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [config, setConfig] = useState("4 BHK");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `New enquiry — Godrej Florenne`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${config}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--stone)",
        border: "1px solid var(--line)",
        borderRadius: 2,
        padding: "clamp(24px, 4vw, 36px)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>
        <label htmlFor="name" style={labelStyle}>
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          style={inputStyle}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="config" style={labelStyle}>
          Interested in
        </label>
        <select
          id="config"
          name="config"
          style={inputStyle}
          value={config}
          onChange={(e) => setConfig(e.target.value)}
        >
          <option>4 Bed Optima — 3,725 sq.ft</option>
          <option>4 Bed Premia — 4,061 sq.ft</option>
          <option>4 Bed Luxe — 4,515 sq.ft</option>
          <option>5 Bed Luxe — 5,523 sq.ft</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
        Send enquiry on WhatsApp
      </button>

      <p style={{ fontSize: "0.78rem", color: "var(--ink-soft)", margin: 0 }} aria-live="polite">
        {sent
          ? "Opening WhatsApp with your details filled in — send the message to reach us."
          : "This opens WhatsApp with your details pre-filled, so nothing is stored on this site."}
      </p>
    </form>
  );
}
