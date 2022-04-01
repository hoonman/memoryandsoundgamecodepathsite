# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jaehoon Song**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/memoryandsoundgamecodepathsite?path=index.html%3A1%3A0)

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

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame1.gif)
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame2.gif)
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame3.gif)
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame4.gif)
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame5.gif)
![](https://github.com/hoonman/memoryandsoundgamecodepathsite/blob/main/memorygame6%20(random%20patterns).gif)
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
 
[
Web development guide: https://www.youtube.com/watch?v=ysEN5RaKOlA  

HTML tutorial: https://www.youtube.com/watch?v=3JluqTojuME&list=PLkWSXVBjquF2NaMJEjwA4NlDVWDCKuysu&index=1 

HTML & CSS: https://www.youtube.com/watch?v=gBi8Obib0tw 

W3schools CSS: https://www.w3schools.com/css/default.asp ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[
My biggest challenge while working on this submission was the fact that playing the clue sequences wasn’t working properly in the memory and light game. Whenever I tried to start the game, the game would play a sequence of patterns, but it would only play the added sequence. Also, the lights didn’t work as intended as it would light up all the buttons when playing a single sequence. After browsing the pre-work code and re-reading the playSequence function code properly, I realized that I missed two things. One of the issues was that the lines of codes that add the clue holding time and the clue pausing time to the variable “delay” were not within the for loop. This caused the clues to play at the same time and there wasn’t a variable that kept a total of delay to the next clue. Another issue was that I did not reset the guessCounter back to 0 which stopped the game even though the guesses were correct. After modifying the for loop as well as adding the line of code that is responsible for resetting guessCounter, the game worked as intended. The buttons didn’t light up at the same time nor did the game stop when the guesses were right. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[
Although I have been exposed to coding with HTML and CSS before from UCLA's Summer Undergraduate Research Program, I have never utilized Javascript before. Therefore, I wondered about all the capabilities and functionalities Javascript can achieve! Can utilizing Javascript help to create a fully functioning piano keyboard that also has key bindings fitting to the user’s comforts? Since the answer is most likely yes, I also had a question about if Javascript had its limits. What functions can Javascript simply cannot handle? Where does the capabilities of Javascript end? Also, as a whole, why would people use external web frameworks like Django if they can only utilize the html, css, javascript style that we used for this project? In other words, what are the benefits of utilizing external web framework?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

[
Since I was always interested in coding my own piano on a web page and since I played a musical instrument for over a decade, I would be eager to implement a piano keyboard for the buttons we used for the memory game. If I had a few more hours, I would restructure the buttons into a piano keyboard. The four buttons we have would emulate the keys on the piano from the C to B notes. It wouldn’t be difficult implementing this because we can simply add more buttons corresponding to each of the piano keys as well as altering the frequency numbers in the sound synthesis function to get the right pitch for each key. Since the piano has lots of keys, I would just add two full octave keys (16 buttons) as well as the sharps and the flats (10 buttons). In fact, I have already edited the fourth button’s sound of a b flat into a C natural. Therefore, the real challenge of implementing a piano keyboard would most likely come from styling the buttons so that it would look like a piano keyboard as well as implementing keyboard shortcuts so that a user may interact with the buttons with their computer keyboards so that it is easier to use the buttons. Once this is done successfully, we would not only have a functioning online piano, but also have a memory game feature where one can actually apply the memory game into a musical instrument.
]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=RQbbO4-zni0)


## License

    Copyright [Jaehoon Song]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
