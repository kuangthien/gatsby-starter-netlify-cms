import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const QuizList = props => {
	const { data } = props;
	const { edges: quizzes } = data.allMarkdownRemark;
	return (
		<div className='columns is-multiline'>
			{quizzes &&
				quizzes.map(({ node: quizPost }) => (
					<div className='is-parent column is-4' key={quizPost.id}>
						<article className='blog-list-item '>
							<header>
								{quizPost.frontmatter.featuredimage ? (
									<div className='featured-thumbnail'>
										<PreviewCompatibleImage
											imageInfo={{
												image:
													quizPost.frontmatter
														.featuredimage,
												alt: `featured image thumbnail for quiz ${
													quizPost.title
												}`,
											}}
										/>
									</div>
								) : null}
							</header>
							<p>{quizPost.excerpt}</p>
						</article>
					</div>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query ahaquizQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "quiz-post" } }
					}
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <QuizList data={data} count={count} />}
	/>
);
