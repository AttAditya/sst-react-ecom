import { useDispatch, useSelector } from "react-redux";
import "./Categories.css";
import { useEffect } from "react";
import { loadCategories } from "../../store";

function Categories() {
    let categories = useSelector((state) => state.data.categories);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategories());
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