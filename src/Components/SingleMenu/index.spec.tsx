// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { SingleMenu } from "@Components";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// #endregion Local Imports

describe("SingleMenu", () => {
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
        const menu = {
            id: 1,
            name: {
                en: 'en',
                th: 'ไทย'
            },
            inventories: [
                {
                    name: {
                        en: 'en',
                        th: 'ไทย'
                    },
                    price: 50
                }
            ]
        }
        const { container } = render(<Provider store={store}><SingleMenu menu={ menu }>Test</SingleMenu></Provider>);

        expect(container).toMatchSnapshot();
    });
});
