import "./app.css"
import { useState } from "react"
import { FaGithub } from 'react-icons/fa';
import ContactUs from "./components/ContactUs"
import InputForm from './components/InputForm'
import TextAreaForm from './components/TextAreaForm'


function App() {
  const [page, setPage] = useState(true)
  const [disable, setDisable] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  let reaquired = {
    email: "",
    phone: ""
  }

  if(values.email){
    reaquired.phone = false
  }else if(values.phone){
    reaquired.email = false
  }else{
    reaquired.email = true
    reaquired.phone = true
  }

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Vaše jméno a příjmení",
      label: "Jméno a příjmení",
      messageError: "Vaše jméno a příjmení by nemělo obsahovat speciální znaky a čísla!",
      pattern: "^[A-Z a-z]{0,}$",
      required: false
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Váš e-mail",
      label: "E-mail",
      messageError: "Prosím zadejte e-mail ve správném tvaru!",
      required: reaquired.email
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Váš telefon",
      label: "Telefon",
      messageError: "Telefonní číslo zadejte ve tvaru +420xxxxxxxxx!",
      pattern: "^[+]{1}[0-9]{12}",
      required: reaquired.phone
    }
  ]

  const textArea = {
    name: "message",
    placeholder: "Zde napište vaši zprávu",
    label: "Zpráva",
    messageError: "Zpráva nemůže být prázdná!",
    required: true,
    rows: 12
  }

  function handleClick(){
    setPage(prevPage => !prevPage)
  }

  function handleSubmit(e){
    e.preventDefault()
    setDisable(true)

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if(e.target[1].value !== "neexistujici@email.cz"){
          resolve("Zpráva byla odeslána!")
        }
        reject(new Error("Neexistující emailová adresa!"))
      }, 3000)
    })
    .then(data => {
      alert(data)
      setValues({    
        name: "",
        email: "",
        phone: "",
        message: ""})
      setDisable(false)
      handleClick()
    })
    .catch(err => {
      setDisable(false)
      alert(err)
    })
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    page ?
    <section className="app">
      <ContactUs  handleClick={handleClick}/>
      <a href="https://github.com/Zyabos/seznam" target="__blank"><FaGithub /></a>
    </section>
    :
    <section className="app">
      <form onSubmit={handleSubmit}>
        <h1>Nechte nám zprávu a my se ozveme!</h1>
        {inputs.map((input) => (
        <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <TextAreaForm {...textArea} value={values[textArea.name]} onChange={onChange}/>
        <button type="submit" disabled={disable}>Odeslat</button>
      </form>
      <a href="https://github.com/Zyabos/seznam" target="__blank"><FaGithub /></a>
    </section>
  )
}

export default App