// eslint-disable-next-line import/no-unresolved
import '@babel/polyfill';
import dotenv from 'dotenv';
import './db';
import app from './app';

import './models/Video';
import './models/Comment';

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
