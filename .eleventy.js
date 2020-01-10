module.exports = (eleventyConfig) => {
	const handlebars = require('handlebars')
	eleventyConfig.setLibrary('hbs', handlebars)

	eleventyConfig.addHandlebarsHelper("jsonPrint", obj => JSON.stringify(obj, null, 2))
	eleventyConfig.addHandlebarsHelper("addOne", num => (num + 1))
	eleventyConfig.addHandlebarsHelper("eq", (a, b) => (a === b))
	eleventyConfig.addHandlebarsHelper("not", exp => !exp)

	eleventyConfig.addPassthroughCopy('assets')

	return {
		dir: {
			input: './',
			includes: 'includes'
		},
		passthroughFileCopy: true
	}
}
