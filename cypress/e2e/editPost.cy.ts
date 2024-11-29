describe("Edit Post Page", () => {
  beforeEach(() => {
    localStorage.setItem("authToken", "example_token");
    cy.visit("/post/180170/edit");
  });

  it("loads existing post data", () => {
    cy.get("input[name='title']").should("have.value", "Sample Title");
    cy.get("textarea").should("have.value", "Sample Body");
  });

  it("updates the post successfully", () => {
    cy.get("input[name='title']").clear().type("Updated Title");
    cy.get("textarea").clear().type("Updated body content.");
    cy.contains("Save").click();
    cy.url().should("include", "/post");
  });
});
