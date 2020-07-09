// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import Link from 'next/link';
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
import "@Static/truecoffee-ordering/css/error-style.css";
// #endregion Interface Imports

const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({
    t,
    statusCode,
}) => {
    let message = 'something went wrong';
    if (statusCode == 404) {
        message = "The Page can't be found";
    }

    return (
        <div id="notfound">
            <div className="notfound">
                <div className={ `notfound-${statusCode}` }>
                <h1>Oops!</h1>
                <h2>{statusCode} - {t("common:" + message)}</h2>
                </div>
                <Link href={`/`} as={`/`}>
                    <a href="#">Go TO Homepage</a>
                </Link>
            </div>
        </div>
    );
};

Error.getInitialProps = async ({ res, err }) => {
    let statusCode;

    if (res) {
        ({ statusCode } = res);
    } else if (err) {
        ({ statusCode } = err);
    }

    return {
        namespacesRequired: ["common"],
        statusCode,
    };
};

export default withTranslation("common")(Error);
