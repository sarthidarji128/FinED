import React, { useState } from "react";
import './Learning.css'
interface Course {
  id: number;
  title: string;
  description: string;
  videos: { id: number; title: string; url: string; summary: string }[];
}

const courses: Course[] = [
  {
    "id": 1,
    "title": "Personal Finance Basics",
    "description": "Learn how to manage your budget and savings effectively.",
    "videos": [
      {
        "id": 1,
        "title": "Introduction to Personal Finance",
        "url": "https://www.youtube.com/watch?v=exampleVideoID1&list=PLLbfvOX935JGo7PWixihas8kneskv1uU9",
        "summary": "This video introduces the key concepts of personal finance."
      },
      {
        "id": 2,
        "title": "Building a Budget",
        "url": "https://www.youtube.com/watch?v=exampleVideoID2&list=PLLbfvOX935JGo7PWixihas8kneskv1uU9",
        "summary": "Learn how to create and manage a personal budget."
      }
    ]
  },
  {
    id: 2,
    title: "Introduction to Stock Markets",
    description: "Understand the basics of stock trading and investments.",
    videos: [
      {
        id: 1,
        title: "What is a Stock Market?",
        url: "/videos/stocks1.mp4",
        summary: "Learn what stock markets are and how they work."
      },
      {
        id: 2,
        title: "How to Invest in Stocks",
        url: "/videos/stocks2.mp4",
        summary: "A guide to investing in stocks for beginners."
      }
    ]
  }
];

const Learning: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | {
    id: number;
    title: string;
    url: string;
    summary: string;
  }>(null);

  if (selectedVideo) {
    return (
      <div className="video-player">
        <h2>{selectedVideo.title}</h2>
        <video controls style={{ width: "100%", marginBottom: "1rem" }}>
          <source src={selectedVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{selectedVideo.summary}</p>
        <button onClick={() => setSelectedVideo(null)}>Back to Course</button>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="course-detail">
        <h2>{selectedCourse.title}</h2>
        <p>{selectedCourse.description}</p>
        <h3>Videos:</h3>
        <ul>
          {selectedCourse.videos.map((video) => (
            <li key={video.id}>
              <button
                onClick={() => setSelectedVideo(video)}
                style={{ cursor: "pointer", margin: "1rem 0" }}
              >
                {video.title}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setSelectedCourse(null)}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="course-list">
      <h1>Recommended Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ margin: "1rem 0" }}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => setSelectedCourse(course)}>View Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learning;