import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://example.com/hello", () => {
		return HttpResponse.json({
			message: "Hello, World!",
		});
	}),
	// MSWはFetch API標準で動くため、単にResponseを返しても良い
	http.get("/resource", () => {
		return new Response("Hello, World!");
	}),
	// 一方で HttpResponse クラスを使うことで json() や text() などのヘルパーメソッドを使えるため便利
	http.get("/resource2", () => {
		return HttpResponse.text("hello, world!");
	}),
	// テキスト
	http.get("/text", () => {
		return new HttpResponse("Hello, World!");
	}),
	// json
	http.get("/json", () => {
		return HttpResponse.json({ message: "Hello, World!" });
	}),
	// ステータスコードとテキストのモック
	http.get("/apple", () => {
		return new HttpResponse(null, {
			status: 404,
			statusText: "Out Of Apples",
		});
	}),
	// ヘッダーのモック
	http.get("/auth", () => {
		return new HttpResponse(null, {
			headers: {
				"x-auth-token": "abc123",
				"Set-Cookie": "session=abc123",
			},
		});
	}),
	// ネットワークエラーのモック
	http.get("/network-error", () => {
		return HttpResponse.error();
	}),
];
