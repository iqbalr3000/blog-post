describe("Posts List Page", () => {
  beforeEach(() => {
    localStorage.setItem(
      "authToken",
      "ed1d3e9dbf62e8f2a93029d015f8b1c24176a7a58fe8c81c0d7da0f23b04a93b"
    );
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
