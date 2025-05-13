const ELEMENTS = require('../elements/tela-de-inicio.elements').ELEMENTS

class telaInicial {

    validarBotaoBannerUmInicio(texto){
        cy.get(ELEMENTS.botaoBannerUmInicio)
        .click() 

        cy.get(ELEMENTS.textoAyaBooks)
        .should('contain', texto)
    }

    validarBotaoBannerDoisInicio(texto){
        cy.get(ELEMENTS.botaoBannerDoisInicio)
        .click()    

        cy.get(ELEMENTS.textoAyaBancah)
        .should('contain', texto)
    }

    validarBotaoBannerTresInicio(texto){
        cy.get(ELEMENTS.botaoBannerTresInicio)
        .click() 
        
        cy.get(ELEMENTS.textoAyaEnsinah)
        .should('contain', texto)
    }

   
    selectbotaoAppleStoreIncio(){
        cy.get(ELEMENTS.botaoAppleStoreIncio)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()  
        
        cy.origin('https://apps.apple.com', () => {
            cy.url().should('include', '/br/app/aya-books-audiolivros-livros/id1501381849?l=pt&ls=1'); // por exemplo
        });

    }

    selectbotaoPlayStoreIncio(){
        cy.get(ELEMENTS.botaoPlayStoreIncio)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()    

        cy.origin('https://play.google.com', () => {
            cy.url().should('include', 'store/apps/details?id=br.com.ayabooks'); // por exemplo
        });

        
    }

   
    
}

export default new telaInicial();
