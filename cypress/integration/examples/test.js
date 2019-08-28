describe('Login test', function () {

    it('Administrator', function () {
  
        cy.visit('http://localhost:4200/dashboard');

        cy.get('a[role=button]', {
            timeout: 30000
        }).contains('Skip').click({force: true});

        cy.url({
            timeout: 30000
          }).should('include', '/dashboard');

        cy.get('a[href="/detail/12"]', {
            timeout: 30000
        }).contains('Narco').click({force: true});

        cy.url({
            timeout: 30000
          }).should('include', '/detail/12');

        cy.get('input[placeholder=name]', {
            timeout: 30000
        }).type('{selectall}');

        cy.get('input[placeholder=name]', {
            timeout: 30000
        }).type('Eirika');

        cy.get('button', {
            timeout: 30000
        }).contains('save').click({force: true});

    });
})