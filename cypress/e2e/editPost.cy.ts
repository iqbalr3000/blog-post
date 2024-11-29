describe("Edit Post Page", () => {
  beforeEach(() => {
    localStorage.setItem(
      "authToken",
      "ed1d3e9dbf62e8f2a93029d015f8b1c24176a7a58fe8c81c0d7da0f23b04a93b"
    );
    cy.visit("/post/1/edit");
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
