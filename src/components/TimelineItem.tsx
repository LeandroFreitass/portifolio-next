import React from "react";
import "../styles/TimelineItem.css";

interface InputProps {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

const TimelineItem = ({ title, date, description, imageUrl }: InputProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="timeline-item-image" />
        )}
        <div className="timeline-item-text">
          <span className="timeline-item-date">{date}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="timeline-item-circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
