import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { appRoutes } from "./constants/routes";
import Loader from "./components/atoms/Loader";
import { getUserDetails } from "@/services/apis/user";
import { useDispatch } from "react-redux";
import { handleUpdateUserData } from "./redux/reducers/user";

const DashboardPage = lazy(() => import("@pages/DashboardPage"));
const SettingsPage = lazy(() => import("@pages/SettingsPage"));

const App = () => {
  // Fetch User data
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails().then((res) => {
      dispatch(handleUpdateUserData(res.data));
    });
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
