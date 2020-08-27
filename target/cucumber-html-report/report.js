$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
  "duration": 2916814008,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 2690562258,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 6635758,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 344787575,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 146663181,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7158984493,
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
        "Friends",
        "Friends"
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
  "duration": 19536220270,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 44003,
  "status": "passed"
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
  "duration": 2494036219,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 2682761097,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 5353813,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 352527152,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 133477740,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14556105533,
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
  "duration": 1148672847,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.create_new_page_button_is_available()"
});
formatter.result({
  "duration": 2208165846,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 61119,
  "status": "passed"
});
formatter.uri("misc.feature");
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
  "duration": 3432696277,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 3546125790,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 6685694,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 605729526,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 206399235,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13043412310,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Facebook Scenario3",
  "description": "",
  "id": "facebook-login;facebook-scenario3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@thistag"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "name is available",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MenuStepDefinition.name_is_available()"
});
formatter.result({
  "duration": 6228779342,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 19638,
  "status": "passed"
});
});