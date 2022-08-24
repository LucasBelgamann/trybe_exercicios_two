const validationPrice = (req, res, next) => {
    const price = req.body.price;
    if (!price) {
        return res.status(400).json( { message: "O campo price é obrigatório" });
    }
    if (price.length >= 0 || typeof price !== 'number') {
        return res.status(400).json( { message: "O campo price deve ser um número maior ou igual a zero" });
    }
    next();
}
    
module.exports = validationPrice; 