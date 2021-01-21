import React from 'react';
import { AiFillStar }  from "react-icons/ai";

const Video = () => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-adae0a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="adae0a1" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/thedentistsatgc.com\/wp-content\/uploads\/2021\/01\/Dr.-Vogt-VIdeo-Header-V2.webm&quot;}">
            <div className="elementor-background-video-container elementor-hidden-phone">
                <video className="elementor-background-video-hosted elementor-html5-video" autoPlay muted playsInline loop src="https://thedentistsatgc.com/wp-content/uploads/2021/01/Dr.-Vogt-VIdeo-Header-V2.webm"></video>
            </div>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6f76586" data-id="6f76586" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-e0b6da2 elementor-widget elementor-widget-heading" data-id="e0b6da2" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">THE DENTISTS <br />
                                            <span style={{fontSize:'50px'}}>AT GATEWAY CROSSING</span></h1>		</div>
                                </div>
                                <div className="elementor-element elementor-element-a3547d7 elementor-widget elementor-widget-text-editor" data-id="a3547d7" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix"><p>“Extremely caring and friendly service. Front desk has smiling faces and Dr. Vogt understands what it takes to provide excellent care.”</p></div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-cfbca2f elementor-star-rating--align-center elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating" data-id="cfbca2f" data-element_type="widget" data-widget_type="star-rating.default">
                                    <div className="elementor-widget-container">

                                        <div className="elementor-star-rating__wrapper">
                                            <div className="elementor-star-rating" title="5/5" itemType="http://schema.org/Rating" itemScope="" itemProp="reviewRating">
                                                <AiFillStar className="elementor-star-full"/><AiFillStar className="elementor-star-full"/><AiFillStar className="elementor-star-full"/>
                                                <AiFillStar className="elementor-star-full"/><AiFillStar className="elementor-star-full"/> <span itemProp="ratingValue" className="elementor-screen-only">5/5</span></div>		</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-c484ee7 elementor-widget elementor-widget-text-editor" data-id="c484ee7" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix"><p>LOGAN M., MCCORDSVILLE</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video;