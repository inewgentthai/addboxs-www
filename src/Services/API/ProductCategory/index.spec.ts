// #region Local Imports
import { ProductCategoryService } from "@Services";
// #endregion Local Imports

describe("ProductCategory Service tests", () => {
    test("200 test", async () => {
        const result = await ProductCategoryService.GetProductCategory({
            params: { },
        });
        expect(result.data).toEqual([]);
    });

    // test("500 test", async () => {
    //     const result = await MenuService.GetMenu({
    //         params: { hd: false },
    //     });
    //     expect(result.copyright).toEqual("");
    // });
});
