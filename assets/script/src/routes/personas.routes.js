const {Router} = require('express');
const {createPersonas, readPersonas, updatePersonas, deletePersonas} = require('../controllers/personas.controller');

const router = Router();


router.get('/:usuario', readPersonas);

router.post('/', createPersonas);

router.put('/:id_persona', updatePersonas);

router.delete('/:id_persona', deletePersonas);

module.exports = router;