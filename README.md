# README

- When finished, do `npm run deploy`
- Read the library.json file for tips on what to add next. Use Udemy courses for content and examples of
code that would work

## Sources

- [http://htmlcheatsheet.com/js/](http://htmlcheatsheet.com/js/)

- Comparison Sites:
	+ [https://www.telegraph.co.uk/football/world-cup-2018-wallchart-predictor/](https://www.telegraph.co.uk/football/world-cup-2018-wallchart-predictor/)
- List of Games:
	[https://en.wikipedia.org/wiki/2018_FIFA_World_Cup#Group_stage](https://en.wikipedia.org/wiki/2018_FIFA_World_Cup#Group_stage)
- Wireframes:
	+ [https://wireframe.cc/9d1msX](https://wireframe.cc/9d1msX)

## Code Editor

- List of code is currently loaded
- When clicking on code, I must show the code object in an input form and a completed Prism-styled code block with tags, etc.
- I need to be able to add new properties to the object; custom properties if needed
- I need to be able to edit and delete pieces of code

## Updates

**Mar 28, 2018**


**Mar 27, 2018**
- Coding the KnockOut stage order will be tough; I'm not entirely sure how to do it
- One Way
	+ I could have a separate key on the world cup reducer that will manually pair Winner A with Runner-up B, 
	Winner C with Runner-up D, etc. for all 8 games in the ROund of 16
	+ I could then have a separate key for the Quarter Finals that manually pairs winner of Match 49 with Match 50, Winner Match 53 with Match 54, etc.
- Re-thinking my data structure: I think I should have a teams list without any info about the Group Stage
besides the Group Name. I then need a separate json file of all the games that can then grab the teams
- Next Steps:
	+ I need to do a few more tests and see how it feels to sort the groups
	+ Another thing to think about is that I don't really need to achieve perfection with this data - so what
	if it repeats? I shuold take a look at my wireframe and see what I want to build and what would be the best
	data structure to achieve that.
- **Building the Group Stage**
	+ I want to show the six games for each group. Each game has a particular number (and match time, stadium, etc) along with the countries involved, their flags, and a place to input the score
	+ I also want to calculate the important stats for each team: Wins, Losses, Draws, Points, GF, GA, GD
	+ here is one way it could look:
	
```json
[
	{
		"id": 1, 
		"home": "Russia", 
		"home-score": 2,
		"away": "Saudia Arabia",
		"away-score": 1

	}
]

```

  - Each game is an object that allows me to add more data about it later
  - I can get the totals for each team
  - Wins, Losses and Draws can be determined as well



**Mar 26, 2018**
- `world-cup.json` file created and imported
- Reducer and Action Creator built

**Mar 26, 2018**
 
- World Cup 2018 predictor
- Gather scores from each game
- Rounds:
	+ Group Stage: 32 Teams ==> 8 Groups x 6 Games = 48 Games
	+ Round of 16: 16 Teams ==> 8 Games -> 56 Games played
	+ Quarter-finals: 8 Teams ==> 4 Games -> 60 Games played
	+ Semi-finals: 4 Teams ==> 2 Games -> 62 Games played
	+ Finals: 2 Teams ==> 1 Game -> 63 Games played

		* great list of all the games

	+ 
- Data Structure
  - I want to save all my info into a `world-cup.json` file. It will have one big array of countries
  - Each country is an object that has the following properties
  	+ Country Name
  	+ Country Flag image => I can grab these from Wikipedia
  	+ Group
  		+ Group Name
  		+ Group Stage Matches
  			* { matchID: 1, home: home, country: Russia}
  			* { matchID: 17: home: home, country: Russia}
  			* { matchID: 33: home: away, country: Russia}
  			* With this structure, I should be able to match up by matchID
  	- Other Data
  		+ This will be an object that holds all the other data that I would want to show later
  - Knockout Stage Data
  	+ this doesn't need to be recorded and is completely dependent upon
  - Reducer
  	+ 

```json
[
	{
		"Name": "Russia",
		"Flag": "../_artwork/russia-flag.png",
		"Group": {
			"GroupName": "A",
			"GroupStage": [
				{
					"matchID": 1,
					"home": "home"
				},
				{
					"matchID": 17,
					"home": "home"
				},
				{
					"matchID": 34,
					"home": "away"
				}
			]	
		},
		"OtherData": {}
	}
]

```

- Next Steps
	+ build out wireframes and get the basic look
	+ get some expert opinion sites
	+ discuss data structure: I want correct groupings as well as actual game #'s

**Mar 15, 2018**

- I can now show the syntax-highlighted code. The filter works and shows nice little blocks of code.
- I have a couple more steps like not showing an entire "result" page with every key press and instead show 
the full page ONLY when someone clicks on it.
- I need to add at least two full blocks (term, definition, code examples) each day until this thing is truly
useful

**Mar 14, 2018**

- I can do syntax highlighting but I need to use dangerouslySetInnerHTML. Let's try it...I just won't
use external output