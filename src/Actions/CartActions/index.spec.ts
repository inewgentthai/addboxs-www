// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { CartActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Cart action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Cart.SetReducer
            },
        ];

        store.dispatch(CartActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            cart: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Cart.ResetReducer
            },
        ];

        store.dispatch(CartActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
