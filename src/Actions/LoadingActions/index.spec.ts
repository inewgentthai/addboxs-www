// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { LoadingActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Loading action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Loading.SetReducer
            },
        ];

        store.dispatch(LoadingActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            loading: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Loading.ResetReducer
            },
        ];

        store.dispatch(LoadingActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
