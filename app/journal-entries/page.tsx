import EntriesList from "@/components/entry-list/entries-list.component";

interface Entry {
  title: string;
  content: string;
}

/**
 * Diese Komponente wird Serverseitig gerendert.
 * Sie bekommt ihre Daten, indem der Endpunkt unter "api/journal-entries/route.tsx aufgerufen wird.
 * Der Fetch-Request wird nicht gecached, da wir immer die aktuellsten Daten bekommen wollen.
 *
 * Um immer die aktuellsten Daten zu sehen, ist es notwendig die Seite einmal manuell zu aktualisieren.
 * Dies könnte man umgehen, indem man mit einem React-State arbeitet, der dafür sorgt, dass die Komponente sich
 * selbstständig aktualisiert wenn ein neuer Eintrag getätigt wurde. Hierauf wurde allerdings aufgrund des anderen
 * Fokus dieser Arbeit verzichtet.
 */
export default async function JournalEntriesPage() {
  // deduped
  const entries: Entry[] = await fetch(
    "http://localhost:3000/api/journal-entries",
    { cache: "no-store" }
  ).then((res) => res.json());

  return <EntriesList entries={entries} />;
}
