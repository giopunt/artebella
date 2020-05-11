import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MicIcon from '@material-ui/icons/Mic';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Header from "./header"
import Footer from "./footer"
import Instagram from "./instagram"

import "./layout.css"
import "./main.css"

import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className={styles.content}
      >
        <main className={styles.main}>{children}</main>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a className={styles.sidebarTitle} target="blank" href="https://open.spotify.com/show/2BYMS5jTQIWNs3RsDlguf4?si=DbAJKoW-Sam2aQJwF0Ab9g">PODCAST <MicIcon /></a>
            </li>
            <li>
              <a className={styles.sidebarTitle} target="blank" href="https://www.instagram.com/artebella.it/">INSTAGRAM <PhotoCameraIcon/></a>
              <Instagram />
            </li>
          </ul>
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
