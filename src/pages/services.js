import * as React from "react"
import Schedule from "../components/About/schedule"
import Layout from "../components/layout"
import SomeServices from "../components/services"
import FamilyDentistry from "../components/Services/familyDentistry"
import MoreServices from "../components/Services/moreServices"

// markup
const Services = () => {
    return (
        <Layout>
            <div className="elementor elementor-138 elementor-3883">
                <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                    <Schedule  title1="The Dentists at Gateway Crossing" title2="McCordsville Dental Services" message1="You can find our full lineup of dental services on this page. Browse the categories below and click a service to learn more. It’s easy to schedule an appointment online."
                    message2="Click “schedule now” as soon as you are ready."
                    />
                        <SomeServices />
                        <MoreServices />
                        <FamilyDentistry />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services
