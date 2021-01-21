import React from 'react';

const Call = ({title1,title2,message}) => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-8dda33d elementor-section-stretched elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle" data-id="8dda33d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}" style={{left: '0px'}}>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb6b0e2" data-id="fb6b0e2" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-eb8cb13 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="eb8cb13" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d928439" data-id="d928439" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-e25f13a elementor-widget elementor-widget-heading" data-id="e25f13a" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <p className="elementor-heading-title elementor-size-default">{title1}</p>		</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-a6bf4f3 elementor-widget elementor-widget-heading" data-id="a6bf4f3" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">{title2}</h3>		</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-db38dd3 elementor-widget elementor-widget-text-editor" data-id="db38dd3" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix"><p>{message}</p></div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-4a862a6 elementor-mobile-align-justify elementor-align-left elementor-widget elementor-widget-button" data-id="4a862a6" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a href="tel:3176439434" className="elementor-button-link elementor-button elementor-size-lg" role="button">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">(317) 643-9434</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c14778a" data-id="c14778a" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-ba53fe6 elementor-widget elementor-widget-spacer" data-id="ba53fe6" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner"></div>
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

export default Call;