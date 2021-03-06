const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect; //CHAI == ferramenta de assert
const sinon = require('sinon'); 

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5), 10);
    })
    it('Sum two numbers 2', function(done) {
        const math = new Math();
        math.sum2(5, 5, (value)=>{
            expect(value).to.equal(10) //assert com chai
            done(); // Parametro done garante que o teste vai aguardar o callback de func async
        })
    })
    it('Mutiply two numbers'); //Teste pendende quando o código ainda não foi escrito
    // it.only -> vai executar apenas esse teste
    // it.skip -> vai pular esse teste

    it('Mutiply numbers', function(){
        const math = new Math();
        expect(math.multiply(5,5)).to.equal(25)
    })
    it('Obj property', function(){
        const obj = {
            name: 'Wallan Mota'
        }
        const obj2 = {
            name: 'Wallan Mota'
        }
        expect(obj).to.have.property('name').equal('Wallan Mota')
        // expect(obj).to.equal(obj2) //Assim vai dar erro pois ele nao verifica as propriedades do obj
        expect(obj).to.deep.equal(obj2)
    })
    it('Calls req with sum and index values', function(){
         const req = {};
         const res = {
             load: sinon.spy() //consigo verificar se ela foi invocada da maneira correta.
         }
         const math = new Math();

         math.printSum(req, res, 5, 5);
         expect(res.load.calledOnce).to.be.true;
         expect(res.load.args[0][0]).to.equal('index')
         expect(res.load.args[0][1]).to.equal(10)
    })

})