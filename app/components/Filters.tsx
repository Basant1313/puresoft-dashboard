"use client";

import React, { useState } from "react";

// Sample Data
const groups = [
  { name: "All Users", count: 400 },
  { name: "Managers", count: 14 },
  { name: "Trainers", count: 4 },
];

const users = [
  { name: "Adrian Lu" },
  { name: "Evelyn Hamilton" },
];

const timeframes = ["Last 7 Days", "This Month", "This Year", "Custom"];
const topics = ["All Topics", "Topic A", "Topic B", "Topic C"];

const FilterBar: React.FC = () => {
  const [isTimeframeOpen, setIsTimeframeOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Month");

  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  

  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  const toggleTimeframeDropdown = () => {
    setIsTimeframeOpen((prev) => !prev);
  };

  const handleTimeframeSelect = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
    setIsTimeframeOpen(false);
  };

  const togglePeopleDropdown = () => {
    setIsPeopleDropdownOpen(!isPeopleDropdownOpen);
  };

  const handleGroupSelect = (group: string) => {
    setSelectedGroup(group);
  };

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
  };

  const clearPeopleFilters = () => {
    setSelectedGroup(null);
    setSelectedUser(null);
  };

  const toggleTopicDropdown = () => {
    setIsTopicOpen((prev) => !prev);
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setIsTopicOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-4 rounded-lg w-full mx-auto">
      {/* Timeframe Filter */}
      <div className="relative w-full lg:w-1/3">
        <div
          className="flex items-center justify-between bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm cursor-pointer"
          onClick={toggleTimeframeDropdown}
        >
          <span className="text-gray-600 font-medium">
            Timeframe: <span className="text-gray-800">{selectedTimeframe}</span>
          </span>
          <span className="text-gray-500">{isTimeframeOpen ? "▲" : "▼"}</span>
        </div>

        {isTimeframeOpen && (
          <div className="absolute left-0 z-50 mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg w-full">
            {timeframes.map((timeframe, index) => (
              <div
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  selectedTimeframe === timeframe
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleTimeframeSelect(timeframe)}
              >
                {timeframe}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* People Filter */}
      <div className="relative w-full lg:w-1/3">
        <div
          className="flex w-full items-center bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm cursor-pointer"
          onClick={togglePeopleDropdown}
        >
          <span className="text-gray-600 font-medium mr-2">People:</span>
          <div className="flex flex-wrap gap-2">
            {/* {selectedGroup && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                {selectedGroup}
              </span>
            )}
            {selectedUser && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                {selectedUser}
              </span>
            )}
            {!selectedGroup && !selectedUser && (
              <span className="text-gray-500">Select</span>
            )} */}
          </div>
        </div>

        {isPeopleDropdownOpen && (
          <div className="absolute z-50 mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg w-full max-h-64 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium text-sm">
                  People Filters :
                  <div className="flex flex-wrap gap-2">
            {selectedGroup && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                {selectedGroup} <button
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.stopPropagation();
                handlePeopleSelect(filter);
              }}
            >
              ✕
            </button>
              </span>
            )}
            {selectedUser && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                {selectedUser}  <button
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.stopPropagation();
                handlePeopleSelect(filter);
              }}
            >
              ✕
            </button>
              </span>
            )}
            {!selectedGroup && !selectedUser && (
              <span className="text-gray-500">Select</span>
            )}
          </div>
                </span>
                {(selectedGroup || selectedUser) && (
                  <button
                    className="text-blue-600 font-medium text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearPeopleFilters();
                    }}
                  >
                  clear
                  </button>
                )}
              </div>
              <input
          type="text"
          placeholder="Search"
          className="mt-2 w-full border border-gray-300 rounded-md p-2 text-sm"
        />
            </div>

            {/* Groups Section */}
            <div className="border-t px-4 py-2">
              <p className="text-xs text-gray-400 font-medium uppercase">Groups</p>
              {groups.map((group, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between py-2 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="group"
                      value={group.name}
                      checked={selectedGroup === group.name}
                      onChange={() => handleGroupSelect(group.name)}
                      className="form-radio text-blue-600"
                    />
                    <span className="text-gray-800 font-medium">{group.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{group.count}</span>
                </label>
              ))}
            </div>

            {/* Users Section */}
            <div className="border-t px-4 py-2">
              <p className="text-xs text-gray-400 font-medium uppercase">Users</p>
              {users.map((user, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between py-2 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="user"
                      value={user.name}
                      checked={selectedUser === user.name}
                      onChange={() => handleUserSelect(user.name)}
                      className="form-radio text-blue-600"
                    />
                    <span className="text-gray-800 font-medium">{user.name}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Topic Filter */}
      <div className="relative w-full lg:w-1/3">
        <div
          className="flex items-center justify-between bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm cursor-pointer"
          onClick={toggleTopicDropdown}
        >
          <span className="text-gray-600 font-medium">
            Topic: <span className="text-gray-800">{selectedTopic}</span>
          </span>
          <span className="text-gray-500">{isTopicOpen ? "▲" : "▼"}</span>
        </div>

        {isTopicOpen && (
          <div className="absolute left-0 z-50 mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg w-full overflow-hidden">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  selectedTopic === topic
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleTopicSelect(topic)}
              >
                {topic}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
