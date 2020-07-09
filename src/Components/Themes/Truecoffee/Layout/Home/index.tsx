// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IHomeLayout } from "./HomeLayout";
import { SplashScreen } from "@Components/SplashScreen";
// #endregion Local Imports

const HomeLayout: React.FunctionComponent<IHomeLayout.IProps> = (
  props
): JSX.Element => {
    const { children, title } = props;

    return (
      <SplashScreen title={ title }/>
    );
};

export { HomeLayout };
