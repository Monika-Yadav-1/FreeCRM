$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/InvalidCases.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid testscases",
  "description": "Description: Testing invalid functionality",
  "id": "invalid-testscases",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Invalid1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User fills invalid values in \u003ctitle\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "New Deal should not be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "invalid-testscases;invalid-data;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 16,
      "id": "invalid-testscases;invalid-data;;1"
    },
    {
      "cells": [
        "Abc @ 123"
      ],
      "line": 17,
      "id": "invalid-testscases;invalid-data;;2"
    },
    {
      "cells": [
        "123"
      ],
      "line": 18,
      "id": "invalid-testscases;invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 6611557800,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 5718954000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 17246078900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Invalid1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User fills invalid values in Abc @ 123",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "New Deal should not be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Abc @ 123",
      "offset": 29
    }
  ],
  "location": "InvalidCases.user_fills_invalid_values_in(String)"
});
formatter.result({
  "duration": 277111500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.new_Deal_should_not_be_created()"
});
formatter.result({
  "duration": 10055199200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59059}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 634fb6325a9a8b96f22df9a6b8ffc376\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.new_Deal_should_not_be_created(InvalidCases.java:78)\r\n\tat ✽.Then New Deal should not be created(src/test/resources/Feature/InvalidCases.feature:13)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 5700053700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 6809409900,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 13357448000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Invalid1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User fills invalid values in 123",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "New Deal should not be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 29
    }
  ],
  "location": "InvalidCases.user_fills_invalid_values_in(String)"
});
formatter.result({
  "duration": 216657400,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.new_Deal_should_not_be_created()"
});
formatter.result({
  "duration": 10070103800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59090}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bff535cc21652c692829a544696d3e62\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.new_Deal_should_not_be_created(InvalidCases.java:78)\r\n\tat ✽.Then New Deal should not be created(src/test/resources/Feature/InvalidCases.feature:13)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Invalid2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user fills invalid values in the \u003ccompany\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A new Deal should not be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "invalid-testscases;invalid-data;",
  "rows": [
    {
      "cells": [
        "company"
      ],
      "line": 27,
      "id": "invalid-testscases;invalid-data;;1"
    },
    {
      "cells": [
        "Capgeminiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
      ],
      "line": 28,
      "id": "invalid-testscases;invalid-data;;2"
    },
    {
      "cells": [
        "Capg123$%^"
      ],
      "line": 29,
      "id": "invalid-testscases;invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 13950762700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 6881759600,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 13322477000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Invalid2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user fills invalid values in the Capgeminiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A new Deal should not be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Capgeminiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      "offset": 33
    }
  ],
  "location": "InvalidCases.user_fills_invalid_values_in_the(String)"
});
formatter.result({
  "duration": 491314700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.a_new_Deal_should_not_be_created()"
});
formatter.result({
  "duration": 10054998300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59124}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8d472989c6eb5a94d2df750aeca6286f\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.a_new_Deal_should_not_be_created(InvalidCases.java:99)\r\n\tat ✽.Then A new Deal should not be created(src/test/resources/Feature/InvalidCases.feature:24)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 6558673300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 5087119300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 13312278900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Invalid2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user fills invalid values in the Capg123$%^",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A new Deal should not be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Capg123$%^",
      "offset": 33
    }
  ],
  "location": "InvalidCases.user_fills_invalid_values_in_the(String)"
});
formatter.result({
  "duration": 303753000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.a_new_Deal_should_not_be_created()"
});
formatter.result({
  "duration": 10049580700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59165}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6a022bd632d789016f3d9cc9e957381\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.a_new_Deal_should_not_be_created(InvalidCases.java:99)\r\n\tat ✽.Then A new Deal should not be created(src/test/resources/Feature/InvalidCases.feature:24)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Invalid3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user fills the invalid values in \u003cproducts\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "No new deal should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "invalid-testscases;invalid-data;",
  "rows": [
    {
      "cells": [
        "products"
      ],
      "line": 38,
      "id": "invalid-testscases;invalid-data;;1"
    },
    {
      "cells": [
        "1+2\u003d3"
      ],
      "line": 39,
      "id": "invalid-testscases;invalid-data;;2"
    },
    {
      "cells": [
        "-abc123"
      ],
      "line": 40,
      "id": "invalid-testscases;invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 6064038800,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 5832429500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 13328296600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Invalid3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user fills the invalid values in 1+2\u003d3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "No new deal should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1+2\u003d3",
      "offset": 33
    }
  ],
  "location": "InvalidCases.user_fills_the_invalid_values_in(String)"
});
formatter.result({
  "duration": 329643300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.no_new_deal_should_be_created()"
});
formatter.result({
  "duration": 10026786500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59216}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b2468c2af6218d939208dffa1029c94b\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.no_new_deal_should_be_created(InvalidCases.java:120)\r\n\tat ✽.Then No new deal should be created(src/test/resources/Feature/InvalidCases.feature:35)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User goes to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the Deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidCases.user_goes_to_the_Login_page()"
});
formatter.result({
  "duration": 6381139200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_enters_email_id_and_password()"
});
formatter.result({
  "duration": 6781456000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.user_should_be_logged_in_and_go_to_the_Deals_section()"
});
formatter.result({
  "duration": 13331991400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Invalid data",
  "description": "",
  "id": "invalid-testscases;invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Invalid3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user fills the invalid values in -abc123",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "No new deal should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "-abc123",
      "offset": 33
    }
  ],
  "location": "InvalidCases.user_fills_the_invalid_values_in(String)"
});
formatter.result({
  "duration": 354222100,
  "status": "passed"
});
formatter.match({
  "location": "InvalidCases.no_new_deal_should_be_created()"
});
formatter.result({
  "duration": 10041167300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027inline-error-msg\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027MONIKA\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\monik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c79201dc0e075222cc7d07692b4ea87a\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027inline-error-msg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat POM.DealModulePOM.displayerror(DealModulePOM.java:637)\r\n\tat StepDefinition.InvalidCases.no_new_deal_should_be_created(InvalidCases.java:120)\r\n\tat ✽.Then No new deal should be created(src/test/resources/Feature/InvalidCases.feature:35)\r\n",
  "status": "failed"
});
});