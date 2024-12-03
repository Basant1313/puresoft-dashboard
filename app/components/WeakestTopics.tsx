import React from "react";

interface Topic {
  name: string;
  image: string;
  correct_percentage: number;
}

interface WeakestTopicsProps {
  weakest: Topic[];
}

const WeakestTopics: React.FC<WeakestTopicsProps> = ({ weakest }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg text-gray-400 font-medium mb-4">Weakest Topics</h2>
      <div className="space-y-6">
        {weakest.map((topic, index) => (
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
                {/* Increased the width of the progress bar */}
                <div className="w-[90%] bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full"
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

export default WeakestTopics;
