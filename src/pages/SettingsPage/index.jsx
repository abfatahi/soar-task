import { DashboardLayout } from "@components/layouts";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../services/apis/user";
import { useDispatch } from "react-redux";
import { handleTabChange } from "../../redux/reducers/user";

const SettingsPage = () => {
  const dispatch = useDispatch()

  dispatch(handleTabChange("Settings"))

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails().then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <>
          <h1>{userDetails.name}</h1>
          <p>Email: {userDetails.email} </p>
          <p>Username: {userDetails.userName} </p>
          <p>Date of birth: {userDetails.dateOfBirth} </p>
          <p>Present Address: {userDetails.presentAddress} </p>
          <p>Permanent Address: {userDetails.permanentAddress} </p>
          <p>City: {userDetails.city} </p>
        </>
      }
    </DashboardLayout>
  );
};

export default SettingsPage;
