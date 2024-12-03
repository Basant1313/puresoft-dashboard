import React from "react";

interface Group {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface GroupsLeaderboardProps {
  data: Group[];
}

const GroupsLeaderboard: React.FC<GroupsLeaderboardProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-3xl p-6 w-full">
      <h3 className="font-bold text-gray-400 mb-4 text-lg">Groups Leaderboard</h3>
      <ul>
        {data.map((group, index) => {
          const trend = group.accuracy_percentage > group.previous_accuracy_percentage ? "up" : "down";
          const trendColor = trend === "up" ? "text-green-500" : "text-red-500";

          return (
            <li key={index} className="flex items-center justify-between mb-4 last:mb-0 pb-4">
              <div>
                <p className="font-bold text-gray-900">{group.group_name}</p>
                <div className="flex text-sm text-gray-500">
                  <p>{group.points_per_user} Points /</p>
                  <p>User: {group.accuracy_percentage}% Correct</p>
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

export default GroupsLeaderboard;
