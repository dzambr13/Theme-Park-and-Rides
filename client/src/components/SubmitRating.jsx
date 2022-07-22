import { useNavigate } from "react-router-dom";

const SubmitRating = (props) => {
  let navigate = useNavigate()

  const handleRating = (e) => {
    props.addRating(e)
    navigate('/Parks')
  }

  const newRating = props.newRating

  return (
    <div>
      <h1> Submit your rating of the park!</h1>
      <form onSubmit={ handleRating }>
        <input type="text" value={newRating.name} onChange={props.handleChange} name={'name'} placeholder={'name'} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SubmitRating