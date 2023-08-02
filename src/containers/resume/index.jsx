import React from 'react';
import {RxResume} from 'react-icons/rx';
import PageHeaderContent from '../../component/pageHeaderContent';
import { data } from "../resume/utils";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'; 
import {MdOutlineCastForEducation,MdWork} from 'react-icons/md'
import './style.scss';

const Resume=()=>{
    return(
        <section id="resume" className="resume">

            <PageHeaderContent
            headerText = "Resume"
            icon={<RxResume size={40}/>}
            />
            <div className="timeline">
        <div className="timeline__exprience">
          <h3 className="timeline__exprience__header-text">Experience</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.experience.map((item,i)=>(
                <VerticalTimelineElement
                  key={i}
                  className="timeline__exprience__vertical-timeline-element"
                  contentStyle={{
                    background:'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border:'1.5px solid var(--yellow-theme-main-color)'
                  }}
                  icon={<MdWork/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--yellow-theme-main-color)'
                  }}
                  >
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3>
                        {item.title}
                      </h3>

                      <h4>
                          {item.subTitle}
                      </h4>
                     
                    </div>
                    <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.education.map((item,i)=>(
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background:'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border:'1.5px solid var(--yellow-theme-main-color)'
                  }}
                  icon={<MdOutlineCastForEducation/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--yellow-theme-main-color)'
                  }}
                  >
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3>
                        {item.title}
                      </h3>

                      <h4>
                          {item.subTitle}
                      </h4>
                     
                    </div>
                    <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
        </section>
    )
}
export default Resume;