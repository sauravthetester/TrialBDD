$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "initiate",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is Facebook - log in or sign up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "username and password entered",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "saurav3046@ymail.com",
        "max10000@"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.match({
  "location": "MenuStepDefinition.initiate()"
});
formatter.result({
  "duration": 4540568159,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 7663125764,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 6565026,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 360941384,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 150463749,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 17260465191,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Facebook Scenario1",
  "description": "",
  "id": "facebook-login;facebook-scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@thistag"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the title of page is",
  "rows": [
    {
      "cells": [
        "id",
        "title"
      ],
      "line": 18
    },
    {
      "cells": [
        "Messenger",
        "Messenger"
      ],
      "line": 19
    },
    {
      "cells": [
        "Marketplace",
        "Facebook Marketplace"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuStepDefinition.the_title_of_page_is(DataTable)"
});
formatter.result({
  "duration": 26741748979,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Marketplace\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Sathish.local\u0027, ip: \u00272409:4065:41d:77dc:157e:cc39:a8e8:5747%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609545 (c2f88692e98ce7..., userDataDir: /var/folders/k7/rp8r07gn3gn...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62658}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 84.0.4147.135, webStorageEnabled: true}\nSession ID: e9cdf7dab9e07b0bfb20d18984f602f4\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Marketplace\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinitions.MenuStepDefinition.the_title_of_page_is(MenuStepDefinition.java:99)\n\tat ✽.When the title of page is(src/test/java/Features/login.feature:17)\n",
  "status": "failed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "initiate",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is Facebook - log in or sign up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "username and password entered",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "saurav3046@ymail.com",
        "max10000@"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.match({
  "location": "MenuStepDefinition.initiate()"
});
formatter.result({
  "duration": 1699917066,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 9971449493,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 5334619,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 319722400,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 131561487,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 22850744594,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Facebook Scenario2",
  "description": "",
  "id": "facebook-login;facebook-scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@thistag"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "clicked on pages",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "create new page button is available",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuStepDefinition.clicked_on_pages()"
});
formatter.result({
  "duration": 491010723,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.create_new_page_button_is_available()"
});
formatter.result({
  "duration": 2708267788,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 238464867,
  "status": "passed"
});
});