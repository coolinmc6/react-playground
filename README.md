# README

- When finished, do `npm run deploy`
- Read the library.json file for tips on what to add next. Use Udemy courses for content and examples of
code that would work

## Sources

- [http://htmlcheatsheet.com/js/](http://htmlcheatsheet.com/js/)
- 

## Updates

**Mar 26, 2018**
 
- World Cup 2018 predictor
- Gather scores from each game
- Rounds:
	+ Group Stage: 32 Teams ==> 8 Groups x 6 Games = 48 Games
	+ Round of 16: 16 Teams ==> 8 Games -> 56 Games played
	+ Quarter-finals: 8 Teams ==> 4 Games -> 60 Games played
	+ Semi-finals: 4 Teams ==> 2 Games -> 62 Games played
	+ Finals: 2 Teams ==> 1 Game -> 63 Games played
- Comparison Sites:
	+ [https://www.telegraph.co.uk/football/world-cup-2018-wallchart-predictor/](https://www.telegraph.co.uk/football/world-cup-2018-wallchart-predictor/)
- List of Games:
	[https://en.wikipedia.org/wiki/2018_FIFA_World_Cup#Group_stage](https://en.wikipedia.org/wiki/2018_FIFA_World_Cup#Group_stage)
		* great list of all the games
- Wireframes:
	+ [https://wireframe.cc/9d1msX](https://wireframe.cc/9d1msX)
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