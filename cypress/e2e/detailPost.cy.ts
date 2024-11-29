describe("Detail Post Page", () => {
  beforeEach(() => {
    localStorage.setItem("authToken", "example_token");
    cy.visit("/post/180170/edit");
  });

  it("loads existing post data", () => {
    cy.get("input[name='title']").should("have.value", "Sample Title");
    cy.get("textarea").should("have.value", "Sample Body");
  });
});
