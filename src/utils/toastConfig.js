import React from "react";
import CustomToast from "../components/CustomToast";

const toastConfig = {
  custom: (props) => <CustomToast {...props} />,
};

export default toastConfig;
