import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./instagram.module.css"

const Instagram = () => {
  const feed = useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode {
        edges {
          node {
            id
            mediaType
            preview
            caption
          }
        }
      }
    }
  `)

  return (
    <div className={styles.feed}>
      {
        feed.allInstaNode.edges.map(({node}) => (<a target="blank" href={`https://www.instagram.com/p/${node.id}/`} style={{ backgroundImage: `url(${node.preview})` }}></a>))
      }
    </div>
  )
}

export default Instagram
