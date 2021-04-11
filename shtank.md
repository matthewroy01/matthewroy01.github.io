# SHTANK RPG Project Code Snippets

---
---

### [About Me Page](https://matthewroy01.github.io/aboutme)

### [Projects](https://matthewroy01.github.io/index)

### [My Senior Capstone/Production Blog](https://matthewroy01.github.io/capstoneblog)

---
---

## Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHTANK RPG is an RPG set in a wacky universe of superheroes and focuses on the many members of the titular "Super Hero Team of Atomic Nashbalms from Kansville".

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On this page, I will show some code snippets from across the project.

## "Path Ability" Design Pipeline Solution

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of SHTANK's ability types is the "Path Ability". It is designed to allow a character to follow a path for their attack, as if they are dashing along a certain pattern. Theoretically, this sort of ability could be defined by a list of directions like "left", "right", "up", or "down". However, the abilities in SHTANK can also be rotated to face the four cardinal directions, meaning that directions like "up" or "left" aren't sufficient enough.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To combat this, I am using directions that are relative to the direction a character is facing instead. These directions include "forwards", "backwards", "sideways", and "sidewaysOpposite". Here is an example of an ability that moves in a sort of circle:

![Part Of The Sparrowrang Ability's Inspector](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/shtank/sparrowrang_inspector.PNG "Part Of The Sparrowrang Ability's Inspector")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And here is the ability itself being used on the grid. Notice that the ability can also be flipped, essentially causing the "sideways" and "sidewaysOpposite" instructions to switch directions.

![The Sparrowrang Ability Being Rotated and Flipped In-Game](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/shtank/sparrowrang_ingame.gif)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The code to accomplish something like this would normally be pretty bulky, with having to check all four relative directions, check if the ability is flipped, and then reevaluating them into their absolute directions. However, by using C#'s reflection feature, I can prevent at least a bit of nesting.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First, in the *ProcessPathAbility* function, the absolute meaning of each relative direction is passed into *SavePath*, where the last four parameters passed into the function are string representations of "forwards", "sideways", "sidewaysOpposite", and "backwards". For example, if an ability is flipped and the character is facing downwards, then we pass "down" as forwards, "left" as sideways, etc.

![Code Snippet of ProcessPathAbility Function](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/shtank/abilityprocessor_processpathability.PNG "Code Snippet of ProcessPathAbility Function")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, within *SavePath*, we begin to loop through the instructions of the path ability and based on the relative direction, we pass some information and the absolute direction into *SavePathSegment*.

![Code Snippet of SavePath Function](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/shtank/abilityprocessor_savepath.PNG "Code Snippet of SavePath Function")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finally in *SavePathSegment*, we get to our reflection where we can use the string of the direction (remember this is now the absolute direction: "up", "down", "left", or "right") to grab the connecting grid space from the current grid space by name (each grid space has four potential connections, one in each cardinal direction). Here, the *TryAddGridSpace* returns false if the grid space we try to access is null or if the space is non-navigable, defined by the ability itself.

![Code Snippet of SavePathSegment Function](https://raw.githubusercontent.com/matthewroy01/matthewroy01.github.io/master/img/shtank/abilityprocessor_savepathsegment.PNG "Code Snippet of SavePathSegment Function")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All of this converting from more design-suitable directions to strings and using Reflection to get the grid spaces of the ability helps to keep the code cleaner and avoids an additional nested switch statement.

## Enemy AI with Minimax

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enemy AI with minimax...
