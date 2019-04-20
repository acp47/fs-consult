import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "react-bootstrap/Button"
import { Jumbotron, Container, Card } from "react-bootstrap";
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <Jumbotron fluid>
 <Container>
 <Image></Image>
   <h1>Flemming Sørensen</h1>
   <p>
     This is a modified jumbotron that occupies the entire horizontal space of
     its parent.
   </p>
 </Container>
</Jumbotron>
    <Button variant="primary">Primary</Button>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Content></Content>
  </Layout>
)

export default IndexPage
