// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { MenuModel } from "@Interfaces";
// #endregion Interface Imports

export const MenuService = {
    GetMenu: async (
        payload: MenuModel.GetMenuPayload
    ): Promise<MenuModel.GetMenuResponse> => {
        let response: MenuModel.GetMenuResponse;
        
        try {
            response = await Http.Request<MenuModel.GetMenuResponse>(
                "GET",
                "/v1/products",
                payload.params
            );
        } catch (error) {
            response = {
                data: [],
                content: [],
                loading: true,
                modal: false,
                hdurl: ""
            };
        }

        return response;
    },
};
