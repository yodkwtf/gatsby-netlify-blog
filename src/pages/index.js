import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

export default function Home({ data }) {
  // console.log(data.allMarkdownRemark.nodes)
  const posts = data.allMarkdownRemark.nodes
  return (
    <div>
      Hello world!
      <br />
      <h1>
        <a href="/admin">admin</a>
      </h1>
      {posts.map((post, index) => {
        return (
          <article key={index}>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
            <ReactMarkdown>{post.rawMarkdownBody}</ReactMarkdown>
          </article>
        )
      })}
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          description
          title
        }
        rawMarkdownBody
      }
    }
  }
`
