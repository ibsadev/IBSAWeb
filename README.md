## About
IBSAWeb is a team of Indonesian students, domestic and abroad, working together to create a community for Indonesian students here at UCLA. We understand the struggle of international students coming to the United States from Indonesia and we want to welcome them with open arms. We are hoping to create a community of understanding and nurturing to further help students succeed in whatever their career goals are after college. 

Our hope with this website is to help promote that community further and create a bond of understanding and friendship with your fellow Indonesian students. This website will be exclusively for club members, for them to keep up to date with our meetings, and for them to get classes with one another. 

This website is entirely free and sponsored by IBSA. You will get to network with UCLA Alumni, current students, and even incoming students. Why not give it a try?

# The Development Team
### Brian Roysar Sinambela (Frontend Developer)
_Major:_ Computer Science

_LinkedIn:_ https://www.linkedin.com/in/brianroysar/

_GitHub:_ https://github.com/brianroysar

### Bryan Simca (Project Manager/Full Stack Developer)
_Major:_ Mechanical and Aerospace Engineer 

_LinkedIn:_ https://www.linkedin.com/in/bryan-simca/

_GitHub:_ https://github.com/bryansimca20

### Daphne Marina (QA Tester)
_Major:_ Physiological Sciences

_LinkedIn:_ https://www.linkedin.com/in/daphne-marina-9586591b3/

_GitHub:_ https://github.com/daphnemarina

### Ermano Winata (Frontend Developer)
_Major:_ Mathematics of Computation

_LinkedIn:_ https://www.linkedin.com/in/ermanowinata/

_GitHub:_ https://github.com/ewinata

### Harry Ramli (Project Manager/Backend Developer)
_Major:_ Computer Science

_LinkedIn:_ https://www.linkedin.com/in/harryramli/

_GitHub:_ https://github.com/hramli

### Michelle Gunawan (Frontend Developer)
_Major:_ Computer Science

_LinkedIn:_ https://www.linkedin.com/in/michelle-gunawan/

_GitHub:_ https://github.com/MichelleGunawan

### Natanael Wijaya (Frontend Developer)
_Major:_ Data Theory

_LinkedIn:_ https://www.linkedin.com/in/natanael-wijaya-437631194/

_GitHub:_ https://github.com/natwijaya67

### Nathan Tjoar (Project Manager/Backend Developer)
_Major:_ Computer Science and Engineering

_LinkedIn:_ https://www.https://www.linkedin.com/in/nathan-tjoar-6985121b6/

_GitHub:_ https://github.com/ntjoar

# File structure
There is an env file available. Please contact one of the managers to get it if you are a contributor on this project. 

### Front End file structuring

```
frontend
|
|-- public
|   |-- index.html
|   |-- favicon.ico
|   |-- ...
|
|-- src
|   |
|   |-- components (each folder in the about contains all the.js, an
|   |   |
|   |   |   
|   |   |-- About
|   |   |   |--images  (images for each component can go here
|   |   |   |  |--<images>.png
|   |   |   |
|   |   |   |--About.js
|   |   |   |--About.css
|   |   |   |--... (Other Components for the corresponding component goes here)
|   |   |   
|   |   |   
|   |   |-- Events
|   |   |   |--Events.js
|   |   |   |--Events.css
|   |   |   |--... (Other Components for the corresponding component goes here)
|   |   |   
|   |   |   
|   |   |-- Home
|   |   |   |--Home.js 
|   |   |   |--Home.css
|   |   |   |--... (Other Components for the corresponding component goes here)
|   |   |   
|   |   |-- ... (Other Components for the corresponding component goes here)
|   |    
|   |-- styles
|   |   |--App.css (Declare global styles here, like fonts, etc ) 
|   |   
|   |-- App.js
|   |   
|   |-- index.js
```         
### Back End file structuring

```
root
|
|-- middleware (all middleware implementations go in here)
|   |-- middleware.js
|   |-- ..
|
|-- routes (server routes/endpoints)
|   |-- user.js
|   |-- login.js
|   |-- ..
|
|-- models (Mongoose models)
|   |-- User.js
|   |-- Course.js
|   |-- ..
|
|-- shared (Files containing constants/functions that can be shared/reused across modules)
|   |-- ..
|
|-- app.js (Entry point for backend/server)
```         
