import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Add = () => {
    
    const [input, changeInput] = useState(


        {

            donor_name: "",
             age: "",
              gender: "",
              blood_group: "",
               phone:"",
               email:"",
               city:"",
               weight_kg:"",
               last_donation_date:""

        }



    )
    const inputHandeler=(event)=>
    {

        changeInput({...input,[event.target.name]: event.target.value})

    }

    const readValue =()=>
    {


        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

            (response) =>{

                console.log(response.data)
                alert("donor added suceessfully")
            }
        ).catch(

            (error)=>
            {

                console.log("Error adding donor",error)
                alert("Failed to add donor")
            }
        )


    }
  return (
    <div>
        <NavigationBar />
        <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Donor Name</label>
                            <input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Gender</label><br></br>
                            <select name="" id="" className="form-control" name="gender" value={input.gender} onChange={inputHandeler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Blood Group</label>
                            <input type="text" className="form-control"name="blood_group" value={input.blood_group} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandeler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control " name="city" value={input.city} onChange={inputHandeler}/>
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Weight</label>
                            <input type="text" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Last Donation Date</label>
                            <input type="date" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>

    </div>
  )
}


export default Add