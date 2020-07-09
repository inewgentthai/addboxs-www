// #region Interface Imports
import { ProductCategoryPayload, ProductCategoryResponse } from "@Interfaces";
// #endregion Interface Imports

declare namespace ProductCategoryModel {
    export interface GetProductCategoryPayload {
        params: ProductCategoryPayload;
    }

    export interface GetProductCategoryResponse extends ProductCategoryResponse {}
}

export { ProductCategoryModel };
