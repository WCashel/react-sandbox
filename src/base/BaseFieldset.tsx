/* import { useState } from "react"; */

interface BaseFieldsetProps {
    children: JSX.Element[];
}
const BaseFieldset = ({ children }: BaseFieldsetProps) => {
    /* const [formData, setFormData] = useState({}) */

    return (<>
        <fieldset>
            {children}
        </fieldset>
    </>)
}
export default BaseFieldset;