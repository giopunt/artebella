import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./news.module.css"

const News = ({data, props}) => (
  <Layout>
    <SEO title="news" />
    <section>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <article className={styles.article} key={node.id}>
            <Link className={styles.newsTitleLink} to={node.frontmatter.path}>
              <div>
                news — <h4 className={styles.newsTitle}>{node.frontmatter.title}</h4>
                <img className={styles.heroImage} src={node.frontmatter.hero} alt={node.frontmatter.title} />
                <div
                className={styles.newsExcerpt}
                dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
                />
              </div>
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
      filter: { 
        fileAbsolutePath: { regex: "/(news)/" } 
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            draft
            hero
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
