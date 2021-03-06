import React from 'react';
import { graphql } from 'gatsby';

const Template = (props) => {
	const title = props.data.markdownRemark.frontmatter.title
	const html = props.data.markdownRemark.html
	return (
		<div>
			<h2>{title}</h2>
			<div>{html}</div>
		</div>
	)
}

export const query = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: path: { eq: $pathSlug }) {
			html,
			frontmatter {
				title
			}
		}
	}
`

export default Template