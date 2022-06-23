describe('navigation', () => {
    it('should display Nav', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="menu-button"]')
        .click();

        cy.get('[data-testid="nav"]');
    });

    it('should navigate to Services page', () => {
        cy.visit('http://localhost:3000/');

        cy.get('[data-testid="menu-button"]')
        .click();
        
        cy.contains(/services/i)
        .click();
        
        cy.get('[data-testid="services-page"]');
    });
    
    it('should navigate to Hours and Location page', () => {
        cy.visit('http://localhost:3000/');
        
        cy.get('[data-testid="menu-button"]')
        .click();
                
        cy.contains(/hours and location/i)
        .click();
        
        cy.get('[data-testid="hours-location-page"]');
    });
    
    it('should navigate to Home page', () => {
        cy.visit('http://localhost:3000/services');
        
        cy.get('[data-testid="menu-button"]')
        .click();
                
        cy.contains(/home/i)
        .click();

        cy.get('[data-testid="home-page"]');
    });
});

export {};