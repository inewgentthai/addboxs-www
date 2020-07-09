// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Header } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

describe("Components", () => {
    describe("Header", () => {
        it("should match snapshot", () => {
            const { container } = render(<Header text="Test" />);

            expect(container).toMatchSnapshot();
        });
    });
});
