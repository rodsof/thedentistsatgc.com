import React from 'react';
import styled from '@emotion/styled';
import globalStyles from '../css/global.module.css';
import { AiFillStar }  from "react-icons/ai";

const Background = styled.div`
background-color: #000000;
opacity: 0.5;
transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
height: 100%;
width: 100%;
top: 0;
left: 0;
position: absolute;
`;

const TextContainer = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 150px 0px 150px 0px;
`
const VideoContainer = styled.div`
height: 100%;
width: 100%;
top: 0px;
left: 0px;
overflow: hidden;
z-index: 0;
direction: ltr;
position: absolute;
`


const Video = () => {
  return (
    <section className={globalStyles.section}>
      <VideoContainer>
      <video className={globalStyles.video} autoPlay muted playsInline loop src="https://thedentistsatgc.com/wp-content/uploads/2021/01/Dr.-Vogt-VIdeo-Header-V2.webm" ></video>
      <Background />
      </VideoContainer>
      
      <div className={globalStyles.container}> 
        <div className={globalStyles.row}> 
            <div className={globalStyles.column}> 
                <div className={globalStyles.elementorColumnWrap}>
                    <div className={globalStyles.elementorWidgetWrap}> 
                        <div className={globalStyles.elementorWidgetHeading}> 
                            <div className={globalStyles.elementorWidgetContainer}> 
                                <h1 className={globalStyles.elementorHeadingTitle}>THE DENTISTS <br />
                                    <span className={globalStyles.span}>AT GATEWAY CROSSING</span>
                                </h1>
                            </div>
                        </div>
                        <div className={globalStyles.elementorWidget}>
                            <div className={globalStyles.elementorWidgetTextEditor}>
                                <div>
                                    <p>“Extremely caring and friendly service. Front desk has smiling faces and Dr. Vogt
                                        understands what it takes to provide excellent care.”</p>
                                </div>
                            </div>
                        </div>
                        <div className={globalStyles.elementorStarRatingWrapper}>
                            <div className={globalStyles.elementorWidgetContainer}>
                                <div className={globalStyles.elementorStarRatingWrapper}>
                                    <div className={globalStyles.elementorStarRating} title="5/5" itemType="http://schema.org/Rating"
                                        itemScope="" itemProp="reviewRating"> <AiFillStar className={globalStyles.elementorStarFull}/> <AiFillStar className={globalStyles.elementorStarFull}/> 
                                        <AiFillStar className={globalStyles.elementorStarFull} /> <AiFillStar className={globalStyles.elementorStarFull} /> <AiFillStar className={globalStyles.elementorStarFull} /> <span
                                            itemProp="ratingValue" className={globalStyles.elementorScreenOnly}>5/5</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={globalStyles.elementorWidgetWrap}>
                            <div className={globalStyles.elementorWidgetContainer}>
                                <div className={globalStyles.elementorWidgetTextEditor}>
                                    <p>LOGAN M., MCCORDSVILLE</p>
                                </div>
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