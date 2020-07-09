// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Topbar } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

describe("Topbar", () => {
    it("should match snapshot", () => {
        const { container } = render(<Topbar>Test</Topbar>);

        expect(container).toMatchSnapshot();
    });
});
