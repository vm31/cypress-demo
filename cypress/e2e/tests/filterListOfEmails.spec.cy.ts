describe('filter betweeen given email list',() => {
    beforeEach(() => {
        cy.fixture('email.html').then((html) => {
            document.body.innerHTML = html;
        });
    });

    it('verify list of email address have cgi emails',() => {
        const emailRegex:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        cy.visit('http://localhost:8080/email');
        cy.get('#email-list').should('exist');
        //parent element
        cy.get<HTMLLIElement>('#email-list li').as('parentELement');
        cy.get('@parentELement').each(($el) => {
            const email :string  = $el.text();
            if(email.includes('cgi.com')){
                cy.log(`found cgi email:',${email}`);
                expect(email).to.include('cgi.com');
                //test() will check if pattern exists in searched string
                if(emailRegex.test(email)){
                    cy.log(`vaild cgi email format,{$email}`)
                } else {
                    cy.log(`not valid cgi email format,{$email}`)
                }
            }
        })
    });
})