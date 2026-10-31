/**
 * Experience timeline for the home page. One row per engagement.
 * Dates and titles trace to the resume (v4) and the resume audit.
 * Keep each `text` under 40 words.
 */
export interface Engagement {
  org: string;
  via?: string;
  dates: string;
  title: string;
  text: string;
  tags: string[];
  /** Case-study links. */
  links: Array<{ label: string; href: string }>;
}

export const experience: Engagement[] = [
  {
    org: 'MoneySmart',
    via: 'via Francium Tech',
    dates: 'Nov 2022 – present',
    title: 'Lead engineer',
    text: 'Led Agent Smith (Claude Code agents, ~20 engineers, 50+ repos) and the AWS Personalize recommendation engine for a financial-products marketplace.',
    tags: ['Claude Code', 'MCP', 'AWS Personalize', 'Rails', 'Kafka'],
    links: [
      { label: 'Agent Smith', href: '/work/agent-smith/' },
      { label: 'Recommendation engine', href: '/work/recommendation-engine/' },
    ],
  },
  {
    org: 'BixOps',
    dates: 'Dec 2025 – present',
    title: 'Founder-engineer',
    text: 'My own POS company: multi-tenant Rails platform, offline Flutter billing apps, Windows temple-billing app.',
    tags: ['Rails 8.1', 'Flutter', '.NET 10', 'Next.js'],
    links: [{ label: 'BixOps', href: '/work/bixops-pos/' }],
  },
  {
    org: 'Golden Set Analytics',
    via: 'via Francium Tech',
    dates: 'Apr – Aug 2026',
    title: 'Backend and data engineer',
    text: 'Six scraped tennis sources into one core of 1M+ players; identity resolution auto-routes ~95% of records.',
    tags: ['Django', 'Celery', 'PostgreSQL', 'Playwright'],
    links: [{ label: 'Tennis data platform', href: '/work/tennis-data-platform/' }],
  },
  {
    org: 'Teldat',
    via: 'via Francium Tech',
    dates: 'Oct 2025 – Mar 2026',
    title: 'Tech lead, team of six',
    text: 'RAG product assistant: seven documentation sources, a citation on every answer, 429 tests; owned architecture and production.',
    tags: ['FastAPI', 'pgvector', 'LangChain', 'LangGraph'],
    links: [{ label: 'Teldat RAG assistant', href: '/work/teldat-rag-assistant/' }],
  },
  {
    org: 'Mainspring',
    via: 'via Francium Tech',
    dates: 'Jul – Nov 2025',
    title: 'Backend engineer',
    text: 'GenAI ad copy and banners from Airtable plans; retry-safe generation; backend coverage 60% to 75%.',
    tags: ['FastAPI', 'Celery', 'Gemini', 'Stability AI'],
    links: [{ label: 'Generative ads', href: '/work/mainspring-genai-ads/' }],
  },
  {
    org: 'Undivided',
    via: 'via Francium Tech',
    dates: 'Mar – Nov 2025',
    title: 'Backend engineer',
    text: 'First production RAG system: retrieval and re-ranking over pgvector for a parent-support platform.',
    tags: ['FastAPI', 'pgvector', 'Next.js'],
    links: [{ label: 'Undivided RAG', href: '/work/undivided-rag/' }],
  },
  {
    org: 'B-Cube.ai',
    via: 'via Francium Tech',
    dates: 'Sep 2024 – Mar 2025',
    title: 'Lead engineer',
    text: 'Rebuilt a crypto trading platform on Rails 8 and Vue 3 without losing users; order fan-out to 8 exchanges.',
    tags: ['Rails 8', 'Vue 3', 'AWS Lambda', 'Timestream'],
    links: [{ label: 'B-Cube rebuild', href: '/work/bcube-trading-platform/' }],
  },
];
