$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("salesautomation/features/Organization.feature");
formatter.feature({
  "line": 2,
  "name": "Sales Automation Organization feature",
  "description": "Test covering the creation of Organization Work object in Sales Automation",
  "id": "sales-automation-organization-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@organization"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@smoke-sales-automation"
    }
  ]
});
formatter.before({
  "duration": 6902378400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User logs in to SA Application as salesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "CRMBrowser.user_logs_in_to_SA_Application_as_salesmanager()"
});
formatter.result({
  "duration": 16431387800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "create Organization",
  "description": "",
  "id": "sales-automation-organization-feature;create-organization",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@TC-organization-creation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigates to \"Organizations\" List page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "SalesOps navigates to Organization tab to Create Org",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify that user navigates to Organization tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "SalesOps clicks on Create Oranization button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "verify that Organization New harness is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "SalesOps enters the data and submits",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify that Organization Wo is created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Organizations",
      "offset": 14
    }
  ],
  "location": "CRMBrowser.navigates_to_page(String)"
});
formatter.result({
  "duration": 188482658700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d89.0.4389.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4GOC9V2\u0027, ip: \u0027192.168.29.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\KARTHI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8990467885477a3c81b6d3fad2c37dc9\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Organizations\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pega.framework.WaitHandlerImpl$2.apply(WaitHandlerImpl.java:307)\r\n\tat com.pega.framework.WaitHandlerImpl$2.apply(WaitHandlerImpl.java:305)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.pega.framework.WaitHandlerImpl.waitForElementPresence(WaitHandlerImpl.java:213)\r\n\tat com.pega.framework.WaitHandlerImpl.waitForElementPresence(WaitHandlerImpl.java:206)\r\n\tat com.pega.framework.PegaWebDriverImpl.findElement(PegaWebDriverImpl.java:83)\r\n\tat com.pega.page.TopDocumentImpl.findElement(TopDocumentImpl.java:50)\r\n\tat com.pega.page.TopDocumentImpl.findElement(TopDocumentImpl.java:55)\r\n\tat com.pega.crm.customerservice.tiles.impl.PegaLeftNav.getOrganizationList(PegaLeftNav.java:75)\r\n\tat com.pega.CRMBrowser.navigates_to_page(CRMBrowser.java:154)\r\n\tat ???.Given navigates to \"Organizations\" List page(salesautomation/features/Organization.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Organization.naivgateToOrgTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Organization.verifyOrgTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Organization.createOrg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Organization.verifyNewHarnessIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Organization.salesmanager_enters_the_data_and_submits()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Organization.verify_that_Organization_Wo_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Unable to take screenshot\u003cbr/\u003e");
formatter.after({
  "duration": 17793588200,
  "status": "passed"
});
});