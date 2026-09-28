import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon, FaGlobe } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

type TimelineTab = 'all' | 'work' | 'education';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [activeTab, setActiveTab] = useState<TimelineTab>('all');

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;
  }

  const filteredItems = timeLineData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.timelineType === activeTab;
  });

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">💼 Experience & Education</h2>

        <div className="timeline-tabs">
          <button
            className={`timeline-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <FaGlobe /> All ({timeLineData.length})
          </button>
          <button
            className={`timeline-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <WorkIcon /> Work Experience ({timeLineData.filter(i => i.timelineType === 'work').length})
          </button>
          <button
            className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <SchoolIcon /> Education ({timeLineData.filter(i => i.timelineType === 'education').length})
          </button>
        </div>
      </div>

      <VerticalTimeline key={activeTab}>
        {filteredItems.map((item, index) => {
          const isEducation = item.timelineType === 'education';
          const isCurrent = index === 0;

          return (
            <VerticalTimelineElement
              key={`${activeTab}-${index}`}
              className={`vertical-timeline-element--${item.timelineType}`}
              contentStyle={
                isEducation
                  ? { background: '#E50914', color: '#fff', boxShadow: '0 4px 20px rgba(229, 9, 20, 0.35)' }
                  : isCurrent
                  ? { background: '#1e3a8a', color: '#ffffff', boxShadow: '0 4px 20px rgba(30, 58, 138, 0.45)' }
                  : { background: '#ffffff', color: '#1f2937', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }
              }
              contentArrowStyle={{
                borderRight: isEducation
                  ? '7px solid #E50914'
                  : isCurrent
                  ? '7px solid #1e3a8a'
                  : '7px solid #ffffff'
              }}
              date={item.dateRange}
              iconStyle={{
                background: isEducation ? '#E50914' : isCurrent ? '#2563eb' : '#0284c7',
                color: '#fff'
              }}
              icon={isEducation ? <SchoolIcon /> : <WorkIcon />}
            >
              <div>
                <h3 className="vertical-timeline-element-title" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  {isEducation ? item.name : item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ opacity: 0.9, marginTop: '4px', fontSize: '1.05rem' }}>
                  {isEducation ? item.title : item.name}
                </h4>
                {item.techStack && (
                  <p className="vertical-timeline-element-tech">
                    🛠️ {item.techStack}
                  </p>
                )}
                {item.summaryPoints && item.summaryPoints.length > 0 && (
                  <ul className="timeline-summary-list">
                    {item.summaryPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: '#10b981', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
