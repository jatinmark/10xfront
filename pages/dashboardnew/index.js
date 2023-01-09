import Sidebar from "../../components/dashboardnew/Sidebar";
import Dashboard from "../../components/dashboardnew/Dashboard";
import styles from "../../styles/dashboardnew/Layout.module.css";
import Referdashboard from "../../components/dashboardnew/Referdashboard";

const Layout = () => {
  return (
    <div className={styles.container}>
          <Sidebar />
          <Referdashboard />
    </div>
  )
}

export default Layout;
