# BookWave

**"Empowering Readers with a Symphony of Audiobooks: Your Personal Audiobook Collection and Listening Experience"**



![Logo](https://ideogram.ai/api/images/direct/jqEf1hvLSWi3jp0v6LVzzQ)


## Diagram
![Draw.io](https://i.ibb.co/gyxWM3Q/Untitled-Diagram-drawio.png)

# Concept



### Screenshots

---

![Figma design skeleton](https://i.ibb.co/j3KXz2K/figma-grainform-wireframe-start-8-29-23.png)

![screenshot 2 Placeholder]()

### Instructions

---




###### Note:



### Assignment

---

Per Scholas MOD 3 Final Project

https://perscholas.instructure.com/courses/1464/assignments/291071?module_item_id=930418


DUE: september 7th


### Approach

---

*Create a web/browser version of a max msp granular sampler with drag-and-drop sample audio import function where a logged-in user can begin a new "Project", where the sampler object exists, manipulate the imported audio of their choice with the sampler tool using the given gui parameters provided between js/REACT and max msp via RNBO library, and save the project 'state' or project settings (imported samples, etc) and potentially share with other users and even externally*

*the goal is to give the user a particle-based audio manipulation tool where they can morph samples into fragments of audio and smear the result into a textured 'cloud' without the need to download and install a vst plugin or standalone application to their pc/device*

PARAMS: 
- LFO for scrub playback start position, 
- window shape/env, 
- scatter/spread, 
- grain size, 
- pitch(?), 
- grain density/amount/num, 
- pan/width, 
- playback speed, 
- grain rate(?)
- play button/mute-stop button
- sample import/drop box (in waveform display window? also list of imported?)

CRUD:
- Create new project including imported sample(s) & settings
- Read sample(?)
- Edit project (main process)
- Delete project

 `USER SIGN IN & SHARE PROJECT(?)

-

<br>

[RNBO & JS TUTORIAL](https://www.youtube.com/watch?v=fzfGYsIsAKg&ab_channel=lttcmd) *

[@rnbo/js](https://socket.dev/npm/package/@rnbo/js) 
```npm install @rnbo/js```
*JavaScript runtime for using exported RNBO Patchers in a Web Browser*

[RNBO Javascript API reference](https://rnbo.cycling74.com/js)

[Js Web Template Github](https://github.com/Cycling74/rnbo.example.webpage)
 & 
 [Js Webpage Template Guide](https://rnbo.cycling74.com/explore/javascript-webpage-template)

Web Audio API & AUDIOWORKLET

[Web Integration of a granular synthesizer using RNBO in Max/MSP PDF](https://projekter.aau.dk/projekter/files/535868106/Master_Thesis__1_.pdf)

[RNBO web granulator js codesandbox ](https://codesandbox.io/s/fhczyi) 

[Learning Synths w/RNBO](https://rnbo.cycling74.com/explore/learning-synths-and-rnbo)
*alternatives: Gibber, PureData & WebPD*

[Processing.js](https://processing.org/tutorials/gettingstarted)

**Including the RNBO patch using JavaScript:**
In order to actually include the audio processing, a JavaScript (JS) application was
created. First of all, AudioContext - a Web Audio API interface, where all audio
processing is happening - was initiated. AduioContext was responsible not only for
sound processing but also outputting audio on a website. Stopping and resuming
the AudioContext will do the same to the audio output

[RNBO BUFFER GRANULATOR Object](https://docs.cycling74.com/max8/refpages/rnbo_granulator~)

[AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)

[Learn the Web Export Target](https://rnbo.cycling74.com/learn/the-web-export-target)

[WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

[Reddit FM Synth REACT RNBO Github](https://github.com/StuartMellor/Max-MSP-RNBO-Web-React-Simple-FM/tree/main/Node%20App)

[RNBO GRanular Web Synth](https://sllewmas.github.io/rnbo/)

[HTML5 multi-touch Granular SYNTH github](https://github.com/zya/granular)

[Nebula Project Github](https://github.com/nthe/nebula)

[Grainflow Max Msp App](https://github.com/composingcap/grainflow-basic-granulator-app?fbclid=IwAR3Q4sDQwuSJlqS6YVShAlIeL6GlTZERZ-8FMvEeoAhBtRVngusOznSQPmU)

*TO EXPORT FROM Max Msp RNBO: (must be inside of an open OBJECT which is exportable, and the EXPORT icon will appear on the right side of the newe object Window)*

[RNBO EXPORT TUTORIAL](https://www.youtube.com/watch?v=Q3S3BD1LnCY&ab_channel=MelodyLoveless)

[Another GOOD Export and Js Code Tutorial for RNBO](https://www.youtube.com/watch?v=1HVT1hsuKsA&ab_channel=lttcmd)

[CodePen of the abl LFO Animation w/html-css-js](https://codepen.io/team/cycling74/pen/BaxOzmL/320ebc13dfe1a5a20484858f2266e90a)

**Knobs/Fader Icons:** 
- [Vue round Slider:](https://www.npmjs.com/package/vue-round-slider)
- [React Rotary Knob:](https://www.npmjs.com/package/react-rotary-knob)
- [React Dial Knob:](https://www.npmjs.com/package/react-dial-knob)
- [React Community Slider:](https://www.npmjs.com/package/@react-native-community/slider)
- [React red Slider:](https://www.npmjs.com/package/react-slider)


### Tech/Framework

---

**_Built With:_**

```
-RNBO [Max-Msp]
-Javascript
-CSS
-HTML5
-REACT


```
#### Credits:
- Stable Diffusion: image generation for logo
- Draw.io: Diagram

#### Future Enhancements:

- [ ] Sample Import - drag and drop
- [x] Scrubber start position lfo 
- [ ] Share project feature


---

###### Unsolved/To Be Accomplished

## Assigment Requirements/Instructions:
Minimum Requirements:

3) Application Technical Requirements/Deliverables
A functioning full-stack, single-page application for (Express) and a CDN service for (React).
Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node
Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
Implement token-based authentication - "...a user can sign-up, log in & log out".
Implement authorization by restricting functionality to authenticated users.
Navigation should respond to the login status of the user.
One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
Have a comprehensive feature-set.

Full CRUD distributed across all Data Entities

Or

One of the following features instead:

(Easy) - Consume a third-party API and display API data in components.
(Moderate) - Include an admin interface w/features.
(Hard) - Utilize multi-user, real-time communications (difficult and time consuming)

........

TOOLS


**Wireframe/Comment the design and structure of the app first, then start the code**

- authentication for user login must be working and demonstrated during presentation

socket.io

[trello:](https://trello.com/b/ErKkj91p/mod-3-project)

[DBDiagram](https://dbdiagram.io/home)

[Wireframe.cc](https://wireframe.cc/)

[StableDiffusion:](https://stablediffusionweb.com/#demo)

[Figma](https://www.youtube.com/watch?v=_A_Jpr9HkGA&ab_channel=CJGammon) [AI03: Build a Website with Midjourney, Figma & ChatGPT]
*ex. Midjourney/StableDiffusion prompt: (/imagine: ui/ux interface design side by side Behance Dribble, beautiful colorful creative app marketplace)*

[Swagger Readme](https://swagger.io/docs/open-source-tools/swagger-codegen/)


to supplement: look up "mongoose hooks"


### Mod 3: A MERN Stack Application & TribleByte:

~~~~~~~~~
Overview


🚨 ensure that project:

✅   Meets the minimum requirements

✅   Is reasonably scoped

Necessary Deliverables
1) Project Planning
A project consists of more than just code.

This project requires planning organized within a Trello board with the following lists:

Icebox: Holds user stories that have yet to be moved to the Current/MVP list. All user stories are originally put into the Icebox, including both MVP and wish list stories.
Current/MVP: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved from the Icebox.
Completed: Hold completed user stories.
Wireframes: Sketches of each screens's user interface for the major functionality of the application.
Entity-Relationship-Diagram (ERD): A diagram of the app's models (one per data entity) and the relationships between them.
User stories need to be formed properly using this template:
As a <role>, I want <feature> so that <reason>. The reason is optional if it's patently obvious.

2 Project Source Control & README
The project's source code for both your Express Backend and React Frontend must be hosted on a personal GitHub repository.

The repo is to contain frequent commits dated from the beginning of the project through its completion.

The project must include a README.mdfile with the following sections:

Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
Getting Started: Links to the project's planning (Trello board) and the deployed app.
Unsolved Problems: List any unsolved issues.
Future Enhancements: Identify future features and enhancements planned for the project.

3) Application Technical Requirements/Deliverables
A functioning full-stack, single-page application for (Express) and a CDN service for (React).
Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node
Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
Implement token-based authentication - "...a user can sign-up, log in & log out".
Implement authorization by restricting functionality to authenticated users.
Navigation should respond to the login status of the user.
One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
Have a comprehensive feature-set.

Full CRUD distributed across all Data Entities

Or

One of the following features instead:

(Easy) - Consume a third-party API and display API data in components.
(Moderate) - Include an admin interface w/features.
(Hard) - Utilize multi-user, real-time communications (difficult and time consuming)

4) Project Presentation
You will have 7 minutes to present and demonstrate the following:

Introduce your project by paraphrasing its README.
Click the link in the README to open the deployed app.
Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.
Demonstrate your app's main features.
Share/discuss the following code (not line-by-line):

The main/central Mongoose model
Your "favorite" Express controller method
Your "favorite" React component
The client-side routing
Share the experience by answering the following:

What was your biggest challenge?
What are your key learnings/takeaways?
Following your presentation, there will be a brief Q & A period and optional instructor feedback.

Project Assistance
At this stage of SEIR, being able to find the the answers to your development issues is of paramount importance.
Feel free to use all resources available and collaborate with others.
If you do seek assistance in Slack, explain the issue, include screenshots, and explain what you've done to solve the issue on your own.

Suggestions to Get Started
Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.
Implement the Usermodel and authentication first. Then implement the "As a visitor, when I browse to the app, I want..." user story.
Prioritize user stories and code them accordingly.
When implementing a feature, think through the steps that it takes in plain language first. If necessary, write and/or diagram the steps to help guide your coding.
Follow the steps we've done in class to implement features, beginning with the user's interaction, identifying the proper route, etc.
Read the docs for whatever technologies / frameworks / API’s you use.

Best Practices
Write DRY code.
In a SPA, communication with the backend is via AJAX. Build RESTful APIs to CRUD your data entities (resources) and perform other functionality via AJAX. In a React app, those AJAX calls should be made from "service" modules, not components.
Be consistent with your code style.
Clearly name variables and functions - remember, variables are usually named as nouns and functions as verbs.
Write well-formatted HTML/CSS/JS. Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.
Comment your code where it makes sense. Most code is self-documenting, however, comments help explain complicated code.
If you have any questions regarding these requirements, please feel free to contact your instructional team!


*SKIP TRIPLEBYTE

