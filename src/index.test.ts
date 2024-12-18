import { expect, test } from "vitest";
import { sum, app } from "./index";

test("add 1+ 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});

test("fetch app", async () => {
	const res = await app();
	expect(res).toStrictEqual({ message: "Hello, World!" });
});
