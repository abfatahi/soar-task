import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "@/redux/reducers/user";

import { DashboardLayout } from "@components/layouts";

function DashboardPageComponent() {
  const [count, setCount] = useState(0);
  const { data } = useSelector(userSelector);

  return (
    <DashboardLayout>
      {
        <>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPageComponent;
