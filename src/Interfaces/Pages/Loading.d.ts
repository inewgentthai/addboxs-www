// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace ILoading {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        status: boolean;
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface IGetLoadingPayload extends LoadingModel.GetLoadingPayload {
            params: {};
        }

        export interface IGetLoadingResponse
            extends LoadingModel.GetLoadingResponse {}
    }
}

export { ILoading };
