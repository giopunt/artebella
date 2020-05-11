import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./news.module.css"

const News = ({data, props}) => (
  <Layout>
    <SEO title="news" />
    <h1 className={styles.pageName}>news</h1>
    <section>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <article className={styles.article} key={node.id}>
            <Link className={styles.newsTitleLink} to={node.frontmatter.path}>
              <h4 className={styles.newsTitle}>{node.frontmatter.title}</h4>
              <div
                className={styles.newsExcerpt}
                dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
              />
            </Link>
          </article>
        ))
      }
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: {regex: "/(news)/"} }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            draft
            path
            date(formatString: "DD MMMM, YYYY")
            excerpt
            title
          }
        }
      }
    }
  }
`;

export default News
