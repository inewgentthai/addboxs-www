// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { DefaultLayout } from "@Components/Themes/Truecoffee/Layout";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// #endregion Local Imports

describe("DefaultLayout", () => {
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
        store = mockStore(initialState)
        const { container } = render(
        <Provider store={store}>
            <DefaultLayout title='Test'>Test</DefaultLayout>
        </Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
