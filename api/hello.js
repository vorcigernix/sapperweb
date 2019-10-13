const fetch = require('node-fetch')
const baseurl = "https://sapperweb.cdn.prismic.io/api/v2";


module.exports = async (req, res) => {
    const { name = 'World' } = req.query
    const ref_id = await fetch(baseurl)
    .then(r => r.json())
    .then(item => {
       item.refs[0].ref;
    });
    res.status(200).send(`Hello ${ref_id}!`)
}