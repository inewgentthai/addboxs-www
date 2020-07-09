// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { MenuActions, ProductCategoryActions, LoadingActions } from "@Actions";
import { DefaultLayout } from "@Components/Themes/Truecoffee/Layout";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IMenu, IProductCategory } from "@Interfaces";
import { MenuList } from "@Components";
// #endregion Interface Imports

export const Menu: NextPage<
    IMenu.IProps,
    IMenu.InitialProps
> = ({ t, i18n }) => {
    const menu = useSelector((state: IStore) => state.menu);
    const dispatch = useDispatch();
    const { modal, loading } = menu;
    const bodyClass = modal ? 'modal-open' : ''
    
    return (
        <DefaultLayout
            title={ t("common:True Coffee") }
        >
            <MenuList menus={ menu }/>
        </DefaultLayout>
    );
};

Menu.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IMenu.InitialProps> => {
    await ctx.store.dispatch(
        MenuActions.GetMenu({
            params: { outlet_id: 230 }
        })
    );
    await ctx.store.dispatch(
        ProductCategoryActions.GetProductCategory({
            params: { outlet_id: 2300 }
        })
    );
    await ctx.store.dispatch(
        LoadingActions.Map({
            status: false
        })
    );
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Menu);
