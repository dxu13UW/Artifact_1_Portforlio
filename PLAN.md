# PLAN.md

## Overview
This is the planning log for the portfolio SPA and future artifacts.

## Artifact 1: Portfolio SPA
- **What I set out to build:** A single-page React portfolio with five artifact cards and a connect-with-me section.
- **What I asked the agent for:** Help building the React SPA, data structure, and planning notes.
- **What I decided:** Use Vite + React, simple CSS, GitHub Pages deployment later.
- **What I abandoned:** Using a CSS framework; opted for custom minimal CSS.
- **Where the AI misread me:**
  - I asked it to *plan* dev notes for Artifacts 2–5, but it filled in "what I asked / decided / abandoned" as if those decisions were already made (e.g. Swoosh, Oban, Direct3D hooking). These entries are its guesses, not my choices, and will be rewritten as I actually build each artifact.
  - It carried over a `###-###-####` phone placeholder and a hard-coded 2025 copyright into the footer. Replaced the placeholder with my real number and made the year dynamic after instructor feedback.
  - It assumed Vite would handle JSX without a `vite.config.js`, which left the page blank until the React plugin config was added.

## Artifact 2: Canvas Grade Monitor (Elixir)
- **What I set out to build:** Elixir server that polls Canvas API for gradable items and sends SMTP notifications on late/past due items.
- **What I asked the agent for:** Advice on scheduling, API pagination, SMTP with Bamboo or Swoosh.
- **What I decided:** Use GenServer + periodic timer, Finch for HTTP, Swoosh for email.
- **What I abandoned:** Using Oban initially; simplified to built-in timers for single-node dev.

## Artifact 3: HomeBrief
- **What I set out to build:** A daily scheduler that uses my new Google Home speaker as its voice, with Claude doing the planning and writing.
- **What I asked the agent for:** Planning in Claude Desktop first (options, trade-offs, a name), then Claude Code to build it step by step: casting to the speaker, a speaker MCP server, Google Calendar access, the `claude -p` morning briefing, a Stop hook, and Discord Rich Presence for focus blocks.
- **What I decided:** No Claude API, only Claude Code (`claude -p` and MCP). Claude returns text and code validates it before it's spoken. Calendar rules (tagged `[claude]` events only, no edits or deletes, 11:30 AM–10 PM, class-day start times, one block per briefing) are enforced in code. Google Calendar is the bridge to Gemini on the speaker. The repo also runs on my MacBook for scheduling away from home, with only the PC speaking.
- **What I abandoned:** Voice input (the speaker's mic only feeds Gemini), Claude prompting Gemini (two models in a chain hide which one failed), a "Hey Jarvis" wake word (needs extra hardware), and changing my Discord status (needs a banned self-bot; Rich Presence instead).
- **Where the AI misread me:**
  - This section first held the agent's guess from Artifact 1 (a CLI that picks shell commands), not my plan.
  - It read "leftover time" in a focus block request as a second block after 8:30 PM instead of time inside the same block; I corrected it before anything was written.
  - The full log of plans, changes and problems is in the HomeBrief repo's `LOG.md`.

## Artifact 4: Capstock (Stock Watchlist)
- **What I set out to build:** Improve existing full-stack stock watchlist. Add better charting, alerting, and code cleanup.
- **What I asked the agent for:** Review existing code, suggest performance improvements, and implement new features.
- **What I decided:** Focus on real-time tick downsampling and UI responsiveness.
- **What I abandoned:** Rewriting backend in another language; decided to keep Elixir.

## Artifact 5: Path of Exile Game Overlay (Moonshot)
- **What I set out to build:** A game overlay for PoE with Elixir backend and C++ Windows overlay engine.
- **What I asked the agent for:** Research on overlay injection, process communication, and game API.
- **What I decided:** Start with a separate overlay window via Win32, then integrate with Elixir over TCP/WebSocket.
- **What I abandoned:** Direct3D hooking initially; too complex, defer.
