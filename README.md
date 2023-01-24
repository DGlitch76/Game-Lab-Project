# Game-Lab-Project Jan2023 

Game General Guidelines ---------- ---------- ---------- ----

1) Mashup between the canvas car game and Space Invaders with an horizontal flow. 
   Players can fly and walk... or just fly (= car game)

2) Three possible (cartoon) panoramic-scroll backgrounds *
   a) daylight cityscape 
   b) nighttime futuristic cityscape
   c) appocaliptic cityscape

3) Two or three Characters from Marvel to choose from *

4) Obstacles && Enemies 
   a) DC Characters
   b) Some City Buildings

* Choice made on the Landing/Splash Page - Project Goal - option (2.a) working + 1 Character.
  Background (b) and (c) + other characters "Bonus" coding.


  ---------- ---------- ---------- ---------- ---------- ------
  myMVP ---------- ---------- ---------- ---------- --------- -

  Player moves up and down.

  Arrows Left and Right scroll de brackground layers right to left. (left right motion illusion)
  Left and right translates as forward and backwards.

  Enemies flow from right to left in random positions.

  Both player and enemies have fire attacks.

  Player has a defense state.


---------- ---------- ---------- ---------- ---------- ------
Character (player === Ironman) ---------- ---------- --------

The character should have two "states". Walking(*) and flying.
Ironman should:

a) locates at same x position moving verticaly on y

b) go left and right (this accelerates the background scroll from right to left and the flying enemies speed)

c) go up and down for shooting enemies and avoid collision with (obstacle) buildings

d) walk and flying states controled by keypress - turning suite boosters on and off(*)


(*) The walk state shall only be tried after and if flying mode full game works. 
    The walking state part of the game should work as any other horizontal platform game coding.


---------- ---------- ---------- ---------- ---------- ------
Credits for Graphics ---------- ---------- ---------- -------

Backgrounds - freepik.com/author/vectorpocket
Characters - deviantart.com/z-studios



