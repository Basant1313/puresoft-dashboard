import React from "react";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Filters from "./components/Filters";
import dashboardData from "./data/data";
import Stats from "./components/Stats";
import UserLeaderboard from "./components/Leaderboards";
import GroupsLeaderboard from "./components/GroupsLeadersBoards";
import TopicList from "./components/TopicList";
import Activity from "./components/Activity";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-gray-100 min-h-screen">
      
      {/* Sidebar */}
      <div className="w-full lg:w-1/6 bg-white shadow-md">
      
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6">

      <div className="flex justify-between">
        <h1 className="text-black text-2xl font-medium mb-4">Reports</h1>
        <div className="flex gap-2">
        <svg fill="#000000" className="w-6 h-6" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M74.34326,85.65723A8.00018,8.00018,0,0,1,85.65674,74.34277L120,108.68652V24a8,8,0,0,1,16,0v84.68652l34.34326-34.34375a8.00018,8.00018,0,1,1,11.31348,11.31446l-48,48c-.023.023-.04883.042-.07178.06494-.165.16113-.33447.31689-.51269.46338-.09766.08008-.20118.15039-.30176.22558-.1084.08106-.21485.165-.32764.24073-.11621.07812-.2373.1455-.35693.21679-.10449.0625-.20655.12793-.31446.18555-.12011.06445-.24414.11914-.36669.17676-.11426.0542-.22657.11084-.34327.15967-.11816.04882-.23925.08837-.35937.13134-.126.04541-.251.09375-.37988.13282-.11963.03613-.24122.063-.36231.09326-.13184.0332-.26269.07031-.397.09716-.13965.02735-.28028.04395-.42041.064-.11817.01709-.23389.03906-.353.05078-.26269.02588-.52588.04-.78955.04s-.52686-.01416-.78955-.04c-.11914-.01172-.23486-.03369-.353-.05078-.14013-.02-.28076-.03662-.42041-.064-.13428-.02685-.26513-.064-.397-.09716-.12109-.03028-.24268-.05713-.36231-.09326-.1289-.03907-.2539-.08741-.37988-.13282-.12012-.043-.24121-.08252-.35937-.13134-.1167-.04883-.229-.10547-.34327-.15967-.12255-.05762-.24658-.11231-.36669-.17676-.10791-.05762-.21-.12305-.31446-.18555-.11963-.07129-.24072-.13867-.35693-.21679-.11279-.07569-.21924-.15967-.32764-.24073-.10058-.07519-.2041-.1455-.30176-.22558-.1748-.14356-.3413-.29737-.50341-.45508-.02637-.02539-.05518-.04736-.08106-.07324ZM240,136v64a16.01833,16.01833,0,0,1-16,16H32a16.01833,16.01833,0,0,1-16-16V136a16.01833,16.01833,0,0,1,16-16H86.05859l24.97071,24.9707a24.00066,24.00066,0,0,0,33.9414,0L169.94141,120H224A16.01833,16.01833,0,0,1,240,136Zm-39.99951,32a12,12,0,1,0-12,12A12,12,0,0,0,200.00049,168Z"></path> </g></svg>
        <p className="text-black font-medium">Download</p>
        </div>
      </div>
        <hr />
        {/* Filters */}
        <Filters />

        {/* Stats and Activity Section */}
        <div className="flex flex-col lg:flex-row gap-2 mt-4">
          <Stats data={dashboardData.metrics} />
          <Activity data={dashboardData.activity} />
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
};

export default Home;
