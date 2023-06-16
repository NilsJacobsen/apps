export async function defineConfig(env) {
	const { default: i18nextPlugin } = await env.$import(
		"https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next@2/dist/index.js",
	)

	// recommended to enable linting feature
	const { default: standardLintRules } = await env.$import(
		"https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js",
	)

	return {
		referenceLanguage: "zh",
		plugins: [
			i18nextPlugin({
				pathPattern: "./packages/apps/public/locales/{language}/translation.json",
        ignore: ["index.json"]
			}), standardLintRules(),
		],
	}
}	
