describe("Posts List Page", () => {
  beforeEach(() => {
    localStorage.setItem("authToken", "example_token");
    cy.visit("/post");
  });

  it("loads posts successfully", () => {
    cy.get("table").should("be.visible");
    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });

  it("navigates to create post page", () => {
    cy.contains("Add Post").click();
    cy.url().should("include", "/post/create");
  });

  it("deletes a post", () => {
    cy.contains("Delete").first().click();
    cy.contains("OK").click();
    cy.get(".ant-message").should("contain", "Post deleted successfully!");
  });
});
