export async function app() {
	try {
		const response = await fetch("https://example.com/hello");
		const user = await response.json();
		return user;
	} catch (error) {
		throw new Error("Network error");
	}
}

app();
