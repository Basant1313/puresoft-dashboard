import "./globals.css";
import Sidebar from './components/Sidebar';
import Filters from './components/Filters';
import dashboardData from "./data/data";
import Stats from "./components/Stats";
import UserLeaderboard from "./components/Leaderboards";
import GroupsLeaderboard from "./components/GroupsLeadersBoards";
import TopicList from './components/TopicList';
import Activity from "./components/Activity";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div>
      <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">
        {/* Filters */}
        <Filters />
        
        {/* Stats and Activity Section */}
        <div className="flex flex-col lg:flex-row gap-2 mt-4">
          <Stats data={dashboardData.metrics}  />
          <Activity data={dashboardData.activity}  />
        </div>

        {/* Topics Section */}
        <div className="flex flex-col gap-6 lg:flex-row mt-6">
          {/* Weakest Topics */}
          <TopicList
            topics={dashboardData.topics.weakest}
            title="Weakest Topics"
            gradientClass="bg-gradient-to-r from-orange-400 to-red-400"
            
          />
          {/* Strongest Topics */}
          <TopicList
            topics={dashboardData.topics.strongest}
            title="Strongest Topics"
            gradientClass="bg-gradient-to-r from-green-200 to-green-400"
            
          />
        </div>

        {/* Leaderboards Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <UserLeaderboard data={dashboardData.user_leaderboard} />
          <GroupsLeaderboard data={dashboardData.groups_leaderboard} />
        </div>
      </div>
    </div>
  );
}
