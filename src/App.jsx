import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import ApiData from "./pages/ApiData";

// 🌓 Import your theme context
import { ThemeProvider } from "./components/ThemeContext"; 

function App() {
  return (
    // ✅ Wrap everything inside ThemeProvider
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/api" element={<ApiData />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
