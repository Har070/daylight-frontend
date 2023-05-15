import pagesRoutes from "./pages";

const routes = [
    pagesRoutes,
];

/*
* written so for IE
* */
const flattenRoutes = routes.reduce((acc, val) => acc.concat(val), []);

export default flattenRoutes;
