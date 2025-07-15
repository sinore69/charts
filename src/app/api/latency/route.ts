import { NextResponse } from 'next/server';
import fs from 'fs/promises';

export async function GET() {
  try {
    const filePath = '/root/chess/logs/gamelogs.log';

    const data = await fs.readFile(filePath, 'utf-8');

    if (!data.trim()) {
      return NextResponse.json([]);
    }

    const parsed = data.trim().split('\n').map((line) => {
      const [timestamp, duration] = line.split(',');
      return {
        timestamp: new Date(Number(timestamp)).toISOString(),
        duration: Number(duration),
      };
    });

    return NextResponse.json(parsed);
  } catch (err) {
    console.error('[API ERROR]', err);
    return NextResponse.json([], { status: 200 });
  }
}

