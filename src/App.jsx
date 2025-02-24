import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { appRoutes } from "./constants/routes";

const DashboardPage = lazy(() => import("@pages/DashboardPage"));
const SettingsPage = lazy(() => import("@pages/SettingsPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={appRoutes.HOME_LINK}
            element={<Navigate to="/dashboard" replace />}
          />
          <Route path={appRoutes.DASHBOARD_LINK} element={<DashboardPage />} />
          <Route path={appRoutes.SETTINGS_LINK} element={<SettingsPage />} />

          {/* 404 Not found */}
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
