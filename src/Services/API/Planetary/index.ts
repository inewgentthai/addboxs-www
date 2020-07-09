// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { PlanetaryModel } from "@Interfaces";
// #endregion Interface Imports

export const PlanetaryService = {
    GetPlanetImage: async (
        payload: PlanetaryModel.GetApodPayload
    ): Promise<PlanetaryModel.GetApodResponse> => {
        let response: PlanetaryModel.GetApodResponse;

        try {
            response = await Http.Request<PlanetaryModel.GetApodResponse>(
                "GET",
                "/planetary/apod",
                payload.params
            );
        } catch (error) {
            response = {
                copyright: "Pankod",
                date: "2019-05-23",
                explanation: "",
                hdurl: "",
                service_version: "",
                title: "",
                url: "",
            };
        }

        return response;
    },
};
