// #region Global Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { IStore } from "@Redux/IStore";
import { LoadingActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ILoading } from "./Loading";
// #endregion Interface Imports

export const Loading: React.FunctionComponent<ILoading.IProps> = (
    props: ILoading.IProps
) => {
    const { status } = useSelector((state: IStore) => state.loading);
    const dispatch = useDispatch();

    return (
        <section id="loading">
            {status &&
                <div className="loading-icon"/>
            }
        </section>
    );
};

