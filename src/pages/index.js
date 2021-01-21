import * as React from "react"
import Book from "../components/book"
import Contact from "../components/contact"
import Doctor from "../components/doctor"
import Insurance from "../components/insurance"
import Layout from "../components/layout"
import Mission from "../components/mission"
import Office from "../components/office"
import Services from "../components/services"
import Video from "../components/video"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="elementor elementor-3883">
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            <Video />
            <Office />
            <Doctor />
            <Mission />
            <Services />
            <Insurance />
            <Book message={"Book your appointment"} />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
