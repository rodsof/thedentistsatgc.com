import React from 'react';

const Schedule = ({title1,title2,message1,message2}) => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-34b9fe05 elementor-section-content-middle elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="34b9fe05" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b531278" data-id="7b531278" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-4fb0f914 elementor-widget elementor-widget-heading" data-id="4fb0f914" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <p className="elementor-heading-title elementor-size-default">{title1}</p>		</div>
                                </div>
                                <div className="elementor-element elementor-element-1e106b16 elementor-widget elementor-widget-heading" data-id="1e106b16" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">{title2}</h1>		</div>
                                </div>
                                <div className="elementor-element elementor-element-2c4fe85a elementor-widget elementor-widget-text-editor" data-id="2c4fe85a" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix"><p>{message1}</p><p>&nbsp;</p><p>{message2}</p></div>
                                    </div>
                                </div>
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-641d20ab elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="641d20ab" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-475ee266" data-id="475ee266" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-5b5d55b elementor-align-right elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="5b5d55b" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a href="#learn" className="elementor-button-link elementor-button elementor-size-lg" role="button">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">LEARN MORE</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-70561cd" data-id="70561cd" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-6302a8f elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="6302a8f" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a href="#schedule" className="elementor-button-link elementor-button elementor-size-lg" role="button">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">SCHEDULE NOW</span>
                                                                        </span>
                                                                    </a>
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