import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { QuizDetailComposition } from '../components/QuizDetail'

export const QuizPostTemplate = ({
  content,
  contentComponent,
  description,
  questions: quizQuestions,
  title: quizTitle,
  helmet,
  image: quizImage,
  quizType,
  resultAnswersMap,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <QuizDetailComposition
              {...{
                question: quizQuestions[0].content,
                answerOptions: quizQuestions[0].answers,
                questionImage: quizQuestions[0].image,
                quizImage,
                quizTitle,
                quizQuestions,
                quizType,
                resultAnswersMap,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  console.log(post)
  return (
    <Layout>
      <QuizPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Quizzes">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        questions={post.frontmatter.questions}
        image={null}
        quizType={post.frontmatter.quizType}
        resultAnswersMap={post.frontmatter.resultAnswersMap}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query QuizPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        questions {
          content
          feedback

          answers {
            content
            is_correct
          }
        }
        quizType
      }
    }
  }
`
