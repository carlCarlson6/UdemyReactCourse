//import {SHOW_ALERT, HIDE_ALERT} from '';

import { SHOW_ALERT, HIDE_ALERT } from "../types";

class AlertServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    Show(message, category) {
        this.dispatch({type: SHOW_ALERT, payload: {message, category}});
    }

    Hide() {
        this.dispatch({type: HIDE_ALERT});
    }
}

export default AlertServices;