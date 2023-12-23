import { getSearchIdx } from '$lib/api-client.js';

export const prerender = false;

export async function load({ params, fetch }) {
	return {
		idx: await getSearchIdx(fetch),
		category: params.slug
	};
}
