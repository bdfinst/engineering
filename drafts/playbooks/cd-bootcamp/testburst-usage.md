---
layout: wmt/docs
title: Test Burst
side-navigation: cd-navigation.html
---

<!-- ATTENTION: Linting messes with spaces on this site messing with the number list.-->
<img src="/assets/img/devops-dojo-motto.png" class="img-responsive" width="300px" />

# {{ page.title }}

The ASDA QE team has created [Testburst Report](http://asdaquality.walmart.com/scorecardNew/aboutautomationreports) to visualize
test scripts and trends.

The test burst report only handles test result information and it does not handle testing itself.

## Onboarding

1.  **One time** manual entry using a JSON file to onboard team & display Tab in the scorecard. This request needs to be sent
    via `#help_testburst` slack channel.

    ```json
    {
      "marketName": "Some Market Name",
      "marketTabKey": "marketName",
      "squads": [
        {
          "squadName": "name of team",
          "squadTabKey": "nameOfTeam"
        }
      ]
    }
    ```

2.  **One time** POST call for [Insert ScoreCard](http://asdaquality.walmart.com/scoreCard) to display the app name in the scorecard.

    ```json
    {
      "appname": "applicationName",
      "targetScripts": "438",
      "squad": "nameOfTeam",
      "track": "marketName"
    }
    ```

## Data Publishing

1. Every time the **test set** runs a POST call to [insert test summary](http://asdaquality.walmart.com/insertSummary)
   data which is displayed in the Automation Score Card.

2. For every **test** execution make a POST call to [insert test case](http://asdaquality.walmart.com/insertTestcase) to display granular
   test data to review inside the test burst report.

Note: Inside the request the testRunID: needs to be the same from step 1.

Note: The test cases need to have an endTime as part of the request so that it can be displayed in the report. If it
not present, the reporter interprets it as still running, and will not be displayed.

## Links

[About Test Report](http://asdaquality.walmart.com/scorecardNew/aboutautomationreports)
[Swagger API](http://asdaquality.walmart.com/scorecardNew/reportingservice)

{% include playbooks-footer.html %}
