interface BaseOptionProps {
    value: string;
}
const BaseOptions = ({ value }: BaseOptionProps) => {
    return (<>
        <option value={value}>{value}</option>
    </>)
}

interface BaseSelectProps {
    name: string;
    options: string[];
}
const BaseSelect = ({ name, options }: BaseSelectProps) => {
    const fieldId = name + '-select';
    const optionsTemplate = options.map(option => {
        return <BaseOptions key={option}  value={option} />
    })
    return (<>
        <label htmlFor="fieldId">{name}</label>
        <select id={fieldId} >
            {optionsTemplate}
        </select>
    </>)
}
export default BaseSelect;