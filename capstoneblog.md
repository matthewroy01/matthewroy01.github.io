# Senior Capstone Blog

---
---

### [About Me Page](https://matthewroy01.github.io/aboutme)

### [Projects](https://matthewroy01.github.io/index)

### [My Game Engine Blog](https://matthewroy01.github.io/enginesblog)

---
---

## Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am Matthew Roy, and as of starting this blog, I am a fourth year student at Champlain College. I will be writing this blog to keep a record of my Senior Capstone project.

---
---

## November 3rd, 2018
### A Follow Up on "Underwater Sections"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the previous post, titled "Developing the Concept", I described how I would be handling underwater sections of Short Giraffe. I talked about having a script that you could put on any physics object to make it able to act as if it was underwater, and while that is sort of how I did it, I handled it a little bit differently.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While working on creating the script for underwater physics, I realized that while it worked for most objects, the way the player's movement works was preventing the water physics from acting as expected. The player uses two different types of movement control, one while in the air and one while on the ground which allows the player to swing when suspended around something while having the movement still feel snappy while on the ground. With this problem, I added a special case to the underwater physics script that checks to see if the *PlayerMovement* script is attached to the same object, and if it is, the water physics will know to do something different for the player.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once the water physics behaviour was completed, I let one of my designers make another version of it to be used with quicksand. This worked out pretty well, but I asked myself, why have two scripts that essentially do the same thing? Is there a more efficient way to do this? As it turns out, there is using Scriptable Objects.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scriptable Objects are special object types in Unity that allow multiple instances that you can store in the Assets folder of your Unity project. Normally, you can right click in the Assets tab to create something, and by writing your own Scriptable Object, you can have them appear too.

![alt text](URL "Custom Short Giraffe Scriptable Objects")

![alt text](URL "The Quicksand Physics Behaviour")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instead of having a *PhysicsWater* and *PhysicsQuicksand* 

---
---

## October 14th, 2018
### Developing the Concept

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following up on the previous post, here's how I plan to implement some of the mechanics I listed.

**Underwater Sections**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've started working on changing how the giraffe controls while it's underwater already. However, I realized something after I saw the blue spheres we were using for testing fall into the "water" in the Unity scene: it would probably be useful to have one script that can make any object act as if it were underwater. So, instead of writing a special case inside the giraffe's movement script, my plan is to write a script that will look for a Rigidbody component attached to its object and handle everything related to being "underwater" from checking if the object is actually underwater to changing its physics.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm hoping this will prematurely solve any issues where our designers want to create more complicated puzzles underwater, so that any object can act as if it's underwater while moving around. Additionally, I'm hoping I'll be able to do something similar when I tackle the **Quicksand** mechanic later on. Somebody once told me it's a programmer's job to predict the future so hopefully these ideas will come to fruition.

**A Stamina Mechanic (and other things)**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something I think I've slowly learned over multiple projects is how to cleanly manage player-related code; it's not a good idea to throw all the code related to the player into one script. There are ways to split up the different parts of it and still have them communicate.

This is what the player object from Kid Icarus: Infinite Underworld looks like:

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_playerInspector.png "Infinite Underworld's player object")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As you can see, there are quite a few Player scripts attached to this object all with different functionalities meant to decouple and organize them. For example, the sounds played when shooting are not handled in *PlayerShoot* but in *PlayerAudio*. At the same time, health stored in *PlayerCollision* isn't also displayed there, it's displayed in *PlayerUI*.

Here is a script on the player in [RV Punch](https://github.com/matthewroy01/matthewroy01.github.io/blob/master/index.md#rv-punch):

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/rvpunch_playerStatus.png "RV Punch Player Status")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The *PlayerStatus* contains a (rather messy) list of data for the player to hold that can't be stored anywhere else. For Short Giraffe, I want to combine the ideas I used in Infinite Underworld and RV Punch. I want to have lots of Player Scripts to help organize the code, but at the same time I want to make use of a *PlayerStatus*. The *PlayerStatus* script can also hold on to all of the references to the other scripts. So for example, instead of *PlayerCollision* and *PlayerShoot* needing access to *PlayerUI*, they can just include *PlayerStatus* which holds all the references to the other player scripts.

