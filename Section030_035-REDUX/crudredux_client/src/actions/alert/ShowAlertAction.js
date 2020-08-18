import { alertTypes } from "../../types"

const createAlertError = alert => ({type: alertTypes.SHOW_ALERT, payload: alert})

export const showAlertAction = (alert) => {
    return dispatch => dispatch(createAlertError(alert))
}