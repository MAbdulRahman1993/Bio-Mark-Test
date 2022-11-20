class bioMark {
  elements = {
    emailTag: () => cy.xpath('//p[normalize-space()="Email Address"]'),
    emailInput: () => cy.xpath('//input[@id="mui-1"]'),
    passwordTag: () => cy.xpath('//p[normalize-space()="Password"]'),
    paswordInput: () => cy.xpath('//input[@id="mui-2"]'),
    loginButton: () => cy.xpath('//button[@type="button"]'),
    InvalidLoginMsg: () =>
      cy.xpath('//div[contains(text(),"Invalid Email or password.")]'),
    dashboarHeader: () => cy.get("span").contains("Dashboard"),
    accountsTab: () => cy.get("span").contains("Accounts"),
    labTab: () => cy.xpath('//span[normalize-space()="Lab"]'),
    marketingTab: () => cy.xpath('//span[normalize-space()="Marketing"]'),
    logisticsTab: () => cy.xpath('//span[normalize-space()="Logistics"]'),
    inventoryTab: () => cy.xpath('//span[normalize-space()="Inventory"]'),
    financeTab: () => cy.xpath('//span[normalize-space()="Finance"]'),
    CRMTab: () => cy.xpath('//span[normalize-space()="CRM"]'),
    lablistBranch: () => cy.xpath('//div[contains(text(),"BRANCH")]'),
    lablistCode: () => cy.xpath('//div[contains(text(),"CODE")]'),
    lablistRegion: () => cy.xpath('//div[contains(text(),"REGION")]'),
    lablistStaff: () => cy.xpath('//div[contains(text(),"TOTAL STAFF")]'),
    branchFilter: () => cy.xpath('//div[@role="button"]'),
    filterCheck: () => cy.get("div").should("contain", "All"),
  };
}
module.exports = new bioMark();
