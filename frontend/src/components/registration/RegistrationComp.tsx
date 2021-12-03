import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { states } from "utils/nigerianStates";

const RegistrationComp = () => {
  const [step, setStep] = useState(1);
  const path = useRouter().query?.step || 1;

  useEffect(() => {
    setStep(Number(path));
  }, [path]);
  return (
    <Wrapper>
      <div className='container'>
        <div className='register'>
          <p className='josefin fs-36 fw-400 text-capitalize mt-5'>
            registration form
          </p>

          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
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

const StepOne = () => {
  return (
    <form>
      <h3 className='mt-5 josefin  fw-400 text-capitalize'>
        personal information{" "}
      </h3>

      <p>(student info)</p>
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
      <div className='next'>
        <Link href='/registration?step=2'>
          <a className='btn btn-primary btn-lg mt-4 mb-5 next'>Next</a>
        </Link>
      </div>
    </form>
  );
};

// Step Two

const StepTwo = () => {
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState<string[]>([]);

  useEffect(() => {
    if (selectedState) {
      const lga = states.find((state) => state.state === selectedState);
      if (lga) {
        setLgas(lga?.lgas);
      }
    }
  }, [selectedState]);
  return (
    <form className='mt-5'>
      <h3 className='mb-5'>Parent Info (Father)</h3>
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

          <select name='occu' id='occu' className='form-select'>
            <option value='entrepreneur'>Entrepreneur</option>
            <option value='civil servant'>Civil Servant</option>
            <option value='clergy'>Clergy</option>
            <option value='lawyer'>Lawyer</option>
            <option value='doctor'>Doctor</option>
            <option value='others'>Others</option>
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
          <select
            id=''
            className='form-select'
            onChange={(e) => setSelectedState(e.target.value)}>
            <option value=''>Select state of Origin</option>
            {states.map((state, i) => (
              <option key={i}>{state.state}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-6'>
          <label>
            Local Government Area <span className='text-danger'>*</span>
          </label>
          <select
            disabled={!selectedState}
            id=''
            className='form-select'
            onChange={(e) => setSelectedState(e.target.value)}>
            <option value=''>Select Local Government of Origin</option>
            {lgas.map((lga, i) => (
              <option key={i}>{lga}</option>
            ))}
          </select>
          <span className='text-danger'>
            <small>please select L.G.A </small>
          </span>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <Link href='/registration?step=1'>
          <a className='btn btn-primary btn-lg mt-4 mb-5'>Prev</a>
        </Link>
        <Link href='/registration?step=3'>
          <a className='btn btn-primary btn-lg mt-4 mb-5'>Next</a>
        </Link>
      </div>
    </form>
  );
};

const StepThree = () => {
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState<string[]>([]);

  useEffect(() => {
    if (selectedState) {
      const lga = states.find((state) => state.state === selectedState);
      if (lga) {
        setLgas(lga?.lgas);
      }
    }
  }, [selectedState]);
  return (
    <form className='mt-5'>
      <h3 className='mb-5'>Parent Info (Mother)</h3>
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
          <select name='occu' id='occu' className='form-select'>
            <option value='entrepreneur'>Entrepreneur</option>
            <option value='civil servant'>Civil Servant</option>
            <option value='clergy'>Clergy</option>
            <option value='lawyer'>Lawyer</option>
            <option value='doctor'>Doctor</option>
            <option value='others'>Others</option>
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
          <select
            id=''
            className='form-select'
            onChange={(e) => setSelectedState(e.target.value)}>
            <option value=''>Select state of Origin</option>
            {states.map((state, i) => (
              <option key={i}>{state.state}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-6'>
          <label>
            Local Government Area <span className='text-danger'>*</span>
          </label>
          <select
            disabled={!selectedState}
            id=''
            className='form-select'
            onChange={(e) => setSelectedState(e.target.value)}>
            <option value=''>Select Local Government of Origin</option>
            {lgas.map((lga, i) => (
              <option key={i}>{lga}</option>
            ))}
          </select>
          <span className='text-danger'>
            <small>please select L.G.A </small>
          </span>
        </div>
      </div>
      <div className='special row '>
        <div className='col-md-6'>
          <p>Does your child have any special Needs?</p>
        </div>
        <form className='check-box col-md-6'>
          <input
            type='checkbox'
            id='aye'
            name='aye'
            value='yes'
            className='mt-1'
          />
          <label htmlFor='yes'>YES</label>
          <input
            type='checkbox'
            id='nope'
            name='nope'
            value='no'
            className='mt-1'
          />
          <label htmlFor='no'>NO</label>
        </form>

        <div className='mt-3'>
          <p>
            if yes <span className='text-danger'>*</span>{" "}
          </p>
          <input type='text' className='form-control' />
          <span className='text-danger'>
            <small>please specify</small>
          </span>
        </div>
      </div>

      <div className='row  mt-5 '>
        <div className='col-md-6'>
          <label>In case of an emergency, who do we call?</label>
          <select name='' id='' className=' form-select'>
            <option value='mother'>Mother</option>
            <option value='Father'>Father</option>
          </select>
        </div>

        <div className=' col-md-6 form-group align-items-center'>
          <label htmlFor='if others'>If Others</label>
          <input type='number' className='form-control  ' />
          <span className='text-danger'>
            <small>input number</small>
          </span>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <Link href='/registration?step=2'>
          <a className='btn btn-primary btn-lg mt-4 mb-5'>Prev</a>
        </Link>
        <Link href='/registration?step=4'>
          <a className='btn btn-primary btn-lg mt-4 mb-5 '>Next</a>
        </Link>
      </div>
    </form>
  );
};

const StepFour = () => {
  const [selectedState, setSelectedState] = useState("");
  console.log(selectedState);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <h3 className='mb-5'>Child's Health Information</h3>
      <div className=' row mb-3'>
        <div className='form-group col-md-6'>
          <label>
            Blood Group <span className='text-danger'>*</span>
          </label>
          <select name='blood group' id='blood group' className='form-select'>
            <option value='select'>select blood group</option>
            <option value='o+'>O+</option>
            <option value='o-'>O-</option>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B-</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
          </select>
          <span className='text-danger'>
            <small>please select your blood group</small>
          </span>
        </div>
        <div className='form-group col-md-6'>
          <label>
            Genotype <span className='text-danger'>*</span>
          </label>
          <select name='genotype' id='genotype' className='form-select'>
            <option value='select'>select genotype</option>
            <option value=''>AA</option>
            <option value=''>AS</option>
            <option value=''>SS</option>
          </select>
          <span className='text-danger'>
            <small>please select your genotype </small>
          </span>
        </div>
      </div>
      <div className=' row mb-3'>
        <div className='form-group col-md-6'>
          <label>
            Name of Family Clinic <span className='text-danger'>*</span>
          </label>
          <input type='text' className='form-control' />
          <span className='text-danger'>
            <small>please fill name of clinic</small>
          </span>
        </div>
        <div className='form-group col-md-6'>
          <label>
            Name of Family Doctor<span className='text-danger'>*</span>
          </label>
          <input type='text' className='form-control' />
          <span className='text-danger'>
            <small>please fill name of doctor</small>
          </span>
        </div>
      </div>
      <div className=' row mb-3'>
        <div className='form-group col-md-6'>
          <label>Doctor's Email</label>
          <input type='email' className='form-control' />
          <span className='text-danger'>
            <small>please fill in doctor's email</small>
          </span>
        </div>
        <div className='form-group col-md-6'>
          <label>Doctor's Telephone Number</label>
          <input type='number' className='form-control' />
          <span className='text-danger'>
            <small>please fill in doctor's number</small>
          </span>
        </div>
      </div>
      <div className=' row mb-3'>
        <div className='form-group col-md-6'>
          <label>Clinic Address</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group col-md-6'>
          <label>State</label>
          <select
            id=''
            className='form-select'
            onChange={(e) => setSelectedState(e.target.value)}>
            <option value=''>Select state of Origin</option>
            {states.map((state, i) => (
              <option key={i}>{state.state}</option>
            ))}
          </select>
        </div>
      </div>

      <div className=' row mb-3 mt-5'>
        <div className='form-group col-md-6 special'>
          <label className='fw-bold'>
            Does your Child have any other Health related Condition?
          </label>
          <form className='check-box col-md-6'>
            <input
              type='checkbox'
              id='aye'
              name='aye'
              value='yes'
              className='mt-1'
            />
            <label htmlFor='yes'>YES</label>
            <input
              type='checkbox'
              id='nope'
              name='nope'
              value='no'
              className='mt-1'
            />
            <label htmlFor='no'>NO</label>
          </form>
        </div>
        <div className='form-group col-md-6'>
          <label>Select Health Condition</label>
          <select
            name='health condition'
            id='health condition'
            className='form-select'>
            <option value='select'></option>
            <option value='asthma'>Asthma</option>
            <option value='eye problem'>Eye problem</option>
            <option value='ulcer'>Ulcer</option>
            <option value='others'>Others</option>
          </select>
          <span className='text-danger'>
            <small>please select child's health condition</small>
          </span>
        </div>
      </div>

      <span className='text-danger mt-5'>
        <h5>Other Health Info *</h5>
      </span>

      <div className='attach d-flex'>
        <div className='col-md-6'>
          <p>
            Please attach a copy of Childs immunization card with (Name of
            vaccine <br />
            e.g Polio, Typhoid and date).
          </p>
        </div>
        <div className='col-md-6'>
          <input ref={fileRef} className='d-none' type='file' />
          <button
            onClick={() => {
              fileRef.current?.click();
            }}
            className='btn btn-outline-dark form-control '>
            Attach File <i className='fas fa-paperclip mx-2'></i>
          </button>
          <span className='text-danger'>
            <small>please attach card report</small>
          </span>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='form-group col-md-6 special'>
          <label>Is your child on any routine Medication/Allergy</label>
          <form className='check-box col-md-6'>
            <input
              type='checkbox'
              id='aye'
              name='aye'
              value='yes'
              className='mt-1'
            />
            <label htmlFor='yes'>YES</label>
            <input
              type='checkbox'
              id='nope'
              name='nope'
              value='no'
              className='mt-1'
            />
            <label htmlFor='no'>NO</label>
          </form>
        </div>

        <div className='form-group col-md-6'>
          <label>
            State Medication/Allergy <span className='text-danger'>*</span>{" "}
          </label>
          <input type='text' className='form-control' />
          <input ref={fileRef} className='d-none' type='file' />
          <button
            onClick={() => {
              fileRef.current?.click();
            }}
            className='btn btn-outline-dark form-control mt-4 '>
            Attach File <i className='fas fa-paperclip mx-2'></i>
          </button>
          <span className='text-danger'>
            <small>please attach card report</small>
          </span>
        </div>
      </div>
      <div className='row mt-5'>
        <p>
          Does your child have any other related health condition that our house
          physician should know about?
        </p>

        <label>
          <small>
            if yes <span className='text-danger'>*</span>
          </small>
        </label>
        <input type='text' className='form-control' />
        <span className='text-danger'>
          <small>please state the health condition</small>
        </span>
      </div>

      <div className='agreement mt-5'>
        <h4>
          Privacy/Agreement <br />
          <span className='text-primary '>to terms</span>
        </h4>

        <p>
          Do you authorize your childs healthcare provider and designated
          provider of healthcare in the school setting to discuss my childs
          health concerns and/or exchange information pertaining to this form.
          This authorization will be in place until or unless you <br />{" "}
          withdraw it, you may withdraw your authorization at anytime by
          contacting the school. When information is released from your child
          record, documentation of the disclosure is maintained in your childs
          health record.
        </p>

        <div className='check-wrapper d-flex mt-5'>
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
              Authorize
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
              Do not Authorize
            </label>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
        <Link href='/registration?step=3'>
          <a className='btn btn-primary btn-lg mt-5 mb-5'>Prev</a>
        </Link>
        <Link href='/'>
          <a className='btn btn-primary btn-lg mt-5 mb-5 '>Done</a>
        </Link>
      </div>
      </div>
    </form>
  );
};
