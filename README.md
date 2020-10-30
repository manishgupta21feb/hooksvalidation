1. React Bootstrap
2. React hook form validation

Step 1:
npm install react-hook-form

Step 2:
import { useForm } from 'react-hook-form';

Step 3:
const { register } = useForm();
- Register ki help se aap uncontrolled component ke data ko hooks me store kra skte ho, or usme validation apply kr skte ho

Step 4:
ref={register}

Step 5:
name="firstname" (Register name attribute as unique identity)

Step 6:
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  console.log(data);
}

onSubmit={handleSubmit(onSubmit)}

Step 7:
const { register, handleSubmit, errors } = useForm();

Step 8:
ref={register({required: true})}

Step 9:
{errors.firstname && errors.firstname.type === "required" && <span className="error-text">This is required</span>}

Step10:
const {register, handleSubmit, errors, formState} = useForm({
disabled={!formState.isValid}

Step11: (For password match)
validate: (value) => value === watch('password')



Questions :-

what is ref?
Ref ek function hota hai, jb hum cahte hai ki component ki value ko change krna without taking help from props and all.

use of register?
yh method, ref me value ko assign krne or validation apply krne ke liye use hota hai.

handleSubmit
This function will pass the form data when form validation is successful.

errors
errors - error ko contain krta hai or uske input ke ke liye us error ko show krta hai

Watch
This will watch specified inputs and return their values.
