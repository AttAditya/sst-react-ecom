import "./Categories.css";
import { useEffect, useState } from "react";

function Categories() {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        let URL = "https://run.mocky.io/v3/fe7fc1cd-2c98-4df2-95ae-329f7a20b648";

        fetch(URL).then((response) => response.json()).then((data) => {
            setCategories(data);
        }).catch((err) => {
            setCategories([
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
            ]);
        });
    }, []);

    return (
        <ul className="categories-list">
            {
                categories.map((category) => (
                    <li key={category.id}>
                        <button>
                            {category.name}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default Categories;