/* import { useState } from "react"; */

interface BaseFormProps {
    children: JSX.Element[];
}
const BaseForm = ({ children }: BaseFormProps) => {
    /* const [formData, setFormData] = useState({}) */

    return (<>
        <form>
            {children}
        </form>
    </>)
}
export default BaseForm;