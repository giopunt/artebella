import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import navigation from "../config/navigation"

import styles from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <ul>
        {
          navigation.map(({ label, to, subnav }) => (
            <li className={styles.navlink}>
              <Link to={to} className={styles.link}>{label}</Link>
              {
                subnav &&  
                <ul>
                  {
                    subnav.map(({ to, label }) => (
                      <li>
                        <Link to={to} className={styles.link}>{label}</Link>
                      </li>
                    ))
                  }
                </ul>
              }
            </li>
          ))
        }
      </ul>
    </nav>
    <div className={styles.notice}>{new Date().getFullYear()} © {siteTitle.toUpperCase()} / Tutti i diritti riservati</div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
