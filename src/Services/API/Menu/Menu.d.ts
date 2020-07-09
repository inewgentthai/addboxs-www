// #region Interface Imports
import { MenuPayload, MenuResponse } from "@Interfaces";
// #endregion Interface Imports

declare namespace MenuModel {
    export interface GetMenuPayload {
        params: MenuPayload;
    }

    export interface GetMenuResponse extends MenuResponse {}
}

export { MenuModel };
