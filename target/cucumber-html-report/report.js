$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Check Title and New Page button",
  "description": "",
  "id": "facebook-check-title-and-new-page-button",
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
        "sampletest90998@gmail.com",
        "Abc123@#"
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
  "duration": 8669303300,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 991951700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 13361700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 422252200,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 303844900,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6099106100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Facebook Scenario1",
  "description": "",
  "id": "facebook-check-title-and-new-page-button;facebook-scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@include"
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
        "Pages",
        "Discover"
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
  "duration": 12573645700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1037051300,
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
        "sampletest90998@gmail.com",
        "Abc123@#"
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
  "duration": 4891793500,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 946256100,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 19992700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 651615100,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 119237500,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5772769000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Facebook Scenario2",
  "description": "",
  "id": "facebook-check-title-and-new-page-button;facebook-scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@include"
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
  "name": "URL contains text - page",
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
  "duration": 246213800,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.create_new_page_button_is_available()"
});
formatter.result({
  "duration": 74360800,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 915805500,
  "status": "passed"
});
formatter.uri("misc.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Check Name is available",
  "description": "",
  "id": "facebook-check-name-is-available",
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
        "sampletest90998@gmail.com",
        "Abc123@#"
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
  "duration": 4821044900,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.userIsAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 822262800,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.title_of_the_login_page_is_Facebook_log_in_or_sign_up()"
});
formatter.result({
  "duration": 13535000,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.username_and_password_entered(DataTable)"
});
formatter.result({
  "duration": 385805400,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_clicks_submit()"
});
formatter.result({
  "duration": 166694700,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5405196300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Facebook Scenario3",
  "description": "",
  "id": "facebook-check-name-is-available;facebook-scenario3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@include"
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
  "duration": 697369900,
  "status": "passed"
});
formatter.match({
  "location": "MenuStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 934625200,
  "status": "passed"
});
});