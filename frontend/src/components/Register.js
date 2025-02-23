import React, { useState } from 'react';
   import axios from 'axios';
   import { useNavigate } from 'react-router-dom';

   const Register = () => {
     const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNumber: '' });
     const navigate = useNavigate();

     const { name, email, password, phoneNumber } = formData;

     const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

     const onSubmit = async (e) => {
       e.preventDefault();
       try {
         const res = await axios.post('/api/register', formData);
         console.log(res.data);
         navigate('/login');
       } catch (err) {
         console.error(err.response.data);
       }
     };

     return (
       <div>
         <h1>Register</h1>
         <form onSubmit={onSubmit}>
           <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
           <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
           <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
           <input type="text" name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="Phone Number" required />
           <button type="submit">Register</button>
         </form>
       </div>
     );
   };

   export default Register;