import "./contactUs.css"



export default function ContactUs(props){
    
    return(
        <div className="contactUs">
            <p>🤔</p>
            <h1>Nejlepší poradna pro řešení problémů. Máte s tím nějaký problém? Neváhejte nás kontaktovat!</h1>
            <button className="btn" onClick={props.handleClick}>Kontaktujte nás</button>
        </div>
    )
}