import * as React from "react"
import Call from "../components/About/call"
import Layout from "../components/layout"
import Staff from "../components/About/staff"
import Book from "../components/book"
import Contact from "../components/contact"
import Schedule from "../components/About/schedule"
import Practices from "../components/About/practice"


// markup
const About = () => {
    return (
        <Layout>
            <div className="elementor elementor-138 elementor-3883">
                <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                        <Schedule  title1="Want to know who we are?" title2="We're The Dentists At Gateway Crossing" message1="Our focus is on people and our McCordsville community. At our office things are different, we care about you as a whole person, not just your teeth. Browse the page below to learn more about us.!"
                        message2="Whenever you’re ready, it’s easy to schedule your appointment with us.  Just click “schedule now” below."
                        />
                        <Practices />
                        <Call title1="LOVE YOUR DENTIST!" title2="Don't take another trip to the dentist that you don't enjoy!" message1="Your experience is our number one concern. It’s why so many people come to us for dental care. Call TODAY!" message2="Whenever you’re ready, it’s easy to schedule your appointment with us.  Just click “schedule now” below."/>
                        <Staff />
                        <Book message={"Book your appointment"} />
            <Contact />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
