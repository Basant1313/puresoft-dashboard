"use client"; // Ensures this component runs as a Client Component

import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar visibility

  return (
    <>
      {/* Sidebar (Fixed) */}
      <div
        className={`h-full w-64 bg-white border-r shadow-md flex flex-col fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
          <h1 className="text-red-600 text-3xl font-bold tracking-widest">
            TESLA
          </h1>
        </div>

        {/* Navigation */}
        <nav className="py-4 space-y-2">
          <MenuItem label="Reports" icon={<IconReports />} isActive />
          <MenuItem label="Library" icon={<IconLibrary />} />
          <MenuItem label="People" icon={<IconPeople />} />
          <MenuItem label="Activities" icon={<IconActivities />} />
        </nav>

        {/* Support Section */}
        <div className="py-4">
          <h2 className="px-6 text-sm font-semibold text-gray-500">Support</h2>
          <MenuItem label="Get Started" icon={<IconGetStarted />} />
          <MenuItem label="Settings" icon={<IconSettings />} />
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span> {/* Placeholder for an avatar */}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">johndoe@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md lg:hidden"
      >
        {isOpen ? <IconClose /> : <IconMenu />}
      </button>

      {/* Backdrop for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// MenuItem Component
type MenuItemProps = {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  isActive = false,
}) => (
  <a
    href="#"
    className={`flex items-center mx-4 space-x-4 px-6 py-2 rounded-md ${
      isActive
        ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

// Icons for Menu and Close
const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Placeholder Icons
// Existing Icons
const IconReports = () => ( <svg fill="currentColor" className="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 192.287 192.287" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M122.901,0H19.699v192.287h152.889v-142.6L122.901,0z M146.981,45.299h-19.686V25.612L146.981,45.299z M34.699,177.287V15 h77.596v37.799c0,4.142,3.357,7.5,7.5,7.5h37.793v116.988H34.699z"></path> <rect x="53.141" y="149.004" width="86.006" height="10"></rect> <rect x="53.141" y="55.101" width="51.058" height="10"></rect> <polygon points="121.248,86.935 126.79,86.935 105.371,108.353 88.623,91.605 51.597,128.634 58.667,135.706 88.623,105.748 105.371,122.495 133.861,94.005 133.861,99.535 143.861,99.535 143.861,76.935 121.248,76.935 "></polygon> <rect x="53.141" y="33.283" width="51.058" height="10"></rect> </g> </g></svg>
 
);

const IconLibrary = () => (
  <svg viewBox="-4 0 32 32" className="w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>thunder</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-205.000000, -723.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="thunder" transform="translate(156.000000, 546.000000)"> <g transform="translate(12.000000, 8.000000)" id="Shape"> <polygon fill="#000" points="21 0 8.842 0 2 14 8 14 0 32 24 13 15 13"> </polygon> <polygon fill="#0000C0058" points="16.421 19 0 32 5.778 19"> </polygon> </g> </g> </g> </g> </g> </g></svg>
);

const IconPeople = () => (
  <svg fill="#000000" className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-j</title><path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z"></path><path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z"></path><path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"></path><path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"></path></g></svg>
);

const IconActivities = () => (
  <svg fill="#000000" className="w-6 h-6" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.339-3.332a.794.794 0 0 0-.791-.792h-.268v.767A1.11 1.11 0 0 1 9.91 7.334H6.99a1.11 1.11 0 0 1-1.11-1.108v-.767h-.267a.794.794 0 0 0-.792.792v7.403a.794.794 0 0 0 .792.792h5.673a.794.794 0 0 0 .791-.792zm-1.077 2.522H5.787v.792h5.214zm0 1.713H5.787v.792h5.214zm0 1.713H5.787v.791h5.214zM6.673 6.226a.318.318 0 0 0 .317.317h2.92a.318.318 0 0 0 .317-.317v-.914a.318.318 0 0 0-.316-.317h-.557v-.843a.318.318 0 0 0-.317-.316H7.864a.318.318 0 0 0-.317.316v.843H6.99a.318.318 0 0 0-.317.317zm1.384-1.581a.396.396 0 1 1 .396.396.396.396 0 0 1-.396-.396z"></path></g></svg>
);

const IconGetStarted = () => (
  <svg fill="#000000" className="w-6 h-6" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.231-1.918a3.692 3.692 0 1 0-7.384 0 3.748 3.748 0 0 0 .389 1.665 7.163 7.163 0 0 0 .723 1.137 2.128 2.128 0 0 1 .483.857v.817a.633.633 0 0 0 .634.633h2.926a.633.633 0 0 0 .633-.633v-.817a2.125 2.125 0 0 1 .483-.857 7.142 7.142 0 0 0 .724-1.137 3.748 3.748 0 0 0 .389-1.665zm-1.913 5.942a.317.317 0 0 0-.316-.316H7.03a.317.317 0 1 0 0 .633h2.926a.317.317 0 0 0 .316-.317zm-.473.933a.158.158 0 0 0-.15-.107H7.298a.158.158 0 0 0-.098.283 2.075 2.075 0 0 0 2.547 0 .158.158 0 0 0 .053-.176z"></path></g></svg>
);

const IconSettings = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#292D32"></path> </g></svg>
);

export default Sidebar;
