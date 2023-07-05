import { useState } from "react";
import "./Auth.css";
import axios from "axios";
//import img from "../assets/ssfimage.jpg"


export function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hometown, setHometown] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8000/auth/add", {
        name,
        email,
        phonenumber,
        occupation,
        hometown,
      });
      alert("User registered !");
    } catch (error) {
      console.error(error);
    }
}
    return (

<div class="register-photo">

<div class="form-container">
<div class="image-holder"></div>
<form onSubmit={handleSubmit}>
<h2 class="text-center">
    <strong>Want to be a </strong>volunteer ?</h2>

    <h3 class="text-center">
    Register here !</h3>

<div class="form-group">
    <input class="form-control" type="rext" onChange ={(event)=>setName(event.target.value)} name="name" placeholder="Username"/>
    </div>

<div class="form-group">
    <input class="form-control" type="email" onChange ={(event)=>setEmail(event.target.value)} name="email" placeholder="Email"/>
    </div>

<div class="form-group">
    <input class="form-control" type="number" onChange ={(event)=>setPhoneNumber(event.target.value)} name="phonenumber" placeholder="Phone Number"/>
    </div>

<div class="form-group">
    <input class="form-control" type="text"onChange ={(event)=>setOccupation(event.target.value)}  name="occupation" placeholder="Occupation"/>
    </div>

 <div class="form-group">
    <input class="form-control" type="text" onChange ={(event)=>setHometown(event.target.value)} name="hometown" placeholder="Home Town"/>
    </div>

<div class="form-group">
    <button class="btn btn-success btn-block"  type="submit">Submit</button>
</div>
</form>
</div>
</div> 
);
  }



