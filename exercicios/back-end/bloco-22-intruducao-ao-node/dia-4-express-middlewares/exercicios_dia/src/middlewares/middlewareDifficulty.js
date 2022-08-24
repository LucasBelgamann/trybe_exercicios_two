const validationDifficulty = (req, res, next) => {
    const difficulty = req.body.difficulty;
    const requiredFields = ['Fácil', 'Médio', 'Difícil'];
    const hasProperties = requiredFields.every((property) => property in difficulty);
    if (!hasProperties) {
        return res.status(400).json( { message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
    }
    next();
}
    
module.exports = validationDifficulty; 