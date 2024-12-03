import Sidebar from '../components/Sidebar';
import Filters from '../components/Filters';
import Stats from '../components/Stats';
import Leaderboards from '../components/Leaderboards';

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Filters />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Stats />
          <Leaderboards />
        </div>
      </div>
    </div>
  );
}
