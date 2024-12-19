import { expect, test } from "vitest";
import { app } from "./index";
import { server } from "./mock/node";
import { HttpResponse, http } from "msw";

test("fetch app with network error", async () => {
	server.use(
		http.get("https://example.com/hello", () => {
			return HttpResponse.error();
		}),
	);
	await expect(app()).rejects.toThrow("Network error");
});

test("fetch app", async () => {
	const res = await app();
	expect(res).toStrictEqual({ message: "Hello, World!" });
});
