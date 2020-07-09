// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/menus", "/menu/index");
routes.add("/cart", "/cart/index");
routes.add("/order", "/order/index");

export default routes;
