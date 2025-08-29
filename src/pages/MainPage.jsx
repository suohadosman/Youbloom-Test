import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header"; 
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (search === "") {
      setSuggestions([]);
      return;
    }
    const filtered = users.filter((u) =>
      u.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setSuggestions(filtered);
  }, [search, users]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <h2 className="text-3xl font-bold text-[#ba1615] text-center mt-8 mb-4">
       Youbloom Users
      </h2>

      <div className="max-w-md mx-auto mt-6 relative">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ba1615]"
          />
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto shadow-lg">
            {suggestions.map((u) => (
              <li
                key={u.id}
                className="px-4 py-2 hover:bg-[#f9e2e2] cursor-pointer"
                onClick={() => {
                  setSearch(u.name);
                  setSuggestions([]);
                }}
              >
                {u.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-t-[#ba1615] border-gray-300 rounded-full animate-spin"></div>
        </div>
      ) : (
        <main className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users
            .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
            .map((u) => (
              <Link
                to={`/users/${u.id}`}
                key={u.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center p-4 h-64"
              >
                <div className="h-24 w-24 rounded-full bg-[#ba1615] flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {u.name[0].toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold text-[#700e0f] mb-1 text-center">
                  {u.name}
                </h3>
                <p className="text-gray-500 text-sm text-center">{u.email}</p>
              </Link>
            ))}
        </main>
      )}
    </div>
  );
}
