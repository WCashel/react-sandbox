import { useState } from "react";

interface BaseTextProps {
    name: string;
    initValue?: string;
}
const BaseText = ({ name, initValue }: BaseTextProps) => {
    const [input, setInput] = useState(initValue);

    const fieldId = name + "-text"
    return (
        <>
            <label htmlFor="fieldId">{name}</label>
            <input id={fieldId} name={name} value={input} onChange={e => setInput(e.target.value)} />
        </>
    )
}
export default BaseText;