// import React from "react";
// import { Home, Search, Book, User } from "lucide-react";

// function BtmNavbar() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
//       <div className="flex justify-around">
//         <Home className="w-6 h-6 text-blue-500" />
//         <Search className="w-6 h-6 text-gray-400" />
//         <Book className="w-6 h-6 text-gray-400" />
//         <User className="w-6 h-6 text-gray-400" />
//       </div>
//     </div>
//   );
// }

// export default BtmNavbar;


import React, { useState } from "react";
import { Home, Search, Book, User } from "lucide-react";

function BtmNavbar() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "library", icon: Book, label: "Library" },
    { id: "profile", icon: User, label: "Profile" }
  ];

  function renderContent() {
    switch (activeTab) {
      case "home":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Home Content</h2>
            <p>Welcome to the home page!</p>
          </div>
        );
      case "search":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Search</h2>
            <p>Find what you're looking for...</p>
          </div>
        );
      case "library":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Library</h2>
            <p>Your saved content appears here</p>
          </div>
        );
      case "profile":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p>Your personal information and settings</p>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="h-screen pb-16">
      {/* Content Area */}
      <div className="h-full overflow-y-auto">
        {renderContent()}
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center"
              >
                <Icon 
                  className={`w-6 h-6 ${
                    activeTab === item.id ? "text-red-500" : "text-gray-400"
                  }`}
                />
                <span className={`text-xs mt-1 ${
                  activeTab === item.id ? "text-red-500" : "text-gray-400"
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BtmNavbar;