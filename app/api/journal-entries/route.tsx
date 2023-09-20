import { journalEntriesDb } from "@/app/db/jouranal-entries.db";
import { NextResponse } from "next/server";

/**
 * Gibt die Objekte aus journalEntries zurück.
 */
export async function GET() {
  return NextResponse.json(journalEntriesDb);
}

/**
 * Fügt neue Objekte dem journalEntries-Array hinzu.
 */
export async function POST(req: Request) {
  const { title, content } = await req.json();
  const entry = { title: title, content: content };
  journalEntriesDb.push(entry);
  return NextResponse.json(entry);
}
