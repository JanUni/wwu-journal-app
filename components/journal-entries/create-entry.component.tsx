/**
 * Das 'use client' sorgt dafür, dass diese Komponente am Server gerendert wird.
 * Dies ist notwendig, da wir hier mit Lifecycle-Funktionen arbeiten (useState)
 */
"use client";

import React, { useState } from "react";

export default function CreateEntry() {
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleTitleChange = (event: any) => {
    setInputTitle(event.target.value);
  };

  const handleTextChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    /**
     * Einträge an Api-Endpunkt (app/api/journal-entries/route.tsx) senden.
     */
    fetch("/api/journal-entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputTitle, content: inputText }),
    });

    /**
     * Input Felder nach Senden des Eintrags zurücksetzen.
     */
    setInputTitle("");
    setInputText("");
  };

  return (
    <div>
      <p>Titel:</p>
      <input type="text" value={inputTitle} onChange={handleTitleChange} />
      <p>Text:</p>
      <input type="text" value={inputText} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Eintrag senden</button>
    </div>
  );
}
