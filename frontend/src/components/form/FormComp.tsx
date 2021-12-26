import React from 'react'

const FormComp = () => {
    return (
        <div>
            <form action='' className=''>
                <div className=' d-flex mb-4'>
                  <input
                    type='text'
                    placeholder='Name'
                    className=' form-control me-5'
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    className=' form-control'
                  />
                </div>
                <div className=' d-flex mb-4'>
                  <input
                    type='email'
                    placeholder='Email'
                    className=' form-control me-5'
                  />
                  {/* <input
                    type='text'
                    placeholder='Category'
                    className=' form-control'
                  /> */}
                  <select name="" id="" className='form-select'>
                      <option value="category">Category</option>
                      <option value="complaints">Complaints</option>
                      <option value="facilities">Facilities</option>
                      <option value="school fees">School Fees</option>
                      <option value="general enquiry">General Enquiry</option>
                  </select>
                </div>
                <textarea
                  placeholder='Message'
                  className=' form-control pb-5'></textarea>
                <div className=' d-flex justify-content-end'>
                  <button className=' btn btn-lg bg-primary mt-5 text-capitalize'>
                    submit
                  </button>
                </div>
              </form>
        </div>
    )
}

export default FormComp
