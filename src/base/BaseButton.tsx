import './BaseButton.css'
interface BaseButtonProps {
    className: string;
    text: string;
}
const BaseButton = ({ className, text }: BaseButtonProps) => {
    return (<>
        <button className={className}>{text}</button>
    </>)
}
export default BaseButton;