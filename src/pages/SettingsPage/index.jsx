import { DashboardLayout } from "@components/layouts";
import { useEffect, useState } from "react";
import { getUserDetails } from "@/services/apis/user";
import { useDispatch } from "react-redux";
import { handleTabChange } from "@/redux/reducers/user";
import Tabs from "@components/organisms/Tab";
import { settingsPageContent } from "@/constants/content";
import EditProfileTab from "./components/EditProfileTab";

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
