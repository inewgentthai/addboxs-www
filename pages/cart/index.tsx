// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { CartActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, ICart } from "@Interfaces";
import Link from "next/link";
// #endregion Interface Imports

export const Cart: NextPage<
    ICart.IProps,
    ICart.InitialProps
> = ({ t, i18n }) => {
    const cart = useSelector((state: IStore) => state.cart);
    const dispatch = useDispatch();

    return (
        <section id="cart">
            Cart Page
            <div>
                <Link href={`/`} as={`/`}>
                    <a>Back to Home</a>
                </Link>
            </div>
        </section>
    );
};

Cart.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ICart.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Cart);
