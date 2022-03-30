import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  it("Test routes", async () => {
    const res = await request(app).get("/test");
    expect(res.body).toEqual({ message: "This is routing test" });
  });
});