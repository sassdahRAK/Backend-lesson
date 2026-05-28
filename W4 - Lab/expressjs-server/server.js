import express from 'express';
import { userDb } from './src/seeders/seeder.js';
import { onlyPOSTAllowedMiddleware } from './src/middleware/middleware.js';
import authRoutes from './src/routes/auth.js';
import userRoutes from './src/routes/user.js';


const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
// app.use(onlyPOSTAllowedMiddleware);

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});