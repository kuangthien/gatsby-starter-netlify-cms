import React from 'react'
import Layout from '../../components/Layout'
import QuizList from './../../components/QuizList'
import { Link, graphql, StaticQuery } from 'gatsby'

const QuizListIndexPage = props => {
  const { data } = props
  const { edges: quizzes } = data.allMarkdownRemark
  const stored = quizzes.reduce(function(pV, cV) {
    const { fields, frontmatter } = cV.node
    pV.push({
      id: fields.slug,
      title: frontmatter.title,
      desc: frontmatter.description,
      image: frontmatter.featuredimage,
      renderLink: props => <Link to={`${fields.slug}`} {...props} />,
    })
    return pV
  }, [])

  // console.log('stored', stored)
  return (
    <Layout>
      <QuizList quizzes={stored} />
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query ahaquizQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "quiz-post" } } }
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
                description
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
    render={(data, count) => <QuizListIndexPage data={data} count={count} />}
  />
)
