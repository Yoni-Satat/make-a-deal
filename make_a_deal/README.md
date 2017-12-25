# Let's Make A Deal
## "The Monty Hall Problem"

## Goal: Write a web app of the game Let's Make A Deal

## About the game:

- The user is presented with 3 doors, one door is hiding a prize.
- The user is asked to click a button and pick a door.
- Next, the user will click the 'host' button to reveal one of the 2 remaining doors. (This door must not have the prize!!).
- The user can now choose to switch door or keep the one they picked first (cannot switch back!).
- Now it's time to reveal where the prize is and see if the user won or not.

### Is it better to Stay or better to Switch?
### It is, without a doubt **Better** to **Switch!**

## The Underling Maths - Bayes

- Think about it as a *concentrations* of *probabilities*:
- Say you chose door number 1. Your chance was 1/3 right?
  - The probability of door 2 was also 1/3
  - And the probability of door 3 was also 1/3
- Together that's 2/3
- The host revealed door 2 which is empty.
- So these 2/3 are now concentrated into one door (door 3), it's **twice** as likely to be the winner as door number 1!
