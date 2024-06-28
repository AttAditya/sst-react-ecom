import { DATA_ACTIONS } from "../types";

function loadCategories() {
    return (dispatch) => {
        let URL = "https://run.mocky.io/v3/fe7fc1cd-2c98-4df2-95ae-329f7a20b648";

        fetch(URL).then((response) => response.json()).then((data) => {
            dispatch({type: DATA_ACTIONS.LOAD_CATEGORIES, payload: data});
        }).catch((err) => {
            let data = [
                {
                    "id": 0,
                    "name": "Health & Personal Care"
                },
                {
                    "id": 1,
                    "name": "Home & Kitchen"
                },
                {
                    "id": 2,
                    "name": "Apparel"
                },
                {
                    "id": 3,
                    "name": "Home & Office"
                },
                {
                    "id": 4,
                    "name": "Electronics"
                },
                {
                    "id": 5,
                    "name": "Sports & Outdoors"
                }
            ];

            dispatch({type: DATA_ACTIONS.LOAD_CATEGORIES, payload: data});
        });
    }
}

export { loadCategories };

