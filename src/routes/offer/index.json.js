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
import { baseurl, refid } from '../../stores.js'



export function get(req, res) {
	let url_value, ref_value;

	refid.subscribe(value => {
		ref_value = value;
		url_value = baseurl + '/documents/search?ref=' + ref_value;
		if (ref_value != undefined) {
			fetch(`${url_value}&q=%5B%5Bat(document.type%2C+%22posts%22)%5D%5D&format=json`)
			.then(r => r.json())
			.then(items => {
				send(res, 200, JSON.stringify(items.results), {
					'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
					'Content-Type': 'application/json'
				});
			});
		}
	});
	if (ref_value === undefined) {
		fetch(baseurl)
			.then(r => r.json())
			.then(item => {
				refid.set(item.refs[0].ref);
			});
	}
	
}
