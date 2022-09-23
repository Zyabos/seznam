import { useEffect, useState } from "react"
import "./inputForm.css"

export default function InputForm(props){
    const [leave, setLeave] = useState(false)
    const {label, messageError, onChange, id, ...inputProps} = props

    const handleLeave = (e) =>{
        setLeave(true)
    }

    return(
        <div className="inputForm">
             
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleLeave} leave={leave.toString()} />
            <span>{messageError}</span>

        </div>
    )
}