const assert = require('assert');
const Math = require('../src/math.js')

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5), 10);
    })
    it('Sum two numbers 2', function(done) {
        const math = new Math();
        math.sum2(5, 5, (value)=>{
            assert.equal(value, 10);
            done(); // Parametro done garante que o teste vai aguardar o callback de func async
        })
    })
    it('Mutiply two numbers'); //Teste pendende quando o código ainda não foi escrito
    // it.only -> vai executar apenas esse teste
    // it.skip -> vai pular esse teste
})