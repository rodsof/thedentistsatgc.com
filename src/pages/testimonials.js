import * as React from "react"
import Schedule from "../components/Testimonials/schedule";
import Layout from "../components/layout";
import Reviews from "../components/Testimonials/reviews";
import Call from "../components/About/call";
import MoreReviews from "../components/Testimonials/moreReviews";

const Testimonials = () => {
    return (
        <Layout>
            <div className="elementor elementor-138 elementor-3883">
                <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                        <Schedule />
                        <Reviews />
                        <Call title1="LOVE YOUR SMILE!" title2="Don't miss your chance to live life with the smile you've always wanted!" message="Stop delaying your health! Your teeth can’t afford another day without proper care. Call TODAY!"/>
                        <MoreReviews />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Testimonials;