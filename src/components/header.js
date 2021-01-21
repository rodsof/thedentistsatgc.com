import React from 'react';
import { ImLocation } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'gatsby';


const Header = () => {

    //  Event snippet for Calls From Mobile Site conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.

    function gtag_report_conversion(url) {
   /*      var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', { 'send_to': 'AW-708502388/dOiKCOrXoqsBEPTG69EC', 'event_callback': callback });

        return false; */
    }

    return (
        <div className="elementor elementor-195 elementor-location-header">
            <div className="elementor-section-wrap">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-7ebefb0 elementor-hidden-phone elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7ebefb0" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fbbfe1c" data-id="fbbfe1c" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-a0c8984 elementor-hidden-phone elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a0c8984" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-row">
                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-72bc5a5" data-id="72bc5a5" data-element_type="column">
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                            <div className="elementor-widget-wrap">
                                                                <div className="elementor-element elementor-element-0f7a21b elementor-icon-list--layout-inline elementor-align-left elementor-tablet-align-center elementor-hidden-phone elementor-mobile-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0f7a21b" data-element_type="widget" data-widget_type="icon-list.default">
                                                                    <div className="elementor-widget-container">
                                                                        <ul className="elementor-icon-list-items elementor-inline-items">
                                                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                                                <span className="elementor-icon-list-icon">
                                                                                    <ImLocation />						</span>
                                                                                <span className="elementor-icon-list-text">6621 W Broadway STE 600, McCordsville IN, 46055</span>
                                                                            </li>
                                                                            <li className="elementor-icon-list-item elementor-inline-item">
                                                                                <Link to={"mailto:office@thedentistsatgc.com"}>						<span className="elementor-icon-list-icon">
                                                                                    <HiMail />						</span>
                                                                                    <span className="elementor-icon-list-text">office@thedentistsatgc.com</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e871faa" data-id="e871faa" data-element_type="column">
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                            <div className="elementor-widget-wrap">
                                                                <div className="elementor-element elementor-element-2c84496 elementor-widget elementor-widget-html" data-id="2c84496" data-element_type="widget" data-widget_type="html.default">
                                                                    <div className="elementor-widget-container">
                                                                        <Link style={{ color: '#53a75c' }} onClick={() => gtag_report_conversion('tel:317-643-9434')} to={"tel:317-643-9434"}>						<span className="elementor-icon-list-icon">
                                                                            <FaPhone />						</span>
                                                                            <span className="elementor-icon-list-text">317-643-9434</span>
                                                                        </Link>		</div>
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

                <section className="elementor-section elementor-top-section elementor-element elementor-element-7e58b14f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7e58b14f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                    <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-32f9485f" data-id="32f9485f" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-97931da elementor-widget elementor-widget-image" data-id="97931da" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image">
                                                    <Link 
                                                    to={"/"}
                                                    activeClassName="elementor-item-active"
                                                    >
                                                        <img width="400" height="104" src="https://thedentistsatgc.com/wp-content/uploads/2019/03/DentistsatGatewayXing_Logo_Stacked_White-01.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://thedentistsatgc.com/wp-content/uploads/2019/03/DentistsatGatewayXing_Logo_Stacked_White-01.png 400w, https://thedentistsatgc.com/wp-content/uploads/2019/03/DentistsatGatewayXing_Logo_Stacked_White-01-300x78.png 300w" sizes="(max-width: 400px) 100vw, 400px" />								</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d495423" data-id="d495423" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-409f984a elementor-nav-menu--stretch elementor-nav-menu__align-right elementor-nav-menu--indicator-classNameic elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="409f984a" data-element_type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
                                            <div className="elementor-widget-container">
                                                <nav role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade"><ul id="menu-1-409f984a" className="elementor-nav-menu" data-smartmenus-id="16110871693311313"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3937"><Link to={"/"} className="elementor-item" activeClassName="elementor-item elementor-item-active">Home</Link></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-177"><Link to="/about/" className="elementor-item has-submenu" activeClassName="elementor-item elementor-item-active">About<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693311313-2" role="group" aria-hidden="true" aria-labelledby="sm-16110871693311313-1" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-179"><Link to={"/about/office/"} className="elementor-sub-item">Office</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-180"><Link to={"/about/our-team/"} className="elementor-sub-item">Our Team</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178"><Link to={"/about/dr-vogt/"} className="elementor-sub-item">Dr. Vogt</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-181"><Link to={"/services/"} className="elementor-item has-submenu" activeClassName="elementor-item elementor-item-active">Services<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693311313-4" role="group" aria-hidden="true" aria-labelledby="sm-16110871693311313-3" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><Link to={"https://thedentistsatgc.com/services/preventative-dentistry/"} className="elementor-sub-item">Preventative Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"><Link to={"https://thedentistsatgc.com/services/restorative-dentistry/"} className="elementor-sub-item">Restorative Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182"><Link to={"https://thedentistsatgc.com/services/cosmetic-dentistry/"} className="elementor-sub-item">Cosmetic Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184"><Link to={"https://thedentistsatgc.com/services/implant-dentistry/"} className="elementor-sub-item">Implant Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-185"><Link to={"https://thedentistsatgc.com/services/oral-surgery/"} className="elementor-sub-item">Oral Surgery</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-187"><Link to={"https://thedentistsatgc.com/services/periodontal-treatment/"} className="elementor-sub-item">Periodontal Treatment</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-191"><Link to={"https://thedentistsatgc.com/services/sedation-dentistry/"} className="elementor-sub-item">Sedation Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-190"><Link to={"https://thedentistsatgc.com/services/root-canal-therapy/"} className="elementor-sub-item">Root Canal Therapy</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"><Link to={"https://thedentistsatgc.com/services/family-dentistry/"} className="elementor-sub-item">Family Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186"><Link to={"https://thedentistsatgc.com/services/pediatric-dentistry/"} className="elementor-sub-item">Pediatric Dentistry</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-194"><Link to={"/testimonials/"} className="elementor-item" activeClassName="elementor-item elementor-item-active">Testimonials</Link></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-193"><Link to={"/contact/"} className="elementor-item has-submenu" id="sm-16110871693311313-5" aria-haspopup="true" aria-controls="sm-16110871693311313-6" aria-expanded="false">Contact<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693311313-6" role="group" aria-hidden="true" aria-labelledby="sm-16110871693311313-5" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3849"><Link to={"https://thedentistsatgc.com/contact/"} className="elementor-sub-item">Contact Us</Link></li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-441"><Link target="_blank" rel="noopener" to={"https://www.localmed.com/widgets/5ead901e-7d8d-4965-951c-1e95598ca976"} className="elementor-sub-item">Schedule Online</Link></li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3844"><Link to={"https://thedentists.securepayments.cardpointe.com/"} className="elementor-sub-item">Make A Payment</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul></nav>
                                                <div className="elementor-menu-toggle" role="button" tabIndex="0" aria-label="Menu Toggle" aria-expanded="false">
                                                    <GiHamburgerMenu />
                                                    <span className="elementor-screen-only">Menu</span>
                                                </div>
                                                <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style={{ width: '1006px', left: '-305.797px', top: '45px' }}><ul id="menu-2-409f984a" className="elementor-nav-menu" data-smartmenus-id="16110871693404614"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3937"><Link to={"http://thedentistsatgc.com"} aria-current="page" className="elementor-item elementor-item-active">Home</Link></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-177"><Link to={"https://thedentistsatgc.com/about/"} className="elementor-item has-submenu" id="sm-16110871693404614-1" aria-haspopup="true" aria-controls="sm-16110871693404614-2" aria-expanded="false">About<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693404614-2" role="group" aria-hidden="true" aria-labelledby="sm-16110871693404614-1" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-179"><Link to={"https://thedentistsatgc.com/about/office/"} className="elementor-sub-item">Office</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-180"><Link to={"https://thedentistsatgc.com/about/our-team/"} className="elementor-sub-item">Our Team</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-178"><Link to={"https://thedentistsatgc.com/about/dr-vogt/"} className="elementor-sub-item">Dr. Vogt</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-181"><Link to={"https://thedentistsatgc.com/services/"} className="elementor-item has-submenu" id="sm-16110871693404614-3" aria-haspopup="true" aria-controls="sm-16110871693404614-4" aria-expanded="false">Services<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693404614-4" role="group" aria-hidden="true" aria-labelledby="sm-16110871693404614-3" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><Link to={"/"} className="elementor-sub-item">Preventative Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"><Link to={"https://thedentistsatgc.com/services/restorative-dentistry/"} className="elementor-sub-item">Restorative Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182"><Link to={"/"} className="elementor-sub-item">Cosmetic Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184"><Link to={"https://thedentistsatgc.com/services/implant-dentistry/"} className="elementor-sub-item">Implant Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-185"><Link to={"https://thedentistsatgc.com/services/oral-surgery/"} className="elementor-sub-item">Oral Surgery</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-187"><Link to={"https://thedentistsatgc.com/services/periodontal-treatment/"} className="elementor-sub-item">Periodontal Treatment</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-191"><Link to={"https://thedentistsatgc.com/services/sedation-dentistry/"} className="elementor-sub-item">Sedation Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-190"><Link to={"https://thedentistsatgc.com/services/root-canal-therapy/"} className="elementor-sub-item">Root Canal Therapy</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"><Link to={"https://thedentistsatgc.com/services/family-dentistry/"} className="elementor-sub-item">Family Dentistry</Link></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186"><Link to={"https://thedentistsatgc.com/services/pediatric-dentistry/"} className="elementor-sub-item">Pediatric Dentistry</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-194"><Link to={"/testimonials/"} className="elementor-item">Testimonials</Link></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-193"><Link to={"/contact/"} className="elementor-item has-submenu" id="sm-16110871693404614-5" aria-haspopup="true" aria-controls="sm-16110871693404614-6" aria-expanded="false">Contact<span className="sub-arrow"><i className="fa"></i></span></Link>
                                                        <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-16110871693404614-6" role="group" aria-hidden="true" aria-labelledby="sm-16110871693404614-5" aria-expanded="false">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3849"><Link to={"https://thedentistsatgc.com/contact/"} className="elementor-sub-item">Contact Us</Link></li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-441"><Link target="_blank" rel="noopener" to={"https://www.localmed.com/widgets/5ead901e-7d8d-4965-951c-1e95598ca976"} className="elementor-sub-item">Schedule Online</Link></li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3844"><Link to={"https://thedentists.securepayments.cardpointe.com/"} className="elementor-sub-item">Make A Payment</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul></nav>
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
    )
}

export default Header;