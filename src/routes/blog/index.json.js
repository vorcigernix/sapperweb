/* import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
} */
import fetch from 'node-fetch';
import send from '@polka/send';
import { baseurl } from '../../stores.js'



export function get(req, res) {
	let url_value;

	const unsubscribe = baseurl.subscribe(value => {
		url_value = value;
	});
	console.log(url_value);

//	const baseurl="https://sapperweb.prismic.io/api/v2/documents/search?ref=";
	fetch(`${url_value}XY32zBAAAB4Agd5X&q=%5B%5Bat(document.type%2C+%22posts%22)%5D%5D&format=json`)
		.then(r => r.json())
		.then(items => {
			send(res, 200, JSON.stringify(items.results), {
				'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
				'Content-Type': 'application/json'
			});
		});
}