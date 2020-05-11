import React from "react"
import NotFoundPic from "../components/not-found-pic"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <h1>404</h1>
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <NotFoundPic />
      </div>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