---
---

## October 13th, 2018
### Concept Established

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As of writing this, not only has our professor told us our team is falling behind, I've heard from another professor that he had not only heard that a lot of teams are behind, but specifically about our team. I don't know what specifically he had heard... but here's how we're catching up.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During our latest class, we gave our first formal presentation that wasn't just an update; we attempted to touch on all the things required under "Establising the Concept" in the syllabus. Most importantly is our game's concept and build. From taking our different builds to QA, we've settled on combining some of the ideas from each. We want the giraffe's neck to be more limited as to what it can do (I.E. being more sturdy) like in our Sturdy Giraffe prototype, we want the controls to be intuitive like in the Grid-Based Giraffe prototype, and if possible, we want the visuals to be goofy like in the Springy Giraffe prototype (see Giraffe: Stretched Thin for more information on each individual prototype). The result is a giraffe who embraces the name of the game, being short by default with the abilitiy to extend its neck in any direction a set distance at a time.

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_retract.gif "Neck Retraction")
![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_bretract.gif "Backwards Neck Retraction")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the things that is unique about this version of Short Giraffe is the retraction mechanic. In the Sturdy Giraffe prototype, players could lift their giraffe up off the ground and around an object by continuously winding the neck around it. To create the same situation in this version, not only can the player retract their giraffe's neck from the top down, they can retract the neck, lifting the body up towards the head (seen in the gifs above). This allows players to wrap their neck around an object and then backwards retract, lifting the body up, and allowing the giraffe to swing on objects like before.

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_bretractswing.gif "Lifting Self")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something else that has changed (that is much less important but I want to talk about as the programmer) is the center of mass on the giraffe. One problem that would occur in previous prototypes is that the giraffe would tip over if the neck was leaning too much in one direction or another. I added a mechanic where you could hold a button to have the giraffe hold fast to prevent tipping over. In the new prototype, I figured out you could change the position of center of mass of Unity's Rigidbody component, so by setting the center to the position of the giraffe, it no longer tips over (if you don't manually set the center of mass, it will constantly try to update to the center of the object, including the neck pieces, causing it to tip over if the neck is too far in either direction). In the gif below, it is now much easier to complete this ball puzzle since you don't fall into the pit for leaning over it.

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_COMass_ball_puzzle.gif "Changing the center of mass helps make this puzzle much easier")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moving forward, the team has set its eyes upon the main few puzzle mechanics we want to work with and try out for our vertical slice. These include:
* A **stamina mechanic** to limit the time the player is able to keep their neck extended.
* **Underwater sections**, this way the player has to manage stamina with oxygen.
* **Quicksand**, a timed scenario where you have to pull yourself out before it's too late.
* The **Meerkats**, the enemy we want to use for the story. The Meerkats create stealth sections where you have to use the mechanics of the game to not get caught in their lines of sight.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm hoping we'll be able to work on these and combine them in different ways to create some fun and interesting levels. I'm feeling confident that now that we have truly established our game's concept that things will be much smoother from here on.

---
---

