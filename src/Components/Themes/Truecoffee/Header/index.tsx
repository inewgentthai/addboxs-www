// #region Global Imports
import * as React from "react";
import Head from 'next/head';
// #endregion Global Imports

// #region Local Imports
import "./style.scss";
import "@Static/truecoffee-ordering/css/bootstrap.css";
import "@Static/truecoffee-ordering/css/bootstrap-reboot.css";
import "@Static/truecoffee-ordering/css/slick.css";
import "@Static/truecoffee-ordering/css/slick-theme.css";
import "@Static/truecoffee-ordering/css/style.css";
// #endregion Local Imports

// #region Interface Imports
import { IHeader } from "./Header";
// #endregion Interface Imports

const Header: React.FunctionComponent<IHeader.IProps> = (
    props
): JSX.Element => {
    const { title } = props;

    return (
        <Head>
          <title>{ title } </title>
          <meta property="og:title" content={ title } key="title" />
        </Head>
    );
};

export { Header };
