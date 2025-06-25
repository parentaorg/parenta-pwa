import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Route API simple pour tester la connexion
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Parenta PWA is running!',
    mongodb: process.env.MONGODB_URI ? 'Connected' : 'Not configured'
  });
});

// Route pour toutes les autres requêtes (SPA)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Parenta PWA running on port ${PORT}`);
});
