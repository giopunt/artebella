import React from "react"
import { graphql } from "gatsby"

import styles from "./news.module.css"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.content}>
      news —
        <h1>{post.frontmatter.title}</h1>
        <img className={styles.hero} src={post.frontmatter.hero} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        hero
      }
    }
  }
`