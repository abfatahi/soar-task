
import { LayoutContainer } from "./DashboardLayout.module";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const DashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default DashboardLayout;
