---
title: "multi-database-mcp"
summary: "An open-source MCP server that gives AI coding tools one connection to several PostgreSQL databases instead of one server per database. Published on npm, MIT."
period: "Oct 2025 – present"
stack:
  - Node.js
  - MCP SDK
  - PostgreSQL
  - npm
repo: "https://github.com/shivanandham/multi-database-mcp"
order: 1
---

A Model Context Protocol server for Cursor, Claude Code or any MCP client. Instead of configuring one MCP server per database and restarting the IDE to switch, it reads a single `databases.json`, auto-discovers the databases in it, and switches between them from chat. Nine tools: list, switch and describe databases, list and describe tables, run queries, and add a database from chat (the connection is tested and saved). An optional per-project primary database sets the default.

Node.js 18+, published to npm (`npx -y multi-database-mcp`), MIT licence. I use it daily across client work, which is how most of its tools came to exist.
