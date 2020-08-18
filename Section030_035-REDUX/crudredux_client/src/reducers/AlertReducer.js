import {alertTypes} from '../types'
import { alertInitialState } from '../common/InitialStates'

const alertReducer = (state=alertInitialState, action) => {
    switch(action.type) {
        case alertTypes.SHOW_ALERT:
        case alertTypes.HIDE_ALERT:
            return {...state, alert: action.payload}

        default:
            return state;
    }
}

export default alertReducer