import "./Categories.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addCategory, loadCategories, removeCategory } from "../../store";
import { IoCloseCircle } from "react-icons/io5";

function Categories() {
    let categories = useSelector((state) => state.data.categories);
    let filteredCategories = useSelector((state) => state.filter.categories);
    let dispatch = useDispatch();

    function addCategoryFilter(category) {
        return () => {
            dispatch(addCategory(category))
        };
    }

    function removeCategoryFilter(category) {
        return () => {
            dispatch(removeCategory(category))
        };
    }

    useEffect(() => {
        dispatch(loadCategories());
    }, [dispatch]);

    return (
        <div className="categories">
            {
                categories.map((category) => filteredCategories.includes(category.name) ? (
                    <button onClick={removeCategoryFilter(category.name)} key={category.id} className="category-item active">
                        <IoCloseCircle />
                        <span>{category.name}</span>
                    </button>
                ) : "")
            }
            
            {
                categories.map((category) => filteredCategories.includes(category.name) ? "" : (
                    <button onClick={addCategoryFilter(category.name)} key={category.id} className="category-item">
                        {category.name}
                    </button>
                ))
            }
        </div>
    );
}

export default Categories;