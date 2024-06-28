import { FILTER_ACTIONS } from "../types";

function addCategory(category) {
    return {
        type: FILTER_ACTIONS.ADD_CATEGORY,
        payload: category
    };
}

function removeCategory(category) {
    return {
        type: FILTER_ACTIONS.REMOVE_CATEGORY,
        payload: category
    };
}

function clearCategories() {
    return {
        type: FILTER_ACTIONS.CLEAR_CATEGORIES,
        payload: null
    };
}

export { addCategory, removeCategory, clearCategories };

