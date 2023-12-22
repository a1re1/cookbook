import { fetchRecipe } from '$lib/api-client.js';

export const prerender = true;

export async function load({ fetch, params }) {
    return {
		recipeResponse: await fetchRecipe(fetch, params.slug),
		id: params.slug
	};
}