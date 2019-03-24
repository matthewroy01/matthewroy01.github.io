# RoyNet Blog

---
---

### [About Me Page](https://matthewroy01.github.io/aboutme)

### [Projects](https://matthewroy01.github.io/index)

### [My Senior Capstone/Production Blog](https://matthewroy01.github.io/capstoneblog)

---
---

## Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am Matthew Roy, a senior game programmer at Champlain College. This blog is about RoyNet, a networking plugin for Unity using [RakNet](http://www.jenkinssoftware.com/index.html).

---
---

## March 24th, 2019
### Updated Schedule

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since the last post, I've been able to work on the main parts of the original RoyNet plans. The main focus of my work thus far has been on utitilizing C#'s reflection feature to acquire the members of each component attached to an object.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is done via a custom inspector script that overrides the Replicator component. Upon pressing the button on the Replicator, bools are displayed for each member that is found (organized by the component they came from and stored in a dropdown) allowing the user to select which members they want sent over the network.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main problem I've encountered is storing some sort of "pointer" to the members that are found via reflection. If I had some kind of pointer or reference, I'd be able to access the actual data specified by the user when they select one of the bools in the inspector and thus, put it into a packet to be sent over the network.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While this issue exists, I've moved to working on the actual plugin/DLL for the networking itself. I've begun creating the set up for threading and the communication between Unity and DLL. After that is done, I plan on moving to getting RakNet included so I can begin testing a basic message sending between computers to prove its functionality.

#### Some Reflection (not the C# kind)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall, I feel that with the original plan for RoyNet, I would have liked to get to the networking parts of the project sooner. However, RoyNet has also been a great opportunity to learn about tools, from how to make a tool with the user in mind to the actual code that needs to be written in Unity (like custom inspectors and custom editor windows). I've even written a tool for my Production project, Short Giraffe using what I've learned. It allows artists to randomly populate a surface with assets they provide using a custom editor window (read more about the production of Short Giraffe [here](https://matthewroy01.github.io/capstoneblog)).

#### Here's a revised plan for the rest of the semester:

* March 25 - April 29:

find a solution for reflection "pointer" issue, get DLL working with any basic message sending

* April 1 - April 5:

create RoyNetManager class that communicates with the DLL on a basic level (starting and stopping network functionality)

* April 8 - April 12:

use Replicators to get a "character" moving across network

* April 15 - April 19:

implement dead reckoning

* April 22 - April 26:

polish

* April 29 - May 3:

finals week

---
---

## February 3rd, 2019
### Feature List and Schedule

#### Feature List (highest priority at the top):

1. make a simple networked model using data push, RakNet, and C#/C++ between Unity and a plugin
2. serialization/deserialization of Unity components/data
3. small demo prototype to show off the architecture
4. dead reckoning
5. relevancy and priority
6. other networking models (data share, merge, etc.)
7. server/client research and expansion

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on my feature list, I would like to get features 1-3 done in four weeks (starting February 3rd, finishing March 1st). I believe this will be enough time to get through the busy work of creating a simple data push prototype while most of the focus will go into research and implementation of serialization and deserialization (S/D). Making a small game prototype to show off the program will depend on the results of the S/D implementation. S/D is my first big unknown although I've been pointed in the direction of C#'s [reflection](https://www.tutorialspoint.com/csharp/csharp_reflection.htm) feature to get data from existing Unity scripts so that the user can easily select what data they want sent over the network. Being done by March 1st will also leave the following week for Production deadlines before spring break.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*If S/D becomes impossible, implementing a more manual method may allow for the rest of the plan to be finished.*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After features 1-3, I want to get feature 4 set up and planned out in time for the spring break (I struggled to implement dead reckoning originally, so this will need some refreshing and clarification on my end). Following spring break, I want to finish dead reckoning and then begin researching the second unknown, [relevancy and priority](https://docs.unrealengine.com/en-US/Gameplay/Networking/Actors/Relevancy). Relevancy and priority is a technique used in the Unreal Engine that optimizes the networking by ommitting unnecessary data from being sent to the client (for example, players on one side of the map in Epic's Fortnite don't need to be kept track of from the other). Exact dates become foggy at this point, and I'll have to review the actual in-class deadlines as well as our production milestones.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*If relevancy and priority become impossible, implement other optimization techniques???*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastly, I want to experiment with additional networking models like data share and data merge since they are less limiting than data push. Fooling around with how servers and clients interact and exist in the user's control could also be worth exploring for more customization (I.E. if the server is a separate executable or if the player can host their game from inside their Unity client).

#### Schedule

* Week 4 - S/D
* Week 5 - S/D finished
* Week 6 - Simple Networking Prototype
* Week 7 - Simple Networking Prototype finished and Small Demo
* Week 8 - Polish for mid-term, begin Dead Reckoning if possible

SPRING BREAK

* Week 9 - Dead Reckoning
* Week 10 - Relevancy and Priority
* Week 11 - Data Share/Merge, Server/Client
* Week 12 - Final polish for final

---
---

## January 28th, 2019
### My Plan

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For RoyNet, my goal is to create a networking plugin for Unity focused on creating a more streamlined, automated networking experience closer to that of Unreal. The Unreal Engine allows for easy creation of multiplayer first person shooter games due to support of games like Unreal Tournament and Fortnite, and I'll be creating my plugin with large-scope projects like them in mind. The user should be able to take any gameobject or component and simply mark it as networkable to create a multiplayer game.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My initial plan as a proof of concept for RoyNet is to start the plugin with a simple networking model to demonstrate the architecture, the creation of a small "game" to demonstrate a "player" or other objects moving around, and finally an interface to allow the player to select what they want to send over the network. The user selecting what they want networked is this project's biggest unknown and is integral to the goal of automation in the tool. So far, using [C#'s reflection](https://www.tutorialspoint.com/csharp/csharp_reflection.htm) feature seems like a good way to help have the user be able to view their own data in an interface separate from their own code. Reflection would be used to create an interface where the user could select what parts of their code's data needs to be networked without having to change the original code.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe I can complete the aforementioned plan of RoyNet since I've had experience in the past making a simple Unity networking plugin. The difference between this project and the previous one is that this project will involve creating a well-organized, generic architecture while the previous one was more designed around a specific game. After completing the basic prototype, I plan on adding additional features related to correction, optimization, and customization. Adding dead reckoning would help with correction, exploring [relevancy and priority](https://docs.unrealengine.com/en-US/Gameplay/Networking/Actors/Relevancy) would be good for optimizing larger-scale networked games, and adding options for other networking models (data push/share/merge and different ways to handle servers/clients) would add to the customization and versatility of the plugin. I would be open to adding additional ways to handle correction and optimization as the project moves forward as well.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I really enjoyed the networking programming class from last semester and I want to pursue the subject further. I also believe that a finished tool rather than a game would diversify my portfolio and benefit me as a programmer. Furthermore, RoyNet puts me out of my comfort zone to work on something more back-end focused.
