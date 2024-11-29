describe("Authentication Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays error when fields are empty", () => {
    cy.contains("Submit").click();
    cy.get(".ant-message").should("contain", "Both fields are required.");
  });

  it("saves token and navigates to the posts page on success", () => {
    cy.get("input[name='name']").type("John Doe");
    cy.get("input[name='token']").type("example_token");
    cy.contains("Submit").click();
    cy.get(".ant-message").should("contain", "Credentials are valid.");
    cy.url().should("include", "/post");
  });
});
