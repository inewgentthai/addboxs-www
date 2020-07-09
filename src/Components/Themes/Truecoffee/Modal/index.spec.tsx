// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Modal } from "@Components/Themes/Truecoffee";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// #endregion Local Imports

describe("Modal", () => {
    const initialState = {
        menu: {
            data: [],
            content: [],
            loading: true,
            modal: false
        },
        loading: {
            status: true
        }
    }
    const mockStore = configureStore()
    let store

    it("should match snapshot", () => {
        store = mockStore(initialState);
        const { container } = render(
            <Provider store={store}>
                <Modal>Test</Modal>
            </Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
