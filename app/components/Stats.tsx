import React from "react";

// Define types for the props
interface StatsData {
  active_users: {
    current: number;
    total: number;
  };
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
}

interface StatsProps {
  data: StatsData;
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  const {
    active_users: { current, total },
    questions_answered,
    average_session_length_seconds,
    starting_knowledge_percentage,
    current_knowledge_percentage,
  } = data;

  const formatSessionLength = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      <StatCard title="Active Users" value={`${current}/${total}`} />
      <StatCard title="Questions Answered" value={questions_answered.toString()} />
      <StatCard
        title="Avg Session Length"
        value={formatSessionLength(average_session_length_seconds)}
      />
      <StatCardWithGraph
        title="Starting Knowledge"
        value={`${starting_knowledge_percentage}%`}
        trend={[60, 62, 65, 68, 72, 74, 78, 80, 77, 73]} // More waves added
      />
      <StatCardWithGraph
        title="Current Knowledge"
        value={`${current_knowledge_percentage}%`}
        trend={[70, 72, 75, 80, 82, 84, 87, 85, 83, 88]} // More waves added
      />
      <StatCardWithGraph
        title="Knowledge Gain"
        value={`+${current_knowledge_percentage - starting_knowledge_percentage}%`}
        trend={[10, 15, 18, 23, 30, 33, 38, 45, 50, 58]} // More waves added
        highlight
      />
    </div>
  );
};

// Reusable component for stats with graphs
interface StatCardWithGraphProps {
  title: string;
  value: string;
  trend: number[];
  highlight?: boolean;
}

const StatCardWithGraph: React.FC<StatCardWithGraphProps> = ({
  title,
  value,
  trend,
  highlight = false,
}) => (
  <div className="bg-white rounded-3xl shadow-sm p-4 border border-gray-200 w-full h-full">
    <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
    <p
      className={`text-2xl font-bold mt-2 ${
        highlight ? "text-green-500" : "text-gray-900"
      }`}
    >
      {value}
    </p>
    <div className="mt-4">
      <MiniGraph trend={trend} />
    </div>
  </div>
);

// MiniGraph component for rendering wavy graphs
interface MiniGraphProps {
  trend: number[];
}

const MiniGraph: React.FC<MiniGraphProps> = ({ trend }) => {
  const maxValue = Math.max(...trend);
  const minValue = Math.min(...trend);

  // Normalize data for the graph
  const normalizedTrend = trend.map(
    (value) => ((value - minValue) / (maxValue - minValue)) * 100
  );

  // Create SVG points for the graph with more oscillations
  const points = normalizedTrend
    .map((value, index) => `${(index / (trend.length - 1)) * 100},${100 - value}`)
    .join(" ");

  return (
    <svg
      className="w-full h-8"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        points={points}
        strokeLinecap="round"
      />
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
      <polygon
        fill="url(#gradient)"
        points={`${points} 100,100 0,100`}
        opacity="0.4"
      />
    </svg>
  );
};

// Reusable StatCard without graphs
interface StatCardProps {
  title: string;
  value: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, highlight = false }) => (
  <div className="bg-white rounded-3xl shadow-sm p-4 border border-gray-200 w-full h-full">
    <h3 className="text-gray-500 font-medium">{title}</h3>
    <p
      className={`text-2xl font-bold mt-2 ${
        highlight ? "text-green-500" : "text-gray-900"
      }`}
    >
      {value}
    </p>
  </div>
);

export default Stats;
