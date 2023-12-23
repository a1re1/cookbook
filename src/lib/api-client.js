const root = 'https://cook-book-recipes-a6s3q6c6gq-uc.a.run.app/';

export const fetchRecipe = (fetch, recipeId) =>
	get(fetch, `recipe/${recipeId}`).then((response) => response.json());
export const saveRecipe = (fetch, recipeId, body) => post(fetch, `recipe/${recipeId}`, body);

// TODO make this much faster.. maybe don't fetch whole documents? or if file IO is the problem, maybe store indexes?
export const getSearchIdx = (fetch) => get(fetch, `search/`).then((response) => response.json());

function get(f, path) {
	return f(root + path);
}

function post(f, path, data) {
	return f(root + path, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
}
