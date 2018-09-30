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
