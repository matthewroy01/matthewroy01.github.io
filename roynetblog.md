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

## January 28th, 2019
### My Plan

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For RoyNet, my goal is to create a networking plugin for Unity focused on creating a more streamlined, automated networking experience closer to that of Unreal. The Unreal Engine allows for easy creation of multiplayer first person shooter games due to support of games like Unreal Tournament and Fortnite, and I'll be creating my plugin with large-scope projects like them in mind. The user should be able to take any gameobject or component and simply mark it as networkable to create a multiplayer game.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My initial plan as a proof of concept for RoyNet is to start the plugin with a simple networking model to demonstrate the architecture, the creation of a small "game" to demonstrate a "player" or other objects moving around, and finally an interface to allow the player to select what they want to send over the network. The user selecting what they want networked is this project's biggest unknown and is integral to the goal of automation in the tool. So far, using [C#'s reflection](https://www.tutorialspoint.com/csharp/csharp_reflection.htm) feature seems like a good way to help have the user be able to view their own data in an interface separate from their own code. Reflection would be used to create an interface where the user could select what parts of their code's data needs to be networked without having to change the original code.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe I can complete the aforementioned plan of RoyNet since I've had experience in the past making a simple Unity networking plugin. The difference between this project and the previous one is that this project will involve creating a well-organized, generic architecture while the previous one was more designed around a specific game. After completing the basic prototype, I plan on adding additional features related to correction, optimization, and customization. Adding dead reckoning would help with correction, exploring [relevancy and priority](https://docs.unrealengine.com/en-US/Gameplay/Networking/Actors/Relevancy) would be good for optimizing larger-scale networked games, and adding options for other networking models (data push/share/merge and different ways to handle servers/clients) would add to the customization and versatility of the plugin. I would be open to adding additional ways to handle correction and optimization as the project moves forward as well.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I really enjoyed the networking programming class from last semester and I want to pursue the subject further. I also believe that a finished tool rather than a game would benefit my portfolio and me as a programmer and puts me out of my comfort zone to work on something more back-end focused.
