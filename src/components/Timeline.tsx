import React from 'react';
import TimelineItem from './TimelineItem';
import timelineData from '../data/timelineData';
import '../styles/TimelineItem.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Timeline;
