---
title: "Free LLM gateway with provider failover"
summary: "OpenAI-compatible gateway over ten free-tier LLM providers: best available model first, failover with cooldowns on rate limits."
period: "Jun 2026"
stack:
  - Python
  - FastAPI
  - OpenAI-compatible API
  - SSE streaming
repo: "https://github.com/shivanandham/llm-chat"
order: 2
---

Almost every usable free LLM API speaks the OpenAI chat-completions protocol, so each provider is just a base URL, a key and a model list. The router flattens every model into one priority-ordered list (quality first, then permanently-free providers ahead of trial or prepaid ones, fastest hardware as the tiebreaker) and walks it until a call succeeds. On a 429 or quota error the provider goes on a cooldown (honouring `Retry-After` when sent) and is skipped until it expires; a 401 disables it for the process; connection and 5xx errors get a short cooldown. Streaming fails over up to the first byte, then commits to the provider.

Providers include Groq, Cerebras, Gemini, OpenRouter, Mistral, SambaNova and more. It exposes `POST /chat`, a Server-Sent-Events stream, `POST /v1/chat/completions` for the official OpenAI SDK, a `GET /providers` status view and a small browser chat UI. The router's failover, cooldown, auth-disable, model-pinning and exhaustion paths are covered by tests that use fake clients, so the suite needs no keys and no network.
