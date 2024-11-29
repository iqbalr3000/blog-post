describe("Create Post Page", () => {
  beforeEach(() => {
    localStorage.setItem("authToken", "example_token");
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
