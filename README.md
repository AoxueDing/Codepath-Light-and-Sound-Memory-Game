# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aoxue Ding**

Time spent: **30** hours spent in total

Link to project: https://light-and-sound-memory-game-aoxueding.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial <br/>
     **what I did:** Make everything centered, and 4 buttons in each row. 
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)
When user won the game, it should be like: 
![](https://i.imgur.com/M1wAXsN.gif)
When user failed 3 times, it should be like: 
![](https://i.imgur.com/Dw3exff.gif)
When user run out of time, it should be like: 
![](https://i.imgur.com/DFHpn7y.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* First of all, I used a lot tutorials for html, css, and javascript:
https://www.w3schools.com/js/
https://www.w3schools.com/html/default.asp 
https://www.w3schools.com/css/default.asp
* I tried to customize the alert box 
https://stackoverflow.com/questions/7853130/how-to-change-the-style-of-alert-box 
  Then I found I need to install sweetalert
  https://sweetalert.js.org/guides/ 
  However, I still failed to customize it. 
* Specifically place that I use outside resource : 
    * how to center website: 
        * https://www.w3schools.com/howto/howto_css_center_website.asp#:~:text=than%20500%20pixels.-,How%20To%20Center%20Your%20Website,page%2C%20add%20margin%3A%20auto%20. 
    * how to make buttons: 
        * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    * how to use div: 
        * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* First challenge I met is to understand how to connect html and javascript. In the past, I only used a single language at one time, and I do not  know the interconnectedness of two languages. When doing a project, it became a difficult task to control the content displayed on the page which written by html with Javascript. After I search online, I found that I can add JavaScript code in an HTML document by employing the dedicated HTML tag <script> that wraps around JavaScript code.
    
* The second challenge I met is how to implement functionality that player only loses after 3 mistakes (instead of on the first mistake). At the first, I used a variable named numOfChance and initialized it to be 3. Everytime when user make a mistake, numOfChance will decrement until it less than 1. When the bug showing up, the debug process is really painful. I need to figure where went wrong. After I found out the problem, when I restart the game, the chance of user will inherit from the last time, instead of 3, I start to fix my code. To solve this problem, I name an constant variable named total chance and initiablized it to be 3, and another variable named numFail to track the number of mistake. Then use the difference between these two variables to check if the user lose the game. When restart the game, since totalChance is a constant variable, it always be 3, and set numfail to 0. However, the problem is not solved. When I restart the game, it doesn't show up totalChance is 3 until user lose 1 time, it start to show totalChance is 2. I was really confused about this situation. Then I found I did not initialize totalChance in function playClueSequence(). I only initialize in function startGame(). After I fix all the problem, it works  properly. 



3. What questions about web development do you have after completing your submission? 
* I found it is difficult to spot bugs in an entire program. When the bug showing up, we need to check for all files such as html js and css. It really takes a lot of time. Is there any way to narrow the range that we need to check on? 
* when writing a program, where to start? html, or js? 
    

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* First of all, I want to make my webpage looks nicer. However, I found it is not easy to learn CSS which is important for webpage design. In my opnion, It is more about time and practice. In many situations, I need to try every options to see which one works. 
* Secondly, I want to set the difficulty of the game. There will be the 3 mode, easy medium and hard based on the time and number of turns. The difficulty of this functionality is that how to clarify the difficulty of different level. I believe this need a lot research.  
* The last one is to customize the alert box. I tried but did not work. 


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Aoxue Ding]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


