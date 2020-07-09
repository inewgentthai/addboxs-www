// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { ProductCategoryActions } from ".";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("ProductCategory action tests", () => {
    test("ProductCategory test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.ProductCategory.SetReducer
            },
        ];

        store.dispatch(ProductCategoryActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            menu: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.ProductCategory.ResetReducer
            },
        ];

        store.dispatch(ProductCategoryActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
