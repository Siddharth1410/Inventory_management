import { Router } from 'express';
var router = Router()

router.get('/', (req,res) => {
    res.render('binScanner',{})
})

export default router