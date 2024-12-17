import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://example.com/user", () => {
		return HttpResponse.json({
			id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
			firstName: "John",
			lastName: "Maverick",
		});
	}),
];

// httpリクエストは `http` 名前空間を使用して傍受できる。http.get() / http.post() など
// 2つ引数を必要する関数シグネチャを持つ
// http.get(predicate, resolver)
// predicate(string | RegExp) リクエストパス
// resolver(Response resolver) リクエストに対するレスポンスを生成する関数
http.get("/pets", ({ request, params, cookies }) => {
	return HttpResponse.json(["Tom", "Jerry", "Spike"]);
});

export const handlers2 = [
	// http.get("/pets", petResolver),
	// http.post("https://api.github.com/repo", repoResolver),
	// http.post("/users/*", userResolver),
];

// resolverを別で定義するパターン
const petResolver = ({ request, params, cookies }) => {
	return HttpResponse.json(["Tom", "Jerry", "Spike"]);
};
http.get("/pets2", petResolver);
