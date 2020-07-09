// #region Global Imports
import "isomorphic-unfetch";
import getConfig from "next/config";
import { stringify } from "query-string";
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports

const {
    publicRuntimeConfig: { API_KEY, API_URL, X_API_AUTH, X_CLIENT_ID },
} = getConfig();

const BaseUrl = `${API_URL}`;

export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        return new Promise((resolve, reject) => {
            const query = params
                ? `?${stringify({ ...params })}`
                : "";

            fetch(`${BaseUrl}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: "no-cache",
                headers: {
                    "content-type": "application/json",
                    "x-api-auth": `${X_API_AUTH}`,
                    "x-client-id": `${X_CLIENT_ID}`,
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 200) {
                        return response.json().then(resolve);
                    }
                    return reject(response);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};
