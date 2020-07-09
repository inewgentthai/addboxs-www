// #region Global Imports
import * as React from "react";
import Link from 'next/link'

// #endregion Global Imports

// #region Local Imports
import { ISplashScreen } from "./SplashScreen";
import { Header } from "../Themes/Truecoffee/Header";
// #endregion Local Imports

const SplashScreen: React.FunctionComponent<ISplashScreen.IProps> = (
  props
): JSX.Element => {
    const { title } = props;

    return (
      <div className="splash">
        <Header title={ title } />
        <div className="wrapper d-flex align-items-center justify-content-center">
          <section className="splash-container">
            <div className="container">
              <Link href={`/menus`} as={`/menus`}>
                <a>
                  <img src="/static/truecoffee-ordering/images/logo-splash.svg"/>
                </a>
              </Link>
            </div>
          </section>
        </div>
        <style jsx global>{`
          body {
            overflow: hidden;
          }
          body>div, #__next, #__next>div, #__next>div>div {
            height: 100%;
          }
        `}</style>
      </div>
    );
};

export { SplashScreen };
