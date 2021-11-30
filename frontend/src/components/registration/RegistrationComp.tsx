import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { states } from "utils/nigerianStates";

const RegistrationComp = () => {
    const [selectedState,setSelectedState] = useState("");
    const [lgas,setLgas] = useState<string[]>([])

    console.log(selectedState)

    useEffect(()=>{
if(selectedState){
    const lga = states.find((state)=>state.state === selectedState);
    if(lga){

        setLgas(lga?.lgas)
    }
}
    },[selectedState])
  return (
    <Wrapper>
      <div className='container'>
        <div className='register'>
          <p className='josefin fs-36 fw-400 text-capitalize mt-5'>
            registration form
          </p>
          <h3 className='mt-5 josefin  fw-400 text-capitalize'>
            personal information{" "}
          </h3>

          <p>(student info)</p>

          <form>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  First Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input first name</small>
                </span>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  last Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input last name</small>
                </span>
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-md-6'>
                <label>
                  Date of Birth <span className='text-danger'>*</span>
                </label>
                <input type='date' className='form-control' />
                {/* <span className='text-danger'><small>Please input first Name</small></span> */}
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Religion <span className='text-danger'>*</span>
                </label>
                {/* <input type="text" className="form-control" /> */}
                <select name='rel' id='rel' className='form-select'>
                  <option value='christianity'>Christianity</option>
                  <option value='islam'>Islam</option>
                </select>
                <span className='text-danger '>
                  <small>Please input religion</small>
                </span>
              </div>
            </div>

            <div className='check-wrapper d-flex'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                  checked
                />
                <label className='form-check-label' htmlFor='exampleRadios1'>
                  Male
                </label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios2'
                  value='option2'
                  checked
                />
                <label className='form-check-label' htmlFor='exampleRadios2'>
                  female
                </label>
              </div>
            </div>
          </form>

          <form className='mt-5'>
            <h3>Parent Info (Father)</h3>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  First Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input first name</small>
                </span>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Last Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input last name</small>
                </span>
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  Email Address <span className='text-danger'>*</span>
                </label>
                <input type='email' className='form-control' />
                <span className='text-danger'>
                  <small>please input first name</small>
                </span>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Telephone Number <span className='text-danger'>*</span>
                </label>
                <input type='number' className='form-control' />
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  Home Address <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Occupation <span className='text-danger'>*</span>
                </label>
        
                <select name="occu" id="occu" className='form-select'>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="civil servant">Civil Servant</option>
                    <option value="clergy">Clergy</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="doctor">Doctor</option>
                    <option value="others">Others</option>


                </select>
                <span className='text-danger'>
                  <small>please select occupation</small>
                </span>
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  State of Origin <span className='text-danger'>*</span>
                </label>
                <select  id="" className="form-select" onChange={(e)=>setSelectedState(e.target.value)}>
                    <option value="">Select state of Origin</option>
                    {
                        states.map((state,i)=>(
                            <option key={i}>{state.state}</option>
                        ))
                    }
                </select>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Local Government Area <span className='text-danger'>*</span>
                </label>
                <select disabled={!selectedState}  id="" className="form-select" onChange={(e)=>setSelectedState(e.target.value)}>
                    <option value="">Select Local Government of Origin</option>
                    {
                        lgas.map((lga,i)=>(
                            <option key={i}>{lga}</option>
                        ))
                    }
                </select>
                <span className='text-danger'>
                  <small>please select L.G.A </small>
                </span>
              </div>
            </div>
          </form>

          <form className='mt-5'>
            <h3>Parent Info (Mother)</h3>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  First Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input first name</small>
                </span>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Last Name <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
                <span className='text-danger'>
                  <small>please input last name</small>
                </span>
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  Email Address <span className='text-danger'>*</span>
                </label>
                <input type='email' className='form-control' />
                <span className='text-danger'>
                  <small>please input first name</small>
                </span>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Telephone Number <span className='text-danger'>*</span>
                </label>
                <input type='number' className='form-control' />
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  Home Address <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Occupation <span className='text-danger'>*</span>
                </label>
                <select name="occu" id="occu" className='form-select'>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="civil servant">Civil Servant</option>
                    <option value="clergy">Clergy</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="doctor">Doctor</option>
                    <option value="others">Others</option>


                </select>
                <span className='text-danger'>
                  <small>please select occupation</small>
                </span>
              </div>
            </div>
            <div className=' row mb-3'>
              <div className='form-group col-md-6'>
                <label>
                  State of Origin <span className='text-danger'>*</span>
                </label>
                <select  id="" className="form-select" onChange={(e)=>setSelectedState(e.target.value)}>
                    <option value="">Select state of Origin</option>
                    {
                        states.map((state,i)=>(
                            <option key={i}>{state.state}</option>
                        ))
                    }
                </select>
              </div>
              <div className='form-group col-md-6'>
                <label>
                  Local Government Area <span className='text-danger'>*</span>
                </label>
                <select disabled={!selectedState}  id="" className="form-select" onChange={(e)=>setSelectedState(e.target.value)}>
                    <option value="">Select Local Government of Origin</option>
                    {
                        lgas.map((lga,i)=>(
                            <option key={i}>{lga}</option>
                        ))
                    }
                </select>
                <span className='text-danger'>
                  <small>please select L.G.A </small>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegistrationComp;

const Wrapper = styled.div`
  .register {
  }
`;
