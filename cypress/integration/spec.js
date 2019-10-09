describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /offer', () => {
		cy.get('nav a').contains('offer').click();
		cy.url().should('include', '/offer');
		cy
			.request('https://sapperweb.cdn.prismic.io/api/v2/documents/search?fetchLinks=category.title&ref=XZdMPhIAACIAp04x&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D')
			.then((response) => {
				expect(response.status).to.eq(200);
			})
	});
});