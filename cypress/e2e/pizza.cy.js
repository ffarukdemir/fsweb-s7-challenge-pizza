describe("Pizza Order Test", () => {
    it("should enter text in the input field", () => {
      cy.visit("http://localhost:3000"); 
      cy.get('input[type="text"]').type("Test Text"); 
    });
  
    it("should select multiple toppings", () => {
      cy.visit("http://localhost:3000");
      cy.get('input[type="checkbox"]').check(["Pepperoni", "Mantar", "Sosis"]);
     
    });
  
    it("should submit the form", () => {
      cy.visit("http://localhost:3000"); 
      cy.get('input[type="radio"][value="kucuk"]').check(); 
      cy.get('select[name="dough"]').select("ince"); 
      cy.get('input[type="checkbox"][value="Pepperoni"]').check(); 
      cy.get('button[type="submit"]').click();      
    });
  });
  