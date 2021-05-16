import React, {useState} from 'react'
import './Registration.css';
import {useFormik} from 'formik';
import {Link,useHistory, useParams} from 'react-router-dom';

const Registration=()=>{
    const history=useHistory();
    const [disable,setDisable]=useState(true);
    //const [radio,setRadio]=useState("male");
   

const validate=(values)=>{
    let errors={};
    if(values.fname.length===0){
        errors.fname=" ";
    }
    else if(values.fname.length>0 && values.fname.length<3){
        errors.fname=`Name should be at least 3 letters`;
    }
    if(values.lname.length===0){
        errors.lname=" ";
    }
    else if(values.lname.length>0 && values.lname.length<3){
        errors.fname=`Last Name should be at least 3 letters`;
    }

    if(values.dname.length>0){
        const trimmedDname=values.dname.trim();
        if(trimmedDname===0){
            errors.dname=`Father's name should not contain blank space`;
        }
    }
    else if(values.dname.length===0){
        errors.dname=`Mother's name should not be blank`;
    }
    if(values.mname.length>0){
        const trimmedMname=values.mname.trim();
        if(trimmedMname===0){
            errors.mname=`Mother's name should not contain blank space`;
        }
    }
    else if(values.mname.length===0){
        errors.mname=`Mother's name should not be blank`;
    }
    if (values.email.length === 0) {
        errors.email = " ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
        values.email.length > 0
      ) {
        errors.email= `Email is not valid`;
      }
    if(values.phone.length===0){
        errors.phone=" ";
    }
    else if(values.phone.length>0 && values.phone.length>10){
        errors.phone=`Mobile number should contain 10 numbers`;
    }

    if(errors.fname || errors.lname || errors.phone){
        setDisable(true);
    }
    else{
        setDisable(false);
    }
    return errors;
}

const onSubmit=async(values)=>{
    const {fname,lname,dname,mname,email,phone,year,seater,
        hostels,
        gender,
        address}=values;
    const res=await fetch('http://localhost:8080/registration',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            fname,lname,dname,mname,email,phone,
            hostels,
            gender,
            seater,year,address
        }),
    });
    
    const data=await res.json();
    console.log(data);
    
    if(data.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    }
    else{
        window.alert("Registration successful");
        console.log("Registration successful");
        history.push("/Payment");
    }
}

    const formik=useFormik({
        initialValues:{
            fname:"",
            lname:"",
            dname:"",
            mname:"",
            email:"",
            phone:"",
            gender:"male",
            year:"",
            seater:"",
            hostels:"",
            address:""
        },
        validate,
        onSubmit
    });
        return (
            <>
            <div className="outer_div">
                <div className="container">
                        <div className="registerform">
                            <h1 className="register">Book Your Room</h1>
                            <form method="POST"
                                onSubmit={formik.handleSubmit}
                            >
                                <label htmlFor="fname">First Name:<span className="error">*</span></label>
                                <div>
                                    <input 
                                        type="text" 
                                        id="fname" 
                                        name="fname"  
                                        value={formik.values.fname}
                                        placeholder="Enter Your First Name" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        required/>

                                        {
                                            formik.touched.fname && formik.errors.fname?
                                            (<div className="error">
                                                {formik.errors.fname}
                                            </div>):
                                            null
                                        }
                                </div>

                                <label htmlFor="lname">Last Name:<span className="error">*</span></label>
                                <div>
                                    <input 
                                        type="text" id="lname" 
                                        name="lname" 
                                        value={formik.values.lname}  
                                        placeholder="Enter Your Last Name" 
                                        onChange={formik.handleChange}  
                                        onBlur={formik.handleBlur}                                   
                                        required/>

                                        {
                                        formik.touched.lname && formik.errors.lname?
                                            (<div className="error">
                                            {formik.errors.lname}
                                            </div>):
                                            null
                                        }

                                </div>
                                <label htmlFor="dname">Father's Name:<span className="error">*</span></label>
                                <input 
                                    type="text" id="dname" 
                                    name="dname" 
                                    value={formik.values.dname}  
                                    placeholder="Enter Your Father's Name" 
                                    required 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />
                                        {
                                        formik.touched.dname && formik.errors.dname?
                                            (<div className="error">
                                            {formik.errors.dname}
                                            </div>):
                                            null
                                        }                                       
                                      
                                <label htmlFor="mname">Mother's Name:<span className="error">*</span></label>
                                <input 
                                    type="text" id="mname" 
                                    name="mname" 
                                    value={formik.values.mname}  
                                    placeholder="Enter Your Mother's Name"  
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required/>
                                        {
                                        formik.touched.mname && formik.errors.mname?
                                            (<div className="error">
                                            {formik.errors.mname}
                                            </div>):
                                            null
                                        }

                                    <label htmlFor="email" className="userlbl">Email:<span className="error">*</span></label>
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Enter Your Email" 
                                            id="email" name="email" 
                                            value={formik.values.email} 
                                            autoComplete="off" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                            
                                        />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="error">{formik.errors.email}</div>
                                                ) : null}
                                    </div>
                                <label htmlFor="phone">Mobile No.<span className="error">*</span></label>
                                <input 
                                    type="text" id="phone" 
                                    name="phone"  
                                    value={formik.values.phone} 
                                    pattern="[789][0-9]{9}" placeholder="Enter Your Mobile Number" 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    required/>
                                        {
                                        formik.touched.phone && formik.errors.phone?
                                            (<div className="error">
                                            {formik.errors.phone}
                                            </div>):
                                            null
                                        }                                   
                                <label htmlFor="year">Year:<span className="error">*</span></label>
                                <select  name="year" id="year"
                                value={formik.values.year}   onChange={formik.handleChange}
                                 required>
                                    <option value="select">--Select One--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <label htmlFor="seater" >Seater:<span className="error">*</span></label>
                                <select name="seater" id="seater" value={formik.values.seater}
                                onChange={formik.handleChange}
                                 required> 
                                    <option value="select" >--Select One--</option>
                                    <option value="1" >1</option>
                                    <option value="2">2</option> 
                                    
                                </select> 
                                <label htmlFor="gender">Gender:<span className="error">*</span></label>
                                <input 
                                    type="radio" 
                                    value="male"
                                    name="gender" 
                                    id="male" 
                                    onChange={formik.handleChange}
                                   // checked={radio=="male"} 
                                   defaultChecked={formik.values.gender==="male"}
                                    // onChange={(e)=>{
                                    //     setRadio(e.target.value);
                                    // }}
                                    />
                                    
                                <label htmlFor="male">Male</label>
                                <input 
                                    type="radio" 
                                    value="female"
                                    name="gender" 
                                    id="female" 
                                    onChange={formik.handleChange} 
                                    //checked={radio=="female"}
                                    // onChange={(e)=>{
                                    //     setRadio(e.target.value);
                                    // }}
                                   defaultChecked={formik.values.gender==="female"}
                                    />
                                <label htmlFor="female">Female</label>
                               <div><label htmlFor="hostels">Hostel:</label></div> 
                                {formik.values.gender==="male" && formik.values.year==="4"?(
                                    <select name="hostels" id="hostels" value={formik.values.hostels} onChange={formik.handleChange} required>
                                        <option value="select">--Select One--</option>
                                        <option value="MV">MV</option>
                                        <option value="NSCB">NSCB</option>
                                    </select>
                                )
                                :formik.values.gender==="male" && formik.values.year==="3"?(
                                    <select name="hostels" id="hostels" value={formik.values.hostels} onChange={formik.handleChange} required>
                                        <option value="select">--Select One--</option>
                                        <option value="AN.Khosla">AN.Khosla</option>
                                    </select>
                                )
                                :formik.values.gender==="male" && formik.values.year==="2"?(
                                    <select name="hostels" id="hostels" value={formik.values.hostels} onChange={formik.handleChange} required>
                                        <option value="select">--Select One--</option>
                                        <option value="PHD Hostel">PHD Hostel</option>
                                    </select>
                                )
                                :formik.values.gender==="male" && formik.values.year==="1"?(
                                    <select name="hostels" id="hostels" value={formik.values.hostels} onChange={formik.handleChange} required>
                                        <option value="select">--Select One--</option>
                                        <option value="Netaji Subhash Chandra Hostel">Netaji Subhash Chandra Hostel</option>
                                    </select>
                                )
                                :(
                                    <select name="hostels" id="hostels"  value={formik.values.hostels} onChange={formik.handleChange} required>
                                        <option value="select">--Select One--</option>
                                        <option value="CTAE Girl's Hostel">CTAE Girl's Hostel</option>
                                    </select>
                                )
                                }
                                <label htmlFor="address">Permanent Address:<span className="error">*</span></label>
                                <textarea 
                                    name="address" 
                                    id="address" 
                                    value={formik.values.address} 
                                    onChange={formik.handleChange}
                                />
                                {/* <Link to="/Payment"> */}
                                    <input 
                                        type="submit" 
                                        id="submit" 
                                        name="submit" 
                                        value={formik.values.submit}
                                        disabled={disable}
                                        />
                                {/* </Link> */}
                            </form>           
                    </div>
                </div>
            </div>

            </>
        )
    }


export default Registration
