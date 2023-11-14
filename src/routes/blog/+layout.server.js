// @ts-ignore
import {posts} from './data.js'

export function load() {
	return {
		summaries: posts.map((/** @type {{ slug: any; title: any; }} */ post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}