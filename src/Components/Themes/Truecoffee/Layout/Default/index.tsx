// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IDefaultLayout } from "./DefaultLayout";
import { CartBar } from "../../CartBar";
import { CategoryBar } from "../../CategoryBar";
import { Topbar } from "../../Topbar";
import { Modal } from "../../Modal";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Loading } from "@Components/Loading";
// #endregion Local Imports

const DefaultLayout: React.FunctionComponent<IDefaultLayout.IProps> = (
  { children, title }
  ): JSX.Element => {
    return (
     <div>
        <Header title={ title }/>
        <Loading/>
        <div className="wrapper">
          <Topbar />
          <CategoryBar />
          { children }
          <CartBar />
          <Modal />
        </div>
        <Footer />
      </div>
    );
};

export { DefaultLayout };
