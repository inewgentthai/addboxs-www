// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { OrderActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Order action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Order.SetReducer
            },
        ];

        store.dispatch(OrderActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            order: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Order.ResetReducer
            },
        ];

        store.dispatch(OrderActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
