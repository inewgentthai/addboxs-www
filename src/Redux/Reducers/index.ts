// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { MenuReducer } from "./menu";
import { CartReducer } from "./cart";
import { ProductCategoryReducer } from "./productCategory";
import { OrderReducer } from "./order";
import { LoadingReducer } from "./loading";
// #endregion Local Imports

export default combineReducers({
    loading: LoadingReducer,
    order: OrderReducer,
    cart: CartReducer,
    menu: MenuReducer,
    home: HomeReducer,
    productCategory: ProductCategoryReducer,
});
