import bioMark from "../Locators/BioMark-locators";
import BioMark from "../fixtures/bioMark-validtestdata.json";
import Invalid from "../fixtures/bioMark-invalidtestdata.json";
describe("Login page", () => {
  beforeEach("Visit Login page", () => {
    cy.visit("https://qa-lab.biomarking.com/");
  });
  it("Verifying that login page is loaded properly", () => {
    bioMark.elements.emailTag().should("be.visible"),
      bioMark.elements.emailInput().should("be.visible"),
      bioMark.elements.passwordTag().should("be.visible"),
      bioMark.elements.paswordInput().should("be.visible"),
      bioMark.elements.loginButton().should("be.visible");
  });
  it("Valid User Login", () => {
    bioMark.elements.emailInput().type(BioMark.Email);
    bioMark.elements.emailInput().should("be.empty");
    bioMark.elements.paswordInput().type(BioMark.Password);
    bioMark.elements.paswordInput().should("be.empty");
    bioMark.elements.loginButton().click();
  });
  it("Invalid User Login", () => {
    bioMark.elements.emailInput().type(Invalid.Email);
    bioMark.elements.paswordInput().type(Invalid.Password);
    bioMark.elements.loginButton().click();
    bioMark.elements.InvalidLoginMsg().should("be.visible");
  });
  it("Validate that dashboard page has been loaded properly", () => {
    bioMark.elements.emailInput().type(BioMark.Email);
    bioMark.elements.paswordInput().type(BioMark.Password);
    bioMark.elements.loginButton().click();
    bioMark.elements.dashboarHeader().should("be.visible");
    bioMark.elements.accountsTab().should("be.visible");
    bioMark.elements.labTab().should("be.visible");
    bioMark.elements.marketingTab().should("be.visible");
    bioMark.elements.logisticsTab().should("be.visible");
    bioMark.elements.inventoryTab().should("be.visible");
    bioMark.elements.financeTab().should("be.visible");
    bioMark.elements.CRMTab().should("be.visible");
  });
  it("Verify that lab list opened", () => {
    bioMark.elements.emailInput().type(BioMark.Email);
    bioMark.elements.paswordInput().type(BioMark.Password);
    bioMark.elements.loginButton().click();
    cy.url().should("equal", "https://qa-lab.biomarking.com/");
    bioMark.elements.accountsTab().should("be.visible");
    bioMark.elements.accountsTab().click();
    bioMark.elements.lablistBranch().should("be.visible");
    bioMark.elements.lablistCode().should("be.visible");
    bioMark.elements.lablistRegion().should("be.visible");
    bioMark.elements.lablistStaff().should("be.visible");
  });
  it("Verify that branch filter is working", () => {
    bioMark.elements.emailInput().type(BioMark.Email);
    bioMark.elements.paswordInput().type(BioMark.Password);
    bioMark.elements.loginButton().click();
    cy.url().should("equal", "https://qa-lab.biomarking.com/");
    bioMark.elements.accountsTab().click();
    bioMark.elements.branchFilter().click();
    bioMark.elements.filterCheck().eq(3).click({ force: true });
    bioMark.elements.filterCheck().eq(0).click({ force: true });
  });
});
