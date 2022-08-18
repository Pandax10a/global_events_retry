axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(success1).catch(fail2);

function success1 (response1) {
    for(let i = 0; i < response1[`data`].length;i++) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>title: ${response1[`data`][i][`title`]}</h1>`);
    }
}

function fail2 (error3) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>failed</h1>`);
}

// knowledge check 2 of from week 12-c request types
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
    param: {
        c: `Chicken`
    }
}).then(successtoo).catch(failtoo);
// seems this website is only has null for value
function successtoo (responsetoo) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>success</h1>`)

}

function failtoo (errortoo) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>failed</h1>`);
}
// knowledge check 3 using POST method



document.getElementById(`post_it`).addEventListener(`click`, run_post);

function run_post() {
    let id_value = document.getElementById(`post_id`)[`value`];
let title_value = document.getElementById(`for_title`)[`value`];
let body_value = document.querySelector(`#for_body`)[`value`];

    axios.request ({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: `${title_value}`,
            body: `${body_value}`,
            userId: `${id_value}`
        }
    }).then(successpost).catch(failpost);
}


function successpost (responsegood) {
    console.log(`success`);
    document.body.insertAdjacentHTML(`afterbegin`, `${responsegood[`data`][`title`]} ${responsegood[`data`][`body`]} ${responsegood[`data`][`userId`]}`)
}

function failpost (error) {
    console.log(`failed`);
}