## September 30th, 2018
### My Role as a Programmer

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From going to discipline reviews and just talking to the programming faculty, something that's really been reinforced for me this semester is my role as programmer. According to my professors, it's not necessarily my role to be creating prototypes all the time; that's the designer's job. Instead, I should be creating things to help make the designer's job easier. For example, the first thing I did at the start of sprint four was take my spring physics code, move it from two scripts to one, and make it much more readable in Unity's inspector. The result was this:

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/spring_system_inspector.png "Spring System Inspector")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Springs have been simplified into one list, and our spring physics related constants, C and K, are now located here and effect all springs rather than having to change each one manually. Additionally, some debug options are included at the bottom to show midpoints between each spring or lines to highlight where each spring is in space.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over the summer, I worked on a personal project based on the original NES Kid Icarus called Kid Icarus: Infinite Underworld. It's a 2D platformer with random level generation and one thing I tried out from [this tutorial by Brackeys](https://www.youtube.com/watch?v=B_Xp9pt8nRY) is a level creator pipeline.

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_map0.png "Infinite Underworld level 0")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using a simple sprite with minimal colors...

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_colors.png "Infinite Underworld colors")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...you can iterate through the image pixel by pixel, and spawn different blocks based on the color...

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_mapresult.png "Infinite Underworld final result")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...which creates the final result of a modular level.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As mentioned previously, making tools for the team to use seems to be the general concensus when it comes to the role of a programmer, and so as I more forward through working on capstone and Short Giraffe, I want to make sure I continue to include designer friendly tools and code so that anyone can go into the project and create or change things. In the context of Short Giraffe I believe this also applies to the art as we eventually try to get a 3D model skinned along our giraffe's neck joints.

---
---

## September 26th, 2018
### Giraffe: Stretched Thin

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From our top three ideas, we've decided to go with Short Giraffe as our main idea. To recap, the other two ideas we were juggling were Creepy Siri and Rhythm RPG. Creepy Siri was cut due to us not really being able to focus the gameplay other than the idea of playing as an AI who is trying to collect information from its owner by using various apps.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rhythm RPG was cut for a more production related reason. After the last class and the feedback we got, we felt a little lost as to where to go next. Instead of using up more time trying to prototype Rhythm RPG, we decided we would just go forward prototyping Short Giraffe to keep our focus in one idea rather than spreading our resources across two of them.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With that said, we are prototyping three different versions of Short Giraffe for our QA requirement and to see what works best, all with slight versions of our short/tall/stretchy/bendy giraffe.

![alt text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_0.png "Short Giraffe, Stretchy Concept Art")

**Rigid Giraffe**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our first prototype is the one we showed off in class and also the one we brought to QA. It's based around having a tower of giraffe "neck joints" that you can scroll up and down and rotate at will in a fashion similar to Forward Kinematics. Our plan with this prototype is to iterate on it both in convenience of mechanics and in level design.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Despite how we were feeling after the class we presented the Rigid Giraffe prototype, pretty much all of the testers who played the game at QA enjoyed it and had fun. Any negative feedback we got was of things we expected and mostly related to the controls being cumbersome. Below is a gif of the Giraffe's neck rotation in the build we brought to QA.

