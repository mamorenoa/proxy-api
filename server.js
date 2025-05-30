import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Reemplaza esta constante con TU URL ngrok actual
const NGROK_URL = 'https://4bda-195-235-93-3.ngrok-free.app';

// Proxy GET /api/platform/getAllHguProvision
app.get('/api/platform/getAllHguProvision', async (req, res) => {
  try {
    const response = await fetch(`${NGROK_URL}/api/platform/getAllHguProvision`);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('❌ Error al hacer proxy:', error);
    res.status(500).json({ error: 'Error en el proxy' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy escuchando en puerto ${PORT}`);
});

