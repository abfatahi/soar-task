import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const DashboardPage = lazy(() => import("@pages/Dashboard"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<p>Coming soon...</p>} />

          {/* 404 Not found */}
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
