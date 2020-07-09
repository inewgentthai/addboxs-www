// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { ICategoryBar } from "./CategoryBar";
// #endregion Local Imports

const CategoryBar: React.FunctionComponent<ICategoryBar.IProps> = (): JSX.Element => {
    return (
      <section className="categories">
        <div className="container">
          <div className="categories-list row justify-content-center">
            <div className="item capsule"><a href="#">Allsss</a></div>
            <div className="item capsule active"><a href="#">Coffee</a></div>
            <div className="item capsule"><a href="#">Tea</a></div>
            <div className="item capsule"><a href="#">Non Coffee</a></div>
            <div className="item capsule"><a href="#">Tea</a></div>
            <div className="item capsule"><a href="#">Non Coffee</a></div>
            <div className="item capsule"><a href="#">Tea</a></div>
          </div>
          <div className="row">
            <div className="col cat-found text-center"><b className="text-red">“Coffee”</b> Found 8 item</div>
          </div>
        </div>
      </section>
    );
};

export { CategoryBar };
