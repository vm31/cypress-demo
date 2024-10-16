describe('filter betweeen given email list',()=>{
    beforeEach(() => {
        cy.fixture('email.html').then((html) => {
            document.body.innerHTML = html;
        });
    });

    it.only('test list of email address and apply filter',()=>{
        cy.visit('http://localhost:8080/email');
        cy.get('#email-list').should('exist');
        //parent element
        cy.get<HTMLLIElement>('#email-list li').as('parentELement');
        cy.get('@parentELement').each(($el) => {
            const email :string  = $el.text();
            if(email.includes('cgi.com')){
                cy.log(`found cgi email:',${email}`);
                expect(email).to.include('cgi.com')
            }
        })
    })
})