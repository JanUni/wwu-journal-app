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
    // Hier sollte der Code für den API-Aufruf zum Senden des Eintrags an den Endpoint stehen
    // Zum Beispiel: fetch('/api/endpoint', { method: 'POST', body: inputText });
    fetch("/api/journal-entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputTitle, content: inputText }),
    });

    // Nach dem Senden des Eintrags können Sie den Inhalt des Eingabefelds zurücksetzen
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
