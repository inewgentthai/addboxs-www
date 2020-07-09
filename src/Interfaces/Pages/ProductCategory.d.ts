// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IProductCategory {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        data: Array;
        content: Array;
        loading: boolean;
        modal: boolean;
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface IGetProductCategoryPayload extends ProductCategoryModel.GetProductCategoryPayload {
            params: {};
        }

        export interface IGetProductCategoryResponse
            extends ProductCategoryModel.GetProductCategoryResponse {}
    }
}

export { IProductCategory };
