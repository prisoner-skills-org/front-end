# front-end   
Live Demo https://prisoners-skills.netlify.com
<br/>

This project was created using <a href="https://create-react-app.dev/docs/getting-started">create-react-app</a> 


 <span>You will need <a href="https://yarnpkg.com">Yarn</a>   <em style="color:red">OR</em>   <a href="https://www.npmjs.com/get-npm">Npm</a> to install this project.</span> 


<span>To get started  `clone` or download the project onto your local machine</span>

Then `cd` into `Prisoner_Skills` <span>Run either `yarn install` <em style="color:red">OR</em> `npm install` to download the dependencies.</span> 

Then run `yarn start` <em style="color:red">OR</em> `npm start` to start the server.

#
# Product Vision For Prisoner Skills

# **Proposal**

- What problem does your app solve?
Lack of access to information regarding prisoner skills. Without this access, prison admins cannot fully coordinate prisoner work time, and without that work time, prisoners lack access to opportunities to become more employable.
- Be as specific as possible; how does your app solve the problem?

> Creates profile pages for each prisoner showcasing their skill sets. These profile pages are accessible to the prison admins and potential employers.

## **`Mission Statement`**

# Our mission at Prisoner Skills is designing the best technologies with innovation, imagination and originality

# **Features**

- What features are required for your minimum viable product?
    - Login / Sign Up with the ability to add, delete and edit user info. forms, Separate pages for Employers ,Prisoners,and Jail Administrators all with different access levels. The ability to give access to data and check if that person is authorized to view the data.
- What features may you wish to put in a future release?
    - Search Functionalities
- What do the top 3 similar apps do for their users?
    - N/A

# **Frameworks - Libraries**

- What 3rd party frameworks/libraries are you considering using?
Green sock,  google fonts for UI, React UI

React Router, Axios, Semantic-UI-React, styled-components

- Do APIs require you to contact its maintainer to gain access?

       No

- Are you required to pay to use the API?

        No 

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

# **Target Audience**

- Who is your target audience? Be specific.

  Prison administrators, Potential employers

- What feedback have you gotten from potential users?

 

- Have you validated the problem and your solution with your target audience? How?

        Research

# **Prototype Key Feature(s)**

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

      Product Description

This app allows prison management to broadcast the skills of inmates to make better use of their time using their skills to make a wage and becoming more employable after prison.

MVP Features Breakdown:

This app contains two user types. A prison admin (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view posted profiles by prison.

Home Page (For potential employer):

No need to log in. Contains a list of prisons who have posted prisoner profiles. Each prison is laid out in a grid format, with the name of the prison, number of people available to work (total number of entries a given prison admin has submitted), and the physical address/location of the prison. Clicking on a prison takes you to the prisoner profile page.

Prisoner Profile page:

Accessed from the home page, non-logged in users can view the list of profiles created by the prison they clicked on.

Single Profile Page:

Users can click on a single post to read more of the description.

Home Page (For a prison):

If no profile is created, be sure to allow a prison to create a profile and add it to the list of prisons on the general home page. After an admin logs in, they are directed to a page where they can see the people’s profiles they’ve created in a list view, and have options to create new one.

Create profile page:

An admin can create a prisoner’s profile. Should include name, availability (permissions to work in prison only or able to have work leave), and list of skills and/or previous work experience. The profile can be edited and deleted after creation.

Navigation:

Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

- [ ]  Stretch Goal:

A single user could search for prisons by entering their zip code and defining a search radius. An admin can upload a pdf of a prisoner’s resume.
