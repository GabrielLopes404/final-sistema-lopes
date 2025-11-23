import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const data = readFileSync(join(process.cwd(), 'data/faqs.json'), 'utf-8');
    const faqs = JSON.parse(data);
    
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load FAQs' });
  }
}
