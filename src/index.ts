import { Elysia } from "elysia";

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Drizzle ORM + PostgreSQL API",
  }))
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }));

const port = Number(process.env.PORT ?? 3000);

if (import.meta.main) {
  app.listen(port, () => {
    console.log(`🦊 Elysia is running at http://localhost:${port}`);
  });
}
