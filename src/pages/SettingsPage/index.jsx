import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { handleTabChange } from "@/redux/reducers/user";
import { getUserDetails } from "@/services/apis/user";

import Tabs from "@components/organisms/Tab";
import { DashboardLayout } from "@components/layouts";
import EditProfileTab from "./components/EditProfileTab";

import { settingsPageContent } from "@/constants/content";
import ErrorBoundary from "../../components/layouts/ErrorBoundary";
import { handleUpdateUserData } from "../../redux/reducers/user";

const SettingsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleTabChange("Settings"));
    
    getUserDetails().then((res) => {
      dispatch(handleUpdateUserData(res.data));
    });
  }, [dispatch]);

  const tabs = [
    {
      label: settingsPageContent.editProfile,
      content: (
        <ErrorBoundary>
          <EditProfileTab />
        </ErrorBoundary>
      ),
    },
    {
      label: settingsPageContent.preferences,
      content: <div>{settingsPageContent.preferenceTabContent}</div>,
    },
    {
      label: settingsPageContent.security,
      content: <div>{settingsPageContent.securityTabContent}</div>,
    },
  ];

  return <DashboardLayout children={<Tabs tabs={tabs} />} />;
};

export default SettingsPage;
