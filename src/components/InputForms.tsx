import {Form as FormAntd, Input as InputAnt } from 'antd'

type forms = {
    nameForms: string,
    labelForms: string,
    handleChange: any,
    rules: any

}
const InputForms: React.FC<forms> = ({
    nameForms,
    labelForms,
    handleChange,
    rules
}) => {
    return (
        <FormAntd.Item 
            name={nameForms}
            label={labelForms}
            rules={rules}
            
        >
            <InputAnt onChange={(e) => handleChange(e.target.value)} />

        </FormAntd.Item>
    )
}

export default InputForms