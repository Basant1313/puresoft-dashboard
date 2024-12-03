import React from "react";

// Define the interface for Topic data
interface Topic {
  name: string;
  image: string;
  correct_percentage: number;
}

// Update the TopicListProps interface to accept gradientClass
interface TopicListProps {
  topics: Topic[]; // Array of topics to display
  title: string; // Title for the topic list
  gradientClass: string; // Gradient class to define the background gradient
}

const TopicList: React.FC<TopicListProps> = ({ topics, title, gradientClass }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-3xl p-6">
      <h2 className="text-lg text-gray-400 font-medium mb-4">{title}</h2>
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={topic.image}
              alt={topic.name}
              className="w-16 h-10 rounded object-cover"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-end">
                <p className="text-md font-bold text-black">{topic.name}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                {/* Progress bar with gradient */}
                <div className="w-[90%] bg-gray-200 rounded-full h-2">
                  <div
                    className={`${gradientClass} h-2 rounded-full`}
                    style={{ width: `${topic.correct_percentage}%` }}
                  ></div>
                </div>
                <span className="text-black font-medium ml-2">
                  {topic.correct_percentage}%{" "}
                </span>
                <span className="inline text-gray-600 font-medium ml-1">Correct</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
