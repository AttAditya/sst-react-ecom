import { FILTER_ACTIONS } from "../types";

function filterReducer(state={ categories: [] }, action) {
    switch (action.type) {
        case FILTER_ACTIONS.ADD_CATEGORY: {
            let categories = state.categories;
            let payload = action.payload;

            if (categories.includes(payload)) {
                return state;
            }

            categories = [...categories, payload];

            return {
                ...state,
                categories: categories
            };
        }
        case FILTER_ACTIONS.REMOVE_CATEGORY: {
            let categories = state.categories;
            let payload = action.payload;

            categories = categories.filter(category => category !== payload);

            return {
                ...state,
                categories: categories
            };
        }
        case FILTER_ACTIONS.CLEAR_CATEGORIES: {
            return {
                ...state,
                categories: []
            };
        }
        default: return state;
    }
}

export { filterReducer };

