const {Router} = require('express');
const {createCategorias, readCategorias, updateCategorias, deleteCategorias} = require('../controllers/categorias.controller');

const router = Router();


router.get('/:nombre', readCategorias);

router.post('/', createCategorias);

router.put('/:id_categoria', updateCategorias);

router.delete('/:id_categoria', deleteCategorias);

module.exports = router;