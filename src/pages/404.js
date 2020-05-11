import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <h1>404</h1>
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
