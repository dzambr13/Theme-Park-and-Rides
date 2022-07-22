import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    rating: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    axios.post('http://localhost:3001/api/account', formValues)
    navigate('/thanks')
  }

  const newAccount = props.newAccount

  return (
    <div>
      <h1>Sign Up with us today!</h1>
      <h4>Please enter your info below...</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="YourName"
          value={formValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="rating"
          placeholder="Your Rating, -5 of 5"
          value={formValues.rating}
          onChange={handleChange}
        />
        <br></br>
        <button
          type="submit"
          // disabled={!props.name || !props.email || !props.rating}
        >
          Submit
        </button>
      </form>
      <div></div>
    </div>
  )
}
export default Form
