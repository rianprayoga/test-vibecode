import { describe, expect, it } from "bun:test";
import { app } from "../src/index";

describe("Elysia App Smoke Tests", () => {
  it("should respond from root endpoint", async () => {
    const response = await app.handle(new Request("http://localhost/"));
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.message).toBe("Welcome to Elysia + Drizzle ORM + PostgreSQL API");
  });

  it("should respond from health endpoint with status ok", async () => {
    const response = await app.handle(new Request("http://localhost/health"));
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.status).toBe("ok");
    expect(data.timestamp).toBeDefined();
  });
});
