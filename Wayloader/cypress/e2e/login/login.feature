Feature: Login Page
 
  Scenario: Login Page UI
    Given Visit wayloader login page
    And Check for wayloader logo
    And Checking for forgot password link
    And Don't have account an account? with signup link
    Then Alreay have an account? with signin link
  
  Scenario: Login with valid crendtials
    Given Visit wayloader login page
    When Type into email field "2jom7ub3kd@paperpapyrus.com"
    And Type into password field "Planloader@20"
    And Login to the account
    And Checking for home page logo
    Then Signing out
     
  Scenario: Login with Invalid Email
    Given Visit wayloader login page
    When Type into email field "jom7ub3kd@paperrus"
    And Type into password field "Planloader@20"
    And Login to the account
    Then Checking for Error message "Please enter a valid email address"

  Scenario: Login with Invalid Password
    Given Visit wayloader login page
    When Type into email field "jom7ub3kd@paperrus"
    And Type into password field "Planloader"
    And Login to the account
    Then Checking for Error message "Password should be at least minimum 8 characters, 1 uppercase, 1 digit and 1 special character"

  Scenario: Login with unverified Email and Password
    Given Visit wayloader login page
    When Type into email field "priyaexample@gmail.com"
    And Type into password field "Gagaexample@20"
    And Login to the account
    Then Checking for Error message "The login credentials don't match, please try again!"
