// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { ProductCategoryModel } from "@Interfaces";
// #endregion Interface Imports

export const ProductCategoryService = {
    GetProductCategory: async (
        payload: ProductCategoryModel.GetProductCategoryPayload
    ): Promise<ProductCategoryModel.GetProductCategoryResponse> => {
        let response: ProductCategoryModel.GetProductCategoryResponse;
        
        try {
            response = await Http.Request<ProductCategoryModel.GetProductCategoryResponse>(
                "GET",
                "/v1/products",
                payload.params
            );
        } catch (error) {
            response = {
                data: []
            };
        }

        return response;
    },
};
