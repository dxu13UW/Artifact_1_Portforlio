const artifacts = [
  {
    title: "Artifact 1 — Portfolio SPA",
    description: "This React single-page application that showcases my work and plans.",
    status: "Live",
    reflection: "Built with React and CSS. Learned how to plan and log work.",
    link: "#",
    links: [],
  },
  {
    title: "Artifact 2 — Canvas Crawler",
    description: "Elixir OTP service that checks my Canvas courses every 15 minutes and emails me when an assignment is due within 24 hours and not yet submitted.",
    status: "Live (runs locally on my PC)",
    reflection: "It started as a Python script feeding JSON to an Elixir server, and I moved it all into Elixir. UW blocks student API tokens, so I read due dates from the calendar feed and get submission status with a browser session cookie that the crawler keeps refreshed. I learned to check what the agent built by reading the logs and running the tests, and to keep the project's context in a CLAUDE.md and a log.",
    link: "https://github.com/dxu13UW/canvas_crawler",
    links: [],
  },
  {
    title: "Artifact 3 — HomeBrief",
    description: "Uses Claude to read my Google Calendar and give me a spoken morning briefing on my Google Home speaker.",
    status: "Live (runs locally on my PC)",
    reflection: "The hardest part was the network, not the model: the speaker couldn't fetch audio from WSL until I switched WSL to mirrored networking and opened a Hyper-V firewall port. I kept the model's part small. Claude returns text and code checks it before anything is spoken, and calendar rules like class-day start times are enforced in code instead of trusted to the prompt, so the logs always show whether a bad sentence came from the model or my code. I planned the whole project in Claude Desktop before writing any code, and that CLAUDE.md kept every session on track.",
    link: "https://github.com/dxu13UW/HomeBrief",
    links: [],
  },
  {
    title: "Artifact 4 — Capstock Day-Trading Simulator",
    description: "Paper day-trading simulator for a real day trader, built on my Elixir/Phoenix stock backend. Adds Phoenix LiveView alongside the existing React SPA and compares the two with measurements.",
    status: "In progress (check-in Nov 1)",
    reflection: "Interviewing the trader changed the plan right away: he trades with limit entries and stop-losses, not market orders, and needs tickers Finnhub doesn't cover, so I added Alpaca's free market data. So far: plan, interview and log done; LiveView and Tailwind v4 set up without breaking the React API; a dependency security fix; and my first LiveView page, a live prices table that updates from the server's price stream. Writing it taught me that passing tests only cover the code they actually run: three of my bugs got past green tests. Next: a shared paper-trading module, then the trading panel in both UIs.",
    link: "https://github.com/dxu13UW/stock_fetcher-CapStock_BACKEND/tree/liveview",
    links: [
      { label: "Backend (liveview branch: PLAN.md, LOG.md)", url: "https://github.com/dxu13UW/stock_fetcher-CapStock_BACKEND/tree/liveview" },
      { label: "Frontend", url: "https://github.com/tinle-ri/CapStock_FrontEnd" },
      { label: "Live Frontend", url: "https://tinle-ri.github.io/CapStock_FrontEnd/" }
    ],
  },
  {
    title: "Artifact 5 — Path of Exile Game Overlay",
    description: "Moonshot: Elixir backend + C++ Windows UI/overlay engine for Path of Exile.",
    status: "Moonshot",
    reflection: "Plan to learn more about game APIs and overlay integration.",
    link: "#",
    links: [],
  },
];

export default artifacts;
