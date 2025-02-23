import React, { useState } from 'react';
   import axios from 'axios';

   const Search = () => {
     const [phoneNumber, setPhoneNumber] = useState('');
     const [result, setResult] = useState(null);

     const handleSearch = async () => {
       try {
         const res = await axios.get(`/api/search?phoneNumber=${phoneNumber}`);
         setResult(res.data);
       } catch (err) {
         console.error(err.response.data);
       }
     };

     return (
       <div>
         <h1>Search</h1>
         <input
           type="text"
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
           placeholder="Enter Phone Number"
         />
         <button onClick={handleSearch}>Search</button>
         {result && (
           <div>
             <h2>Result</h2>
             <p>Name: {result.name}</p>
             <p>Phone Number: {result.phoneNumber}</p>
           </div>
         )}
       </div>
     );
   };

   export default Search;