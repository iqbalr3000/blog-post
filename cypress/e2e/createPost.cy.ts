describe("Create Post Page", () => {
  beforeEach(() => {
    localStorage.setItem(
      "authToken",
      "ed1d3e9dbf62e8f2a93029d015f8b1c24176a7a58fe8c81c0d7da0f23b04a93b"
    );
    cy.visit("/post/create");
  });

  it("shows validation error when fields are empty", () => {
    cy.contains("Save").click();
    cy.get(".ant-form-item-explain-error").should("contain", "Please input");
  });

  it("creates a new post successfully", () => {
    cy.get("input[name='user_id']").type("7551193");
    cy.get("input[name='title']").type("New Blog Post");
    cy.get("textarea").type("This is the body of the blog post.");
    cy.contains("Save").click();
    cy.url().should("include", "/post");
  });
});
