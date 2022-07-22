import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const BASE_URL = 'http://localhost:3001/api'

const ParkDetails = (props) => {

  const [park, setPark] = useState('')
  let { id } = useParams()

  useEffect(() => {
  const getParkById = async () => {
    let data = await axios.get(`${BASE_URL}/rides/${id}`)
    setPark(data.data.ride)
    console.log(data.data.ride)
  }
    getParkById()
  }, [])

  return park ? (
    <div className="detail">
      <div className="detail-header">
        <img src={park.image} alt={park.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{park.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1>{park.rides}</h1>
          <h3>{park.rating}</h3>
        </div>
        <h3>{park.description}</h3>
      </div>
    </div>
  ) : null;
}

export default ParkDetails