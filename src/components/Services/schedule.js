import React from 'react';
import { Link } from 'gatsby';

const Schedule = () => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-2a7ff7a5 elementor-section-content-middle elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="2a7ff7a5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-313f88e5" data-id="313f88e5" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-66f4d93 elementor-widget elementor-widget-heading" data-id="66f4d93" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <p className="elementor-heading-title elementor-size-default">The Dentists at Gateway Crossing</p>		</div>
                                </div>
                                <div className="elementor-element elementor-element-622984f8 elementor-widget elementor-widget-heading" data-id="622984f8" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">McCordsville Dental Services</h1>		</div>
                                </div>
                                <div className="elementor-element elementor-element-512e292b elementor-widget elementor-widget-text-editor" data-id="512e292b" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix"><p>You can find our full lineup of dental services on this page. Browse the categories below and click a service to learn more. It’s easy to schedule an appointment online.&nbsp;</p><p>Click “schedule now” as soon as you are ready.</p></div>
                                    </div>
                                </div>
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-2f69d5a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2f69d5a2" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7cd75022" data-id="7cd75022" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-ad57559 elementor-align-center elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="ad57559" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <Link to={"/contact"} className="elementor-button-link elementor-button elementor-size-lg" role="button">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">SCHEDULE NOW</span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule;