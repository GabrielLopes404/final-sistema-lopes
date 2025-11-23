import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const data = readFileSync(join(process.cwd(), 'data/testimonials.json'), 'utf-8');
    const testimonials = JSON.parse(data);
    
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load testimonials' });
  }
}
