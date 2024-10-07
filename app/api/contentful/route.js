import { NextResponse } from 'next/server';
import { fetchEntries } from "@/app/common/contentful";

export async function GET(req, res) {
  const entries = await fetchEntries();
  return NextResponse.json(entries);
}