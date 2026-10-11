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
    title: "Artifact 2 — Canvas Grade Monitor",
    description: "Elixir server that polls Canvas, retrieves gradable items, and sends SMTP notifications for late/past due items.",
    status: "In Progress",
    reflection: "Currently running locally; will add scheduling and more notification rules.",
    link: "#",
    links: [],
  },
  {
    title: "Artifact 3 — LLM Tool Loop",
    description: "A tool where a model does some of the work every time it runs (reads, decides, writes, or calls tools).",
    status: "Idea",
    reflection: "Will explore Tools on Top of LLMs and build a loop that uses an LLM to automate a task.",
    link: "#",
    links: [],
  },
  {
    title: "Artifact 4 — Capstock",
    description: "Full-stack real-time financial telemetry platform. Elixir/Phoenix backend, React SPA, SQLite, LTTB downsampling, Phoenix Channels.",
    status: "Live / Improve",
    reflection: "Built with a team; I want to improve UI and add features.",
    link: "#",
    links: [
      { label: "Backend", url: "https://github.com/dxu13UW/stock_fetcher-CapStock_BACKEND" },
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
