const {Router} = require('express');
const {createPaginas, readPaginas, updatePaginas, deletePaginas} = require('../controllers/paginas.controller');

const router = Router();


router.get('/:url', readPaginas);

router.post('/', createPaginas);

router.put('/:id_pagina', updatePaginas);

router.delete('/:id_pagina', deletePaginas);

module.exports = router;