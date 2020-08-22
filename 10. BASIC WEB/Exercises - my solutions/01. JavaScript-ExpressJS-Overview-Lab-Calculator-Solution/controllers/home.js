const Calculator=require('../models/Calculator');
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req,res) => {
        let leftOperand=Number(req.body.calculator.leftOperand);
        let rightOperand=Number(req.body.calculator.rightOperand);
        let operator=req.body.calculator.operator;
        let calculator=new Calculator(leftOperand, operator, rightOperand);
        let result=calculator.calculateResult();
        res.render('home/index',{calculator: calculator, result: result})
    }

};