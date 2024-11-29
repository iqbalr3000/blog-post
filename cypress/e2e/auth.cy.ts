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
    cy.get("input[name='token']").type(
      "ed1d3e9dbf62e8f2a93029d015f8b1c24176a7a58fe8c81c0d7da0f23b04a93b"
    );
    cy.contains("Submit").click();
    cy.get(".ant-message").should("contain", "Credentials are valid.");
    cy.url().should("include", "/post");
  });
});
