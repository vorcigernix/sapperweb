import Prismic from "prismic-javascript";
const apiEndpoint = "https://sapperweb.cdn.prismic.io/api/v2";

export async function get(req, res, next) {
    const { slug } = req.params;

    const api = await Prismic.getApi(apiEndpoint, { req });

    const data = await api.query(
        Prismic.Predicates.at('document.type', 'product')
    );


    if (data !== null) {
        res.setHeader('Content-Type', 'application/json');
        console.log(data);
        res.end(JSON.stringify(data));
    } else {
        next();
    }
}