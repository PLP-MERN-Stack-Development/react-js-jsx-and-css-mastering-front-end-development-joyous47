import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className={`px-3 py-1 rounded transition ${
          dark
            ? "bg-gray-100 text-gray-900 hover:bg-white"
            : "bg-white text-blue-600 hover:bg-gray-100"
        }`}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}


