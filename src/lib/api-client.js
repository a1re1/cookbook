const root = "https://cook-book-recipes-a6s3q6c6gq-uc.a.run.app/";

export const fetchRecipe = (recipeId) => get(`recipe/${recipeId}`);

function get(path) {
    return fetch(root + path).then(response => { return response.json() });
}

function post(path, data) {
    return fetch(root + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => { return response.json() });
}

function put(path, data) {
    return fetch(root + path, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => { return response.json() });
}
