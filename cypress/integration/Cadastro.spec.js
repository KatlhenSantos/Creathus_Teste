

describe('Cadastro', () =>{
    it('Teste CEP', () =>{
        cy.viewport(1440, 900)
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
        
        var endereco = {
            cep: '69082640',
            Tipo_Cep: "Todos",

        }

        cy.get('input[name="endereco"]').type(endereco.cep)
        cy.get('select[name="tipoCEP"]').type(endereco.Tipo_Cep)
        cy.get('button[name="btn_pesquisar"]').click()
        cy.get('button[name="btn_voltar"]').click()

        var endereco_C = {
            nome: 'Creathus',
            Tipo_Cep: "Todos",

        }
        cy.get('input[name="endereco"]').type(endereco_C.nome)
        cy.get('select[name="tipoCEP"]').type(endereco_C.Tipo_Cep)
        cy.get('button[name="btn_pesquisar"]').click()
        cy.get('button[name="btn_voltar"]').click()
    })
})