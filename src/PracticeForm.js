import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form';

function PracticeForm() {
  const {register, handleSubmit, errors, formState, watch} = useForm({
    mode: "all"
  });
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="container">
      <h2 className="heading">Sign Up</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name*</Form.Label>
          <Form.Control 
            type="text" 
            name="firstname"
            ref={register({required: true, minLength: 2})}
            className={errors.firstname ? "error-input" : ""}
          />
          {errors.firstname && errors.firstname.type==="required" && <span className="error-text">This is required</span>}
          {errors.firstname && errors.firstname.type==="minLength" && <span className="error-text">Minimum 2 characters are required</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender*</Form.Label>
          <Form.Control 
            as="select"
            name="gender"
            ref={register({required: true})}
            className={errors.gender ? "error-input" : ""}
            >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
          {errors.gender && errors.gender.type==="required" && <span className="error-text">This is required</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Username <span>*</span></Form.Label>
          <Form.Control 
            type="email" 
            name="username"
            ref={register({required: true, pattern : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/})}
            className={errors.gender ? "error-input" : ""}
          /> 
          {errors.username && errors.username.type==="required" && <span className="error-text">This is required</span>}
          {errors.username && errors.username.type==="pattern" && <span className="error-text">Please enter valid email address</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={register({required: true, pattern : /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/})}
            className={errors.gender ? "error-input" : ""}
          />
          {errors.password && errors.password.type==="required" && <span className="error-text">This is required</span>}
          {errors.password && errors.password.type==="pattern" && <span className="error-text">Please enter valid password</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password*</Form.Label>
          <Form.Control 
            type="password"
            name="confirmpassword" 
            ref={register({required: true, validate: (value) => value === watch('password'), pattern : /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/})}
            className={errors.gender ? "error-input" : ""}
          />
          {errors.confirmpassword && errors.confirmpassword.type==="required" && <span className="error-text">This is required</span>}
          {errors.confirmpassword && errors.confirmpassword.type==="pattern" && <span className="error-text">Please enter valid password</span>}
          {errors.confirmpassword && errors.confirmpassword.type==="validate" && <span className="error-text">Password and confirm password does not match.</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>About You</Form.Label>
          <Form.Control 
            as="textarea" 
            name="aboutyou"
            ref={register}
          />
        </Form.Group>
        <Button type="submit" variant="primary" disabled={!formState.isValid} block>Submit</Button>{' '}
      </Form>
    </div>
  )
}

export default PracticeForm;
