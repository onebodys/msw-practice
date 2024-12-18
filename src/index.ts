export async function app() {
	const response = await fetch("https://example.com/hello");
	const user = await response.json();
	return user;
}

app();

export function sum(a: number, b: number) {
	return a + b;
}
