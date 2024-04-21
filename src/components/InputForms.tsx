import {Form as FormAntd, Input as InputAnt } from 'antd'

type forms = {
    nameForms: string,
    labelForms: string,
    handleChange: any,
    rules: any,
    password?: boolean,
    placeholder?: string

}
const InputForms: React.FC<forms> = ({
    nameForms,
    labelForms,
    handleChange,
    rules,
    password,
    placeholder
}) => {
    return (
        <FormAntd.Item 
            name={nameForms}
            label={labelForms}
            rules={rules}
        >
            { !password ?  <InputAnt onChange={(e) => handleChange(e.target.value)} placeholder={placeholder} /> :  <InputAnt.Password onChange={(e) => handleChange(e.target.value)} /> }
           
        </FormAntd.Item>
    )
}

export default InputForms