# Senior Capstone Blog

---
---

### [About Me Page](https://matthewroy01.github.io/aboutme)

### [Projects](https://matthewroy01.github.io/index)

### [Networking Plugin for Unity, RoyNet](https://matthewroy01.github.io/roynetblog)

---
---

## Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am Matthew Roy, and as of starting this blog, I am a fourth year student at Champlain College. I will be writing this blog to keep a record of my Senior Capstone/Production project.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Short Giraffe is a 2D physics-based platformer starring a short, cyborg, secret agent giraffe named Agent G that has the unique ability to extend and retract its neck. By extending its neck, Agent G can swing, swim, and solve its way through levels to help apprehend the Meerkat menace.

![Cup O' Joe Studios Logo](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/cupojoe_logo_left.png "Cup O' Joe Studios Logo")

---
---

## March 2nd, 2019
### The Golden Path to Tools (Sem. 2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the world of game programming, it seems that there is one end goal for a team: tools. Once all the systems are done, gameplay is in working order, and builds are ready to go, it's our job to make the jobs of the rest of the team's jobs easier. One such tool that's been worked on by one of the other programmers is a heatmapping tool to be used during testing to see where players get stuck for longer period of times. A tool I've been looking into this week is a tool to help the artists populate levels with assets.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating a tool required me to research creating custom windows. You can create both an entirely custom window for whatever you're creating or you can override the default Unity inspector to make working with scripts easier.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the art population tool, I wanted to have the user input any number of objects with models to be covered in assets randomly. The user can drag the objects into the tool, drag a list of assets, and then press a button to have the tool loop through the vertices of each model and spawn the assets at those positions. I've named that list of assets a "PopPack" ("pop" being short for "population"). Upon creating a PopPack, the user can specify the following:

* the density at which assets are spawned (from 0 to 100)
* the probability (weight) of each individual asset spawning (from 0 to 1)
* the radius of each individual asset (assets will be prevented from spawning if they are within the radius of another prop)

![An example of a pop pack](URL "An example of a pop pack")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe the interface of the tool is extremely important as well. After pressing the button the populate, the button is replaced with three buttons:

* reroll (delete spawned assets and respawn them)
* cancel (delete spawned assets)
* save (keep spawned assets)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If the assets are spawned with a random rotation or scale is also decided in the main interface of the tool.

![The tool with multiple buttons](URL "The tool with multiple buttons")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ability to save versus just leaving the assets as they are comes from the tool having to keep track of the assets to later delete them if need be. Upon saving, the list of assets that's kept track of internally is cleared for spawning more on another model. If the models are changed, the assets will also be cleared from their list for those new models as well.

![Before and after gif](URL "Before and after gif")

---
---

## February 22nd, 2019
### The Power of Mecanim (Sem. 2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recently I've been tasked with implementing the new animations for Agent G in Short Giraffe, and with new and improved animations, I wanted to make sure I was using Unity's animation tools (Mecanim) to their best advantage. From experience, I know that Unity animation can create some horrifying webs when you're trying to create the transitions between the animations.

![The animation web used for Short Giraffe](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_animation_web.png "The animation web used for Short Giraffe")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now that we have a dedicated animator on the team, we want to add some more animations to Agent G. These mainly include animations specifically for swinging (previously, Agent G would hold a pose from his jump animation while swinging). Originally, I thought this meant having to connect these animations to the existing web, but then I remembered animation layers.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From working on a summer project, I came across the animation layer feature as something that would allow me to animate more than one part of a character separately. The project was based on the NES game, *Kid Icarus* and would have allowed me to have Pit's body animate to shoot while also allowing his legs to animate separately (walking, standing still, jumping, etc.). This concept also applies to modern first person shooters where the top half and bottom half of a character's body may animate separately as they walk, run, strafe, shoot, punch, etc.

![An example of Kid Icarus gameplay](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/example_kid_icarus_gameplay.gif "An example of Kid Icarus gameplay")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I won't be using animation layers to animate multiple parts of Agent G however. Instead, I'll be using the layers to organize different animation webs. I have one layer dedicated to the existing animations with a new one for swinging specifically. I can switch between them by setting the active layer's weight to one and all others to zero. Previously I would have had to add the new animations to the existing web and figure out what conditions would cause the transition, but this has made the animation system much more organized and has really alleviated any future stress for adding more since I know it's so easy.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One quirk I found is that it seems the weight of the Base Layer (created by default) can't be changed. To get around this, a new layer I made is treated as the default layer in the code.

![Animation layers](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_animation_layers.gif "Animation layers")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finally, some additional stray thoughts. The concept of "Exit Time" is found when you create a new transition in Mecanim. Exit time is the amount of time the animation has to make that particular transition. Previously, we had all of Agent G's transitions with an exit time of zero so that the animations would change instantaneously. However, with our dedicated animator we can have some exit time to allow the poses to fade between each other, which is easy thanks to Mecanim doing this automatically. Additionally, an "Any State" option exists inside of mecanim that allows a transition to occur from... any state. This sounds like it would be very convenient but doesn't seem designed for more complicated animations since it can be triggered every frame causing animations to restart infinitely. Despite being tedious, creating that convoluted web seems to be the way to go to get the most control out of the animation in your game.

---
---

## February 21st, 2019
### Forward and Inverse Kinematics (Sem. 2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've discussed how the neck in Short Giraffe works in a previous post titled *A Review of Short Giraffe's Neck*. However, something I haven't talked about is the concept of forward kinematics. Forward Kinematics is an animation technique that simply creates a pose based on a series of given points. In this sense, Short Giraffe's neck system uses forward kinematics to build the neck as players extend it.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opposite forward kinematics is inverse kinematics, where a pose is created based on an endpoint. This technique is used both in animation and robotics to get a limb to position itself correctly to reach some target position. One thing that can happen in Short Giraffe is that Agent G will fall over if he has his neck extended and walks into something. I wanted to implement inverse kinematics to make the neck adjust itself when contact is about to be made so that collision doesn't actually occur. Creating a prototype was actually rather easy, as each object essentially only needs to rotate to point towards its next position, moved to it, and then reset back to the origin to prevent any unwanted stretching. However, Short Giraffe's inverse kinematics poses an interesting challenge: instead of moving the end of the neck, the neck needs to be able to move at any point in case collision occurs there and it needs to bend. To counteract this, my inverse kinematics algorithm does two passes, one above the point of collision, and one below.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The end result for the prototype I made looks like this:

![IK prototype gif](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_ik_prototype.gif "IK prototype gif")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actually applying the IK prototype to Agent G's neck didn't create the results I was hoping for, but I think there may be a problem with the reset step where the segments are corrected back to their origin. I hope to continue to improve the implementations to make Short Giraffe control the best it can.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the gifs below, you can see that the neck does bend in the desired direction as if it were hit and bent, but quickly bends into an unplayable shape.

![Agent G's broken neck with a large offset](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_ik_bbig.gif "Agent G's broken neck with a large offset")

![Agent G's broken neck with a small offset](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_ik_small.gif "Agent G's broken neck with a small offset")

---
---

## February 16th, 2019
### Two Players are Better than One? (Sem. 2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something we're looking to add to Short Giraffe is a multiplayer mode. Rather than including some sort of mode where there are two of Agent G, the plan is to have two players control Agent G at the same time. One player will control Agent G's neck while the other controls his body. In other words, one player moves Agent G while the other extends and retracts the neck to help interact with things. Finally, to prevent one player being bored only playing one role the whole time (and to increase the chaos of the mode), the two players will swap controls at regular time intervals. Our team is looking to publish Short Giraffe to the Nintendo Switch and we believe a multiplayer mode both fits the portability of the console and its easy to separate joycon controllers.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating this mode has and will continue to pose some problems. First is redesigning how the controls will be handled. Previously, since there were no intentions for multiplayer, all the controls were hard coded into their individual scripts. To change it, I moved all controls to one script, *PlayerStatus*, where they could be stored as public strings. This way, an external script could alter the controls for multiplayer both at the start of the game, but also to swap the controls during gameplay. Additionally, controls were cleaned up further by one of the other programmer's input management system that can be used as a wrapper for Unity's default input and even includes input layering which will be extremely convenient for creating menus in the future.

![The ugly multiplayer prototype text](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_mutliplayer_prototype.png "The ugly multiplayer prototype text")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The current version of the multiplayer features text that appears on the screen that either reads "Player 1 is now controlling the neck" or "Player 2 is now controlling the neck". Working towards actual proper feedback for when a switch is going to happen will be very important. Something I'm looking into this week is creating a visual effect to show which player is controlling which part. For example, player one will highlight whichever part they're controlling in red while player two highlights things in blue. I believe this task can be accomplished via a shader that either simply draws outlines or duplicates the vertices of the model, increases their size, and inverts them (essentially also creating an outline). Either way, this is a challenge I'll be looking into in the coming week.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another potential improvement we've gotten from feedback is a bar that shows the time until the controls swap. I don't think this will help with reminding players which piece they are controlling, but it will at least prepare them to start controlling something else during the action. I know that personally, on xbox controllers, even when I'm not in control of a certain thing, I instinctively press the other buttons out of muscle memory. Continuing to test the multiplayer with other players at QA will be extremely important because of this. With this and other changes, I hope to see if the multiplayer mode is actually fun to play and thus worth pursuing further. 

---
---

## January 24th, 2019
### Starting up Again (Sem. 2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back on campus again, it's time to resume production on Short Giraffe. Before we go into full "production mode", we are required to get through Greenlight. My understanding is that Greenlight is a milestone where we need to plan out the rest of the semester and to improve the game using feedback from last semester. This time for greenlight is also nice for testing out some new mechanics we would like to add to Short Giraffe.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As I mentioned in my previous post reflecting on last semester, our team roster size has increased from four to thirteen. So far I think this has been a pretty jarring experience. Having more people means it's much more difficult to meet as a team regularly. Instead, the leads (including myself, I'm the programming lead) have met primarily to discuss things like sprint planning and sprint review. It makes me feel a bit uneasy that there's a lot of potential for not everyone being on the same page. With that said, as a lead, I've had a pretty good time communicating with my own discipline so far. We were able to plan what sorts of tasks we were going to do this sprint which made the leads-only sprint planning meeting go smoothly. The only downside I see with this is for example, the designers making tasks separately from the programmers potentially creating overlap with tasks. We'll definitely figure out what works best as we move forward. In other news, the programmers also provided advice on how to organize Short Giraffe's repository which I am grateful for; the repo is looking much more organized now and should be in the future as well.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Related to the increased team size, there are now four programmers on the team and one systems designer. This is honestly a lot more programming power that I expected to have, so we've come up with ideas to increase the scope accordingly. One is adding a dialogue system which would feature our UI focused programmer and our 2D artist working with our narrative designer to help visualize the story of short Giraffe. Other than that, we're testing other gameplay related mechanics such as stealth sections and new kinds of physics puzzles, which should greatly help improve the variety in Short Giraffe's gameplay.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the moment, I'm a little unsure if we're on the road to success in terms of how we're organizing ourselves. As we move forward through the semester, I'll continue to comment on our team's structure and what's working and not.

![A missing cat poster hiding in the background of one of Short Giraffe's levels](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_missingcat.png "A missing cat poster hiding in the background of one of Short Giraffe's levels")

---
---

## December 4th, 2018
### Semester in Reflection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As of writing this, I'm happy to announce that Short Giraffe will be continuing develop into next semester. Our presentation went over really well and the demonstration of the game for the faculty went pretty smoothly as far as I know. You can watch the trailer and [demo reel for the game](https://www.youtube.com/watch?v=lDDsjfHlHfQ); it's edited and narrated by me! Now, we've onboarded people from all of the disciplines bringing our team roster size from four to a whopping thirteen. Before we begin planning for next semester, I write this post to reflect on this semester and the development of Short Giraffe.

**A Slow Start**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At the beginning of our planning, we had decided on three main ideas to prototype. These were codenamed "Creepy Siri", "Rhyhthm RPG", and "Short Giraffe" (see *The Original Ten Ideas (part 2, the top three)* for more on Creepy Siri and Ryhthm RPG). This left me and the team feeling overwhelmed in having to prototype three massively different ideas. The Rhythm RPG got a small prototype done that used Unity's built-in time functions to produce a beat but never got too far and Short Giraffe had our first "Sturdy Giraffe" prototype. Due to lacking prototyping power since it's not our designers' strongsuits, having to expand on the Rhyhthm RPG to get it to a testable state in addition to improving the existing Short Giraffe prototype proved to be too much. Instead, we decided to focus just on Short Giraffe and made three different prototypes of it instead. This lead to the concept art below which we used frequently in our presentations to show how we've iterated over time.

![The three pieces of concept art we used showing off the ideas for the sturdy, springy, and grid-based necks](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_mechanic_concepts.png "The three pieces of concept art we used showing off the ideas for the sturdy, springy, and grid-based necks")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on these, we decided to go with a sort of combination of all three, combining the reliability of the sturdy and grid-based necks with a more fluid style of the springy neck. The final version of the game features a neck that can be smoothly created in any way the player wishes as if the path is being drawn.

**Model Skinning**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the things that I haven't talked about in this blog about Short Giraffe is model skinning. Originally, we wanted to have Agent G's neck be natural instead of robotic. With the help of faculty this lead to me working on a skinning algorithm that would essentially stretch a 3D model to fit the path that the player draws as the neck. I spent approximately two weeks trying to get it done but wasn't able to in the end. At that point, we were approaching the end of the semester so we ended up decided to go with a robotic style instead that fit nicely into the already existing neck system (see *A Review of Short Giraffe's Neck* for more on how the neck system works).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The neck skinning mainly involves taking the vertices of a model and performing a calculation on them to fit to a curve. The model we'd use for this would theoretically be a cylinder with many rings of vertices going up in order to make the final product as smooth as possible. In order to perform the calculcation, the vertices also need to be in order according to their vertical position along the length of the cylinder. I was able to get the vertices sorted alongside a working catmull-rom function to handle creating the curve. With this, I was able to get something working that looked promising but didn't work with larger cylinders. The main struggle came with how to loop through the list of vertices, alongside each main point in the giraffe's neck, and then the points created by the catmull-rom algorithm.

![A cylinder that would be used for the skinning](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_neckcylinder.png "A cylinder that would be used for the skinning")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I plan at taking another crack at model skinning over the winter break because I believe it will be technologically impressive to have and will be something I can show off as a programmer.

**The Team Dynamic**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the things I think we did really well as a team is our communication. Three out of four of us worked together on our game from Production II, *RV Punch* (which you can view on my [projects page](https://matthewroy01.github.io/index)) and the fourth member was still a friend. In addition to our preexisting relationships, our small team size allowed us to meet and communicate extremely frequently, something we noted went really well while working on *RV Punch*. We would meet to do scrum on Mondays and Tuesdays, do a sprint review and create our presentations on Wednesday, have class and do QA on Thursday, and meet for work meetings on Friday. We would also try not to meet on Saturday or Sunday in an attempt to keep weekends free for everyone.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aside from that, the pipeline was pretty straightforward. Our artist was pretty comfortable using the repository or being in-engine to create art assets including models, materials, shaders, and particle systems. This made the design pipeline also pretty smooth with dragging Unity prefabs around to build and decorate levels.

**Conclusion**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, I think Short Giraffe came as far as did due to our really good team dynamic but was held back at first by the lack of programming power when it came to our designers. We were also able to make important executive decisions such as cutting other prototype ideas or abandoning neck skinning when it was important to do so. I hope that we can take what went well this semester into next semester and continue to make Short Giraffe the best it can be.

![Short Giraffe title screen loop gif](https://github.com/matthewroy01/matthewroy01.github.io/blob/master/img/short_giraffe_title_loop.gif?raw=true "Short Giraffe title screen loop gif")

---
---

## November 20th, 2018
### The Challenge of Collision

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Througout the creation of Short Giraffe, having the player collide with things has been important to the gameplay, from detecting if the player is on the ground to collecting items like leaves and the Meerkats. Distinguising the different types of collision has been a challenge. For example, having Agent G be able to collect Meerkats with his neck or head didn't make much sense and took away a lot of the challenge when it came to finding them, having some testers even collect the Meerkats accidentally. Here's some of the ways I tackled the challenge of collision throughout Short Giraffe.

**The First Iteration**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Initially, I tackled collision in Short Giraffe with my usual approach of having many player focused scripts separated from one another (see the post titled *Developing the Concept* for more on my approach to player scripts). This worked fine at first with the *PlayerCollision* script simply looking for collision with things like collectables. The problem that showed up however is that using Unity's collision functions like *OnTriggerEnter2D* or *OnCollisionEnter2D* also detects collision with the object's children, meaning that colliders like the ones used for the neck segments also detect the same collision (see the post titled *A Review of Short Giraffe's Neck* for more on how the neck segments are created). This is the reason why the giraffe's neck and head were able to collect the Meerkats.

**The Second Iteration**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To try to solve the problem of the entire body of the giraffe being treated as a single collideable object, I decided to try to separate them. By using Unity's *Physics2D.OverlapBox* I could check for collision with certain things at certain positions, such as specifically at the position of the giraffe's body or head. I used this to check for the aforementioned collision with Meerkats for the body and to play particles effects for the head like eating leaves and blowing bubbles. This however, wasn't robust enough as the 2D versions of Unity's Overlap functions can only return one collision at a time (the 3D version returns an array of Colliders) meaning that only one collision can take place per frame, and some collisions could be missed at times. Additionally, without adding some messy booleans to check if the head or body had previously collided with something, there isn't an easy way to simulate the normal *OnTriggerEnter2D*, *OnTriggerStay2D*, or *OnTriggerExit2D* that Unity normally uses to detect the frame a collision occured or stopped occuring.

**The Third Iteration**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the third iteration, I combined some of the ideas I've spoken about so far. Rather than keeping the *PlayerCollision* script on the player object, I moved it to the model of the giraffe instead. This breaks the pattern of trying to keep all of the player scripts in one place, but definitely worked better with Unity's collision systems. This allowed collision to take place exclusively on the giraffe's body for things like collecting the Meerkats. I combined this with using the *Physics2D.OverlapBox* for the giraffe's head since its collision is less important and used mostly for visual effects.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With that said, I feel like the collision isn't as clean as it could be. I may experiment with having another collision script specifically for the head like the body already uses. Additionally, collision used for hitting checkpoints throughout a level used to take place in an entirely different script altogether called *PlayerRespawn*, and only recently began to be handled by *PlayerCollision* which then sends a meesage to *PlayerRespawn* to update its checkpoint values. I think getting all of the player's collision to a standard will be important for adding anything in the future that requires specific collision detection.

**Bonus: Auto Rotation and Ground Collision**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since the very beginning of working on Short Giraffe, ground detection has been done inside of the *PlayerMovmement2D* using *Physics2D.OverlapCircle* at a set Vector2 (0 on the x and about -1 on the y relative to the player's position). This would always check below the player's position, regardless of the player's rotation meaning that the player could jump if they were upsidedown. This wasn't originally a problem back when Agent G was just an orange rectangle, but it didn't make much sense for Agent G to walk while on his back.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Previously, if Agent G fell onto his back, the player could still move around freely, including jumping, and could hold a button to rotate back to normal. This proved to be pretty glitchy and many players wouldn't even bother to rotate once they learned that controls worked normally even if Agent G was upside down.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This lead to the implementation to the auto rotation mechanic. Now, when the player falls onto their back, they lose control, and if a certain amount of time passes, Agent G will do a little hop and rotate back to default automatically. The collision detection for this was rather difficult. I needed to check if the Giraffe was 1) making contact with the ground, and 2) upside down. The main problem came from the fact that since the branhces Agent G can wrap and swing around also count as "Ground", there is technically a possibility that an auto rotation may take place if Agent G swings closely to a branch. To counteract this, auto rotation can only take place if all the neck segments are retracted. This is under the assumption that if any neck segments are extended, the player is attempting to do something and does not want to get rotated out of nowhere. Checking if Agent G is upsidedown is relatively easy on the other hand, just needing to check if the absolute value of Agent G's z rotation is greater than 0.71 (0.71 is approximately 90 degrees in quaternions). With this, auto rotation occurs when the player is touching a surface, is upside down, and has no neck segments extended. This pairs very nicely with the easiest way to let go of branches, the Quick Retract, which automatically retracts all segments.

---
---

## November 12th, 2018
### A Review of Short Giraffe's Neck

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The most important part of Short Giraffe is the neck mechanic. In this post, I want to recap the neck mechanic and how it works in a handful of different sections. As we are quickly approaching presentations next week, we've officially decided how the neck works and how it looks so I felt it would be a good time to review the mechanic.

**Choosing a Direction**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This particular mechanic has been in the game for a few weeks, but the way you actually choose a direction to extend your neck in has changed since the last time I talked about it. Instead of using the right stick to "aim" and then pressing a button to extend a segment one at a time, it's much more smooth and automated. Now, an invisible reticle starts at the position of the Giraffe's body, and can be moved with the right stick. When the reticle moves far enough from its starting point, a new neck segment is spawned. It feels a lot like drawing a line with the right stick and removes the need for rapid button pressing.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here is a gif of a visible reticle for demonstration purposes:

![The neck with the reticle visible](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_reticle.gif "The neck with the reticle visible")

Here is a list describing how the neck segments are stored as preparation for the next sections:
* each Neck Segment is stored in a C# List
* this list is of a custom struct called "Segment"
* this struct contains two members, a GameObject (obj) and a Vector3 (origin)
  * obj is a reference to the actual neck object itself, used for deleting the segment later
  * origin is the origin point of the segment, used for convenience during calculations
* in addition to the list, the previous and current segments are used when spawning new segments for convenience (the previous segment may actually be the giraffe's body in the case that there is less than one segment for example)

**Extending the Neck**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When the neck segments are spawned, two objects are instantiated. One is a sphere that is spawned at the location of the reticle. Then, using the newly spawned segment (the current segment) and the previous segment, another object, a box, is spawned at the midpoint between the two. The box is then stretched the distance between the two segments to serve as the collider for the neck. The box is made a child of the sphere and the sphere is saved in the list as obj where the sphere's position relative to the giraffe's body is saved in origin.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something new that has been added recently is some slight tapering. The more neck segments are spawned, the smaller the sphere and box objects of the segments get. Additionally, the sphere and box are moved slightly outwards towards the camera as more segments are spawned to prevent the models from z fighting.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The "sphere" and "box" parts that make up the segments now come together to create Agent G's current look in the game:

![Cyborg Giraffe Neck with Box and Sphere components](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_cyborg_neck.gif "Cyborg Giraffe Neck with Box and Sphere components")

**Retracting the Neck**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Retracting the neck is fairly straight forward. As long as the player holds the button down, neck retraction will attempt to take place. All that happens is that the obj found in the list of neck segments is deleted and then that element is removed from the list. Neck retraction is on a timer for the sake of not looking too fast as well as allowing precision for small adjustments to the neck.

**Retracting Backwards**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The "Backwards Retract" in Short Giraffe describes when the giraffe's body is pulled towards the head rather than the head being pulled back towards the body. This works similarly to the normal retraction, but deletes the obj and removes the neck segment from the beginning of the list instead of the end.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also required to allow backwards retraction is a series of raycasts. These raycasts are fired from the first neck segment to the last, second segment to the second last, etc looking to see if they intersect with the ground. This essentially checks if the neck is wrapped around something. This prevents players from crossing gaps and flying across levels like was previously possible in eariler versions of Short Giraffe.

**Resetting the Neck**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are two scenarios where the neck needs to be reset. The first is when the player dies (falling into a pit for example). When the player dies, a "RetractAll" function is called that deletes all the objs from the list of segments, clears the list, and resets other values such as the reticle's position and previous segment. The second is when the player presses the Quick Retract button. This works similarly but uses a Coroutine to perform this slower than RetractAll's instantaneous reaction, essentially waiting a short amount of time between deleting segments.

**The Giraffe's Head**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finally, the giraffe's head which sits at the top of the neck the player has created. This neck simply moves to wherever the last segment in the giraffe's neck is. Additionally, it rotates to look in the direction of the end of the neck (previously, the head would be rigid all the time, which looked pretty weird). It may also be worth noting that the head acts uniquely in that it has its own collision for things like eating leaves or keeping track of Agent G's current oxygen while underwater, making the position of the head pretty important.

---
---

## November 3rd, 2018
### A Follow Up on "Underwater Sections"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the previous post, titled "Developing the Concept", I described how I would be handling underwater sections of Short Giraffe. I talked about having a script that you could put on any physics object to make it able to act as if it was underwater, and while that is sort of how I did it, I handled it a little bit differently.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While working on creating the script for underwater physics, I realized that while it worked for most objects, the way the player's movement works was preventing the water physics from acting as expected. The player uses two different types of movement control, one while in the air and one while on the ground which allows the player to swing when suspended around something while having the movement still feel snappy while on the ground. With this problem, I added a special case to the underwater physics script that checks to see if the *PlayerMovement* script is attached to the same object, and if it is, the water physics will know to do something different for the player.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once the water physics behaviour was completed, I let one of my designers make another version of it to be used with quicksand. This worked out pretty well, but I asked myself, why have two scripts that essentially do the same thing? Is there a more efficient way to do this? As it turns out, there is using Scriptable Objects.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scriptable Objects are special object types in Unity that allow multiple instances that you can store in the Assets folder of your Unity project. Normally, you can right click in the Assets tab to create something, and by writing your own Scriptable Object, you can have them appear too.

![Custom Short Giraffe Scriptable Objects](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_scriptable_objects.png "Custom Short Giraffe Scriptable Objects")

![The Quicksand Physics Behaviour](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_example_physics_behaviour.png "The Quicksand Physics Behaviour")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instead of having a *PhysicsWater* and *PhysicsQuicksand* script, the variables from them (such as how much to change gravity and friction) are stored inside a scriptable object called Physics Bheaviour (seen above using the Quicksand Behaviour as an example). Then, as a replacement for how the user used to be able to put the physics scripts on any object to make it work, there is now a *PhysicsManager* script. The *PhysicsManager* can be placed on any object with a physics component but stores a list of the Physics Behaviours. It will loop through the behaviours and try to apply them similar to how each physics script would originally apply effects to the object it was attached to.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last problem I came across was the two behaviours (water and quicksand) cancelling each other out since when one wasn't detected, it would try to reset the physics values back to the default. To counteract this, I've implemented a small restriction that essentially only allows one physics behaviour to be active at the same time. In other words, being in water and quicksand at the same time doesn't stack up and make the player move twice as slow.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From my original ideas, the "Underwater Sections" have improved quite a bit and gotten very modular if we plan on adding any additional types of movement restrictions (or maybe something that makes the player move faster?). I recommend anyone working in Unity to look into [Scriptable Objects](https://unity3d.com/learn/tutorials/modules/beginner/live-training-archive/scriptable-objects). While they're not necessarily good in every situation, they can be useful for having multiples of the same thing where the data can change (instead of having multiple similar prefabs). YouTuber Brackeys gives the example of a Hearthstone card in [his tutorial](https://www.youtube.com/watch?v=aPXvoWVabPY). This with the upcoming [Nested Prefabs](https://unity3d.com/prefabs) feature in Unity will allow for some insane flexibility.

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

![Infinite Underworld's player object](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_playerInspector.png "Infinite Underworld's player object")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As you can see, there are quite a few Player scripts attached to this object all with different functionalities meant to decouple and organize them. For example, the sounds played when shooting are not handled in *PlayerShoot* but in *PlayerAudio*. At the same time, health stored in *PlayerCollision* isn't also displayed there, it's displayed in *PlayerUI*.

Here is a script on the player in [RV Punch](https://github.com/matthewroy01/matthewroy01.github.io/blob/master/index.md#rv-punch):

![RV Punch Player Status](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/rvpunch_playerStatus.png "RV Punch Player Status")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The *PlayerStatus* contains a (rather messy) list of data for the player to hold that can't be stored anywhere else. For Short Giraffe, I want to combine the ideas I used in Infinite Underworld and RV Punch. I want to have lots of Player Scripts to help organize the code, but at the same time I want to make use of a *PlayerStatus*. The *PlayerStatus* script can also hold on to all of the references to the other scripts. So for example, instead of *PlayerCollision* and *PlayerShoot* needing access to *PlayerUI*, they can just include *PlayerStatus* which holds all the references to the other player scripts.

---
---

## October 13th, 2018
### Concept Established

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As of writing this, not only has our professor told us our team is falling behind, I've heard from another professor that he had not only heard that a lot of teams are behind, but specifically about our team. I don't know what specifically he had heard... but here's how we're catching up.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During our latest class, we gave our first formal presentation that wasn't just an update; we attempted to touch on all the things required under "Establising the Concept" in the syllabus. Most importantly is our game's concept and build. From taking our different builds to QA, we've settled on combining some of the ideas from each. We want the giraffe's neck to be more limited as to what it can do (I.E. being more sturdy) like in our Sturdy Giraffe prototype, we want the controls to be intuitive like in the Grid-Based Giraffe prototype, and if possible, we want the visuals to be goofy like in the Springy Giraffe prototype (see Giraffe: Stretched Thin for more information on each individual prototype). The result is a giraffe who embraces the name of the game, being short by default with the abilitiy to extend its neck in any direction a set distance at a time.

![Neck Retraction gif](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_retract.gif "Neck Retraction")
![Backwards Neck Retraction gif](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_bretract.gif "Backwards Neck Retraction")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the things that is unique about this version of Short Giraffe is the retraction mechanic. In the Sturdy Giraffe prototype, players could lift their giraffe up off the ground and around an object by continuously winding the neck around it. To create the same situation in this version, not only can the player retract their giraffe's neck from the top down, they can retract the neck, lifting the body up towards the head (seen in the gifs above). This allows players to wrap their neck around an object and then backwards retract, lifting the body up, and allowing the giraffe to swing on objects like before.

![Lifting Self gif](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_bretractswing.gif "Lifting Self")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something else that has changed (that is much less important but I want to talk about as the programmer) is the center of mass on the giraffe. One problem that would occur in previous prototypes is that the giraffe would tip over if the neck was leaning too much in one direction or another. I added a mechanic where you could hold a button to have the giraffe hold fast to prevent tipping over. In the new prototype, I figured out you could change the position of center of mass of Unity's Rigidbody component, so by setting the center to the position of the giraffe, it no longer tips over (if you don't manually set the center of mass, it will constantly try to update to the center of the object, including the neck pieces, causing it to tip over if the neck is too far in either direction). In the gif below, it is now much easier to complete this ball puzzle since you don't fall into the pit for leaning over it.

![Changing the center of mass helps make this puzzle much easier](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_COMass_ball_puzzle.gif "Changing the center of mass helps make this puzzle much easier")

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

![Spring System Inspector](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/spring_system_inspector.png "Spring System Inspector")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Springs have been simplified into one list, and our spring physics related constants, C and K, are now located here and effect all springs rather than having to change each one manually. Additionally, some debug options are included at the bottom to show midpoints between each spring or lines to highlight where each spring is in space.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over the summer, I worked on a personal project based on the original NES Kid Icarus called Kid Icarus: Infinite Underworld. It's a 2D platformer with random level generation and one thing I tried out from [this tutorial by Brackeys](https://www.youtube.com/watch?v=B_Xp9pt8nRY) is a level creator pipeline.

![Infinite Underworld level 0](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_map0.png "Infinite Underworld level 0")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using a simple sprite with minimal colors...

![Infinite Underworld colors](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_colors.png "Infinite Underworld colors")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...you can iterate through the image pixel by pixel, and spawn different blocks based on the color...

![Infinite Underworld final result](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/infinite_underworld_mapresult.png "Infinite Underworld final result")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...which creates the final result of a modular level.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As mentioned previously, making tools for the team to use seems to be the general concensus when it comes to the role of a programmer, and so as I more forward through working on capstone and Short Giraffe, I want to make sure I continue to include designer friendly tools and code so that anyone can go into the project and create or change things. In the context of Short Giraffe I believe this also applies to the art as we eventually try to get a 3D model skinned along our giraffe's neck joints.

---
---

## September 26th, 2018
### Giraffe: Stretched Thin

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From our top three ideas, we've decided to go with Short Giraffe as our main idea. To recap, the other two ideas we were juggling were Creepy Siri and Rhythm RPG. Creepy Siri was cut due to us not really being able to focus the gameplay other than the idea of playing as an AI who is trying to collect information from its owner by using various apps.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rhythm RPG was cut for a more production related reason. After the last class and the feedback we got, we felt a little lost as to where to go next. Instead of using up more time trying to prototype Rhythm RPG, we decided we would just go forward prototyping Short Giraffe to keep our focus in one idea rather than spreading our resources across two of them.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With that said, we are prototyping three different versions of Short Giraffe for our QA requirement and to see what works best, all with slight versions of our short/tall/stretchy/bendy giraffe.

![Short Giraffe, Stretchy Concept Art](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/short_giraffe_0.png "Short Giraffe, Stretchy Concept Art")

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
