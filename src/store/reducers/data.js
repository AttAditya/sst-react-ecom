import { DATA_ACTIONS } from "../types";

function dataReducer(state={ categories: [], products: [] }, action) {
    switch (action.type) {
        case DATA_ACTIONS.LOAD_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            };
        }
        case DATA_ACTIONS.LOAD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        }
        default: return state;
    }
}

export { dataReducer };

