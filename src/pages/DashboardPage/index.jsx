import { DashboardLayout } from "@components/layouts";

import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";
import LoadingSpinner from "@/components/atoms/Spinner";


function DashboardPage() {
  const { profile } = useSelector(userSelector);

  return (
    <DashboardLayout>
      {
        <>
          <h1>Overview</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <LoadingSpinner/>
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
