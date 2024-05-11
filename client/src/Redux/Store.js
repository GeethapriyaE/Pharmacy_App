import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk"; // Import thunk directly

// Import your reducers
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import ReviewReducer from "./Customers/Review/Reducer";

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    customersProduct: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    review: ReviewReducer,

    // admin
    adminsProduct: productReducer,
    adminsOrder: adminOrderReducer,
});

// Create the Redux store using legacy_createStore
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// Export the store as default
export default store;
