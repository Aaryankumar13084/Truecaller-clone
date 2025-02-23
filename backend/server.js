const express = require('express');
   const cors = require('cors');
   const connectDB = require('./config/db');
   const apiRoutes = require('./routes/api');

   const app = express();

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Connect to MongoDB
   connectDB();

   // Routes
   app.use('/api', apiRoutes);

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));