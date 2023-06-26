import EntriesList from "@/components/entries-list.component";

interface Entry {
  title: string;
  content: string;
}

/**
 * This component is rendered serverside.
 * It gets it's data by calling the Endpoint under api/journal-entries/route.tsx.
 * The fetch-request will not get cached since we always want to get fresh data.
 */
export default async function JournalEntriesPage() {
  // deduped
  const entries: Entry[] = await fetch(
    "http://localhost:3000/api/journal-entries",
    { cache: "no-store" }
  ).then((res) => res.json());

  return <EntriesList entries={entries} />;
}
