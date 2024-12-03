import React from "react";

// Define the types for the props
interface MonthlyActivity {
  month: string;
  value: number;
}

interface ActivityData {
  monthly: MonthlyActivity[];
}

interface ActivityProps {
  data: ActivityData;
}

const Activity: React.FC<ActivityProps> = ({ data }) => {
  // Get the max value for the activity bars
  const maxValue = Math.max(...data.monthly.map((item) => item.value));

  return (
    <div className="w-full h-full bg-white shadow-md rounded-3xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Activity</h2>
        <div className="text-gray-500 text-sm flex items-center">
          Month
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <hr className="h-4 font-bold text-lg" />

      {/* Scrollable Container */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide h-[30vh] md:h-[25vh]">
        {data.monthly.map(({ month, value }, index) => (
          <Bar key={index} month={month} value={value} maxValue={maxValue} />
        ))}
      </div>
    </div>
  );
};

interface BarProps {
  month: string;
  value: number;
  maxValue: number;
}

const Bar: React.FC<BarProps> = ({ month, value, maxValue }) => {
  // Calculate the height of each bar based on the max value
  const barHeight = `${(value / maxValue) * 100}%`; // Adjust height calculation for visibility

  return (
    <div className="flex flex-col items-center justify-end min-w-[40px]">
      <div
        className="rounded-full bg-blue-100 flex items-end justify-end h-full"
        style={{ height: "100%" }} // Maintain a full height container
      >
        <div
          className="w-3 rounded-full bg-blue-500"
          style={{ height: barHeight }} // Dynamically set the height of the blue bar
        ></div>
      </div>
      <span className="text-sm text-gray-500 mt-2">{month}</span>
    </div>
  );
};

export default Activity;