![Rigid Giraffe Gif](https://media.giphy.com/media/1xNmkGTSxvv5CM98bF/giphy.gif)

**Springy Giraffe**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our second prototype comes from advice given to us by Sajid, our programmer faculty for our section of capstone. He suggested having the giraffe's neck be more springy rather than rigid to reflect that it's an actual living creature rather than something actually rigid like a toy or robot. Sajid gave us the example of World of Goo, where structures connected by joints are bouncy rather than stuck in place. Based off of this, I spent a while looking into Unity's built in joints, which was a mistake since it ended up not being what I wanted. Instead, I went to talk to one of the other programmer faculty, Dan, to get the physics and math for springs.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Progress on creating a spring simulation has worked decently so far. Seen in the gif below, it's not working perfectly yet. The spring on the top seems to simulate correctly, but below it, springs that are connected to each seem to accumulate energy infinitely and fly off into space. I plan on continuing to work on this prototype as a tool for our designers to use if we want to do something along these lines (since originally writing this, springs are now working correctly!).

![Broken Springs Gif](https://media.giphy.com/media/1jkVayv069itYlOA2U/giphy.gif)

**Grid-Based Giraffe**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our third prototype is based around a grid and really embraces the idea of our giraffe being short. The giraffe starts as short, but then the player can guide the giraffe's head along a grid to stretch it out. This idea is similar to Rigid Giraffe in that the Giraffe's neck stays stiff, but with more convenient and accessable controls. The way we've described the control is that it's similar to how certain cell phones unlock by inputting the correct grid pattern.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe that this prototype has the most potential at the moment, since it combines the ideas from our original Rigid Giraffe prototype with additional restrictions that will help narrow down level design without having to completely rely on physics for puzzle success.

---
---

## September 15th, 2018
### The Original Ten Ideas (part 2, the top three)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From our top ten ideas, we were able to decide on our three favorites and expanded on each of them. They will be what we move forward with when prototyping.

**Rhythm RPG**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A turn-based RPG where your stereotypical party members are actually orchestra members and you perform quick rhythm games to fight. We chose this game because it feels unique, and that we have a lot of unique ideas for characters and mechanics in the game. With having each character playing a different instrument, we came up with the idea of having each character dress in armor similar to their instrument. Additionally, we think having each instrument uniquely weaponized would be an interesting way to explain how playing the music also hurts enemies.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One unique character we've thought of is an organ player who actually rides the organ like a vehicle. The organ's bench would be attached to the organ itself, and the instrument itself would have a steam engine installed, with wheels similar to that of a steam locomotive train, and steam would be expelled from the pipes in the pipe organ as exhaust. The player himself would be some kind of a cross between a Dracula style organist, hopefully with some elements of a train conductor attached, but we're currently concepting this character as of now.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So far in terms of gameplay, I'm feeling good enough about how we've described the flow of combat to begin prototyping it. So far I've done research into how to make a rhythm game in Unity and found information about using the audio system's timer to make sure the timing can be as accurate as possible. I've prototyped a simple beat that checks to see if you've pressed the button so the next step will be to expand on that concept and get it into a playable loop.

**Creepy Siri**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A narrative based game where you control an AI inside a smart phone with the goal of using apps to solve a problem such as collecting a password or code. This idea isn't as fleshed out as I'd like it to be, but so far we've imagined having a split user interface where one side of the screen is your phone display, and the other side is a top down view of the house. You'd then have to use your apps to distract or lure your owner. For example, if you know your owner likes TV, use a security app to turn on the TV to distract them or if you need facial recognition, try getting someone to take you into a room where there's a photograph of that person on the wall.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So far the only protoyping of this idea that has gotten done is a completely text based prototype made in Twine by one of our designers. The prototype really sets the mood for the idea and puts a lot of emphasis on the "Creepy" part of "Creepy Siri". This prototype really sold the idea of this game to me originally.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One risk we've considered in this game is the art being too simple. Our artist is mainly a 3D artist and doing a game where phone and app interfaces are integral to the gameplay could be a problem. Not to mention, even if there is a 3D view of a house to look at, simple furniture isn't difficult to model.

**Short Giraffe**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Short Giraffe is a physics based puzzle platformer where you control a short giraffe who has the ability to extend and retract its neck. Gameplay focuses on being able to extend and then bend your neck to create any shape. For example, making the neck into a hook shape to swing on a branch or pole or stiffening your neck and falling it over a gap to somersault over to the other side (like doing a headstand, I guess).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This idea is the one I've thought about the most so far while prototyping. I met with one of my professors to pitch the idea and get advice on where to start and from that meeting, my first goal is to implement a custom forward or inverse kinematics system to essentially simulate a pipe cleaner. My hope is that if we can get the rotation of the neck to feel good, we'll be able to test the mechanics in a sandbox area and see what minor tweaks we'll need to make to make it fun.

---
---

## September 15th, 2018
### The Original Ten Ideas (part 1, the cuts)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our team was able to brainstorm a list of ten favorite ideas from a few different brainstorming sessions. Here's a list of the ideas that didn't make the cut and my thoughts on them.

**Gardening Robot**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gardening Robot is an idea that derived from a previous production class brainstorm. The original idea (see Put Yourself Together Robot) was based around having a robot that the player would be able to swap parts in and out to change how the robot plays. Gardening Robot is a more simplified version where swapping parts is limited to changing out types of gardening tools such as a watering can or shovel. We had decided that the setting of the game would be a desolate planet with your goal being to terraform it. Additionally, as you grow plants, we had an idea to be able to take control of the plants to help combat enemies, with the main gameplay being more based around puzzles using your tools and planting things. The idea of there being "puzzles" I think is this game idea's downfall. With only "puzzles" to think of, and no real main mechanic, this idea eventually got the axe. Additionally, the team agreed that this idea wasn't as unique as some of the other ideas we had.

**Cooking Mama at Gunpoint**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The idea with a name as strange as it is misleading. Cooking Mama at Gunpoint was an idea derived from how in the Cooking Mama series of games, there isn't really a harsh consequence for failure, so what if the stakes were raised? This idea eventually evolved into a 3D platformer where you play as an upcoming chef who is being threatened by a customer with unreasonable requests. We experimented with the character using various abilities based around the chef's toque, but were unable to come up with a main mechanic we really liked. This idea eventually got scrapped due to it not being super unique.

**Neon Gladiator**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neon Gladiator is the only multiplayer game that made it onto our list. Players would have moved along tracks, collecting weapons, and trying to time their attacks as they pass each other at hight speeds. I think this idea would have been fun to make and play, but overall we dropped the idea since the majority of the team didn't want to work on another multiplayer game featuring vehicles (three of four of the team worked on [RV Punch](https://www.youtube.com/watch?v=mn1Y-4wrkfY) in the previous year's production).

**My Roommate Cthulu**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To be completely honest, this idea originally started as a joke between me and one of our designers. The idea came from a sitcom-esque scenario where some normal guy is rooming with Cthulu for some reason, and the antics that I guess would follow as a result. Other Lovecraftian and Eldritch characters could have also showne up. This idea was never super serious, and I was personally opposed to it especially if the game was going to be heavily text based and somewhat like a dating simulator; it wouldn't have been much fun to program.

**Zombie Rancher**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name of this idea was created from combining multiple ideas together, like an idea of creating a relaxing farm management game similar to Slime Rancher and other ideas involving being a necromancer, essentially farming skeletons and other monsters from the ground. The end result ended up being more similar to the necromancy idea, but you'd use the monsters you created to attack the surrounding area as you level up your army, base, and yourself. I think this idea could have been interesting, but we really never fleshed out how any of the mechanics would have worked. Overall, I think the other ideas we had were simply more well liked than this one was.

**Bullet Seed**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This idea was inspired by a movie that our artist saw, where the final enemy is destroyed by planting seed into him, causing him to be trapped inside the tree that subsequently grew. This idea would have been a 2D platformer where you fire seeds as bullets that grow into plants when they hit things and enemies. The more seeds you'd shoot, the greener a level would become. This idea wouldn't have been difficult to create, but that's the reason we decided against it. Doing a 2D platformer wouldn't have been very challenging or unique.

**Put Yourself Together Robot**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What I consider to be the pièce de résistance of this list, Put Yourself Together Robot screams scope issues, awful design pipeline, and risk more than any other idea. As mentioned above in the entry for Gardening Robot, Put Yourself Together Robot comes from an idea we had in a previous production course. The player would take on the role of a planet defending robot that got destroyed in an alien attack. After being destroyed, the player would only be able to control the hand of the robot and would have to explore the world in search of the rest of the body parts. By collecting the parts, the player would be able to reassemble the robot in any arrangement, connecting parts whereever there are joints to do so; imagine connecting a leg to the top of the hand and swinging it around like a club, or connecting the head to that and shooting lasers from the eyes down at enemies. This idea raises many questions: how do you design attacks for every possible combination of robot parts? what does the pipeline look like for that? what happens if you introduce multiple bases for limbs such as having two feet? does the robot become bipedal? how do we animate all of this? While this idea would have been impressive if we had pulled it off (especially on the art and programming side) its scope was huge and we felt more confident in some of our other ideas. The idea would have required a lot of research into inverse kinematics and custom animation for swapping parts in and out, but that research now lives on in one of the ideas that did make the cut, Short Giraffe (see "The Original Ten Ideas (part 2, the top three)").
