describe("Siparişi Tamamla'ya Tıkladığında OrderReceived Sayfasına Yönlendirme Testi", () => {
 
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:3000');

});

  it("Siparişi Tamamla'ya Tıklandığında OrderReceived Sayfasına Yönlendirilmeli", () => {

    // Boyut ve hamur seçin
    cy.get('input[value="kucuk"]').check();
    cy.get('select[name="hamur"]').select("ince");

    // Ek malzemeleri seçin
    cy.get('input[type="checkbox"]').check(["Pepperoni", "Mantar"]);

    // Siparişi tamamla butonuna tıklayın
    cy.contains("Siparişi Tamamla").click();

    // OrderReceived sayfasına yönlendirildiğini doğrulayın
    cy.url().should("include", "/order-received");
  });

  it("Hamur Seçilmediğinde İlerleyememeli", () => {
   
    // Sadece boyut seçin (hamur seçmeyin)
    cy.get('input[value="kucuk"]').check();

    // Siparişi tamamla butonuna tıklayın
    cy.contains("Siparişi Tamamla").click();

    // Uyarı mesajının görüntülendiğini doğrulayın
    cy.contains("Lütfen boyut ve hamur seçin.").should("be.visible");

    // OrderReceived sayfasına yönlendirilmediğini doğrulayın
    cy.url().should("not.include", "/order-received");
  });

  it("Acıktım Butonuna Tıklandığında Sipariş Sayfasına Yönlendirilmeli", () => {
   
    // "Acıktım" butonuna tıklayın
    cy.contains("Acıktım").click();

    // Sipariş sayfasına yönlendirildiğini doğrulayın
    cy.url().should("include", "/order-form");
  });
});