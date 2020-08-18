import { alertTypes } from "../../types"

const destroyAlertError = alert => ({type: alertTypes.HIDE_ALERT, payload: null})

export const hideAlertAction = (alert) => {
    return dispatch => dispatch(destroyAlertError())
}