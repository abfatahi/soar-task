import { DashboardLayout } from "@components/layouts";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../services/apis/user";
import { useDispatch } from "react-redux";
import { handleTabChange } from "../../redux/reducers/user";
import Tabs from "../../components/organisms/Tab";
import { settingsPageContent } from "../../constants/content";

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
      content: (
        <div>
          <h1>{userDetails.name}</h1>
          <p>Email: {userDetails.email} </p>
          <p>Username: {userDetails.userName} </p>
          <p>Date of birth: {userDetails.dateOfBirth} </p>
          <p>Present Address: {userDetails.presentAddress} </p>
          <p>Permanent Address: {userDetails.permanentAddress} </p>
          <p>City: {userDetails.city} </p>
        </div>
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
