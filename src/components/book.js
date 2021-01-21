import React from 'react';

const Book = ({message}) => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9b2566e elementor-section-stretched elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle" data-id="9b2566e" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classNameic&quot;}" style={{left: '0px'}}>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-469f089" data-id="469f089" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            { message ? 
                            <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-068e727 elementor-mobile-align-justify elementor-align-center elementor-widget elementor-widget-button" data-id="068e727" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a href="https://thedentistsatgc.com/contact/" className="elementor-button-link elementor-button elementor-size-lg" role="button">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Book your appointment</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book;