## Einleitung & Hintergrund

Diese Next.js 13 basierte Anwendung dient der Veranschaulichung der Seminararbeit "Serverside Rendering vs Clientside Rendering in Next.js."

In dieser App können kleine Einträge verfasst und nachträglich angeschaut werden.

Diese Applikation legt dabei keinen Fokus auf Design oder umfangreiche Features sondern dient lediglich der exemplarischen
Darstellung der Projektstruktur in Next.js sowie beispielhafter Einsatzszenarien von Next.js-Kernfeatures.
Dazu zählt bspw. die Nutzung des App-Directory, serverseitiges und clientseitiges Rendering und auch das Caching
von fetch-Requests.

Wesentliche Code-Stellen sind dabei der Nachvollziehbarkeit halber markiert.

## Applikation starten

Nachdem der Code geklont wurde, sollten zunächst alle Dependencies installiert werden:

```bash
npm i
```

Anschließend kann die Next.js Applikation gestartet werden:

```bash
npm run dev
```

## Code-Struktur

Alles für Next-js Wesentliche liegt im App-Directory. Dieses Directory wurde mit Next.js 13 neu eingeführt.
In dem App-Directory ist zu Oberst das Api-Directory zu finden. In diesem Directory liegen alle Endpoints, welche die App
zur Verfügung stellt. In unserem Beispiel ist dass nur der "journal-entries"-Route. Diese Route bietet wiederum einen HTTP-GET- und HTTP-POST-Endpunkt.

Wichtig zu beachten ist hier, dass die aller meisten Namen der Konvention von Next.js entsprechen und somit auch so benannt werden sollten.
Bspw. "route.tsx", "export async function POST(...)".

Alle weiteren Ordner in dem App-Directory entsprechen der URL-Struktur. Bspw. "create-entry" der späteren Route "localhost:3000/create-entry".
In der page.tsx (ebenfalls Namens-Konvention) werden dann die React-Komponenten geladen, die später in der Route angezeigt werden sollen.

Die aufgerufenen Komponenten befinden sich dann in dem "components-ordner". Diese Trennung dient lediglich allgemeinen Übersicht. Es wäre
auch möglich gewesen, sie direkt in der Next-Route zu implementieren.
