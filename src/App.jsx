import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<p>Coming soon...</p>} />

        {/* 404 Not found */}
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </Router>
  );
};

export default App;
