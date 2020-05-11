import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from '@material-ui/icons/Menu';
import navigation from "../config/navigation"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => {
  const [isNavVisible, expandNav] = useState(false);

  return (
    <header
      className={styles.header}
    >
      <nav className={styles.nav}>
        <ul>
          <li>
            <button className={styles.menuIcon} onClick={() => expandNav(!isNavVisible)}>
              <Menu id="menuIcon" />
            </button>
            <Link to="/" className={[styles.link, styles.logo].join(' ')}>{siteTitle}</Link>
          </li>
          {
            navigation.map(({ label, to, subnav }) => (
              <li className={[styles.navlink, styles.desktop].join(' ')} key={label}>
                <Link to={to} className={styles.link}>{label}</Link>
                {
                  subnav &&  
                  <ul>
                    {
                      subnav.map(({ to, label }) => (
                        <li className={styles.sublink} key={label}>
                          <Link to={to} className={styles.link}>{label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                }
              </li>
            ))
          }
          {
            isNavVisible && navigation.map(({ label, to, subnav }) => (
              <li className={styles.navlink} key={label}>
                <Link to={to} className={styles.link}>{label}</Link>
                {
                  subnav &&  
                  <ul>
                    {
                      subnav.map(({ to, label }) => (
                        <li className={styles.sublink} key={label}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
