// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { CartBar } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

describe("CartBar", () => {
    it("should match snapshot", () => {
        const { container } = render(<CartBar>Test</CartBar>);

        expect(container).toMatchSnapshot();
    });
});
