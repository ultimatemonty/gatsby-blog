module.exports = {
	siteMetadata: {
		title: 'My Blog',
		description: 'My cool blog'
	},
	plugins: [
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages`
			}
		}
	]
}