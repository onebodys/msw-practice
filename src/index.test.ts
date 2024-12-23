import { expect, test } from "vitest";
import { app } from "./index";
import { server } from "./mock/node";
import { HttpResponse, http } from "msw";

test("fetchしたらネットワークエラーが出るテスト", async () => {
	server.use(
		http.get("https://example.com/hello", () => {
			return HttpResponse.error();
		}),
	);
	await expect(app()).rejects.toThrow("Network error");
});

test("fetchが正常になると、{ message: Hello, World! } が返る", async () => {
	const res = await app();
	expect(res).toStrictEqual({ message: "Hello, World!" });
});
