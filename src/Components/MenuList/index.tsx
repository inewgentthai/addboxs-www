// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IMenuList } from "./MenuList";
import { SingleMenu } from "@Components/SingleMenu";
// #endregion Local Imports

const MenuList: React.FunctionComponent<IMenuList.IProps> = (menus): JSX.Element => {
    const MenuList =  menus.menus.data.map((menu, key) =>
      <SingleMenu key={ key } menu={ menu } />
    );

    return (
      <section className="item-list">
        <div className="container">
          <div className="row no-gutters">
          { MenuList }
          </div>
        </div>
      </section>
    );
};

export { MenuList };
