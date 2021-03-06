import React, { useState } from "react";
import NavbarManage from "components/NavbarManager";
import Sidebar from "../../components/Sidebar";
import "./style.scss";

import ManageMerchant from "features/ManagerApp/components/ManageMerchant";
import DashBoard from "features/ManagerApp/components/DashBoard";
import ManagePartner from "features/ManagerApp/components/ManagePartner";
import ManageCustomer from "features/ManagerApp/components/ManageCustomer";
import managerApi from "api/managerApi";
import { logout } from "redux/loginManagerAppSlice";
import { useDispatch } from "react-redux";
import Voucher from "../../components/Voucher";

function Manager(props) {
  const [sidebar, setSidebar] = useState(+localStorage.navManager + 1 || 1);
  const dispatch = useDispatch();

  // Check login is the manager
  managerApi.checkAuth().then((res) => {
    try {
      if (res.status === 400) {
        dispatch(logout());
        window.location.reload();
      }
    } catch {
      return;
    }
  });

  return (
    <div className="ManagerApp">
      <NavbarManage />
      <div className="main">
        <div className="col l-2">
          <Sidebar setSidebar={setSidebar} />
        </div>
        <div className="col l-10 content">
          {sidebar === 1 ? (
            <DashBoard />
          ) : sidebar === 2 ? (
            <ManageMerchant />
          ) : sidebar === 3 ? (
            <ManagePartner />
          ) : sidebar === 4 ? (
            <ManageCustomer />
          ) : (
            <Voucher />
          )}
        </div>
      </div>
    </div>
  );
}

export default Manager;
