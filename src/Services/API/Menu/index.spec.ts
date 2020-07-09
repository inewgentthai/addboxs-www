// #region Local Imports
import { MenuService } from "@Services";
// #endregion Local Imports

describe("Menu Service tests", () => {
    test("200 test", async () => {
        const result = await MenuService.GetMenu({
            params: { hd: true }
        });
        expect(result.data).toEqual([]);
    });

    test("500 test", async () => {
        const result = await MenuService.GetMenu({
            params: { hd: false },
        });
        expect(result.copyright).toEqual(undefined);
    });
});
