const mongose = require('mongoose');

const artifactSchema = new mongose.Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    period: { type: String, required: true },
    material: { type: String, required: true },
    discoveryLocation: { type: String }
});

module.exports = mongose.model('Artifact', artifactSchema);