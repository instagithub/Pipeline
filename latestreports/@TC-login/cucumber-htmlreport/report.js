$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("salesautomation/features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Personal edition scenarios",
  "description": "",
  "id": "personal-edition-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PELogin"
    }
  ]
});
formatter.before({
  "duration": 8699737200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Logging in to Personal Edition",
  "description": "",
  "id": "personal-edition-scenarios;logging-in-to-personal-edition",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC-login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User logs in to Application as Recruiter",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigates to \"Job Application\" List page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRMBrowser.user_logs_in_to_Application_as_Recruiter()"
});
formatter.result({
  "duration": 4100188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Job Application",
      "offset": 14
    }
  ],
  "location": "CRMBrowser.navigates_to_page(String)"
});
formatter.result({
  "duration": 27038322600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4GOC9V2\u0027, ip: \u0027192.168.29.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\KARTHI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63724}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f70dff15a5758f6334b2d545c0c1c15d\n*** Element info: {Using\u003dtag name, value\u003diframe}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByTagName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByTagName.findElements(By.java:312)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.pega.framework.PegaWebDriverImpl.findElements(PegaWebDriverImpl.java:172)\r\n\tat com.pega.sync.Throbber.isThrobbingOnAllFrames(Throbber.java:124)\r\n\tat com.pega.sync.Throbber.waitForThrobber(Throbber.java:103)\r\n\tat com.pega.sync.Throbber.waitForNoThrobber(Throbber.java:58)\r\n\tat com.pega.sync.Throbber.waitForNoThrobber(Throbber.java:94)\r\n\tat com.pega.framework.WaitHandlerImpl.waitForNoThrobber(WaitHandlerImpl.java:256)\r\n\tat com.pega.framework.PegaWebElementImpl.click(PegaWebElementImpl.java:508)\r\n\tat com.pega.framework.PegaWebElementImpl.click(PegaWebElementImpl.java:402)\r\n\tat com.pega.crm.customerservice.tiles.impl.PegaLeftNav.launchJobApplication(PegaLeftNav.java:193)\r\n\tat com.pega.CRMBrowser.navigates_to_page(CRMBrowser.java:218)\r\n\tat ???.Given navigates to \"Job Application\" List page(salesautomation/features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.write("Unable to take screenshot\u003cbr/\u003e");
formatter.after({
  "duration": 5935313200,
  "status": "passed"
});
});