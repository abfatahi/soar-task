import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getUserDetails } from "@/services/apis/user";
import { handleTabChange } from "@/redux/reducers/user";

import Tabs from "@components/organisms/Tab";
import { DashboardLayout } from "@components/layouts";
import EditProfileTab from "./components/EditProfileTab";

import { settingsPageContent } from "@/constants/content";

const SettingsPage = () => {
  const dispatch = useDispatch();

  dispatch(handleTabChange("Settings"));

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  const tabs = [
    {
      label: settingsPageContent.editProfile,
      content: <EditProfileTab userDetails={userDetails} />,
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
