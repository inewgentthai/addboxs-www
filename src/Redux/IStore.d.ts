// #region Interface Imports
import { IHomePage, IMenu, IProductCategory, ICart, IOrder, ILoading } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    loading: ILoading.IStateProps;
    order: IOrder.IStateProps;
    cart: ICart.IStateProps;
    home: IHomePage.IStateProps;
    menu: IMenu.IStateProps;
    productCategory: IProductCategory.IStateProps;
}
