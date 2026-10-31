/**
 * Mini diagrams for case-study cards: three boxes, two arrows, drawn from the
 * same facts as the full diagram on the case-study page. Each is a Flow spec.
 */
import type { FlowNode, FlowEdge } from '../components/Flow.astro';

export interface Thumb {
  title: string;
  width: number;
  height: number;
  nodes: FlowNode[];
  edges: FlowEdge[];
}

function chain(title: string, a: FlowNode['lines'], b: FlowNode['lines'], c: FlowNode['lines'], kinds: Array<FlowNode['kind']> = ['user', 'box', 'store'], labels: [string?, string?] = []): Thumb {
  // Three boxes stacked top to bottom, filling a 16:9 thumbnail.
  const W = 230;
  const H = 50;
  const x = 75;
  return {
    title,
    width: 380,
    height: 214,
    nodes: [
      { id: 'a', x, y: 10, w: W, h: H, lines: a, kind: kinds[0] },
      { id: 'b', x, y: 82, w: W, h: H, lines: b, kind: kinds[1] },
      { id: 'c', x, y: 154, w: W, h: H, lines: c, kind: kinds[2] },
    ],
    edges: [
      { from: 'a', to: 'b', label: labels[0] },
      { from: 'b', to: 'c', label: labels[1] },
    ],
  };
}

export const thumbs: Record<string, Thumb> = {
  'agent-smith': chain(
    'Agent Smith flow',
    ['Engineer', 'one-line request'],
    ['Agent Smith', '11 agents · 16 skills'],
    ['Pull request', 'tested · reviewed · CI'],
    ['user', 'box', 'store'],
  ),
  'teldat-rag-assistant': chain(
    'Teldat assistant flow',
    ['7 source types', 'manuals · SharePoint'],
    ['pgvector + LangChain', 'retrieve · ground'],
    ['Cited answer', 'PPT · Excel · DOCX'],
    ['ext', 'box', 'store'],
  ),
  'recommendation-engine': chain(
    'Recommendation engine flow',
    ['Redshift → S3', 'daily extraction'],
    ['AWS Personalize', 'refresh · retrain'],
    ['Rule layer', 'boosts · cold start'],
    ['store', 'ext', 'box'],
  ),
  'mainspring-genai-ads': chain(
    'Ad generation flow',
    ['Airtable plan', 'campaign frames'],
    ['Celery + Gemini', '3 copy options'],
    ['Figma · AE · PS', 'assets API'],
    ['ext', 'box', 'user'],
  ),
  'tennis-data-platform': chain(
    'Tennis data flow',
    ['6 sources', 'polite scraping'],
    ['Identity resolution', 'pg_trgm · ~95% auto'],
    ['Core', '1M+ players'],
    ['ext', 'box', 'store'],
  ),
  'bcube-trading-platform': chain(
    'Trading platform flow',
    ['Signal', 'per bot'],
    ['Fan-out per user', 'AWS Lambda'],
    ['8 exchanges', 'spot · futures'],
    ['box', 'box', 'ext'],
  ),
  'undivided-rag': chain(
    'Undivided assistant flow',
    ['Parent', 'Next.js pages'],
    ['Retrieve + re-rank', 'pgvector · FastAPI'],
    ['Answer', 'feedback loop'],
    ['user', 'box', 'store'],
  ),
  'luma-pregnancy-assistant': chain(
    'Luma flow',
    ['Flutter app', 'trackers · journal'],
    ['Express proxy', 'Prisma · PostgreSQL'],
    ['Gemini 2.5 Flash', 'triage · auto-log'],
    ['user', 'box', 'ext'],
  ),
};
