import React, {useState} from "react";

function GerneSection(){
  const [activeTab, setActiveTab] = useState("all");

  const navItems = [
    { id: "all", label: "All Gerne" },
    { id: "comedy", label: "Comedy" },
    { id: "fiction", label: "Fiction" },
    { id: "romance", label: "Romance" }
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
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {navItems.map((item) => {
             return ( <span 
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 ${activeTab === item.id && "bg-red-100 text-orange-700 rounded-full whitespace-nowrap"}`}
              >
                {item.label}
              </span>)
          })}
        </div>
    );
}

export default GerneSection;