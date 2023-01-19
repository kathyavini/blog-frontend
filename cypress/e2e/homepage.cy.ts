describe('Blog Homepage', () => {
  // Seed testing database with author + post (author and post creation is not part of this frontend's functionality)
  before(() => {
    cy.request('POST', 'http://localhost:3000/testing/reset');
    cy.request('POST', 'http://localhost:3000/testing/newadminauthor');
    cy.request('POST', 'http://localhost:3000/testing/newPost');
  });

  beforeEach(() => {
    cy.visit('http://localhost:8000/');
  });

  it('shows the test blog post title', () => {
    cy.contains('Test Post');
  });

  it('shows the test blog content', () => {
    cy.contains('Test post content');
  });

  it('Link navigates to full blog post', () => {
    cy.get('a').click();
    cy.url().should('contain', 'test-post');
    cy.get('button').contains('Return to Blog Home');
  });
});
