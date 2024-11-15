import React from "react";
import {
  Bell,
  Search,
  Home,
  Book,
  User,
  ChevronLeft,
  ChevronRight,
  Rewind,
  FastForward,
  Play,
  Pause,
} from "lucide-react";
import SearchInput from "./components/partial/SearchInput";
import OnReadDiv from "./components/home/OnReadDiv";
import BtmNavbar from "./components/partial/BtmNavbar";
import GerneSection from "./components/partial/GerneSection";
import books from "./model/Data";
import BookDiv from "./components/home/BookDiv";

const BookReaderUI = () => {
  const [isMobileView, setIsMobileView] = React.useState(
    window.innerWidth < 768
  );
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobileView) {
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="flex justify-between items-center my-6">
          <div>
            <h1 className="text-2xl font-bold">Hello Nancy,</h1>
            <p className="text-gray-500 pt-2">
              What would you like to read today?
            </p>
          </div>
          <Bell className="w-6 h-6" />
        </div>

        {/* Search bar conponent */}
        <SearchInput />

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">On Reading</h2>
            <span className="text-neutral-500">See all</span>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {books.slice(0, 2).map((book, i) => (
              //   OnReadDiv
              <OnReadDiv
                index={i}
                title={book.title}
                author={book.author}
                url={book.url}
              />
            ))}
          </div>
        </div>

        {/* button Book's gerne  */}
        <GerneSection />

        <div className="min-w-[20rem] flex overflow-x-auto space-x-4">
          {books.map((book) => {
            return (
              <BookDiv
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                url={book.url}
              />
            );
          })}
        </div>

        {/* buttom nav bar */}
        <BtmNavbar />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-8">Babuk</h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-blue-600">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <Search className="w-5 h-5" />
              <span>Discover</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <Book className="w-5 h-5" />
              <span>Library</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location: Yogyakarta, Indonesia"
                className="pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <select className="border rounded-lg px-4 py-2">
              <option>Eng</option>
            </select>
            <span className="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-lg">
              ⭐ Premium
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6" />
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6">Continue Reading</h2>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {books.map((book, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <img className="h-40 rounded-lg mb-2" src={book.url} alt="" />
              <h3 className="font-semibold text-sm">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm ml-1">{book.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="font-semibold">Synopsis</button>
              <button className="text-gray-400">Notes</button>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span>2/262</span>
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-gray-600 mb-8">
            <p>
              Read is a gas station janitor in the United States with a meager
              income and no economics background. On the other hand, Fuscone is
              an executive at the Merrill Lynch investment firm and a graduate
              of Harvard University's economics education...
            </p>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <Rewind className="w-6 h-6" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <FastForward className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quick Library */}
      <div className="w-72 border-l bg-white p-4">
        <h2 className="text-lg font-bold mb-4">Quick Library</h2>
        <div className="space-y-4">
          {books.slice(2).map((book, i) => (
            <div key={i} className="flex space-x-3">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div>
                <h3 className="font-semibold text-sm">{book.title}</h3>
                <p className="text-xs text-gray-500">{book.author}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm ml-1">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookReaderUI;
