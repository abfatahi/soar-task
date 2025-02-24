import { DashboardLayout } from "@components/layouts";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";


function DashboardPage() {
  const { profile } = useSelector(userSelector);

  return (
    <DashboardLayout>
      {
        <>
          <h1>Overview</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
