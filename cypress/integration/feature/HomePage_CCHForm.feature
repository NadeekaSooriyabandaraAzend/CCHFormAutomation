Feature: CCH Form Home Page

        Scenario: 01. Verify Add Student Personal Information Page Details
                Given I navigate to the CCH Form
                When I click on Student Personal Information
                Then I verify "Student Personal Information" page

                When I give first name as "TestF" and second name as "TestL"
                And I give gender as "Female"
                And I give street as "Test street" AND zip code as "09009" AND city as "Poland" AND state as "Origon"
                And I give email as "Female" AND cell phone "01245345345" AND birthday as "11/15/2000"
                # And I select the acadamic year
                And I click Will the student be retained
                And I select type of school as "Public" and school as "Option 1"
                And I give Emergency contact name as "Test Parent Name" AND Emegency phone as "3466363345" AND Realtionship to the student as "Parent"
                And I give fill sports and after school activities as "Cricket"
                And I click on next 
                Then I verify "Family Information" page

 Scenario: 01. Verify Add Family Information
                Given I navigate to the CCH Form
                When I click on Student Personal Information
                Then I verify "Family Information" page

        #        TODO




