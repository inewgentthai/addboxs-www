// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { OrderActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IOrder } from "@Interfaces";
import Link from "next/link";
// #endregion Interface Imports

export const Order: NextPage<
    IOrder.IProps,
    IOrder.InitialProps
> = ({ t, i18n }) => {
    const order = useSelector((state: IStore) => state.order);
    const dispatch = useDispatch();

    return (
        <section id="order">
            Order Page
            <div>
                <Link href={`/`} as={`/`}>
                    <a>Back to Home</a>
                </Link>
            </div>
        </section>
    );
};

Order.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IOrder.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Order);
