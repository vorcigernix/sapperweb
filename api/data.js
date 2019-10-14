const fetch = require('node-fetch');
const baseurl = 'https://sapperweb.cdn.prismic.io/api/v2';

module.exports = async (req, res) => {
  const refjson = await fetch(baseurl);
  const {ref_id} = await refjson.json();
  res.status(200).send(`Hello ${ref_id}!`);
};
