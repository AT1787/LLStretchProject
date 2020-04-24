# The LightHouse Bar Graph Stretch Project  
### Submitted by: Andrew Trac, Incoming April 27 2020 Web Development Cohort
### Date April 24 2020

1. About  return
    1.1 Context of the Project  
    1.2 Example Screenshots  

2. API Functionality  
    2.1 Description of Functions  
    2.2 Feature list of your library (options it supports, etc)  

3. Bugs and Not Supported Features  
    3.1 Known issues and bugs  
    3.2 Features not supported  

4. List of External Resources Used  
  
### 1. About  

Hi there. I am an incoming LHL Web Development student that took this Stretch Project challenge. Prior to challenge, the extent of my learning was HTML/CSS introductory online courses on CourseAcademy (approx 15 hours, prior to LHL), and the Lighthouse Compass prep module, including all stretch material up until this point. I had no prior knowledge of jQuery, and very little understanding of javascript/HTML interaction, aside from what was covered in the Compass module.   

I had completed my Compass modules about a week before the cohort start date, and wanted to try my hand on this project. While not mandatory, almost all feedback from alumni stressed how important it was attempt all the stretch projects. I was also up for the challenge, and was no stranger on learning things on my own.  

Total time was roughly 24 hours, from April 22 to 24. While I would've liked to continue to progress on adding features to meet its standard, I am 2 days away from the start of the LHL course, and would like to use the remaining time to start to refocus.  
  
#### 1.1 Context of the Project and what is it for  
  
While I personally enjoyed the project and helped me pass time, the main purpose of this project is to learn and grow in preparation for the LHL course. I wanted to see what blind spots I had; learn about jQuery, coding best practices, version control; and more importantly, test myself on developing something new with little guidance and structure in an unfamiliar and time limited environment. I am hopeful at the end I can also receive constructive feedback via submission through google forms.  
  

I also understand that this project comes with its own evaluation criteria. While helpful from a learning point of view, the goal of this project is **not** to focus on obtaining a passing grade (Acceptable and Above). In fact, I reckon that this is not a project that meets those standards, despite my intense effort, and I predict my steep learning curve has odds against it. Despite all that, I stand behind this work 100% and am proud of it, and fully appreciate any candid input from LHL staff.  


As for this project, it is a simple Bar Graph API that outputs a vertical bar based on data input. It is a simple UI structure, with singular vertical bars, along with an x and y axis with three intervals, default setting to 0, 50, 100.  


#### 1.2 Example sceenshots  


  
What the project.html page displays is its default settings created from the data and option parameters, appended to a parent element that has a width and height of 1000px. However, I am attaching screenshots of the bar graph adjusted for smaller elements, with changes in the option parameter.   
  

![Image of Screenshot1](https://at1787.github.io/LLStretchProject/Screenshot1.png)
![Image of Screenshot2](https://at1787.github.io/LLStretchProject/Screenshot2.png)
  
### 2. API Functionality  

#### 2.1 Description of Features  


The features are relatively simple and straight forward. Most colour, font size, and font style changes are accessible through option parameter. Colours of the bar are also changeable, though set to affect all bars. Intervals on the y axis, text input on all titles are also customizable.  


Data structure of the array is set so odd elements are displaying the data value of the bar, and the even elements are set to be the 'labels' of the corresponding data value:  


('[datavalue1', 'label', 'datavalue2', 'label'])  


Development was done in combination of HTML, CSS, and Javascript/jQuery.  


#### 2.2 Feature list of your library (options it supports, etc)  


The design specifications of this API were listed out on the Lighthouse Labs Compass Module 7 - "Stretch Project". There are multiple features that were specified, however this app only implements some of them. Features that have been implemented are 'checked'  


Core Features:  

[x] Output of Single Bars  
[ ] Output of multiple 'Stacked' Bars  
[x] Usage of the 'element' parameter  
[x] Usage of 'data parameter input as an array ('[datavalue1', 'label', 'datavalue2', 'label'])  
[x] Usage of the option parameter for various customizations  
  

Customizations through the option parameter:  
  

[x] Colour changes to fonts in titles (chart, x-axis, y-axis), y-axis numbers, bars, and data value labels  
[x] Font customizations in both style and size, for titles, y-axis numbers, data value labels  
[ ] Customized setting of data values inside the bar (top, center, low - the only default setting is top)  
[X] Bar spacing between bars  
[X] Customizable y-Axis Intervals (though limited in middle and top sections (default is set to 50 and 100))  

  

Other:  
  

[x] Bars toggle a 'slide down' animation upon loading. 


### 3. Bugs and Not Supported Features  


#### 3.1 Known issues and bugs  


- Unable to produce multiple usage on a single HTML page

This function works fine when it generates a single bar graph in a single HTML page, but using it multiple times for multiple elements create issues in output. Particularly, the bar graphs don't output in alignment, positioning is off, and/or a second graph doesn't appear. I suspect it may have to do with the choices in creating elements with unique IDs or class selectors.. I have yet to determine a solution. 

- Unable to change positioning in accordance to parent element size 

The function is optimized for a parent element (the 'element' parameter) that is set to 1000 x 1000. Changes to size to big or small produces unwanted effects in terms of positioning of text and bars. Its likely a problem in positioning code, and the percentages/ratios calculated to determine optimal output. 

- Unable to max out beyond data values of 100

Data values beyond 100 will stretch beyond the scope of the chart. A solution would likely be re-evaluating the output to a new y-axis scale and creating a formula to express it as a new % of the y-axis ceiling. However, due to time limitations, this was not addressed. 

#### 3.2 Features Not Supported

- Stacked bars

Feature not supported due to time constraints. Theoretically, I understand this probably can be done through organzing a set of bar values through separate nested arrays, and generating new elements through an iterative loop. 

- More dynamic jQuery UI

The only experimented dynamic jQuery UI elment was the toggle 'slide'; more variants were not included. 

- Customizing the position of the values inside the bars

Each bar has a value set to be at the 'top' of the bar; however there's no feature to change it to be top, centre, or low.  

### 4. List of External Resources Used  
  
The amount of resources I used in the short period of time were extensive and I'll try my best to cover them all in the following sections. They were split in different phases: 'Understand and Setting Up jQuery', 'Building HTML/CSS', and 'jQuery/Javscript References'. No personal contacts were enlisted for assistance, including no posts in forums (reddit, stackoverflow, github, Slack), and no 'bar' chart libraries were consuled or carried in to this exercise.  

- Understanding and Setting Up jQuery

https://learn.jquery.com/  
http://jqfundamentals.com/chapter/jquery-basics  
https://www.youtube.com/watch?v=hMxGhHNOkCU  
https://www.codecademy.com/learn/learn-jquery (paid account required  
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/  
https://www.digitalocean.com/community/tutorials/introduction-to-the-dom  
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction  

- Building HTML/CSS

https://learn.shayhowe.com/html-css/building-your-first-web-page/  
https://www.w3schools.com/ (used in various capacities throughout the development)  
https://www.codecademy.com/learn/paths/web-development (paid account required)  

- jQuery/Javascript References  
  
https://jqueryui.com/slider/  
https://www.learnhowtoprogram.com/java-old-reference-only/web-applications-in-java/objects-in-objects-089fbf9f-7b27-4693-8b7b-10f7adebf74b  
https://www.smashingmagazine.com/2009/08/50-useful-new-jquery-techniques/  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max  (MDN was used extensively)  







