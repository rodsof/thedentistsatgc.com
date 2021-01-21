import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
.dialog-widget-content{
    background-color:#fff;
    position:absolute;
    -webkit-border-radius:3px;
    border-radius:3px;
    -webkit-box-shadow:2px 8px 23px 3px rgba(0,0,0,.2);
    box-shadow:2px 8px 23px 3px rgba(0,0,0,.2);
    overflow:hidden
}
.dialog-message{
    font-size:12px;
    line-height:1.5;
    -webkit-box-sizing:border-box;
    box-sizing:border-box
}
.dialog-type-lightbox{
    position:fixed;
    height:100%;
    width:100%;
    bottom:0;
    left:0;
    background-color:rgba(0,0,0,.8);
    z-index:9999;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
}
.dialog-type-lightbox .dialog-widget-content{
    margin:auto;
    width:375px
}
.dialog-type-lightbox .dialog-header{
    font-size:15px;
    color:#495157;
    padding:30px 0 10px;
    font-weight:500
}
.dialog-type-lightbox .dialog-message{
    padding:0 30px 30px;
    min-height:50px
}
.dialog-type-lightbox:not(.elementor-popup-modal) .dialog-header,.dialog-type-lightbox:not(.elementor-popup-modal) .dialog-message{
    text-align:center
}
.dialog-type-lightbox .dialog-buttons-wrapper{
    border-top:1px solid #e6e9ec;
    text-align:center
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button{
    font-family:Roboto,Arial,Helvetica,Verdana,sans-serif;
    width:50%;
    border:none;
    background:none;
    color:#6d7882;
    font-size:15px;
    cursor:pointer;
    padding:13px 0;
    outline:0
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button:hover{
    background-color:#f4f6f7
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button.dialog-ok{
    color:#b01b1b
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button.dialog-take_over{
    color:#39b54a
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button:active{
    background-color:rgba(230,233,236,.5)
}
.dialog-type-lightbox .dialog-buttons-wrapper>.dialog-button::-moz-focus-inner{
    border:0
}
.dialog-close-button{
    cursor:pointer;
    position:absolute;
    margin-top:15px;
    right:15px;
    font-size:15px;
    line-height:1
}
.dialog-close-button:not(:hover){
    opacity:.4
}
.dialog-alert-widget .dialog-buttons-wrapper>button{
    width:100%
}
.dialog-confirm-widget .dialog-button:first-child{
    border-right:1px solid #e6e9ec
}
.dialog-prevent-scroll{
    overflow:hidden;
    max-height:100vh
}
@media (min-width:1024px){
    body.admin-bar .dialog-lightbox-widget{
        height:calc(100vh - 32px)
    }
}
@media (max-width:1024px){
    body.admin-bar .dialog-type-lightbox{
        position:-webkit-sticky;
        position:sticky;
        height:100vh
    }
}
.elementor-aspect-ratio-219 .elementor-fit-aspect-ratio{
    padding-bottom:42.8571%
}
.elementor-aspect-ratio-169 .elementor-fit-aspect-ratio{
    padding-bottom:56.25%
}
.elementor-aspect-ratio-43 .elementor-fit-aspect-ratio{
    padding-bottom:75%
}
.elementor-aspect-ratio-32 .elementor-fit-aspect-ratio{
    padding-bottom:66.6666%
}
.elementor-aspect-ratio-11 .elementor-fit-aspect-ratio{
    padding-bottom:100%
}
.elementor-aspect-ratio-916 .elementor-fit-aspect-ratio{
    padding-bottom:177.8%
}
.elementor-fit-aspect-ratio{
    position:relative;
    height:0
}
.elementor-fit-aspect-ratio iframe{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    border:0;
    background-color:#000
}
.elementor-fit-aspect-ratio video{
    width:100%
}
.flatpickr-calendar{
    width:280px
}
.flatpickr-calendar .flatpickr-current-month span.cur-month{
    font-weight:300
}
.flatpickr-calendar .dayContainer{
    width:280px;
    min-width:280px;
    max-width:280px
}
.flatpickr-calendar .flatpickr-days{
    width:280px
}
.flatpickr-calendar .flatpickr-day{
    max-width:37px;
    height:37px;
    line-height:37px
}
.elementor-templates-modal .dialog-widget-content{
    font-family:Roboto,Arial,Helvetica,Verdana,sans-serif;
    background-color:#f1f3f5;
    width:100%
}
@media (max-width:1439px){
    .elementor-templates-modal .dialog-widget-content{
        max-width:990px
    }
}
@media (min-width:1440px){
    .elementor-templates-modal .dialog-widget-content{
        max-width:1200px
    }
}
.elementor-templates-modal .dialog-header{
    padding:0;
    z-index:1
}
.elementor-templates-modal .dialog-buttons-wrapper,.elementor-templates-modal .dialog-header{
    background-color:#fff;
    -webkit-box-shadow:0 0 8px rgba(0,0,0,.1);
    box-shadow:0 0 8px rgba(0,0,0,.1);
    position:relative
}
.elementor-templates-modal .dialog-buttons-wrapper{
    border:none;
    display:none;
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    justify-content:flex-end;
    padding:5px
}
.elementor-templates-modal .dialog-buttons-wrapper .elementor-button{
    height:40px;
    margin-left:5px
}
.elementor-templates-modal .dialog-buttons-wrapper .elementor-button-success{
    padding:12px 36px;
    color:#fff;
    width:auto;
    font-size:15px
}
.elementor-templates-modal .dialog-buttons-wrapper .elementor-button-success:hover{
    background-color:#39b54a
}
.elementor-templates-modal .dialog-message{
    height:750px;
    max-height:85vh;
    overflow:auto;
    padding-top:25px
}
.elementor-templates-modal .dialog-content{
    height:100%
}
.elementor-templates-modal .dialog-loading{
    display:none
}
.elementor-templates-modal__header{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
    height:50px
}
.elementor-templates-modal__header__logo{
    line-height:1;
    text-transform:uppercase;
    font-weight:700;
    cursor:pointer
}
.elementor-templates-modal__header__logo-area{
    text-align:left;
    padding-left:15px
}
.elementor-templates-modal__header__logo-area>*{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-templates-modal__header__logo__icon-wrapper{
    margin-right:10px;
    font-size:12px
}
.elementor-templates-modal__header__logo__title{
    padding-top:2px
}
.elementor-templates-modal__header__items-area{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:reverse;
    -ms-flex-direction:row-reverse;
    flex-direction:row-reverse
}
.elementor-templates-modal__header__item{
    position:relative;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    -webkit-box-sizing:content-box;
    box-sizing:content-box
}
.elementor-templates-modal__header__item>i{
    font-size:20px;
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
    cursor:pointer
}
.elementor-templates-modal__header__item>i:not(:hover){
    color:#a4afb7
}
.elementor-templates-modal__header__close--normal{
    width:47px;
    border-left:1px solid #e6e9ec
}
.elementor-templates-modal__header__close--normal i{
    font-size:18px
}
.elementor-templates-modal__header__close--skip{
    padding:10px 10px 10px 20px;
    margin-right:10px;
    color:#fff;
    background-color:#a4afb7;
    font-size:11px;
    font-weight:400;
    line-height:1;
    text-transform:uppercase;
    -webkit-border-radius:2px;
    border-radius:2px;
    cursor:pointer
}
.elementor-templates-modal__header__close--skip>i{
    font-size:inherit;
    padding-left:10px;
    margin-left:15px;
    border-left:1px solid
}
.elementor-templates-modal__header__close--skip>i:not(:hover){
    color:#fff
}
.elementor-templates-modal__sidebar{
    -ms-flex-negative:0;
    flex-shrink:0;
    width:25%;
    background-color:hsla(0,0%,100%,.3)
}
.elementor-templates-modal__content{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    -webkit-box-shadow:0 0 13px inset rgba(0,0,0,.05);
    box-shadow:inset 0 0 13px rgba(0,0,0,.05)
}
#wpadminbar #wp-admin-bar-elementor_app_site_editor a.ab-item:before{
    content:"\e91d";
    font-family:eicons;
    top:4px;
    font-size:13px;
    color:inherit
}
.elementor-hidden{
    display:none
}
.elementor-screen-only,.screen-reader-text,.screen-reader-text span,.ui-helper-hidden-accessible{
    position:absolute;
    top:-10000em;
    width:1px;
    height:1px;
    margin:-1px;
    padding:0;
    overflow:hidden;
    clip:rect(0,0,0,0);
    border:0
}
.elementor-clearfix:after{
    content:"";
    display:block;
    clear:both;
    width:0;
    height:0
}
.e-logo-wrapper{
    background:#93003c;
    display:inline-block;
    padding:.75em;
    -webkit-border-radius:50%;
    border-radius:50%;
    line-height:1
}
.e-logo-wrapper i{
    color:#fff;
    font-size:1em
}
.elementor{
    -webkit-hyphens:manual;
    -ms-hyphens:manual;
    hyphens:manual
}
.elementor *,.elementor :after,.elementor :before{
    -webkit-box-sizing:border-box;
    box-sizing:border-box
}
.elementor a{
    -webkit-box-shadow:none;
    box-shadow:none;
    text-decoration:none
}
.elementor hr{
    margin:0;
    background-color:transparent
}
.elementor img{
    height:auto;
    max-width:100%;
    border:none;
    -webkit-border-radius:0;
    border-radius:0;
    -webkit-box-shadow:none;
    box-shadow:none
}
.elementor .elementor-widget:not(.elementor-widget-text-editor):not(.elementor-widget-theme-post-content) figure{
    margin:0
}
.elementor embed,.elementor iframe,.elementor object,.elementor video{
    max-width:100%;
    width:100%;
    margin:0;
    line-height:1;
    border:none
}
.elementor .elementor-custom-embed{
    line-height:0
}
.elementor .elementor-background,.elementor .elementor-background-holder,.elementor .elementor-background-video-container{
    height:100%;
    width:100%;
    top:0;
    left:0;
    position:absolute;
    overflow:hidden;
    z-index:0;
    direction:ltr
}
.elementor .elementor-background-video-container{
    -webkit-transition:opacity 1s;
    -o-transition:opacity 1s;
    transition:opacity 1s;
    pointer-events:none
}
.elementor .elementor-background-video-container.elementor-loading{
    opacity:0
}
.elementor .elementor-background-video-embed{
    max-width:none
}
.elementor .elementor-background-video,.elementor .elementor-background-video-embed,.elementor .elementor-background-video-hosted{
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%)
}
.elementor .elementor-background-video{
    max-width:none
}
.elementor .elementor-html5-video{
    -o-object-fit:cover;
    object-fit:cover
}
.elementor .elementor-background-overlay,.elementor .elementor-background-slideshow{
    height:100%;
    width:100%;
    top:0;
    left:0;
    position:absolute
}
.elementor .elementor-background-slideshow{
    z-index:0
}
.elementor .elementor-background-slideshow__slide__image{
    width:100%;
    height:100%;
    background-position:50%;
    -webkit-background-size:cover;
    background-size:cover
}
.elementor-widget-wrap>.elementor-element.elementor-absolute{
    position:absolute
}
.elementor-widget-wrap>.elementor-element.elementor-fixed{
    position:fixed
}
.elementor-widget-wrap .elementor-element.elementor-widget__width-auto,.elementor-widget-wrap .elementor-element.elementor-widget__width-initial{
    max-width:100%
}
@media (max-width:1024px){
    .elementor-widget-wrap .elementor-element.elementor-widget-tablet__width-auto,.elementor-widget-wrap .elementor-element.elementor-widget-tablet__width-initial{
        max-width:100%
    }
}
@media (max-width:767px){
    .elementor-widget-wrap .elementor-element.elementor-widget-mobile__width-auto,.elementor-widget-wrap .elementor-element.elementor-widget-mobile__width-initial{
        max-width:100%
    }
}
.elementor-element.elementor-absolute,.elementor-element.elementor-fixed{
    z-index:1
}
.elementor-invisible{
    visibility:hidden
}
.elementor-align-center{
    text-align:center
}
.elementor-align-center .elementor-button{
    width:auto
}
.elementor-align-right{
    text-align:right
}
.elementor-align-right .elementor-button{
    width:auto
}
.elementor-align-left{
    text-align:left
}
.elementor-align-left .elementor-button{
    width:auto
}
.elementor-align-justify .elementor-button{
    width:100%
}
.elementor-custom-embed-play{
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%)
}
.elementor-custom-embed-play i{
    font-size:100px;
    color:#fff;
    opacity:.8;
    text-shadow:1px 0 6px rgba(0,0,0,.3);
    -webkit-transition:all .5s;
    -o-transition:all .5s;
    transition:all .5s
}
.elementor-custom-embed-play.elementor-playing i{
    font-family:eicons;
    -webkit-animation:fa-spin 2s linear infinite;
    animation:fa-spin 2s linear infinite
}
.elementor-custom-embed-play.elementor-playing i:before{
    content:"\e8fb"
}
.elementor-tag{
    display:-webkit-inline-box;
    display:-ms-inline-flexbox;
    display:inline-flex
}
.elementor-ken-burns{
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    -o-transition-property:transform;
    transition-property:transform;
    transition-property:transform,-webkit-transform;
    -webkit-transition-duration:10s;
    -o-transition-duration:10s;
    transition-duration:10s;
    -webkit-transition-timing-function:linear;
    -o-transition-timing-function:linear;
    transition-timing-function:linear
}
.elementor-ken-burns--out{
    -webkit-transform:scale(1.3);
    -ms-transform:scale(1.3);
    transform:scale(1.3)
}
.elementor-ken-burns--active{
    -webkit-transition-duration:20s;
    -o-transition-duration:20s;
    transition-duration:20s
}
.elementor-ken-burns--active.elementor-ken-burns--out{
    -webkit-transform:scale(1);
    -ms-transform:scale(1);
    transform:scale(1)
}
.elementor-ken-burns--active.elementor-ken-burns--in{
    -webkit-transform:scale(1.3);
    -ms-transform:scale(1.3);
    transform:scale(1.3)
}
@media (max-width:1024px){
    .elementor-tablet-align-center{
        text-align:center
    }
    .elementor-tablet-align-center .elementor-button{
        width:auto
    }
    .elementor-tablet-align-right{
        text-align:right
    }
    .elementor-tablet-align-right .elementor-button{
        width:auto
    }
    .elementor-tablet-align-left{
        text-align:left
    }
    .elementor-tablet-align-left .elementor-button{
        width:auto
    }
    .elementor-tablet-align-justify .elementor-button{
        width:100%
    }
}
@media (max-width:767px){
    .elementor-mobile-align-center{
        text-align:center
    }
    .elementor-mobile-align-center .elementor-button{
        width:auto
    }
    .elementor-mobile-align-right{
        text-align:right
    }
    .elementor-mobile-align-right .elementor-button{
        width:auto
    }
    .elementor-mobile-align-left{
        text-align:left
    }
    .elementor-mobile-align-left .elementor-button{
        width:auto
    }
    .elementor-mobile-align-justify .elementor-button{
        width:100%
    }
}
#wpadminbar #wp-admin-bar-elementor_edit_page>.ab-item:before{
    content:"\e813";
    font-family:eicons;
    top:3px;
    font-size:18px
}
#wpadminbar #wp-admin-bar-elementor_inspector>.ab-item:before{
    content:"\f348";
    top:2px
}
:root{
    --page-title-display:block
}
.elementor-page-title,h1.entry-title{
    display:var(--page-title-display)
}
.elementor-section{
    position:relative
}
.elementor-section .elementor-container{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    margin-right:auto;
    margin-left:auto;
    position:relative
}
@media (max-width:1024px){
    .elementor-section .elementor-container{
        -ms-flex-wrap:wrap;
        flex-wrap:wrap
    }
}
.elementor-section.elementor-section-boxed>.elementor-container{
    max-width:1140px
}
.elementor-section.elementor-section-stretched{
    position:relative;
    width:100%
}
.elementor-section.elementor-section-items-top>.elementor-container{
    -webkit-box-align:start;
    -ms-flex-align:start;
    align-items:flex-start
}
.elementor-section.elementor-section-items-middle>.elementor-container{
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-section.elementor-section-items-bottom>.elementor-container{
    -webkit-box-align:end;
    -ms-flex-align:end;
    align-items:flex-end
}
@media (min-width:768px){
    .elementor-section.elementor-section-height-full{
        height:100vh
    }
    .elementor-section.elementor-section-height-full>.elementor-container{
        height:100%
    }
}
.elementor-bc-flex-widget .elementor-section-content-top>.elementor-container>.elementor-column>.elementor-widget-wrap{
    -webkit-box-align:start;
    -ms-flex-align:start;
    align-items:flex-start
}
.elementor-bc-flex-widget .elementor-section-content-middle>.elementor-container>.elementor-column>.elementor-widget-wrap{
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-bc-flex-widget .elementor-section-content-bottom>.elementor-container>.elementor-column>.elementor-widget-wrap{
    -webkit-box-align:end;
    -ms-flex-align:end;
    align-items:flex-end
}
.elementor-row{
    width:100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex
}
@media (max-width:1024px){
    .elementor-row{
        -ms-flex-wrap:wrap;
        flex-wrap:wrap
    }
}
.elementor-widget-wrap{
    position:relative;
    width:100%;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
    -ms-flex-line-pack:start;
    align-content:flex-start
}
.elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex
}
.elementor-widget-wrap>.elementor-element{
    width:100%
}
.elementor-widget{
    position:relative
}
.elementor-widget:not(:last-child){
    margin-bottom:20px
}
.elementor-widget:not(:last-child).elementor-absolute,.elementor-widget:not(:last-child).elementor-widget__width-auto,.elementor-widget:not(:last-child).elementor-widget__width-initial{
    margin-bottom:0
}
.elementor-column{
    min-height:1px
}
.elementor-column,.elementor-column-wrap{
    position:relative;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex
}
.elementor-column-wrap{
    width:100%
}
.elementor-column-gap-narrow>.elementor-column>.elementor-element-populated{
    padding:5px
}
.elementor-column-gap-default>.elementor-column>.elementor-element-populated{
    padding:10px
}
.elementor-column-gap-extended>.elementor-column>.elementor-element-populated{
    padding:15px
}
.elementor-column-gap-wide>.elementor-column>.elementor-element-populated{
    padding:20px
}
.elementor-column-gap-wider>.elementor-column>.elementor-element-populated{
    padding:30px
}
.elementor-inner-section .elementor-column-gap-no .elementor-element-populated{
    padding:0
}
@media (min-width:768px){
    .elementor-column.elementor-col-10,.elementor-column[data-col="10"]{
        width:10%
    }
    .elementor-column.elementor-col-11,.elementor-column[data-col="11"]{
        width:11.111%
    }
    .elementor-column.elementor-col-12,.elementor-column[data-col="12"]{
        width:12.5%
    }
    .elementor-column.elementor-col-14,.elementor-column[data-col="14"]{
        width:14.285%
    }
    .elementor-column.elementor-col-16,.elementor-column[data-col="16"]{
        width:16.666%
    }
    .elementor-column.elementor-col-20,.elementor-column[data-col="20"]{
        width:20%
    }
    .elementor-column.elementor-col-25,.elementor-column[data-col="25"]{
        width:25%
    }
    .elementor-column.elementor-col-30,.elementor-column[data-col="30"]{
        width:30%
    }
    .elementor-column.elementor-col-33,.elementor-column[data-col="33"]{
        width:33.333%
    }
    .elementor-column.elementor-col-40,.elementor-column[data-col="40"]{
        width:40%
    }
    .elementor-column.elementor-col-50,.elementor-column[data-col="50"]{
        width:50%
    }
    .elementor-column.elementor-col-60,.elementor-column[data-col="60"]{
        width:60%
    }
    .elementor-column.elementor-col-66,.elementor-column[data-col="66"]{
        width:66.666%
    }
    .elementor-column.elementor-col-70,.elementor-column[data-col="70"]{
        width:70%
    }
    .elementor-column.elementor-col-75,.elementor-column[data-col="75"]{
        width:75%
    }
    .elementor-column.elementor-col-80,.elementor-column[data-col="80"]{
        width:80%
    }
    .elementor-column.elementor-col-83,.elementor-column[data-col="83"]{
        width:83.333%
    }
    .elementor-column.elementor-col-90,.elementor-column[data-col="90"]{
        width:90%
    }
    .elementor-column.elementor-col-100,.elementor-column[data-col="100"]{
        width:100%
    }
}
@media (max-width:479px){
    .elementor-column.elementor-xs-10{
        width:10%
    }
    .elementor-column.elementor-xs-11{
        width:11.111%
    }
    .elementor-column.elementor-xs-12{
        width:12.5%
    }
    .elementor-column.elementor-xs-14{
        width:14.285%
    }
    .elementor-column.elementor-xs-16{
        width:16.666%
    }
    .elementor-column.elementor-xs-20{
        width:20%
    }
    .elementor-column.elementor-xs-25{
        width:25%
    }
    .elementor-column.elementor-xs-30{
        width:30%
    }
    .elementor-column.elementor-xs-33{
        width:33.333%
    }
    .elementor-column.elementor-xs-40{
        width:40%
    }
    .elementor-column.elementor-xs-50{
        width:50%
    }
    .elementor-column.elementor-xs-60{
        width:60%
    }
    .elementor-column.elementor-xs-66{
        width:66.666%
    }
    .elementor-column.elementor-xs-70{
        width:70%
    }
    .elementor-column.elementor-xs-75{
        width:75%
    }
    .elementor-column.elementor-xs-80{
        width:80%
    }
    .elementor-column.elementor-xs-83{
        width:83.333%
    }
    .elementor-column.elementor-xs-90{
        width:90%
    }
    .elementor-column.elementor-xs-100{
        width:100%
    }
}
@media (max-width:767px){
    .elementor-column.elementor-sm-10{
        width:10%
    }
    .elementor-column.elementor-sm-11{
        width:11.111%
    }
    .elementor-column.elementor-sm-12{
        width:12.5%
    }
    .elementor-column.elementor-sm-14{
        width:14.285%
    }
    .elementor-column.elementor-sm-16{
        width:16.666%
    }
    .elementor-column.elementor-sm-20{
        width:20%
    }
    .elementor-column.elementor-sm-25{
        width:25%
    }
    .elementor-column.elementor-sm-30{
        width:30%
    }
    .elementor-column.elementor-sm-33{
        width:33.333%
    }
    .elementor-column.elementor-sm-40{
        width:40%
    }
    .elementor-column.elementor-sm-50{
        width:50%
    }
    .elementor-column.elementor-sm-60{
        width:60%
    }
    .elementor-column.elementor-sm-66{
        width:66.666%
    }
    .elementor-column.elementor-sm-70{
        width:70%
    }
    .elementor-column.elementor-sm-75{
        width:75%
    }
    .elementor-column.elementor-sm-80{
        width:80%
    }
    .elementor-column.elementor-sm-83{
        width:83.333%
    }
    .elementor-column.elementor-sm-90{
        width:90%
    }
    .elementor-column.elementor-sm-100{
        width:100%
    }
}
@media (min-width:768px) and (max-width:1024px){
    .elementor-column.elementor-md-10{
        width:10%
    }
    .elementor-column.elementor-md-11{
        width:11.111%
    }
    .elementor-column.elementor-md-12{
        width:12.5%
    }
    .elementor-column.elementor-md-14{
        width:14.285%
    }
    .elementor-column.elementor-md-16{
        width:16.666%
    }
    .elementor-column.elementor-md-20{
        width:20%
    }
    .elementor-column.elementor-md-25{
        width:25%
    }
    .elementor-column.elementor-md-30{
        width:30%
    }
    .elementor-column.elementor-md-33{
        width:33.333%
    }
    .elementor-column.elementor-md-40{
        width:40%
    }
    .elementor-column.elementor-md-50{
        width:50%
    }
    .elementor-column.elementor-md-60{
        width:60%
    }
    .elementor-column.elementor-md-66{
        width:66.666%
    }
    .elementor-column.elementor-md-70{
        width:70%
    }
    .elementor-column.elementor-md-75{
        width:75%
    }
    .elementor-column.elementor-md-80{
        width:80%
    }
    .elementor-column.elementor-md-83{
        width:83.333%
    }
    .elementor-column.elementor-md-90{
        width:90%
    }
    .elementor-column.elementor-md-100{
        width:100%
    }
}
@media (min-width:768px) and (max-width:1024px){
    .elementor-reverse-tablet>.elementor-container>:first-child{
        -webkit-box-ordinal-group:11;
        -ms-flex-order:10;
        order:10
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(2){
        -webkit-box-ordinal-group:10;
        -ms-flex-order:9;
        order:9
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(3){
        -webkit-box-ordinal-group:9;
        -ms-flex-order:8;
        order:8
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(4){
        -webkit-box-ordinal-group:8;
        -ms-flex-order:7;
        order:7
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(5){
        -webkit-box-ordinal-group:7;
        -ms-flex-order:6;
        order:6
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(6){
        -webkit-box-ordinal-group:6;
        -ms-flex-order:5;
        order:5
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(7){
        -webkit-box-ordinal-group:5;
        -ms-flex-order:4;
        order:4
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(8){
        -webkit-box-ordinal-group:4;
        -ms-flex-order:3;
        order:3
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(9){
        -webkit-box-ordinal-group:3;
        -ms-flex-order:2;
        order:2
    }
    .elementor-reverse-tablet>.elementor-container>:nth-child(10){
        -webkit-box-ordinal-group:2;
        -ms-flex-order:1;
        order:1
    }
}
@media (max-width:767px){
    .elementor-reverse-mobile>.elementor-container>:first-child{
        -webkit-box-ordinal-group:11;
        -ms-flex-order:10;
        order:10
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(2){
        -webkit-box-ordinal-group:10;
        -ms-flex-order:9;
        order:9
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(3){
        -webkit-box-ordinal-group:9;
        -ms-flex-order:8;
        order:8
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(4){
        -webkit-box-ordinal-group:8;
        -ms-flex-order:7;
        order:7
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(5){
        -webkit-box-ordinal-group:7;
        -ms-flex-order:6;
        order:6
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(6){
        -webkit-box-ordinal-group:6;
        -ms-flex-order:5;
        order:5
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(7){
        -webkit-box-ordinal-group:5;
        -ms-flex-order:4;
        order:4
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(8){
        -webkit-box-ordinal-group:4;
        -ms-flex-order:3;
        order:3
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(9){
        -webkit-box-ordinal-group:3;
        -ms-flex-order:2;
        order:2
    }
    .elementor-reverse-mobile>.elementor-container>:nth-child(10){
        -webkit-box-ordinal-group:2;
        -ms-flex-order:1;
        order:1
    }
    .elementor-column{
        width:100%
    }
}
ul.elementor-icon-list-items.elementor-inline-items{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap
}
ul.elementor-icon-list-items.elementor-inline-items .elementor-inline-item{
    word-break:break-word
}
.elementor-grid{
    display:grid;
    grid-column-gap:var(--grid-column-gap);
    grid-row-gap:var(--grid-row-gap)
}
.elementor-grid .elementor-grid-item{
    min-width:0
}
.elementor-grid-0 .elementor-grid{
    display:inline-block;
    width:100%;
    word-spacing:var(--grid-column-gap);
    margin-bottom:calc(-1*var(--grid-row-gap))
}
.elementor-grid-0 .elementor-grid .elementor-grid-item{
    display:inline-block;
    margin-bottom:var(--grid-row-gap);
    word-break:break-word
}
.elementor-grid-1 .elementor-grid{
    grid-template-columns:repeat(1,1fr)
}
.elementor-grid-2 .elementor-grid{
    grid-template-columns:repeat(2,1fr)
}
.elementor-grid-3 .elementor-grid{
    grid-template-columns:repeat(3,1fr)
}
.elementor-grid-4 .elementor-grid{
    grid-template-columns:repeat(4,1fr)
}
.elementor-grid-5 .elementor-grid{
    grid-template-columns:repeat(5,1fr)
}
.elementor-grid-6 .elementor-grid{
    grid-template-columns:repeat(6,1fr)
}
.elementor-grid-7 .elementor-grid{
    grid-template-columns:repeat(7,1fr)
}
.elementor-grid-8 .elementor-grid{
    grid-template-columns:repeat(8,1fr)
}
.elementor-grid-9 .elementor-grid{
    grid-template-columns:repeat(9,1fr)
}
.elementor-grid-10 .elementor-grid{
    grid-template-columns:repeat(10,1fr)
}
.elementor-grid-11 .elementor-grid{
    grid-template-columns:repeat(11,1fr)
}
.elementor-grid-12 .elementor-grid{
    grid-template-columns:repeat(12,1fr)
}
@media (max-width:1024px){
    .elementor-grid-tablet-0 .elementor-grid{
        display:inline-block;
        width:100%;
        word-spacing:var(--grid-column-gap);
        margin-bottom:calc(-1*var(--grid-row-gap))
    }
    .elementor-grid-tablet-0 .elementor-grid .elementor-grid-item{
        display:inline-block;
        margin-bottom:var(--grid-row-gap);
        word-break:break-word
    }
    .elementor-grid-tablet-1 .elementor-grid{
        grid-template-columns:repeat(1,1fr)
    }
    .elementor-grid-tablet-2 .elementor-grid{
        grid-template-columns:repeat(2,1fr)
    }
    .elementor-grid-tablet-3 .elementor-grid{
        grid-template-columns:repeat(3,1fr)
    }
    .elementor-grid-tablet-4 .elementor-grid{
        grid-template-columns:repeat(4,1fr)
    }
    .elementor-grid-tablet-5 .elementor-grid{
        grid-template-columns:repeat(5,1fr)
    }
    .elementor-grid-tablet-6 .elementor-grid{
        grid-template-columns:repeat(6,1fr)
    }
    .elementor-grid-tablet-7 .elementor-grid{
        grid-template-columns:repeat(7,1fr)
    }
    .elementor-grid-tablet-8 .elementor-grid{
        grid-template-columns:repeat(8,1fr)
    }
    .elementor-grid-tablet-9 .elementor-grid{
        grid-template-columns:repeat(9,1fr)
    }
    .elementor-grid-tablet-10 .elementor-grid{
        grid-template-columns:repeat(10,1fr)
    }
    .elementor-grid-tablet-11 .elementor-grid{
        grid-template-columns:repeat(11,1fr)
    }
    .elementor-grid-tablet-12 .elementor-grid{
        grid-template-columns:repeat(12,1fr)
    }
}
@media (max-width:767px){
    .elementor-grid-mobile-0 .elementor-grid{
        display:inline-block;
        width:100%;
        word-spacing:var(--grid-column-gap);
        margin-bottom:calc(-1*var(--grid-row-gap))
    }
    .elementor-grid-mobile-0 .elementor-grid .elementor-grid-item{
        display:inline-block;
        margin-bottom:var(--grid-row-gap);
        word-break:break-word
    }
    .elementor-grid-mobile-1 .elementor-grid{
        grid-template-columns:repeat(1,1fr)
    }
    .elementor-grid-mobile-2 .elementor-grid{
        grid-template-columns:repeat(2,1fr)
    }
    .elementor-grid-mobile-3 .elementor-grid{
        grid-template-columns:repeat(3,1fr)
    }
    .elementor-grid-mobile-4 .elementor-grid{
        grid-template-columns:repeat(4,1fr)
    }
    .elementor-grid-mobile-5 .elementor-grid{
        grid-template-columns:repeat(5,1fr)
    }
    .elementor-grid-mobile-6 .elementor-grid{
        grid-template-columns:repeat(6,1fr)
    }
    .elementor-grid-mobile-7 .elementor-grid{
        grid-template-columns:repeat(7,1fr)
    }
    .elementor-grid-mobile-8 .elementor-grid{
        grid-template-columns:repeat(8,1fr)
    }
    .elementor-grid-mobile-9 .elementor-grid{
        grid-template-columns:repeat(9,1fr)
    }
    .elementor-grid-mobile-10 .elementor-grid{
        grid-template-columns:repeat(10,1fr)
    }
    .elementor-grid-mobile-11 .elementor-grid{
        grid-template-columns:repeat(11,1fr)
    }
    .elementor-grid-mobile-12 .elementor-grid{
        grid-template-columns:repeat(12,1fr)
    }
}
@media (min-width:1025px){
    #elementor-device-mode:after{
        content:"desktop"
    }
}
@media (min-width:768px) and (max-width:1024px){
    #elementor-device-mode:after{
        content:"tablet"
    }
}
@media (max-width:767px){
    #elementor-device-mode:after{
        content:"mobile"
    }
}
.elementor-form-fields-wrapper{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap
}
.elementor-form-fields-wrapper.elementor-labels-above .elementor-field-group .elementor-field-subgroup,.elementor-form-fields-wrapper.elementor-labels-above .elementor-field-group>.elementor-select-wrapper,.elementor-form-fields-wrapper.elementor-labels-above .elementor-field-group>input,.elementor-form-fields-wrapper.elementor-labels-above .elementor-field-group>textarea{
    -ms-flex-preferred-size:100%;
    flex-basis:100%;
    max-width:100%
}
.elementor-form-fields-wrapper.elementor-labels-inline>.elementor-field-group .elementor-select-wrapper,.elementor-form-fields-wrapper.elementor-labels-inline>.elementor-field-group>input{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1
}
.elementor-field-group{
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-field-group.elementor-field-type-submit{
    -webkit-box-align:end;
    -ms-flex-align:end;
    align-items:flex-end
}
.elementor-field-group .elementor-field-textual{
    width:100%;
    max-width:100%;
    border:1px solid #818a91;
    background-color:transparent;
    color:#373a3c;
    vertical-align:middle;
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1
}
.elementor-field-group .elementor-field-textual:focus{
    -webkit-box-shadow:0 0 0 1px rgba(0,0,0,.1) inset;
    box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);
    outline:0
}
.elementor-field-group .elementor-field-textual::-webkit-input-placeholder{
    color:inherit;
    font-family:inherit;
    opacity:.6
}
.elementor-field-group .elementor-field-textual:-ms-input-placeholder{
    color:inherit;
    font-family:inherit;
    opacity:.6
}
.elementor-field-group .elementor-field-textual:-moz-placeholder,.elementor-field-group .elementor-field-textual::-moz-placeholder{
    color:inherit;
    font-family:inherit;
    opacity:.6
}
.elementor-field-group .elementor-field-textual::-ms-input-placeholder{
    color:inherit;
    font-family:inherit;
    opacity:.6
}
.elementor-field-group .elementor-field-textual::placeholder{
    color:inherit;
    font-family:inherit;
    opacity:.6
}
.elementor-field-group .elementor-select-wrapper{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    position:relative;
    width:100%
}
.elementor-field-group .elementor-select-wrapper select{
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance:none;
    color:inherit;
    font-size:inherit;
    font-family:inherit;
    font-weight:inherit;
    font-style:inherit;
    text-transform:inherit;
    letter-spacing:inherit;
    line-height:inherit;
    -ms-flex-preferred-size:100%;
    flex-basis:100%;
    padding-right:20px
}
.elementor-field-group .elementor-select-wrapper:before{
    content:"\e92a";
    font-family:eicons;
    font-size:15px;
    position:absolute;
    top:50%;
    -webkit-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    transform:translateY(-50%);
    right:10px;
    pointer-events:none;
    text-shadow:0 0 3px rgba(0,0,0,.3)
}
.elementor-field-group.elementor-field-type-select-multiple .elementor-select-wrapper:before{
    content:""
}
.elementor-field-subgroup{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap
}
.elementor-field-subgroup .elementor-field-option label{
    display:inline-block
}
.elementor-field-subgroup.elementor-subgroup-inline .elementor-field-option{
    padding-right:10px
}
.elementor-field-subgroup:not(.elementor-subgroup-inline) .elementor-field-option{
    -ms-flex-preferred-size:100%;
    flex-basis:100%
}
.elementor-field-type-acceptance .elementor-field-subgroup .elementor-field-option input,.elementor-field-type-acceptance .elementor-field-subgroup .elementor-field-option label,.elementor-field-type-checkbox .elementor-field-subgroup .elementor-field-option input,.elementor-field-type-checkbox .elementor-field-subgroup .elementor-field-option label,.elementor-field-type-radio .elementor-field-subgroup .elementor-field-option input,.elementor-field-type-radio .elementor-field-subgroup .elementor-field-option label{
    display:inline
}
.elementor-field-label{
    cursor:pointer
}
.elementor-mark-required .elementor-field-label:after{
    content:"*";
    color:red;
    padding-left:.2em
}
.elementor-field-textual{
    line-height:1.4;
    font-size:15px;
    min-height:40px;
    padding:5px 14px;
    -webkit-border-radius:3px;
    border-radius:3px
}
.elementor-field-textual.elementor-size-xs{
    font-size:13px;
    min-height:33px;
    padding:4px 12px;
    -webkit-border-radius:2px;
    border-radius:2px
}
.elementor-field-textual.elementor-size-md{
    font-size:16px;
    min-height:47px;
    padding:6px 16px;
    -webkit-border-radius:4px;
    border-radius:4px
}
.elementor-field-textual.elementor-size-lg{
    font-size:18px;
    min-height:59px;
    padding:7px 20px;
    -webkit-border-radius:5px;
    border-radius:5px
}
.elementor-field-textual.elementor-size-xl{
    font-size:20px;
    min-height:72px;
    padding:8px 24px;
    -webkit-border-radius:6px;
    border-radius:6px
}
.elementor-button-align-stretch .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
    -ms-flex-preferred-size:100%;
    flex-basis:100%
}
.elementor-button-align-stretch .e-form__buttons__wrapper{
    -ms-flex-preferred-size:50%;
    flex-basis:50%;
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1
}
.elementor-button-align-stretch .e-form__buttons__wrapper__button{
    -ms-flex-preferred-size:100%;
    flex-basis:100%
}
.elementor-button-align-center .e-form__buttons,.elementor-button-align-center .elementor-field-type-submit{
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-button-align-start .e-form__buttons,.elementor-button-align-start .elementor-field-type-submit{
    -webkit-box-pack:start;
    -ms-flex-pack:start;
    justify-content:flex-start
}
.elementor-button-align-end .e-form__buttons,.elementor-button-align-end .elementor-field-type-submit{
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    justify-content:flex-end
}
.elementor-button-align-center .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-button-align-end .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-button-align-start .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
    -ms-flex-preferred-size:initial;
    flex-basis:auto
}
.elementor-button-align-center .e-form__buttons__wrapper,.elementor-button-align-end .e-form__buttons__wrapper,.elementor-button-align-start .e-form__buttons__wrapper{
    -webkit-box-flex:initial;
    -ms-flex-positive:initial;
    flex-grow:0
}
.elementor-button-align-center .e-form__buttons__wrapper,.elementor-button-align-center .e-form__buttons__wrapper__button,.elementor-button-align-end .e-form__buttons__wrapper,.elementor-button-align-end .e-form__buttons__wrapper__button,.elementor-button-align-start .e-form__buttons__wrapper,.elementor-button-align-start .e-form__buttons__wrapper__button{
    -ms-flex-preferred-size:initial;
    flex-basis:auto
}
@media screen and (max-width:1024px){
    .elementor-tablet-button-align-stretch .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
        -ms-flex-preferred-size:100%;
        flex-basis:100%
    }
    .elementor-tablet-button-align-stretch .e-form__buttons__wrapper{
        -ms-flex-preferred-size:50%;
        flex-basis:50%;
        -webkit-box-flex:1;
        -ms-flex-positive:1;
        flex-grow:1
    }
    .elementor-tablet-button-align-stretch .e-form__buttons__wrapper__button{
        -ms-flex-preferred-size:100%;
        flex-basis:100%
    }
    .elementor-tablet-button-align-center .e-form__buttons,.elementor-tablet-button-align-center .elementor-field-type-submit{
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-tablet-button-align-start .e-form__buttons,.elementor-tablet-button-align-start .elementor-field-type-submit{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-tablet-button-align-end .e-form__buttons,.elementor-tablet-button-align-end .elementor-field-type-submit{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-tablet-button-align-center .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-tablet-button-align-end .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-tablet-button-align-start .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
        -ms-flex-preferred-size:initial;
        flex-basis:auto
    }
    .elementor-tablet-button-align-center .e-form__buttons__wrapper,.elementor-tablet-button-align-end .e-form__buttons__wrapper,.elementor-tablet-button-align-start .e-form__buttons__wrapper{
        -webkit-box-flex:initial;
        -ms-flex-positive:initial;
        flex-grow:0
    }
    .elementor-tablet-button-align-center .e-form__buttons__wrapper,.elementor-tablet-button-align-center .e-form__buttons__wrapper__button,.elementor-tablet-button-align-end .e-form__buttons__wrapper,.elementor-tablet-button-align-end .e-form__buttons__wrapper__button,.elementor-tablet-button-align-start .e-form__buttons__wrapper,.elementor-tablet-button-align-start .e-form__buttons__wrapper__button{
        -ms-flex-preferred-size:initial;
        flex-basis:auto
    }
}
@media screen and (max-width:767px){
    .elementor-mobile-button-align-stretch .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
        -ms-flex-preferred-size:100%;
        flex-basis:100%
    }
    .elementor-mobile-button-align-stretch .e-form__buttons__wrapper{
        -ms-flex-preferred-size:50%;
        flex-basis:50%;
        -webkit-box-flex:1;
        -ms-flex-positive:1;
        flex-grow:1
    }
    .elementor-mobile-button-align-stretch .e-form__buttons__wrapper__button{
        -ms-flex-preferred-size:100%;
        flex-basis:100%
    }
    .elementor-mobile-button-align-center .e-form__buttons,.elementor-mobile-button-align-center .elementor-field-type-submit{
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-mobile-button-align-start .e-form__buttons,.elementor-mobile-button-align-start .elementor-field-type-submit{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-mobile-button-align-end .e-form__buttons,.elementor-mobile-button-align-end .elementor-field-type-submit{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-mobile-button-align-center .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-mobile-button-align-end .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button,.elementor-mobile-button-align-start .elementor-field-type-submit:not(.e-form__buttons__wrapper) .elementor-button{
        -ms-flex-preferred-size:initial;
        flex-basis:auto
    }
    .elementor-mobile-button-align-center .e-form__buttons__wrapper,.elementor-mobile-button-align-end .e-form__buttons__wrapper,.elementor-mobile-button-align-start .e-form__buttons__wrapper{
        -webkit-box-flex:initial;
        -ms-flex-positive:initial;
        flex-grow:0
    }
    .elementor-mobile-button-align-center .e-form__buttons__wrapper,.elementor-mobile-button-align-center .e-form__buttons__wrapper__button,.elementor-mobile-button-align-end .e-form__buttons__wrapper,.elementor-mobile-button-align-end .e-form__buttons__wrapper__button,.elementor-mobile-button-align-start .e-form__buttons__wrapper,.elementor-mobile-button-align-start .e-form__buttons__wrapper__button{
        -ms-flex-preferred-size:initial;
        flex-basis:auto
    }
}
.elementor-error .elementor-field{
    border-color:#d9534f
}
.elementor-error .help-inline{
    color:#d9534f;
    font-size:.9em
}
.elementor-message{
    margin:10px 0;
    font-size:1em;
    line-height:1
}
.elementor-message:before{
    content:"\e90e";
    display:inline-block;
    font-family:eicons;
    font-weight:400;
    font-style:normal;
    vertical-align:middle;
    margin-right:5px
}
.elementor-message.elementor-message-danger{
    color:#d9534f
}
.elementor-message.elementor-message-danger:before{
    content:"\e87f"
}
.elementor-message.form-message-success{
    color:#5cb85c
}
.elementor-form .elementor-button{
    padding-top:0;
    padding-bottom:0;
    border:none
}
.elementor-form .elementor-button>span{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-form .elementor-button.elementor-size-xs{
    min-height:33px
}
.elementor-form .elementor-button.elementor-size-sm{
    min-height:40px
}
.elementor-form .elementor-button.elementor-size-md{
    min-height:47px
}
.elementor-form .elementor-button.elementor-size-lg{
    min-height:59px
}
.elementor-form .elementor-button.elementor-size-xl{
    min-height:72px
}
.elementor-element .elementor-widget-container{
    -webkit-transition:background .3s,border .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;
    transition:background .3s,border .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;
    -o-transition:background .3s,border .3s,border-radius .3s,box-shadow .3s;
    transition:background .3s,border .3s,border-radius .3s,box-shadow .3s;
    transition:background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s
}
.elementor-accordion{
    text-align:left
}
.elementor-accordion .elementor-accordion-item{
    border:1px solid #d4d4d4
}
.elementor-accordion .elementor-accordion-item+.elementor-accordion-item{
    border-top:none
}
.elementor-accordion .elementor-tab-title{
    margin:0;
    padding:15px 20px;
    font-weight:700;
    line-height:1;
    cursor:pointer;
    outline:none
}
.elementor-accordion .elementor-tab-title .elementor-accordion-icon{
    display:inline-block;
    width:1.5em
}
.elementor-accordion .elementor-tab-title .elementor-accordion-icon.elementor-accordion-icon-right{
    float:right;
    text-align:right
}
.elementor-accordion .elementor-tab-title .elementor-accordion-icon.elementor-accordion-icon-left{
    float:left;
    text-align:left
}
.elementor-accordion .elementor-tab-title .elementor-accordion-icon .elementor-accordion-icon-closed{
    display:block
}
.elementor-accordion .elementor-tab-title .elementor-accordion-icon .elementor-accordion-icon-opened,.elementor-accordion .elementor-tab-title.elementor-active .elementor-accordion-icon-closed{
    display:none
}
.elementor-accordion .elementor-tab-title.elementor-active .elementor-accordion-icon-opened{
    display:block
}
.elementor-accordion .elementor-tab-content{
    display:none;
    padding:15px 20px;
    border-top:1px solid #d4d4d4
}
@media (max-width:767px){
    .elementor-accordion .elementor-tab-title{
        padding:12px 15px
    }
    .elementor-accordion .elementor-tab-title .elementor-accordion-icon{
        width:1.2em
    }
    .elementor-accordion .elementor-tab-content{
        padding:7px 15px
    }
}
.elementor-alert{
    padding:15px;
    border-left:5px solid transparent;
    position:relative;
    text-align:left
}
.elementor-alert .elementor-alert-title{
    display:block;
    font-weight:700
}
.elementor-alert .elementor-alert-description{
    font-size:13px
}
.elementor-alert button.elementor-alert-dismiss{
    position:absolute;
    right:10px;
    top:10px;
    padding:3px;
    font-size:20px;
    line-height:1;
    background:transparent;
    color:inherit;
    border:none;
    cursor:pointer
}
.elementor-alert.elementor-alert-info{
    color:#31708f;
    background-color:#d9edf7;
    border-color:#bcdff1
}
.elementor-alert.elementor-alert-success{
    color:#3c763d;
    background-color:#dff0d8;
    border-color:#cae6be
}
.elementor-alert.elementor-alert-warning{
    color:#8a6d3b;
    background-color:#fcf8e3;
    border-color:#f9f0c3
}
.elementor-alert.elementor-alert-danger{
    color:#a94442;
    background-color:#f2dede;
    border-color:#e8c4c4
}
@media (max-width:767px){
    .elementor-alert{
        padding:10px
    }
    .elementor-alert button.elementor-alert-dismiss{
        right:7px;
        top:7px
    }
}
.elementor-tab-title a{
    color:inherit
}
.elementor-button{
    display:inline-block;
    line-height:1;
    background-color:#818a91;
    font-size:15px;
    padding:12px 24px;
    -webkit-border-radius:3px;
    border-radius:3px;
    color:#fff;
    fill:#fff;
    text-align:center;
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s
}
.elementor-button:focus,.elementor-button:hover,.elementor-button:visited{
    color:#fff
}
.elementor-button-content-wrapper{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-button-icon{
    -webkit-box-flex:0;
    -ms-flex-positive:0;
    flex-grow:0;
    -webkit-box-ordinal-group:6;
    -ms-flex-order:5;
    order:5
}
.elementor-button-icon svg{
    width:1em
}
.elementor-button-text{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    -webkit-box-ordinal-group:11;
    -ms-flex-order:10;
    order:10;
    display:inline-block
}
.elementor-button.elementor-size-xs{
    font-size:13px;
    padding:10px 20px;
    -webkit-border-radius:2px;
    border-radius:2px
}
.elementor-button.elementor-size-md{
    font-size:16px;
    padding:15px 30px;
    -webkit-border-radius:4px;
    border-radius:4px
}
.elementor-button.elementor-size-lg{
    font-size:18px;
    padding:20px 40px;
    -webkit-border-radius:5px;
    border-radius:5px
}
.elementor-button.elementor-size-xl{
    font-size:20px;
    padding:25px 50px;
    -webkit-border-radius:6px;
    border-radius:6px
}
.elementor-button .elementor-align-icon-right{
    margin-left:5px;
    -webkit-box-ordinal-group:16;
    -ms-flex-order:15;
    order:15
}
.elementor-button .elementor-align-icon-left{
    margin-right:5px;
    -webkit-box-ordinal-group:6;
    -ms-flex-order:5;
    order:5
}
.elementor-button span{
    text-decoration:inherit
}
.elementor-menu-cart__toggle .elementor-button-icon{
    -webkit-box-ordinal-group:16;
    -ms-flex-order:15;
    order:15
}
.elementor-element.elementor-button-info .elementor-button{
    background-color:#5bc0de
}
.elementor-element.elementor-button-success .elementor-button{
    background-color:#5cb85c
}
.elementor-element.elementor-button-warning .elementor-button{
    background-color:#f0ad4e
}
.elementor-element.elementor-button-danger .elementor-button{
    background-color:#d9534f
}
.elementor-widget-button .elementor-button .elementor-button-info{
    background-color:#5bc0de
}
.elementor-widget-button .elementor-button .elementor-button-success{
    background-color:#5cb85c
}
.elementor-widget-button .elementor-button .elementor-button-warning{
    background-color:#f0ad4e
}
.elementor-widget-button .elementor-button .elementor-button-danger{
    background-color:#d9534f
}
.elementor-counter .elementor-counter-number-wrapper{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    font-size:69px;
    font-weight:600;
    color:#222;
    line-height:1
}
.elementor-counter .elementor-counter-number-prefix,.elementor-counter .elementor-counter-number-suffix{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    white-space:pre-wrap
}
.elementor-counter .elementor-counter-number-prefix{
    text-align:right
}
.elementor-counter .elementor-counter-number-suffix{
    text-align:left
}
.elementor-counter .elementor-counter-title{
    text-align:center;
    font-size:19px;
    font-weight:400;
    color:#666;
    line-height:2.5
}
.elementor-widget-divider{
    --divider-border-style:none;
    --divider-border-width:1px;
    --divider-color:#2c2c2c;
    --divider-icon-size:20px;
    --divider-element-spacing:10px;
    --divider-pattern-height:24px;
    --divider-pattern-size:20px;
    --divider-pattern-url:none;
    --divider-pattern-repeat:repeat-x
}
.elementor-widget-divider .elementor-divider{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex
}
.elementor-widget-divider .elementor-divider__text{
    font-size:15px;
    line-height:1;
    max-width:95%
}
.elementor-widget-divider .elementor-divider__element{
    margin:0 var(--divider-element-spacing);
    -ms-flex-negative:0;
    flex-shrink:0
}
.elementor-widget-divider .elementor-icon{
    font-size:var(--divider-icon-size)
}
.elementor-widget-divider .elementor-divider-separator{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    margin:0;
    direction:ltr
}
.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{
    display:block;
    content:"";
    border-bottom:0;
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)
}
.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{
    -webkit-box-flex:0;
    -ms-flex-positive:0;
    flex-grow:0;
    -ms-flex-negative:100;
    flex-shrink:100
}
.elementor-widget-divider--element-align-left .elementor-divider-separator:before{
    content:none
}
.elementor-widget-divider--element-align-left .elementor-divider__element{
    margin-left:0
}
.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{
    -webkit-box-flex:0;
    -ms-flex-positive:0;
    flex-grow:0;
    -ms-flex-negative:100;
    flex-shrink:100
}
.elementor-widget-divider--element-align-right .elementor-divider-separator:after{
    content:none
}
.elementor-widget-divider--element-align-right .elementor-divider__element{
    margin-right:0
}
.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{
    border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)
}
.elementor-widget-divider--separator-type-pattern{
    --divider-border-style:none
}
.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{
    width:100%;
    min-height:var(--divider-pattern-height);
    -webkit-mask-size:var(--divider-pattern-size) 100%;
    mask-size:var(--divider-pattern-size) 100%;
    -webkit-mask-repeat:var(--divider-pattern-repeat);
    mask-repeat:var(--divider-pattern-repeat);
    background-color:var(--divider-color);
    -webkit-mask-image:var(--divider-pattern-url);
    mask-image:var(--divider-pattern-url)
}
.elementor-widget-divider--no-spacing{
    --divider-pattern-size:auto
}
.elementor-widget-divider--bg-round{
    --divider-pattern-repeat:round
}
.rtl .elementor-widget-divider .elementor-divider__text{
    direction:rtl
}
.elementor-image-gallery .gallery-item{
    display:inline-block;
    text-align:center;
    vertical-align:top;
    width:100%;
    max-width:100%;
    margin:0 auto
}
.elementor-image-gallery .gallery-item img{
    margin:0 auto
}
.elementor-image-gallery .gallery-item .gallery-caption{
    margin:0
}
@media (min-width:768px){
    .elementor-image-gallery .gallery-columns-2 .gallery-item{
        max-width:50%
    }
    .elementor-image-gallery .gallery-columns-3 .gallery-item{
        max-width:33.33%
    }
    .elementor-image-gallery .gallery-columns-4 .gallery-item{
        max-width:25%
    }
    .elementor-image-gallery .gallery-columns-5 .gallery-item{
        max-width:20%
    }
    .elementor-image-gallery .gallery-columns-6 .gallery-item{
        max-width:16.666%
    }
    .elementor-image-gallery .gallery-columns-7 .gallery-item{
        max-width:14.28%
    }
    .elementor-image-gallery .gallery-columns-8 .gallery-item{
        max-width:12.5%
    }
    .elementor-image-gallery .gallery-columns-9 .gallery-item{
        max-width:11.11%
    }
    .elementor-image-gallery .gallery-columns-10 .gallery-item{
        max-width:10%
    }
}
@media (min-width:480px) and (max-width:767px){
    .elementor-image-gallery .gallery.gallery-columns-2 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-3 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-4 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-5 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-6 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-7 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-8 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-9 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-10 .gallery-item{
        max-width:50%
    }
}
@media (max-width:479px){
    .elementor-image-gallery .gallery.gallery-columns-2 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-3 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-4 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-5 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-6 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-7 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-8 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-9 .gallery-item,.elementor-image-gallery .gallery.gallery-columns-10 .gallery-item{
        max-width:100%
    }
}
.elementor-widget-google_maps iframe{
    height:300px
}
.elementor-heading-title{
    padding:0;
    margin:0;
    line-height:1
}
.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{
    color:inherit;
    font-size:inherit;
    line-height:inherit
}
.elementor-widget-heading .elementor-heading-title.elementor-size-small{
    font-size:15px
}
.elementor-widget-heading .elementor-heading-title.elementor-size-medium{
    font-size:19px
}
.elementor-widget-heading .elementor-heading-title.elementor-size-large{
    font-size:29px
}
.elementor-widget-heading .elementor-heading-title.elementor-size-xl{
    font-size:39px
}
.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{
    font-size:59px
}
.elementor-icon{
    display:inline-block;
    line-height:1;
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
    color:#818a91;
    font-size:50px;
    text-align:center
}
.elementor-icon:hover{
    color:#818a91
}
.elementor-icon i,.elementor-icon svg{
    width:1em;
    height:1em;
    position:relative;
    display:block
}
.elementor-icon i:before,.elementor-icon svg:before{
    position:absolute;
    left:50%;
    -webkit-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    transform:translateX(-50%)
}
.elementor-icon i.fad{
    width:auto
}
.elementor-view-stacked .elementor-icon{
    padding:.5em;
    background-color:#818a91;
    color:#fff;
    fill:#fff
}
.elementor-view-framed .elementor-icon{
    padding:.5em;
    color:#818a91;
    border:3px solid #818a91;
    background-color:transparent
}
.elementor-shape-circle .elementor-icon{
    -webkit-border-radius:50%;
    border-radius:50%
}
@media (min-width:768px){
    .elementor-widget-icon-box.elementor-position-left .elementor-icon-box-wrapper,.elementor-widget-icon-box.elementor-position-right .elementor-icon-box-wrapper{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex
    }
    .elementor-widget-icon-box.elementor-position-left .elementor-icon-box-icon,.elementor-widget-icon-box.elementor-position-right .elementor-icon-box-icon{
        display:-webkit-inline-box;
        display:-ms-inline-flexbox;
        display:inline-flex;
        -webkit-box-flex:0;
        -ms-flex:0 0 auto;
        flex:0 0 auto
    }
    .elementor-widget-icon-box.elementor-position-right .elementor-icon-box-wrapper{
        text-align:right;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:reverse;
        -ms-flex-direction:row-reverse;
        flex-direction:row-reverse
    }
    .elementor-widget-icon-box.elementor-position-left .elementor-icon-box-wrapper{
        text-align:left;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
        -ms-flex-direction:row;
        flex-direction:row
    }
    .elementor-widget-icon-box.elementor-position-top .elementor-icon-box-img{
        margin:auto
    }
    .elementor-widget-icon-box.elementor-vertical-align-top .elementor-icon-box-wrapper{
        -webkit-box-align:start;
        -ms-flex-align:start;
        align-items:flex-start
    }
    .elementor-widget-icon-box.elementor-vertical-align-middle .elementor-icon-box-wrapper{
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center
    }
    .elementor-widget-icon-box.elementor-vertical-align-bottom .elementor-icon-box-wrapper{
        -webkit-box-align:end;
        -ms-flex-align:end;
        align-items:flex-end
    }
}
@media (max-width:767px){
    .elementor-widget-icon-box .elementor-icon-box-icon{
        margin-left:auto!important;
        margin-right:auto!important;
        margin-bottom:15px
    }
}
.elementor-widget-icon-box .elementor-icon-box-wrapper{
    text-align:center
}
.elementor-widget-icon-box .elementor-icon-box-title a{
    color:inherit
}
.elementor-widget-icon-box .elementor-icon-box-content{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1
}
.elementor-widget-icon-box .elementor-icon-box-description{
    margin:0
}
.elementor-widget.elementor-icon-list--layout-inline .elementor-widget-container{
    overflow:hidden
}
.elementor-widget .elementor-icon-list-items.elementor-inline-items{
    margin-right:-8px;
    margin-left:-8px
}
.elementor-widget .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{
    margin-right:8px;
    margin-left:8px
}
.elementor-widget .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{
    width:auto;
    left:auto;
    right:auto;
    position:relative;
    height:100%;
    top:50%;
    -webkit-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    transform:translateY(-50%);
    border-top:0;
    border-bottom:0;
    border-right:0;
    border-left-width:1px;
    border-style:solid;
    right:-8px
}
.elementor-widget .elementor-icon-list-items{
    list-style-type:none;
    margin:0;
    padding:0
}
.elementor-widget .elementor-icon-list-item{
    margin:0;
    padding:0;
    position:relative
}
.elementor-widget .elementor-icon-list-item:after{
    position:absolute;
    bottom:0;
    width:100%
}
.elementor-widget .elementor-icon-list-item,.elementor-widget .elementor-icon-list-item a{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:start;
    -ms-flex-align:start;
    align-items:flex-start
}
.elementor-widget .elementor-icon-list-icon+.elementor-icon-list-text{
    -ms-flex-item-align:center;
    align-self:center;
    padding-left:5px
}
.elementor-widget .elementor-icon-list-icon{
    -ms-flex-negative:0;
    flex-shrink:0
}
.elementor-widget .elementor-icon-list-icon i{
    width:1.25em
}
.elementor-widget .elementor-icon-list-icon svg{
    width:1em
}
.elementor-widget.elementor-list-item-link-full_width a{
    width:100%
}
.elementor-widget.elementor-align-center .elementor-icon-list-item,.elementor-widget.elementor-align-center .elementor-icon-list-item a{
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-widget.elementor-align-center .elementor-icon-list-item:after{
    margin:auto
}
.elementor-widget.elementor-align-center .elementor-inline-items{
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-widget.elementor-align-left .elementor-icon-list-item,.elementor-widget.elementor-align-left .elementor-icon-list-item a{
    -webkit-box-pack:start;
    -ms-flex-pack:start;
    justify-content:flex-start;
    text-align:left
}
.elementor-widget.elementor-align-left .elementor-inline-items{
    -webkit-box-pack:start;
    -ms-flex-pack:start;
    justify-content:flex-start
}
.elementor-widget.elementor-align-right .elementor-icon-list-item,.elementor-widget.elementor-align-right .elementor-icon-list-item a{
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    justify-content:flex-end;
    text-align:right
}
.elementor-widget.elementor-align-right .elementor-icon-list-items{
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    justify-content:flex-end
}
.elementor-widget:not(.elementor-align-right) .elementor-icon-list-item:after{
    left:0
}
.elementor-widget:not(.elementor-align-left) .elementor-icon-list-item:after{
    right:0
}
@media (max-width:1024px){
    .elementor-widget.elementor-tablet-align-center .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-center .elementor-icon-list-item a,.elementor-widget.elementor-tablet-align-center .elementor-icon-list-items{
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-widget.elementor-tablet-align-center .elementor-icon-list-item:after{
        margin:auto
    }
    .elementor-widget.elementor-tablet-align-left .elementor-icon-list-items{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-widget.elementor-tablet-align-left .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-left .elementor-icon-list-item a{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start;
        text-align:left
    }
    .elementor-widget.elementor-tablet-align-right .elementor-icon-list-items{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-widget.elementor-tablet-align-right .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-right .elementor-icon-list-item a{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end;
        text-align:right
    }
    .elementor-widget:not(.elementor-tablet-align-right) .elementor-icon-list-item:after{
        left:0
    }
    .elementor-widget:not(.elementor-tablet-align-left) .elementor-icon-list-item:after{
        right:0
    }
}
@media (max-width:767px){
    .elementor-widget.elementor-mobile-align-center .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-center .elementor-icon-list-item a,.elementor-widget.elementor-mobile-align-center .elementor-icon-list-items{
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-widget.elementor-mobile-align-center .elementor-icon-list-item:after{
        margin:auto
    }
    .elementor-widget.elementor-mobile-align-left .elementor-icon-list-items{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-widget.elementor-mobile-align-left .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-left .elementor-icon-list-item a{
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start;
        text-align:left
    }
    .elementor-widget.elementor-mobile-align-right .elementor-icon-list-items{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-widget.elementor-mobile-align-right .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-right .elementor-icon-list-item a{
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end;
        text-align:right
    }
    .elementor-widget:not(.elementor-mobile-align-right) .elementor-icon-list-item:after{
        left:0
    }
    .elementor-widget:not(.elementor-mobile-align-left) .elementor-icon-list-item:after{
        right:0
    }
}
.elementor-widget-image{
    text-align:center
}
.elementor-widget-image .elementor-image>a,.elementor-widget-image .elementor-image figure>a{
    display:inline-block
}
.elementor-widget-image .elementor-image>a img[src$=".svg"],.elementor-widget-image .elementor-image figure>a img[src$=".svg"]{
    width:48px
}
.elementor-widget-image .elementor-image img{
    vertical-align:middle;
    display:inline-block
}
.elementor-widget-image .elementor-image.elementor-image-shape-circle{
    -webkit-border-radius:50%;
    border-radius:50%
}
.elementor-widget-image-box .elementor-image-box-content{
    width:100%
}
@media (min-width:768px){
    .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex
    }
    .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{
        text-align:right;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:reverse;
        -ms-flex-direction:row-reverse;
        flex-direction:row-reverse
    }
    .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper{
        text-align:left;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
        -ms-flex-direction:row;
        flex-direction:row
    }
    .elementor-widget-image-box.elementor-position-top .elementor-image-box-img{
        margin:auto
    }
    .elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper{
        -webkit-box-align:start;
        -ms-flex-align:start;
        align-items:flex-start
    }
    .elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper{
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center
    }
    .elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper{
        -webkit-box-align:end;
        -ms-flex-align:end;
        align-items:flex-end
    }
}
@media (max-width:767px){
    .elementor-widget-image-box .elementor-image-box-img{
        margin-left:auto!important;
        margin-right:auto!important;
        margin-bottom:15px
    }
}
.elementor-widget-image-box .elementor-image-box-img{
    display:inline-block
}
.elementor-widget-image-box .elementor-image-box-title a{
    color:inherit
}
.elementor-widget-image-box .elementor-image-box-wrapper{
    text-align:center
}
.elementor-widget-image-box .elementor-image-box-description{
    margin:0
}
.elementor-widget-image-carousel .swiper-container{
    position:static
}
.elementor-widget-image-carousel .swiper-container .swiper-slide figure{
    line-height:inherit
}
.elementor-widget-image-carousel .swiper-slide{
    text-align:center
}
.elementor-image-gallery figure img{
    display:block
}
.elementor-image-gallery figure figcaption{
    width:100%
}
.gallery-spacing-custom .elementor-image-gallery .gallery-icon{
    padding:0
}
body.elementor-page .elementor-widget-menu-anchor{
    margin-bottom:0
}
.elementor-widget-progress{
    text-align:left
}
.elementor-progress-wrapper{
    position:relative;
    background-color:#eee;
    color:#fff;
    height:100%;
    -webkit-border-radius:2px;
    border-radius:2px
}
.elementor-progress-bar{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    background-color:#818a91;
    width:0;
    font-size:11px;
    height:30px;
    line-height:30px;
    -webkit-border-radius:2px;
    border-radius:2px;
    -webkit-transition:width 1s ease-in-out;
    -o-transition:width 1s ease-in-out;
    transition:width 1s ease-in-out
}
.elementor-progress-text{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    white-space:nowrap;
    -o-text-overflow:ellipsis;
    text-overflow:ellipsis;
    overflow:hidden;
    padding-left:15px
}
.elementor-progress-percentage{
    padding-right:15px
}
.elementor-widget-progress .elementor-progress-wrapper.progress-info .elementor-progress-bar{
    background-color:#5bc0de
}
.elementor-widget-progress .elementor-progress-wrapper.progress-success .elementor-progress-bar{
    background-color:#5cb85c
}
.elementor-widget-progress .elementor-progress-wrapper.progress-warning .elementor-progress-bar{
    background-color:#f0ad4e
}
.elementor-widget-progress .elementor-progress-wrapper.progress-danger .elementor-progress-bar{
    background-color:#d9534f
}
.elementor-progress .elementor-title{
    display:block
}
@media (max-width:767px){
    .elementor-progress-text{
        padding-left:10px
    }
}
.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{
    line-height:1;
    font-size:0
}
.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{
    display:inline-grid
}
.elementor-widget-social-icons .elementor-grid{
    grid-column-gap:var(--grid-column-gap,5px);
    grid-row-gap:var(--grid-row-gap,5px);
    grid-template-columns:var(--grid-template-columns);
    -webkit-box-pack:var(--justify-content,center);
    -ms-flex-pack:var(--justify-content,center);
    justify-content:var(--justify-content,center);
    justify-items:var(--justify-content,center)
}
.elementor-social-icon{
    display:-webkit-inline-box;
    display:-ms-inline-flexbox;
    display:inline-flex;
    background-color:#818a91;
    font-size:var(--icon-size,25px);
    line-height:var(--icon-size,25px);
    width:calc(var(--icon-size, 25px) + 2*var(--icon-padding, .5em));
    height:calc(var(--icon-size, 25px) + 2*var(--icon-padding, .5em));
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    text-align:center;
    cursor:pointer
}
.elementor-social-icon i{
    color:#fff
}
.elementor-social-icon:last-child{
    margin:0
}
.elementor-social-icon:hover{
    opacity:.9;
    color:#fff
}
.elementor-social-icon-android{
    background-color:#a4c639
}
.elementor-social-icon-apple{
    background-color:#999
}
.elementor-social-icon-behance{
    background-color:#1769ff
}
.elementor-social-icon-bitbucket{
    background-color:#205081
}
.elementor-social-icon-codepen{
    background-color:#000
}
.elementor-social-icon-delicious{
    background-color:#39f
}
.elementor-social-icon-deviantart{
    background-color:#05cc47
}
.elementor-social-icon-digg{
    background-color:#005be2
}
.elementor-social-icon-dribbble{
    background-color:#ea4c89
}
.elementor-social-icon-elementor{
    background-color:#d30c5c
}
.elementor-social-icon-envelope{
    background-color:#ea4335
}
.elementor-social-icon-facebook,.elementor-social-icon-facebook-f{
    background-color:#3b5998
}
.elementor-social-icon-flickr{
    background-color:#0063dc
}
.elementor-social-icon-foursquare{
    background-color:#2d5be3
}
.elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{
    background-color:#006400
}
.elementor-social-icon-github{
    background-color:#333
}
.elementor-social-icon-gitlab{
    background-color:#e24329
}
.elementor-social-icon-globe{
    background-color:#818a91
}
.elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{
    background-color:#dd4b39
}
.elementor-social-icon-houzz{
    background-color:#7ac142
}
.elementor-social-icon-instagram{
    background-color:#262626
}
.elementor-social-icon-jsfiddle{
    background-color:#487aa2
}
.elementor-social-icon-link{
    background-color:#818a91
}
.elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{
    background-color:#0077b5
}
.elementor-social-icon-medium{
    background-color:#00ab6b
}
.elementor-social-icon-meetup{
    background-color:#ec1c40
}
.elementor-social-icon-mixcloud{
    background-color:#273a4b
}
.elementor-social-icon-odnoklassniki{
    background-color:#f4731c
}
.elementor-social-icon-pinterest{
    background-color:#bd081c
}
.elementor-social-icon-product-hunt{
    background-color:#da552f
}
.elementor-social-icon-reddit{
    background-color:#ff4500
}
.elementor-social-icon-rss{
    background-color:#f26522
}
.elementor-social-icon-shopping-cart{
    background-color:#4caf50
}
.elementor-social-icon-skype{
    background-color:#00aff0
}
.elementor-social-icon-slideshare{
    background-color:#0077b5
}
.elementor-social-icon-snapchat{
    background-color:#fffc00
}
.elementor-social-icon-soundcloud{
    background-color:#f80
}
.elementor-social-icon-spotify{
    background-color:#2ebd59
}
.elementor-social-icon-stack-overflow{
    background-color:#fe7a15
}
.elementor-social-icon-steam{
    background-color:#00adee
}
.elementor-social-icon-stumbleupon{
    background-color:#eb4924
}
.elementor-social-icon-telegram{
    background-color:#2ca5e0
}
.elementor-social-icon-thumb-tack{
    background-color:#1aa1d8
}
.elementor-social-icon-tripadvisor{
    background-color:#589442
}
.elementor-social-icon-tumblr{
    background-color:#35465c
}
.elementor-social-icon-twitch{
    background-color:#6441a5
}
.elementor-social-icon-twitter{
    background-color:#1da1f2
}
.elementor-social-icon-viber{
    background-color:#665cac
}
.elementor-social-icon-vimeo{
    background-color:#1ab7ea
}
.elementor-social-icon-vk{
    background-color:#45668e
}
.elementor-social-icon-weibo{
    background-color:#dd2430
}
.elementor-social-icon-weixin{
    background-color:#31a918
}
.elementor-social-icon-whatsapp{
    background-color:#25d366
}
.elementor-social-icon-wordpress{
    background-color:#21759b
}
.elementor-social-icon-xing{
    background-color:#026466
}
.elementor-social-icon-yelp{
    background-color:#af0606
}
.elementor-social-icon-youtube{
    background-color:#cd201f
}
.elementor-social-icon-500px{
    background-color:#0099e5
}
.elementor-shape-rounded .elementor-icon.elementor-social-icon{
    -webkit-border-radius:10%;
    border-radius:10%
}
.elementor-shape-circle .elementor-icon.elementor-social-icon{
    -webkit-border-radius:50%;
    border-radius:50%
}
.elementor-star-rating{
    color:#ccd6df;
    font-family:eicons;
    display:inline-block
}
.elementor-star-rating i{
    display:inline-block;
    position:relative;
    font-style:normal;
    cursor:default
}
.elementor-star-rating i:before{
    content:"\e934";
    display:block;
    font-size:inherit;
    font-family:inherit;
    position:absolute;
    overflow:hidden;
    color:#f0ad4e;
    top:0;
    left:0
}
.elementor-star-rating .elementor-star-empty:before{
    content:none
}
.elementor-star-rating .elementor-star-1:before{
    width:10%
}
.elementor-star-rating .elementor-star-2:before{
    width:20%
}
.elementor-star-rating .elementor-star-3:before{
    width:30%
}
.elementor-star-rating .elementor-star-4:before{
    width:40%
}
.elementor-star-rating .elementor-star-5:before{
    width:50%
}
.elementor-star-rating .elementor-star-6:before{
    width:60%
}
.elementor-star-rating .elementor-star-7:before{
    width:70%
}
.elementor-star-rating .elementor-star-8:before{
    width:80%
}
.elementor-star-rating .elementor-star-9:before{
    width:90%
}
.elementor-star-rating__wrapper{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center
}
.elementor-star-rating__title{
    margin-right:10px
}
.elementor-star-rating--align-right .elementor-star-rating__wrapper{
    text-align:right;
    -webkit-box-pack:end;
    -ms-flex-pack:end;
    justify-content:flex-end
}
.elementor-star-rating--align-left .elementor-star-rating__wrapper{
    text-align:left;
    -webkit-box-pack:start;
    -ms-flex-pack:start;
    justify-content:flex-start
}
.elementor-star-rating--align-center .elementor-star-rating__wrapper{
    text-align:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
}
.elementor-star-rating--align-justify .elementor-star-rating__title{
    margin-right:auto
}
@media (max-width:1024px){
    .elementor-star-rating-tablet--align-right .elementor-star-rating__wrapper{
        text-align:right;
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-star-rating-tablet--align-left .elementor-star-rating__wrapper{
        text-align:left;
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-star-rating-tablet--align-center .elementor-star-rating__wrapper{
        text-align:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-star-rating-tablet--align-justify .elementor-star-rating__title{
        margin-right:auto
    }
}
@media (max-width:767px){
    .elementor-star-rating-mobile--align-right .elementor-star-rating__wrapper{
        text-align:right;
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
    .elementor-star-rating-mobile--align-left .elementor-star-rating__wrapper{
        text-align:left;
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-star-rating-mobile--align-center .elementor-star-rating__wrapper{
        text-align:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center
    }
    .elementor-star-rating-mobile--align-justify .elementor-star-rating__title{
        margin-right:auto
    }
}
.last-star{
    letter-spacing:0
}
.elementor--star-style-star_unicode .elementor-star-rating{
    font-family:Arial,Helvetica,sans-serif
}
.elementor--star-style-star_unicode .elementor-star-rating i:not(.elementor-star-empty):before{
    content:"\002605"
}
.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs-wrapper{
    width:25%;
    -ms-flex-negative:0;
    flex-shrink:0
}
.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active{
    border-right-style:none
}
.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:after,.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:before{
    height:999em;
    width:0;
    right:0;
    border-right-style:solid
}
.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:before{
    top:0;
    -webkit-transform:translateY(-100%);
    -ms-transform:translateY(-100%);
    transform:translateY(-100%)
}
.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:after{
    top:100%
}
.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title{
    display:table-cell
}
.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active{
    border-bottom-style:none
}
.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:after,.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:before{
    bottom:0;
    height:0;
    width:999em;
    border-bottom-style:solid
}
.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:before{
    right:100%
}
.elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:after{
    left:100%
}
.elementor-widget-tabs .elementor-tab-content,.elementor-widget-tabs .elementor-tab-title,.elementor-widget-tabs .elementor-tab-title:after,.elementor-widget-tabs .elementor-tab-title:before,.elementor-widget-tabs .elementor-tabs-content-wrapper{
    border:1px #d4d4d4
}
.elementor-widget-tabs .elementor-tabs{
    text-align:left
}
.elementor-widget-tabs .elementor-tabs-wrapper{
    overflow:hidden
}
.elementor-widget-tabs .elementor-tab-title{
    cursor:pointer;
    outline:none
}
.elementor-widget-tabs .elementor-tab-desktop-title{
    position:relative;
    padding:20px 25px;
    font-weight:700;
    line-height:1;
    border:solid transparent
}
.elementor-widget-tabs .elementor-tab-desktop-title.elementor-active{
    border-color:#d4d4d4
}
.elementor-widget-tabs .elementor-tab-desktop-title.elementor-active:after,.elementor-widget-tabs .elementor-tab-desktop-title.elementor-active:before{
    display:block;
    content:"";
    position:absolute
}
.elementor-widget-tabs .elementor-tab-mobile-title{
    padding:10px;
    cursor:pointer
}
.elementor-widget-tabs .elementor-tab-content{
    padding:20px;
    display:none
}
@media (max-width:767px){
    .elementor-tabs .elementor-tab-content,.elementor-tabs .elementor-tab-title{
        border-style:solid solid none
    }
    .elementor-tabs .elementor-tabs-wrapper{
        display:none
    }
    .elementor-tabs .elementor-tabs-content-wrapper{
        border-bottom-style:solid
    }
    .elementor-tabs .elementor-tab-content{
        padding:10px
    }
}
@media (min-width:768px){
    .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex
    }
    .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs-content-wrapper{
        -webkit-box-flex:1;
        -ms-flex-positive:1;
        flex-grow:1;
        border-style:solid solid solid none
    }
    .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-content{
        border-style:none solid solid
    }
    .elementor-tabs .elementor-tab-mobile-title{
        display:none
    }
}
.elementor-testimonial-wrapper{
    overflow:hidden;
    text-align:center
}
.elementor-testimonial-wrapper .elementor-testimonial-content{
    font-size:1.3em;
    margin-bottom:20px
}
.elementor-testimonial-wrapper .elementor-testimonial-name{
    line-height:1.5;
    color:inherit;
    display:block
}
.elementor-testimonial-wrapper .elementor-testimonial-job{
    font-size:.85em;
    color:inherit;
    display:block
}
.elementor-testimonial-wrapper.elementor-testimonial-text-align-left{
    text-align:left
}
.elementor-testimonial-wrapper.elementor-testimonial-text-align-right{
    text-align:right
}
.elementor-testimonial-wrapper .elementor-testimonial-meta{
    width:100%;
    line-height:1
}
.elementor-testimonial-wrapper .elementor-testimonial-meta-inner{
    display:inline-block
}
.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image{
    display:table-cell;
    vertical-align:middle
}
.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image img{
    width:60px;
    height:60px;
    -webkit-border-radius:50%;
    border-radius:50%;
    -o-object-fit:cover;
    object-fit:cover;
    max-width:none
}
.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-image{
    padding-right:15px
}
.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-details{
    text-align:left
}
.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{
    display:block
}
.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{
    margin-bottom:20px
}
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{
    background-color:#818a91;
    color:#fff
}
.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{
    color:#818a91;
    border:3px solid;
    background-color:transparent
}
.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{
    margin-top:8px
}
.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{
    width:1em;
    height:1em
}
.elementor-widget-text-editor .elementor-drop-cap{
    float:left;
    text-align:center;
    line-height:1;
    font-size:50px
}
.elementor-widget-text-editor .elementor-drop-cap-letter{
    display:inline-block
}
.elementor-toggle{
    text-align:left
}
.elementor-toggle .elementor-tab-title{
    font-weight:700;
    line-height:1;
    margin:0;
    padding:15px;
    border-bottom:1px solid #d4d4d4;
    cursor:pointer;
    outline:none
}
.elementor-toggle .elementor-tab-title .elementor-toggle-icon{
    display:inline-block;
    width:1em
}
.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{
    float:right;
    text-align:right
}
.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{
    float:left;
    text-align:left
}
.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{
    display:block
}
.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{
    display:none
}
.elementor-toggle .elementor-tab-title.elementor-active{
    border-bottom:none
}
.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{
    display:none
}
.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{
    display:block
}
.elementor-toggle .elementor-tab-content{
    padding:15px;
    border-bottom:1px solid #d4d4d4;
    display:none
}
@media (max-width:767px){
    .elementor-toggle .elementor-tab-title{
        padding:12px
    }
    .elementor-toggle .elementor-tab-content{
        padding:12px 10px
    }
}
.elementor-widget-video .elementor-widget-container{
    overflow:hidden;
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
}
.elementor-widget-video .elementor-open-inline .elementor-custom-embed-image-overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    -webkit-background-size:cover;
    background-size:cover;
    background-position:50%
}
.elementor-widget-video .elementor-custom-embed-image-overlay{
    cursor:pointer;
    text-align:center
}
.elementor-widget-video .elementor-custom-embed-image-overlay:hover .elementor-custom-embed-play i{
    opacity:1
}
.elementor-widget-video .elementor-custom-embed-image-overlay img{
    display:block;
    width:100%
}
.elementor-widget-video .elementor-video{
    -o-object-fit:cover;
    object-fit:cover
}
.slick-slider{
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -ms-touch-action:pan-y;
    touch-action:pan-y;
    -webkit-tap-highlight-color:transparent
}
.slick-list,.slick-slider{
    position:relative;
    display:block
}
.slick-list{
    overflow:hidden;
    margin:0;
    padding:0
}
.slick-list:focus{
    outline:none
}
.slick-list.dragging{
    cursor:pointer
}
.slick-slider .slick-list,.slick-slider .slick-track{
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
}
.slick-track{
    position:relative;
    left:0;
    top:0;
    display:block
}
.slick-track:after,.slick-track:before{
    content:"";
    display:table
}
.slick-track:after{
    clear:both
}
.slick-loading .slick-track{
    visibility:hidden
}
.slick-slide{
    float:left;
    height:100%;
    min-height:1px;
    display:none
}
.elementor-slick-slider[dir=rtl] .slick-slide{
    float:right
}
.slick-slide img{
    display:block
}
.slick-slide.slick-loading img{
    display:none
}
.slick-slide.dragging img{
    pointer-events:none
}
.slick-initialized .slick-slide{
    display:block
}
.slick-loading .slick-slide{
    visibility:hidden
}
.slick-vertical .slick-slide{
    display:block;
    height:auto;
    border:1px solid transparent
}
.slick-arrow.slick-hidden{
    display:none
}
.elementor-slick-slider .slick-loading .slick-list{
    background:#fff
}
.elementor-slick-slider .slick-loading .slick-list:after{
    content:"\e8fb";
    font-family:eicons;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
    -webkit-animation:fa-spin 2s linear infinite;
    animation:fa-spin 2s linear infinite;
    font-size:25px;
    color:#a4afb7
}
.elementor-slick-slider .slick-next,.elementor-slick-slider .slick-prev{
    font-size:0;
    line-height:0;
    position:absolute;
    top:50%;
    display:block;
    width:20px;
    padding:0;
    -webkit-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    transform:translateY(-50%);
    cursor:pointer;
    color:transparent;
    border:none;
    outline:none;
    background:transparent
}
.elementor-slick-slider .slick-next:focus,.elementor-slick-slider .slick-next:hover,.elementor-slick-slider .slick-prev:focus,.elementor-slick-slider .slick-prev:hover{
    color:transparent;
    outline:none;
    background:transparent
}
.elementor-slick-slider .slick-next:focus:before,.elementor-slick-slider .slick-next:hover:before,.elementor-slick-slider .slick-prev:focus:before,.elementor-slick-slider .slick-prev:hover:before{
    opacity:1
}
.elementor-slick-slider .slick-next.slick-disabled:before,.elementor-slick-slider .slick-prev.slick-disabled:before{
    opacity:.25
}
.elementor-slick-slider .slick-next:before,.elementor-slick-slider .slick-prev:before{
    font-family:eicons;
    font-size:35px;
    line-height:1;
    opacity:.75;
    color:#fff;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
}
.elementor-slick-slider .slick-prev{
    left:-25px
}
[dir=rtl] .elementor-slick-slider .slick-prev{
    left:auto;
    right:-25px
}
.elementor-slick-slider .slick-prev:before{
    content:"\e89f"
}
[dir=rtl] .elementor-slick-slider .slick-prev:before{
    content:"\e89e"
}
.elementor-slick-slider .slick-next{
    right:-25px
}
[dir=rtl] .elementor-slick-slider .slick-next{
    left:-25px;
    right:auto
}
.elementor-slick-slider .slick-next:before{
    content:"\e89e"
}
[dir=rtl] .elementor-slick-slider .slick-next:before{
    content:"\e89f"
}
.elementor-slick-slider .slick-dotted.slick-slider{
    margin-bottom:30px
}
.elementor-slick-slider ul.slick-dots{
    position:absolute;
    bottom:-25px;
    display:block;
    width:100%;
    padding:0;
    margin:0;
    list-style:none;
    text-align:center;
    line-height:1
}
.elementor-slick-slider ul.slick-dots li{
    position:relative;
    display:inline-block;
    width:20px;
    height:20px;
    margin:0;
    padding:0;
    cursor:pointer
}
.elementor-slick-slider ul.slick-dots li button{
    font-size:0;
    line-height:0;
    display:block;
    width:20px;
    height:20px;
    padding:5px;
    cursor:pointer;
    color:transparent;
    border:0;
    outline:none;
    background:transparent
}
.elementor-slick-slider ul.slick-dots li button:focus,.elementor-slick-slider ul.slick-dots li button:hover{
    outline:none
}
.elementor-slick-slider ul.slick-dots li button:focus:before,.elementor-slick-slider ul.slick-dots li button:hover:before{
    opacity:1
}
.elementor-slick-slider ul.slick-dots li button:before{
    font-family:eicons;
    font-size:6px;
    line-height:20px;
    position:absolute;
    top:0;
    left:0;
    width:20px;
    height:20px;
    content:"\e914";
    text-align:center;
    opacity:.25;
    color:#000;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
}
.elementor-slick-slider ul.slick-dots li.slick-active button:before{
    opacity:.75;
    color:#000
}
.elementor-slick-slider .slick-arrows-inside .slick-prev{
    left:20px
}
[dir=rtl] .elementor-slick-slider .slick-arrows-inside .slick-prev{
    left:auto;
    right:20px
}
.elementor-slick-slider .slick-arrows-inside .slick-next{
    right:20px
}
[dir=rtl] .elementor-slick-slider .slick-arrows-inside .slick-next{
    left:20px;
    right:auto
}
.elementor-slick-slider .slick-dots-inside .slick-dots{
    bottom:5px
}
.elementor-slick-slider .slick-dots-inside.slick-dotted.slick-slider{
    margin-bottom:0
}
.elementor-slick-slider .slick-slider .slick-next,.elementor-slick-slider .slick-slider .slick-prev{
    z-index:1
}
.elementor-slick-slider .slick-slide img{
    margin:auto
}
.swiper-container{
    margin-left:auto;
    margin-right:auto;
    position:relative;
    overflow:hidden;
    z-index:1
}
.swiper-container .swiper-slide figure{
    line-height:0
}
.swiper-container .elementor-lightbox-content-source{
    display:none
}
.swiper-container-no-flexbox .swiper-slide{
    float:left
}
.swiper-container-vertical>.swiper-wrapper{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column
}
.swiper-wrapper{
    position:relative;
    width:100%;
    height:100%;
    z-index:1;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    -o-transition-property:transform;
    transition-property:transform;
    transition-property:transform,-webkit-transform;
    -webkit-box-sizing:content-box;
    box-sizing:content-box
}
.swiper-container-android .swiper-slide,.swiper-wrapper{
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
}
.swiper-container-multirow>.swiper-wrapper{
    -ms-flex-wrap:wrap;
    flex-wrap:wrap
}
.swiper-container-free-mode>.swiper-wrapper{
    -webkit-transition-timing-function:ease-out;
    -o-transition-timing-function:ease-out;
    transition-timing-function:ease-out;
    margin:0 auto
}
.swiper-slide{
    -ms-flex-negative:0;
    flex-shrink:0;
    width:100%;
    height:100%;
    position:relative
}
.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{
    height:auto
}
.swiper-container-autoheight .swiper-wrapper{
    -webkit-box-align:start;
    -ms-flex-align:start;
    align-items:flex-start;
    -webkit-transition-property:height,-webkit-transform;
    transition-property:height,-webkit-transform;
    -o-transition-property:transform,height;
    transition-property:transform,height;
    transition-property:transform,height,-webkit-transform
}
.swiper-container .swiper-notification{
    position:absolute;
    left:0;
    top:0;
    pointer-events:none;
    opacity:0;
    z-index:-1000
}
.swiper-wp8-horizontal{
    -ms-touch-action:pan-y;
    touch-action:pan-y
}
.swiper-wp8-vertical{
    -ms-touch-action:pan-x;
    touch-action:pan-x
}
.swiper-button-next,.swiper-button-prev{
    position:absolute;
    top:50%;
    width:27px;
    height:44px;
    margin-top:-22px;
    z-index:10;
    cursor:pointer;
    -webkit-background-size:27px 44px;
    background-size:27px 44px;
    background:no-repeat 50%
}
.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{
    opacity:.35;
    cursor:auto;
    pointer-events:none
}
.swiper-button-prev,.swiper-container-rtl .swiper-button-next{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
    left:10px;
    right:auto
}
.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
}
.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
}
.swiper-button-next,.swiper-container-rtl .swiper-button-prev{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
    right:10px;
    left:auto
}
.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
}
.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
}
.swiper-pagination{
    position:absolute;
    text-align:center;
    -webkit-transition:.3s;
    -o-transition:.3s;
    transition:.3s;
    -webkit-transform:translateZ(0);
    transform:translateZ(0);
    z-index:10
}
.swiper-pagination.swiper-pagination-hidden{
    opacity:0
}
.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{
    bottom:5px;
    left:0;
    width:100%
}
.swiper-pagination-bullet{
    width:6px;
    height:6px;
    display:inline-block;
    -webkit-border-radius:50%;
    border-radius:50%;
    background:#000;
    opacity:.2
}
.swiper-pagination-fraction{
    color:#000
}
button.swiper-pagination-bullet{
    border:none;
    margin:0;
    padding:0;
    -webkit-box-shadow:none;
    box-shadow:none;
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance:none
}
.swiper-pagination-clickable .swiper-pagination-bullet{
    cursor:pointer
}
.swiper-pagination-white .swiper-pagination-bullet{
    background:#fff
}
.swiper-pagination-bullet-active{
    opacity:1
}
.swiper-pagination-white .swiper-pagination-bullet-active{
    background:#fff
}
.swiper-pagination-black .swiper-pagination-bullet-active{
    background:#000
}
.swiper-container-vertical>.swiper-pagination-bullets{
    right:10px;
    top:50%;
    -webkit-transform:translate3d(0,-50%,0);
    transform:translate3d(0,-50%,0)
}
.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin:5px 0;
    display:block
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin:0 6px
}
.swiper-pagination-progressbar{
    background:rgba(0,0,0,.25);
    position:absolute
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
    background:#000;
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    -webkit-transform:scale(0);
    -ms-transform:scale(0);
    transform:scale(0);
    -webkit-transform-origin:left top;
    -ms-transform-origin:left top;
    transform-origin:left top
}
.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
    -webkit-transform-origin:right top;
    -ms-transform-origin:right top;
    transform-origin:right top
}
.swiper-container-horizontal>.swiper-pagination-progressbar{
    width:100%;
    height:4px;
    left:0;
    top:0
}
.swiper-container-vertical>.swiper-pagination-progressbar{
    width:4px;
    height:100%;
    left:0;
    top:0
}
.swiper-pagination-progressbar.swiper-pagination-white{
    background:hsla(0,0%,100%,.5)
}
.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{
    background:#fff
}
.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{
    background:#000
}
.swiper-container-3d{
    -webkit-perspective:1200px;
    perspective:1200px
}
.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d
}
.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    pointer-events:none;
    z-index:10
}
.swiper-container-3d .swiper-slide-shadow-left{
    background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));
    background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);
    background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);
    background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)
}
.swiper-container-3d .swiper-slide-shadow-right{
    background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));
    background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);
    background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);
    background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)
}
.swiper-container-3d .swiper-slide-shadow-top{
    background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));
    background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);
    background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);
    background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)
}
.swiper-container-3d .swiper-slide-shadow-bottom{
    background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));
    background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);
    background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);
    background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)
}
.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{
    -ms-perspective:1200px
}
.swiper-container-cube,.swiper-container-flip{
    overflow:visible
}
.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{
    pointer-events:none;
    z-index:1
}
.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{
    pointer-events:none
}
.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{
    pointer-events:auto
}
.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{
    z-index:0;
    -webkit-backface-visibility:hidden;
    backface-visibility:hidden
}
.swiper-container-cube .swiper-slide{
    visibility:hidden;
    -webkit-transform-origin:0 0;
    -ms-transform-origin:0 0;
    transform-origin:0 0;
    width:100%;
    height:100%
}
.swiper-container-cube.swiper-container-rtl .swiper-slide{
    -webkit-transform-origin:100% 0;
    -ms-transform-origin:100% 0;
    transform-origin:100% 0
}
.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{
    pointer-events:auto;
    visibility:visible
}
.swiper-container-cube .swiper-cube-shadow{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    background:#000;
    opacity:.6;
    -webkit-filter:blur(50px);
    filter:blur(50px);
    z-index:0
}
.swiper-container-fade.swiper-container-free-mode .swiper-slide{
    -webkit-transition-timing-function:ease-out;
    -o-transition-timing-function:ease-out;
    transition-timing-function:ease-out
}
.swiper-container-fade .swiper-slide{
    pointer-events:none;
    -webkit-transition-property:opacity;
    -o-transition-property:opacity;
    transition-property:opacity
}
.swiper-container-fade .swiper-slide .swiper-slide{
    pointer-events:none
}
.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{
    pointer-events:auto
}
.swiper-zoom-container{
    width:100%;
    height:100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    text-align:center
}
.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{
    max-width:100%;
    max-height:100%;
    -o-object-fit:contain;
    object-fit:contain
}
.swiper-scrollbar{
    -webkit-border-radius:10px;
    border-radius:10px;
    position:relative;
    -ms-touch-action:none;
    background:rgba(0,0,0,.1)
}
.swiper-container-horizontal>.swiper-scrollbar{
    position:absolute;
    left:1%;
    bottom:3px;
    z-index:50;
    height:5px;
    width:98%
}
.swiper-container-vertical>.swiper-scrollbar{
    position:absolute;
    right:3px;
    top:1%;
    z-index:50;
    width:5px;
    height:98%
}
.swiper-scrollbar-drag{
    height:100%;
    width:100%;
    position:relative;
    background:rgba(0,0,0,.5);
    -webkit-border-radius:10px;
    border-radius:10px;
    left:0;
    top:0
}
.swiper-scrollbar-cursor-drag{
    cursor:move
}
.elementor-pagination-position-outside .swiper-container{
    padding-bottom:30px
}
.elementor-pagination-position-outside .elementor-swiper-button{
    top:calc(50% - 15px)
}
.elementor-swiper{
    position:relative
}
.elementor-main-swiper{
    position:static
}
.elementor-arrows-position-outside .swiper-container{
    width:calc(100% - 60px)
}
.elementor-arrows-position-outside .elementor-swiper-button-prev{
    left:0
}
.elementor-arrows-position-outside .elementor-swiper-button-next{
    right:0
}
.swiper-image-stretch .swiper-slide .swiper-slide-image{
    width:100%
}
.elementor-swiper-button{
    position:absolute;
    display:-webkit-inline-box;
    display:-ms-inline-flexbox;
    display:inline-flex;
    z-index:1;
    cursor:pointer;
    font-size:25px;
    color:hsla(0,0%,93.3%,.9);
    top:50%;
    -webkit-transform:translate3d(0,-50%,1px);
    transform:translate3d(0,-50%,1px)
}
.elementor-swiper-button-prev{
    left:10px
}
.elementor-swiper-button-next{
    right:10px
}
.elementor-swiper-button.swiper-button-disabled{
    opacity:.3
}
.swiper-lazy-preloader{
    width:42px;
    height:42px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-21px;
    margin-top:-21px;
    z-index:10;
    -webkit-transform-origin:50%;
    -ms-transform-origin:50%;
    transform-origin:50%;
    -webkit-animation:swiper-preloader-spin 1s steps(12) infinite;
    animation:swiper-preloader-spin 1s steps(12) infinite
}
.swiper-lazy-preloader:after{
    display:block;
    content:"";
    width:100%;
    height:100%;
    -webkit-background-size:100% 100%;
    background-size:100%;
    background:url("data:image/svg+xml;
    charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E") no-repeat 50%
}
.swiper-lazy-preloader-white:after{
    background-image:url("data:image/svg+xml;
    charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
}
@-webkit-keyframes swiper-preloader-spin{
    to{
        -webkit-transform:rotate(1turn);
        transform:rotate(1turn)
    }
}
@keyframes swiper-preloader-spin{
    to{
        -webkit-transform:rotate(1turn);
        transform:rotate(1turn)
    }
}
.elementor-lightbox{
    --lightbox-ui-color:hsla(0,0%,93.3%,0.9);
    --lightbox-ui-color-hover:#fff;
    --lightbox-text-color:var(--lightbox-ui-color);
    --lightbox-header-icons-size:20px;
    --lightbox-navigation-icons-size:25px
}
.elementor-lightbox .dialog-header{
    display:none
}
.elementor-lightbox .dialog-widget-content{
    background:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    width:100%;
    height:100%
}
.elementor-lightbox .dialog-message{
    -webkit-animation-duration:.3s;
    animation-duration:.3s
}
.elementor-lightbox .dialog-message:not(.elementor-fit-aspect-ratio){
    height:100%
}
.elementor-lightbox .dialog-message.dialog-lightbox-message{
    padding:0
}
.elementor-lightbox .dialog-lightbox-close-button{
    cursor:pointer;
    position:absolute;
    font-size:var(--lightbox-header-icons-size);
    right:.75em;
    margin-top:13px;
    padding:.25em;
    z-index:2;
    line-height:1
}
.elementor-lightbox .dialog-lightbox-close-button,.elementor-lightbox .elementor-swiper-button{
    color:var(--lightbox-ui-color);
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
    opacity:1
}
.elementor-lightbox .dialog-lightbox-close-button:hover,.elementor-lightbox .elementor-swiper-button:hover{
    color:var(--lightbox-ui-color-hover)
}
.elementor-lightbox .swiper-container{
    height:100%
}
.elementor-lightbox .elementor-lightbox-item{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    position:relative;
    padding:70px;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    height:100%;
    margin:auto
}
@media (max-width:767px){
    .elementor-lightbox .elementor-lightbox-item{
        padding:70px 0
    }
}
.elementor-lightbox .elementor-lightbox-image{
    max-height:100%;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
}
.elementor-lightbox .elementor-lightbox-image,.elementor-lightbox .elementor-lightbox-image:hover{
    opacity:1;
    -webkit-filter:none;
    filter:none;
    border:none
}
.elementor-lightbox .elementor-lightbox-image,.elementor-lightbox .elementor-video-container{
    -webkit-box-shadow:0 0 30px rgba(0,0,0,.3),0 0 8px -5px rgba(0,0,0,.3);
    box-shadow:0 0 30px rgba(0,0,0,.3),0 0 8px -5px rgba(0,0,0,.3);
    -webkit-border-radius:2px;
    border-radius:2px
}
.elementor-lightbox .elementor-video-container{
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%)
}
@media (min-width:1025px){
    .elementor-lightbox .elementor-video-container{
        width:75%
    }
}
@media (max-width:1024px){
    .elementor-lightbox .elementor-video-container{
        width:100%
    }
}
@media (min-width:768px) and (max-width:1024px){
    .elementor-lightbox .elementor-aspect-ratio-916 .elementor-video-container{
        width:70%
    }
}
.elementor-lightbox .elementor-swiper-button:focus{
    outline-width:1px
}
.elementor-lightbox .elementor-swiper-button-next,.elementor-lightbox .elementor-swiper-button-prev{
    height:100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    width:15%;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    font-size:var(--lightbox-navigation-icons-size)
}
.elementor-lightbox .elementor-swiper-button-prev{
    left:0
}
.elementor-lightbox .elementor-swiper-button-next{
    right:0
}
@media (max-width:767px){
    .elementor-lightbox .elementor-swiper-button-next,.elementor-lightbox .elementor-swiper-button-prev{
        width:20%
    }
    .elementor-lightbox .elementor-swiper-button-next i,.elementor-lightbox .elementor-swiper-button-prev i{
        padding:10px;
        background-color:rgba(0,0,0,.5)
    }
    .elementor-lightbox .elementor-swiper-button-prev{
        left:0;
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start
    }
    .elementor-lightbox .elementor-swiper-button-next{
        right:0;
        -webkit-box-pack:end;
        -ms-flex-pack:end;
        justify-content:flex-end
    }
}
.elementor-slideshow__counter{
    color:currentColor;
    font-size:.75em;
    width:-webkit-max-content;
    width:-moz-max-content;
    width:max-content
}
.elementor-slideshow__footer,.elementor-slideshow__header{
    position:absolute;
    left:0;
    width:100%;
    padding:15px 20px;
    -webkit-transition:.3s;
    -o-transition:.3s;
    transition:.3s
}
.elementor-slideshow__footer{
    color:var(--lightbox-text-color)
}
.elementor-slideshow__header{
    color:var(--lightbox-ui-color);
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:reverse;
    -ms-flex-direction:row-reverse;
    flex-direction:row-reverse;
    font-size:var(--lightbox-header-icons-size);
    padding-left:1em;
    padding-right:2.6em;
    top:0;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    z-index:10
}
.elementor-slideshow__header>i{
    font-size:inherit;
    cursor:pointer;
    padding:.25em;
    margin:0 .35em
}
.elementor-slideshow__header>i:hover{
    color:var(--lightbox-ui-color-hover)
}
.elementor-slideshow__header .elementor-slideshow__counter{
    margin-right:auto
}
.elementor-slideshow__header .elementor-icon-share{
    z-index:5
}
.elementor-slideshow__share-menu{
    background-color:transparent;
    width:0;
    height:0;
    position:absolute;
    overflow:hidden;
    -webkit-transition:background-color .4s;
    -o-transition:background-color .4s;
    transition:background-color .4s
}
.elementor-slideshow__share-menu .elementor-slideshow__share-links a{
    color:#2c2c2c
}
.elementor-slideshow__share-links{
    display:block;
    position:absolute;
    min-width:200px;
    right:2.8em;
    top:3em;
    background-color:#fff;
    -webkit-border-radius:3px;
    border-radius:3px;
    padding:14px 20px;
    -webkit-transform:scale(0);
    -ms-transform:scale(0);
    transform:scale(0);
    opacity:0;
    -webkit-transform-origin:90% 10%;
    -ms-transform-origin:90% 10%;
    transform-origin:90% 10%;
    -webkit-transition:all .25s .1s;
    -o-transition:all .25s .1s;
    transition:all .25s .1s;
    -webkit-box-shadow:0 4px 15px rgba(0,0,0,.3);
    box-shadow:0 4px 15px rgba(0,0,0,.3)
}
.elementor-slideshow__share-links a{
    text-align:left;
    color:#55595c;
    font-size:12px;
    line-height:2.5;
    display:block;
    opacity:0;
    -webkit-transition:opacity .5s .1s;
    -o-transition:opacity .5s .1s;
    transition:opacity .5s .1s
}
.elementor-slideshow__share-links a:hover{
    color:#000
}
.elementor-slideshow__share-links a i{
    font-size:1.25em;
    margin-right:.75em
}
.elementor-slideshow__share-links:before{
    content:"";
    display:block;
    position:absolute;
    top:1px;
    right:.5em;
    border:.45em solid transparent;
    border-bottom-color:#fff;
    -webkit-transform:translateY(-100%) scaleX(.7);
    -ms-transform:translateY(-100%) scaleX(.7);
    transform:translateY(-100%) scaleX(.7)
}
.elementor-slideshow__footer{
    bottom:0;
    z-index:5;
    position:fixed
}
.elementor-slideshow__description,.elementor-slideshow__title{
    margin:0
}
.elementor-slideshow__title{
    font-size:16px;
    font-weight:700
}
.elementor-slideshow__description{
    font-size:14px
}
.elementor-slideshow--ui-hidden .elementor-slideshow__footer,.elementor-slideshow--ui-hidden .elementor-slideshow__header{
    opacity:0;
    pointer-events:none
}
.elementor-slideshow--ui-hidden .elementor-swiper-button-next,.elementor-slideshow--ui-hidden .elementor-swiper-button-prev{
    opacity:0
}
.elementor-slideshow--fullscreen-mode .elementor-video-container{
    width:100%
}
.elementor-slideshow--zoom-mode .elementor-slideshow__footer,.elementor-slideshow--zoom-mode .elementor-slideshow__header{
    background-color:rgba(0,0,0,.5)
}
.elementor-slideshow--zoom-mode .elementor-swiper-button-next,.elementor-slideshow--zoom-mode .elementor-swiper-button-prev{
    opacity:0;
    pointer-events:none
}
.elementor-slideshow--share-mode .elementor-slideshow__share-menu{
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    opacity:1;
    cursor:default;
    background-color:rgba(0,0,0,.5)
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links{
    -webkit-transform:scale(1);
    -ms-transform:scale(1);
    transform:scale(1)
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links,.elementor-slideshow--share-mode .elementor-slideshow__share-links a{
    opacity:1
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links .eicon-twitter{
    color:#1da1f2
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links .eicon-facebook{
    color:#3b5998
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links .eicon-pinterest{
    color:#bd081c
}
.elementor-slideshow--share-mode .elementor-slideshow__share-links .eicon-download-bold{
    color:#a4afb7
}
.elementor-slideshow--share-mode .eicon-share-arrow{
    z-index:2
}
.animated{
    -webkit-animation-duration:1.25s;
    animation-duration:1.25s
}
.animated.animated-slow{
    -webkit-animation-duration:2s;
    animation-duration:2s
}
.animated.animated-fast{
    -webkit-animation-duration:.75s;
    animation-duration:.75s
}
.animated.infinite{
    -webkit-animation-iteration-count:infinite;
    animation-iteration-count:infinite
}
.animated.reverse{
    animation-direction:reverse
}
@media (prefers-reduced-motion:reduce){
    .animated{
        -webkit-animation:none;
        animation:none
    }
}
.elementor-shape{
    overflow:hidden;
    position:absolute;
    left:0;
    width:100%;
    line-height:0;
    direction:ltr
}
.elementor-shape-top{
    top:-1px
}
.elementor-shape-top:not([data-negative=false]) svg{
    z-index:-1
}
.elementor-shape-bottom{
    bottom:-1px
}
.elementor-shape-bottom:not([data-negative=true]) svg{
    z-index:-1
}
.elementor-shape[data-negative=false].elementor-shape-bottom,.elementor-shape[data-negative=true].elementor-shape-top{
    -webkit-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg)
}
.elementor-shape svg{
    display:block;
    width:calc(100% + 1.3px);
    position:relative;
    left:50%;
    -webkit-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    transform:translateX(-50%)
}
.elementor-shape .elementor-shape-fill{
    fill:#fff;
    -webkit-transform-origin:center;
    -ms-transform-origin:center;
    transform-origin:center;
    -webkit-transform:rotateY(0deg);
    transform:rotateY(0deg)
}
#wp-admin-bar-elementor_edit_page .ab-submenu .ab-item{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:200px
}
#wp-admin-bar-elementor_edit_page .elementor-edit-link-title{
    white-space:nowrap;
    -o-text-overflow:ellipsis;
    text-overflow:ellipsis;
    overflow:hidden;
    width:100%
}
#wp-admin-bar-elementor_edit_page .elementor-edit-link-type{
    background:#55595c;
    font-size:11px;
    line-height:9px;
    margin-top:6px;
    padding:4px 8px;
    -webkit-border-radius:3px;
    border-radius:3px
}
.page-template-elementor_canvas.elementor-page:before{
    display:none
}
.elementor-post__thumbnail__link{
    -webkit-transition:none;
    -o-transition:none;
    transition:none
}
#left-area ul.elementor-icon-list-items,.elementor-edit-area .elementor-element ul.elementor-icon-list-items,.elementor .elementor-element ul.elementor-icon-list-items{
    padding:0
}
#wpadminbar *{
    font-style:normal
}
.elementor-portfolio.elementor-grid{
    display:grid
}
.elementor-share-buttons--align-right{
    text-align:right
}
.elementor-share-buttons--align-left{
    text-align:left
}
.elementor-share-buttons--align-center{
    text-align:center
}
.elementor-share-buttons--align-justify{
    text-align:justify;
    -moz-text-align-last:justify;
    text-align-last:justify
}
@media (max-width:1024px){
    .elementor-share-buttons-tablet--align-right{
        text-align:right
    }
    .elementor-share-buttons-tablet--align-left{
        text-align:left
    }
    .elementor-share-buttons-tablet--align-center{
        text-align:center
    }
    .elementor-share-buttons-tablet--align-justify{
        text-align:justify;
        -moz-text-align-last:justify;
        text-align-last:justify
    }
}
@media (max-width:767px){
    .elementor-share-buttons-mobile--align-right{
        text-align:right
    }
    .elementor-share-buttons-mobile--align-left{
        text-align:left
    }
    .elementor-share-buttons-mobile--align-center{
        text-align:center
    }
    .elementor-share-buttons-mobile--align-justify{
        text-align:justify;
        -moz-text-align-last:justify;
        text-align-last:justify
    }
}
@media (max-width:767px){
    .elementor .elementor-hidden-phone{
        display:none
    }
}
@media (min-width:768px) and (max-width:1024px){
    .elementor .elementor-hidden-tablet{
        display:none
    }
}
@media (min-width:1025px){
    .elementor .elementor-hidden-desktop{
        display:none
    }
}

`