import "./inputForm.css"
import { useState } from "react"

export default function TextAreaForm(props){
    const [leave, setLeave] = useState(false)
    const {label, messageError, onChange, ...inputProps} = props

    const handleLeave = (e) =>{
        setLeave(true)
    }

    return(
        <div className="inputForm">

            <label>{label}</label>
            <textarea className="messageArea" {...inputProps} onChange={onChange} onBlur={handleLeave} leave={leave.toString()}></textarea>
            <span>{messageError}</span>

        </div>
    )
}
