import { getSearchIdx } from '$lib/api-client.js';

export const prerender = true;

export async function load({ fetch }) {
	return {
		idx: await getSearchIdx(fetch)
	};
}
