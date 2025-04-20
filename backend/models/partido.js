const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
    equipoRival: String,
    Fecha: Date,
    Lugar: String,
    Estadio: String,
    Competencia: {
        type: String,
        enum: ['Liga', 'Copa del Rey', 'Supercopa de España', 'Supercopa de Europa',  'Champions', 'Mundial de Clubes'],
        required: true
      },
    jugadoresConvocados: [
        {
            jugador: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
            posicion: {
                 type: String,
                 enum: ['Portero', 'Defensa', 'Centrocampista', 'Delantero'],
                 required: true
                }
            }
        ],
    Tecnico: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Partido', partidoSchema);