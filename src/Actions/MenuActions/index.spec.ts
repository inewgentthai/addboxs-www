// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { MenuActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Menu action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Menu.SetReducer
            },
        ];

        store.dispatch(MenuActions.Map({ version: 2 }));

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
                type: ActionConsts.Menu.ResetReducer
            },
        ];

        store.dispatch(MenuActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
