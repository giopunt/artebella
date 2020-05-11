import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MicIcon from '@material-ui/icons/Mic';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Header from "./header"
import Footer from "./footer"
import Instagram from "./instagram"
import BioImage from "./bio-pic"

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
              <div className={styles.bio}>
                <h4 className={styles.bioTitle}>Bio</h4>
                <div className={styles.bioPic}>
                  <BioImage />
                </div>
                <div className={styles.bioContent}>
                  Eleonora, 27 anni, a Londra da due e mezzo. Mi diletto tra visite a musei, mostre, gallerie d'arte, angolini di città nascosti, punti di vista nuovi e colorati. Ho studiato economia e Gestione dei Beni Culturali e dello Spettacolo all'Università Cattolica di Milano e ora lavoro per una Galleria d'arte italiana a Mayfair.
                </div>
                <a className={styles.contactLink} href="mailto:confalonieri.eleonora@gmail.com">Contact me</a>
              </div>
            </li>
            <li>
              <a className={styles.sidebarTitle} target="blank" href="https://open.spotify.com/show/2BYMS5jTQIWNs3RsDlguf4?si=DbAJKoW-Sam2aQJwF0Ab9g">Podcast <MicIcon /></a>
            </li>
            <li>
              <a className={styles.sidebarTitle} target="blank" href="https://www.youtube.com/channel/UCP2hjh_48hZU_geWeDsq4jA">Youtube <LiveTvIcon /></a>
            </li>
            <li>
              <a className={styles.sidebarTitle} target="blank" href="https://www.instagram.com/artebella.it/">Instagram <PhotoCameraIcon/></a>
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
