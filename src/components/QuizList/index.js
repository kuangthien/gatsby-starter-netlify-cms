import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import QuizItem from './QuizItem'
import './styles.scss'

const QuizList = props => {
  const { data } = props
  const { edges: quizzes } = data.allMarkdownRemark
  return (
    <div className=" ">
      <div className=" ">
        {quizzes &&
          quizzes.map(({ node: quizPost }) => (
            <div className=" " key={quizPost.id}>
              <article className="  ">
                <QuizItem
                  {...{
                    id: quizPost.id,
                    title: quizPost.frontmatter.title,
                    desc: quizPost.frontmatter.description,
                    image:
                      quizPost.frontmatter.featuredimage.childImageSharp.fluid
                        .src,
                    slug: quizPost.fields.slug,
                  }}
                  key={quizPost.id}
                />
              </article>
            </div>
          ))}
      </div>
    </div>
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
    render={(data, count) => <QuizList data={data} count={count} />}
  />
)
