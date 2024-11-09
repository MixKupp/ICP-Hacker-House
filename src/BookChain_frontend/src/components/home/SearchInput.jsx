import React from "react";
import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search title, topic or author"
        className="w-full p-3 pl-10 bg-gray-100 rounded-xl"
      />
    </div>
  );
}

export default SearchInput;