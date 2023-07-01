import { NextResponse } from "next/server";

const journalEntries = [
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit Amet",
    content:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
];

/**
 * Gibt die Objekte aus journalEntries zurück.
 */
export async function GET() {
  return NextResponse.json(journalEntries);
}

/**
 * Fügt neue Objekte dem journalEntries-Array hinzu.
 */
export async function POST(req: Request) {
  const { title, content } = await req.json();
  const entry = { title: title, content: content };
  journalEntries.push(entry);
  return NextResponse.json(entry);
}
