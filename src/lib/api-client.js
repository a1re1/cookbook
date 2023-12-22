const root = "https://cook-book-recipes-a6s3q6c6gq-uc.a.run.app/";

export const fetchRecipe = (fetch, recipeId) => get(fetch, `recipe/${recipeId}`).then(response => response.json());
export const saveRecipe = (fetch, recipeId, body) => post(fetch, `recipe/${recipeId}`, body);

function get(f, path) {
    return f(root + path);
}

function post(f, path, data) {
    return f(root + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}
