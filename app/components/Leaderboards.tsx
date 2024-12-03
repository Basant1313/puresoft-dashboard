import React from "react";

interface User {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface UserLeaderboardProps {
  data: User[];
}

const UserLeaderboard: React.FC<UserLeaderboardProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-3xl p-6 w-full">
      <h3 className="font-bold text-gray-400 mb-4 text-lg">User Leaderboard</h3>
      <ul>
        {data.map((user, index) => {
          const trend = user.accuracy_percentage > user.previous_accuracy_percentage ? "up" : "down";
          const trendColor = trend === "up" ? "text-green-500" : "text-red-500";

          return (
            <li key={index} className="flex items-center justify-between mb-4 last:mb-0  pb-4">
              <div className="flex items-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <p>{user.points} Points -</p>
                    <p>Accuracy: {user.accuracy_percentage}%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800 text-lg">{index + 1}</span>
                {/* Trend Indicator with Triangle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ${trendColor}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {trend === "up" ? (
                    <polygon points="12,4 20,20 4,20" />
                  ) : (
                    <polygon points="12,20 4,4 20,4" />
                  )}
                </svg>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserLeaderboard;
