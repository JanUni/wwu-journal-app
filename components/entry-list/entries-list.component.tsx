interface Entry {
  title: string;
  content: string;
}

interface EntriesListProps {
  entries: Entry[];
}

export default function EntriesList(props: EntriesListProps) {
  const { entries } = props;

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index}>
          <h1>{entry.title}</h1>
          <p>{entry.content}</p>
        </div>
      ))}
      <p>Um neu hinzugefügte Einträge zu sehen, Seite aktualisieren</p>
    </div>
  );
}
