# LinkedIn Test Cases

### Notes

- All the test cases share some of the preconditions (they are stated
   in the next section).
   2. There are some duplicate steps. In a Test Management Tool, I would create **shared steps** and add them there. But no space for that in
   MD files.
   3. Every section contains some numbered test cases.
   4. Every test case contains steps, and the expected result of each step is mentioned next to it in brackets [].
   5. There are hundreds of test cases in each section. But I just mentioned a sample in each section.
   6. The test cases mentioned below are not ordered. You should deal with them as two different test suites. One for the search tests, and
   another for the profile ones.

### Preconditions

- You are logged in already to LinkedIn (you are already on the home page of the app).
- You have a profile with essential info# LinkedIn Test Cases

### Notes

 - All the test cases share some of the preconditions (they are stated
   in the next section).
   2. There are some duplicate steps. I would create **shared steps** in a Test Management Tool and add them there. But there is no space for that in
   MD files.
   3. Every section contains some numbered test cases.
   4. Every test case contains steps, and the expected result of each step is mentioned next to it in brackets [].
   5. There are hundreds of test cases in each section. But I just mentioned a sample in each section.
   6. The test cases mentioned below are not ordered. You should deal with them as two different test suites. One for the search tests, and
   another for the profile ones.

### Preconditions:
- You are logged in already to LinkedIn (you are already on the home page of the app). 
- You have a profile with basic information (name, image, description "bio", and current job).
- You have a few connections at least.

### Test Cases

 1.  **Profile**:
 
 	 - Add your bio:
			 - Click on your image at the top right. [your profile opens].
			 - Scroll down to the 'About' section and click on the pencil. [the edit mode opens].
			 - update your bio and click on the 'Save' button. [the updated bio reflects on your profile page].
			 
	 - Add to your experience:
			 - Click on your image at the top right. [your profile opens].
			 - Scroll down to the 'Experience' section and click on the '+' sign. [a new dialogue opens].
			 - Fill in the Job title.
			 - Select the Employment type.
			 - Enter the Company name.
			 - Add the job Location.
			 - Select the location type.
			 - Check if it's your current working experience or not.
			 - Select the job date (start and end).
			 - Enter the industry.
			 - Add a description of your experience.
			 - Add some learned skills if there are any.
			 - Click on the 'Save' button. [The added experience is reflected on the homepage].
			 
	 - Add your education:
		 	 - Click on your image at the top right. [your profile opens].
			 - Scroll down to the 'Education' section and click on the '+' sign. [a new dialogue opens].
			 - Enter the School Name.
			 - Select the Degree.
			 - Select the Start and End dates.
			 - Define the Field of Study.
			 - Select the Grade.
			 - Fill in the description of your journey there.
			 - Click on the 'Save' button. [The added education is reflected on the homepage].
			 
	 - Add your project(s):
		 	 - Click on your image at the top right. [your profile opens].
			 - Scroll down to the 'Projects' section and click on the '+' sign. [a new dialogue opens].
			 - Enter the Project Name.
			 - Fill in the Description of the project.
			 - Add the Start and End dates for the project.
			 - Click on the 'Save' button. [The added project is reflected on the homepage].

 2. **Search**:
 
	 - Search for Job:
		 - Search for a Remote Job:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'Jobs' option on the top of the page [job search results are filtered in].
				 - Select the Location 'Remote' [only the remote jobs will load].
				 
		 - Search for an 'Easy Apply' Job:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'Jobs' option on the top of the page [job search results are filtered in].
				 - Select a Location [only jobs with the selected location will show].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Toggle on the 'Easy Apply' option [Only the easy apply jobs will load].
				 
		 - Search for Jobs with less than 10 Applicants:
		 		 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'Jobs' option on the top of the page [job search results are filtered in].
				 - Select a Location [only jobs with the selected location will show].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Toggle on 'Less than 10 Applicants' option [Only the matched jobs will load]

	 - Search for Someone:
		 - Search for Someone based on Current Company:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'People' option on the top of the page [people search results are filtered in].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Select the 'Current Company' option [Search box will open for you to enter the company].
				 - Type the name of the company and click 'Show Results' [Matching Profiles Filtered in]. 
				 
		 - Search for Someone based on School:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'People' option on the top of the page [people search results are filtered in].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Select the 'School' option [Search box will open for you to enter the school].
				 - Type the name of the school and click 'Show Results' [Matching Profiles are filtered in].

	 - Search for Company:
		 - Search for Company based on Location:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'Company' option on the top of the page [Only Companies will filtered in].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Select the 'Location' option [Search box will open for you to enter the location].
				 - Type in the location and click 'Show Results' [Matching Companies are filtered in].
				 
		 - Search for Company based on Industry:
				- Type the keyword in the Search box [Search results page load].
				 - Click on the 'Company' option on the top of the page [Only Companies will filtered in].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Select the 'Industry' option [Search box will open for you to enter the industry].
				 - Type in the industry and click 'Show Results' [Matching Companies are filtered in].
				 - 
		 - Search for Company based on Company Size:
				 - Type the keyword in the Search box [Search results page load].
				 - Click on the 'Company' option on the top of the page [Only Companies will filtered in].
				 - Click on the option from the top left to add more filters [All filters menu opens].
				 - Select the 'Company Size' option [All the suggested company sizes pop up].
				 - Select the company size and click 'Show Results' [Matching Companies are filtered in].

# LinkedIn Bugs

### Notes

- Since it's a live and production app, I found it a little bit challenging to find bugs in it. But a few of the bugs that I faced while using the app.
- All the bugs below are reported from the iPhone 13 Pro Max device.
- All the bugs below happen on both Wi-Fi and 4G connections.
- All the bugs below are low in both priority and severity (couldn't find more important ones 😅)

 1. **Some non-related Search Results Appear in Jobs:**
	- **Steps to reproduce:**
		- Type the keyword in the Search box [Search results page load].
		- Click on the 'Jobs' option on the top of the page [job search results are filtered in].
		- Select the Location 'EMEA' (for example).
	- **Actual result:** Some jobs appear don't match the job location.
	- **Expected result:** All the jobs should match the search criteria. 
	- **Screenshot:** https://drive.google.com/file/d/1KkfnfXBDOVo6S7fwngF1cxQcqDlSuwpo
	
2. **Content of the Page isn't Allgined Correctly on Landscape View:**
	- **Steps to reproduce:**
		- Open the app on landscape view.
	- **Actual Result:** Content is not aligned correctly.
	- **Expected Result:** Content should be aligned correctly.
	- **Screenshot:** https://drive.google.com/file/d/1uqfDnIed6jl3Es28KlvyaPCBECeI04J9
	
3. **Suggested Connections Flick and Change instantly:**
	- **Steps to reproduce:**
		- Open the 'My Network' section and take a look at the suggested connections section.
	- **Actual Result:** The connections flick and change instantly so you can not connect with any.
	- **Expected Result:** The connections should stand so you can send them connections.
	- **Screenshot:** https://drive.google.com/file/d/1cNhGuOI7PxAfHYr4VabQPfpXnE_bTflzrmation (name, image, description "bio", and current job).
