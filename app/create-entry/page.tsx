import CreateEntry from "@/components/journal-entries/create-entry.component";

export default async function CreateJournalEntry() {
  return (
    <div>
      <p>Nachfolgend kann ein neuer Journal-Eintrag erstellt werden.</p>
      <p>Anschließend kann er in der Journal-Übersicht angeschaut werden.</p>
      <CreateEntry />
    </div>
  );
}
