
import {combineReducers} from "redux";

import accountclose from "./accountToggler";
import creatAccountStatus from "./createAccount_togler";
const rootReducer=combineReducers({
    accountclose,
    creatAccountStatus

});
export default rootReducer;