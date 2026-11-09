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
    description: "Paper day-trading simulator built for a day trader, on live prices for 50 tickers. A Phoenix LiveView app with limit entries, stop-losses, take-profits and shorts, a candlestick chart, private portfolios kept in a signed save file (no accounts), and keyboard-first controls, measured against the existing React SPA on the same backend.",
    status: "Live (deployed on Fly.io)",
    reflection: "Interviewing the trader reshaped the plan on day one: he trades with limit entries and hard stops, so I kept the shared buy/sell panel small enough to build in both LiveView and React, and gave his order types to LiveView. The measurements surprised me: LiveView was about as cheap as React on the network (151 vs 123 bytes per price tick) but held 4–5 times the server memory per open tab. That became real at deploy, when loading chart history at boot ran the 256 MB server out of memory, and it's why I later added connection limits. Tests taught me their limits too: three of my bugs passed green tests, and the out-of-memory crash had no test at all. For the last two days the agent wrote the code while I documented why each piece exists, which made reviewing its work my main job.",
    // Rows of links: the two apps, then their two repos.
    links: [
      [
        { label: "LiveView", url: "https://capstock-backend.fly.dev/prices?source=mock" },
        { label: "React", url: "https://tinle-ri.github.io/CapStock_FrontEnd/" }
      ],
      [
        { label: "LiveView repo", url: "https://github.com/dxu13UW/stock_fetcher-CapStock_BACKEND" },
        { label: "React frontend repo", url: "https://github.com/tinle-ri/CapStock_FrontEnd" }
      ]
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
