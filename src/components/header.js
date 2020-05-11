import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import navigation from "../config/navigation"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/" className={[styles.link, styles.logo].join(' ')}>{siteTitle}</Link></li>
        {
          navigation.map(({ label, to, subnav }) => (
            <li className={styles.navlink} key={label}>
              <Link to={to} className={styles.link}>{label}</Link>
              {
                subnav &&  
                <ul>
                  {
                    subnav.map(({ to, label }) => (
                      <li key={label}>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
