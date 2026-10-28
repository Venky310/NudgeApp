import express from 'express';
import cors from 'cors';
import placesRouter from './routes/places.js';
import tasksRouter from'./routes/tasks.js';

const app = express();
app.use(cors());
app.use(express.json());

// Project 1: 3D Map
app.use('/api/places', placesRouter);

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/tasks', tasksRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));