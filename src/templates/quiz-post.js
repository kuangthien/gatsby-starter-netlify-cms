import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import QuizDetailFeedbackInstant from '../components/QuizDetail/FeedbackInstant'
import QuizDetailFeedbackComputed from '../components/QuizDetail/FeedbackComputed'

export const QuizPostTemplate = ({
  content,
  contentComponent,
  description,
  questions,
  title,
  helmet,
  image,
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
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <p>{description}</p>
            {/* <PostContent content={content} /> */}
            {/* {quizType === 'feedback-computed' && (
              <QuizDetailFeedbackComputed
                quizQuestions={questions}
                quizTitle={title}
                quizImage={image}
                resultAnswersMap={resultAnswersMap}
              />
            )} */}
            {quizType === 'feedback-instant' && (
              <QuizDetailFeedbackInstant
                quizQuestions={questions}
                quizTitle={title}
                quizImage={image}
              />
            )}
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
        image={post.frontmatter.featuredimage.childImageSharp.fluid.src}
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
          image
          answers {
            content
            is_correct
          }
        }
        resultAnswersMap
        quizType
      }
    }
  }
`
