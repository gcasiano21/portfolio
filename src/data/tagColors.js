const TAG_COLORS = {
  React: "sky", TypeScript: "sky", JavaScript: "sky", Vue: "sky", "Vue.js": "sky", "React Native": "sky",
  "C#": "violet", ".NET": "violet", ".NET Core": "violet", "ASP.NET": "violet", "ASP.NET Core": "violet",
  "ASP.NET MVC": "violet", "Entity Framework": "violet", "Express.js": "violet", "Node.js": "violet",
  Python: "violet", Java: "violet",
  SQL: "indigo", "SQL Server": "indigo", MySQL: "indigo", PostgreSQL: "indigo", SQLite: "indigo",
  MongoDB: "indigo", Firestore: "indigo", "Firebase / Firestore": "indigo", "REST APIs": "indigo",
  AWS: "lavender", Docker: "lavender", Expo: "lavender", RabbitMQ: "lavender", Pygame: "lavender",
  Pandas: "lavender", DbUp: "lavender", Git: "lavender", GitHub: "lavender", GitLab: "lavender",
  "Azure DevOps": "lavender", "GitHub Actions": "lavender", "Gitea Actions": "lavender",
};

export function tagColor(t) {
  return TAG_COLORS[t] ?? "indigo";
}
