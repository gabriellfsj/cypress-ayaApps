import telaInicial from "../support/pages/tela-de-inicio.pages.js"

describe('Teste regressivo do site Aya Apps', () => {
  
  context('Validar tela de início do site Aya Apps', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Clicar no primeiro banner da tela de início', () => {
      
      telaInicial.validarBotaoBannerTresInicio('AYA Ensinah')
      telaInicial.validarBotaoBannerDoisInicio('AYA Bancah')
      telaInicial.validarBotaoBannerUmInicio('AYA Books')


    })    

    

  })



})