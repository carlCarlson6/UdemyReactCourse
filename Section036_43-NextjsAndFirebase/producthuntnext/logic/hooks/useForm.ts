import React from 'react';
import { IFormController } from '../../common/models/controllers/IFormController';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { IError } from '../../common/models/entities/IError';
import { getHandleSubmit, getHandleChange, getHandleBlur } from '../../common/utils/handlers/UseFormHandlers';

const useForm = (initialState: Array<IFormValue>, validate: (formValues: Array<IFormValue>) => Array<IError>, formExecutionFn: (formValues: Array<IFormValue>) => Promise<void>): IFormController => {
    const [values, setValues] = React.useState<Array<IFormValue>>(initialState);
    const [errors, setErrors] = React.useState<Array<IError>>([]);
    const [submitForm, setSubmitForm ] = React.useState(false);

    const handleSubmit = getHandleSubmit(values, validate, setErrors, setSubmitForm);
    const handleChange = getHandleChange(values, setValues);
    const handleBlur = getHandleBlur(values, validate, setErrors);

    React.useEffect(() => {const executeUseEffect = async () => {
        if(submitForm) {
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors) {
                try {
                    await formExecutionFn(values);
                }
                catch (error) {
                    const newErrors = [...errors];
                    newErrors.push({name:'formExecutionFn', message:error.message});
                    setErrors(newErrors);
                }
                
            }
            setSubmitForm(false);
        }}; executeUseEffect();
    }, [errors])

    
    return { values, errors, submitForm, handleSubmit, handleChange, handleBlur }
}

export default useForm;