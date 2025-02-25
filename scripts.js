input[type="radio"] {
  width: 2.2em; /* Increase width for larger size */
  height: 2.2em; /* Increase height for larger size */
  vertical-align: middle; /* Align with surrounding text/content */
  cursor: pointer; /* Pointer reflects interactivity */
}

/* Optional: Add spacing and scale labels */
input[type="radio"] + label {
  margin-left: 0.5em; /* Space between radio button and label */
  font-size: 1.2em; /* Adjust label font size */
}

input[type="checkbox"] {
  width: 2em; /* Increase width for larger size */
  height: 2em; /* Increase height for larger size */
  vertical-align: middle; /* Align with surrounding text/content */
  cursor: pointer; /* Pointer reflects interactivity */
}



button:hover {
	cursor: pointer;
}

input[type="checkbox"]:hover {
	cursor: pointer;
}

h2 {
	margin: 2px;
	font-size: 1.1em
}

/*
THREE COLUMN TESTING
*/




.one-column-container {
display: grid;
  grid-template-columns: repeat(1, 1fr); /* 2 equal-width columns */
  gap: 10px; /* Space between columns */
}

.three-column-container {
display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 equal-width columns */
  gap: 10px; /* Space between columns */
}

.column {
  padding: 10px;
  box-sizing: border-box; /* Ensures padding is included in width */
  padding: 10px; /* Add padding for visual separation */
  border: 1px solid #ccc; /* Optional border for visualization */
  background-color: #f9f9f9; /* Light background for columns */
  margin-top: 5px;
  margin-bottom: 5px;
}

.column.dark {
  background-color: #2d2d2d; /* Dark grey background */
  border: 1px solid #444; /* Subtle dark border */
  color: #f1f1f1; /* Light text for contrast */
}

@keyframes flash-vivid {
  0% {
    background-color: #facc15; /* Bright yellow */
  }
  50% {
    background-color: #d4af37; /* Rich gold */
  }
  100% {
    background-color: #facc15; /* Bright yellow */
  }
}

@keyframes pulse-vivid {
  0%, 100% {
    transform: scale(1); /* Normal size */
  }
  50% {
    transform: scale(1.01); /* Slightly larger */
  }
}

/*
PAYOUT SPLIT TESTING
*/

.payout-split-name {
	display: inline-flex;
	text-align: justify;
	font-weight: 600;
	min-height: 26px;
}

/* Base styling (no flashing) */
.payout-split-bar {
  width: 100%; /* Total width */
  height: 25px; /* Adjust height as needed */
  background-color: #facc15; /* Base yellow for gaps */
  display: flex; /* Use flexbox for layout */
  border: 1px solid #4b5563; /* Dark border for definition */
  border-radius: 8px; /* Smooth rounded edges */
  overflow: hidden; /* Ensures child elements stay within rounded edges */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); /* Subtle depth */
  margin-top: 10px;
  margin-bottom: 5px;
}

/* Section styles (no flashing) */
.green-bar {
  width: 69%; /* Exact width for the green section */
  height: 100%; /* Match parent height */
  background-color: #0f6b36; /* Rich dark green */
}

.green-bar-boost {
  height: 100%; /* Match parent height */
  background-color: #67c887; /* Softer light green for boost */
}

.red-bar {
  width: 14%; /* Exact width for the red section */
  height: 100%; /* Match parent height */
  background-color: #b91c1c; /* Rich dark red */
}

.red-bar-boost {
  height: 100%; /* Match parent height */
  background-color: #f87171; /* Softer light red for boost */
}

.blue-bar {
  width: 14%; /* Exact width for the blue section */
  height: 100%; /* Match parent height */
  background-color: #1c3db9; /* Rich dark blue */
}

.blue-bar-boost {
  height: 100%; /* Match parent height */
  background-color: #71aef8; /* Softer light blue for boost */
}

@keyframes flash-blue-split {
  0% {
    background-color: #1c3db9; /* Rich dark blue */
  }
  50% {
    background-color: #1430a3; /* Slightly darker blue */
  }
  100% {
    background-color: #1c3db9;
  }
}

@keyframes flash-blue-boost-split {
  0% {
    background-color: #71aef8; /* Soft light blue */
  }
  50% {
    background-color: #5d8fd8; /* More vibrant, stronger blue */
  }
  100% {
    background-color: #71aef8; /* Back to soft light blue */
  }
}


/* Flashing animations (only when .selected is added) */
@keyframes flash-yellow-gold-split {
  0% {
    background-color: #facc15; /* Bright yellow */
  }
  50% {
    background-color: #d4af37; /* Rich gold */
  }
  100% {
    background-color: #facc15; /* Bright yellow */
  }
}

@keyframes flash-green-split {
  0% {
    background-color: #0f6b36; /* Rich dark green */
  }
  50% {
    background-color: #0d5930; /* Slightly darker green */
  }
  100% {
    background-color: #0f6b36;
  }
}

@keyframes flash-green-boost-split {
  0% {
    background-color: #67c887;
  }
  50% {
    background-color: #33b25c;
  }
  100% {
    background-color: #67c887;
  }
}

@keyframes flash-red-split {
  0% {
    background-color: #b91c1c; /* Rich dark red */
  }
  50% {
    background-color: #a31414; /* Slightly darker red */
  }
  100% {
    background-color: #b91c1c;
  }
}

@keyframes flash-red-boost-split {
  0% {
    background-color: #f87171; /* Soft light red */
  }
  50% {
    background-color: #d85d5d; /* More vibrant, stronger red */
  }
  100% {
    background-color: #f87171; /* Back to soft light red */
  }
}

/* Flashing styles for .selected */
.payout-split-bar {
  animation: flash-yellow-gold-split 1.66s 6 forwards; /* Flash yellow to orange */
}

.payout-split-bar.selected {
  border: 3px solid #facc15; /* Default border */
  animation: sweepingGlowGrey 1.66s 6 alternate forwards;
}

@keyframes sweepingGlowGrey {
  0% { 
    box-shadow: 0 0 5px rgba(153, 153, 153, 0.3), 0 0 10px rgba(153, 153, 153, 0.5); 
  }
  50% { 
    box-shadow: 0 0 15px rgba(153, 153, 153, 1), 0 0 20px rgba(153, 153, 153, 0.7); 
  }
  100% { 
    box-shadow: 0 0 5px rgba(153, 153, 153, 0.3), 0 0 10px rgba(153, 153, 153, 0.5); 
  }
}

/* Yellow Glow */
.payout-split-bar.selected.yellow-glow {
  animation: sweepingGlowYellow 1.5s 10; /* Add the glow animation */
}

/* Orange Glow */
.payout-split-bar.selected.orange-glow {
  animation: sweepingGlowOrange 1.5s 10; /* Add the glow animation */
}

/* Red Glow */
.payout-split-bar.selected.red-glow {
  animation: sweepingGlowRed 1.5s 10; /* Add the glow animation */
}

/* Sweeping Glow Animations */
@keyframes sweepingGlowYellow {
  0% { box-shadow: 0 0 5px rgba(255, 255, 0, 0.3), 0 0 10px rgba(255, 255, 0, 0.5); }
  50% { box-shadow: 0 0 15px rgba(255, 255, 0, 1), 0 0 15px rgba(255, 255, 0, 0.7); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 0, 0.3), 0 0 10px rgba(255, 255, 0, 0.5); }
}

@keyframes sweepingGlowOrange {
  0% { box-shadow: 0 0 5px rgba(255, 130, 0, 0.3), 0 0 10px rgba(255, 130, 0, 0.5); }
  50% { box-shadow: 0 0 15px rgba(255, 130, 0, 1), 0 0 30px rgba(255, 130, 0, 0.7); }
  100% { box-shadow: 0 0 5px rgba(255, 130, 0, 0.3), 0 0 10px rgba(255, 130, 0, 0.5); }
}

@keyframes sweepingGlowRed {
  0% { box-shadow: 0 0 5px rgba(255, 40, 0, 0.3), 0 0 10px rgba(255, 40, 0, 0.5); }
  50% { box-shadow: 0 0 15px rgba(255, 40, 0, 1), 0 0 50px rgba(255, 40, 0, 0.7); }
  100% { box-shadow: 0 0 5px rgba(255, 40, 0, 0.3), 0 0 10px rgba(255, 40, 0, 0.5); }
}


.payout-split-bar.selected .green-bar {
  animation: flash-green-split 1s 10;
}

.payout-split-bar.selected .green-bar-boost {
  animation: flash-green-boost-split 1s 10;
}

.payout-split-bar.selected .red-bar {
  animation: flash-red-split 1s 10;
}

.payout-split-bar.selected .red-bar-boost {
  animation: flash-red-boost-split 1s 10;
}

.payout-split-bar.selected .blue-bar {
  animation: flash-blue-split 1s 10;
}

.payout-split-bar.selected .blue-bar-boost {
  animation: flash-blue-boost-split 1s 10;
}

.boost-insurance-div {
  width: 100%;
  padding: 5px; /* Increased padding for a more spacious look */
  color: white; /* White text for contrast */
  background-color: #2d3748; /* Darker, more polished background to match your theme */
  font-weight: bold; /* Consistent typography */
  border: 1px solid #4a5568; /* Slightly lighter border for subtle contrast */
  border-radius: 10px; /* Rounded corners for a more modern, polished look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* A more prominent shadow for depth */
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transitions for hover */
  display: flex; /* Flexbox for content alignment */
  margin: 0 auto; /* Centers the div horizontally */
  box-sizing: border-box;
  font-size: 0.9em;
}

.boost-insurance-div:hover {
  background-color: #3182ce; /* Blue background on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
  transform: translateY(-3px); /* Slight lift effect on hover for added interactivity */
}

/* Optional: Add a subtle blue glow effect when focused or interacted */
.boost-insurance-div:focus, .boost-insurance-div:hover {
  outline: none;
  box-shadow: 0 0 10px rgba(56, 161, 255, 0.7); /* Soft blue glow effect */
}


.credit-button-div button {
	width: 100%;
	min-height: 40px;
	font-size: 1em;
	font-family: Verdana;
	font-weight: bold;
	padding: 5px;
	border-radius: 7px;
	margin-bottom: 10px;
	background-color: yellow;
	border-width: 2px;
	word-wrap: break-word;
	color: black;
    text-shadow: 1px 1px 0px white, 
                 -1px -1px 0px white,  
                 1px -1px 0px white, 
                 -1px 1px 0px white;
}

/* Pulse Animation */
@keyframes pulse-credit {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
}

/* Flashing animation */
@keyframes flash-credit {
  0% {
    background-color: #ffeb3b; /* Bright Yellow */
  }
  50% {
    background-color: #ffb300; /* Deep Golden Orange */
  }
  100% {
    background-color: #ffeb3b;
  }
}

.credit-button-div button:hover {
	background-color: #ff8c00; /* Strong Orange-Gold */
	color: black !important;
	border: 2px solid black !important;
	animation: flash-credit-hover 0.7s 10, pulse-credit 1s 10;
}

/* Hover flashing animation */
@keyframes flash-credit-hover {
  0% {
    background-color: yellow; /* Vibrant Gold */
  }
  50% {
    background-color: #ff7b00; /* Bold Amber Orange */
  }
  100% {
    background-color: yellow;
  }
}

.convert-button-div button {
	width: 100%;
	min-height: 40px;
	font-size: 1em;
	font-family: Verdana;
	font-weight: bold;
	padding: 5px;
	border-radius: 7px;
	margin-bottom: 10px;
	background-color: #0f6b36; /* Deep Green */
	border-width: 2px;
	word-wrap: break-word;
	color: white;
    text-shadow: 1px 1px 0px black, 
                 -1px -1px 0px black,  
                 1px -1px 0px black, 
                 -1px 1px 0px black;
}

/* Pulse Animation */
@keyframes pulse-convert {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
}

/* Flashing animation */
@keyframes flash-convert {
  0% {
    background-color: #0f6b36; /* Deep Green */
  }
  50% {
    background-color: #149347; /* Brighter Green */
  }
  100% {
    background-color: #0f6b36;
  }
}

.convert-button-div button:hover {
	background-color: #1db954; /* Noticeably Brighter Green */
	border: 2px solid black !important;
	animation: flash-convert-hover 0.7s 10, pulse-convert 1s 10;
}

/* Hover flashing animation */
@keyframes flash-convert-hover {
  0% {
    background-color: #1faa5c; /* Vibrant Green */
  }
  50% {
    background-color: #24c96b; /* Bright Fresh Green */
  }
  100% {
    background-color: #1faa5c;
  }
}


/* ROBOT */
/* General button styling */
/* Container for each button (this is where animations and effects are applied) */
.game-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative; /* To allow for text overlay */
  border-radius: 10px;
  width: 100%;
}

.game-button-container button {
  width: 100%; /* Make the button fill the container width */
  min-width: 150px; /* Prevent the button from shrinking below 150px */
  height: 40px;
  font-size: 1em;
  font-family: Verdana, sans-serif;
  padding: 5px;
  border-radius: 10px;
  border-width: 4px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  animation: pulse 1.66s infinite;
  background: linear-gradient(to bottom, #ff586b, #ff8fa6); /* Default Cherry color */
  color: #a91e1e; /* Bright red text for Cherry */
  border-color: #ff1e4e; /* Red border for Cherry */
}

/* Cherry buttons */
.game-button-container.cherry button {
  background: linear-gradient(to bottom, #ff1e4e, #ff586b); /* Brighter red to pink */
  color: white; /* Bright red text */ #a91e1e
  border-color: #ff1e4e; /* Vibrant red border */
  
  text-shadow: 
	-1px -1px 0 black,  
	1px -1px 0 black,
	-1px  1px 0 black,
	1px  1px 0 black;
}

/* Cola buttons */
.game-button-container.cola button {
  background: linear-gradient(to bottom, #5c1717, #8b0000); /* Dark red to brown */
  color: #ffffff; /* Bright white text */
  border-color: #772020; /* Dark red border */
  text-shadow: 
	-1px -1px 0 black,  
	1px -1px 0 black,
	-1px  1px 0 black,
	1px  1px 0 black;
}

/* Large bet buttons */
.game-button-container.cherry.large-bet button,
.game-button-container.cola.large-bet button {
  font-size: 1.6em;
  height: 80px;
}

/* Hover Effects */
.game-button-container.cherry:hover button {
  background: linear-gradient(to bottom, #ff586b, #ff8fa6); /* Rich red to pink */
  /*box-shadow: 0 6px 8px rgba(255, 30, 78, 0.5);*/ /* Stronger shadow on hover */
  transform: scale(1.05); /* Slightly enlarge on hover */
  color: #d4af37; /* Bright white text */
  
  text-shadow: 
	-1px -1px 0 black,  
	1px -1px 0 black,
	-1px  1px 0 black,
	1px  1px 0 black;
}

.game-button-container.cola:hover button {
  background: linear-gradient(to bottom, #772020, #5c1717); /* Brighter dark red to brown */
  /*box-shadow: 0 6px 8px rgba(119, 32, 32, 0.5);*/ /* Stronger shadow on hover */
  transform: scale(1.05); /* Slightly enlarge on hover */
  color: #d4af37; /* Gold color for Cola */
}

/* Flashing Border Animations */
@keyframes flash-border-cherry {
  0%, 100% {
    border-color: #ff1e4e; /* Vibrant red */
  }
  50% {
    border-color: #ffc1d1; /* Soft pink */
  }
}

@keyframes flash-border-cola {
  0%, 100% {
    border-color: #772020; /* Dark red */
  }
  50% {
    border-color: #8b4513; /* Deep brown */
  }
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1); /* Normal size */
  }
  50% {
    transform: scale(1.1); /* Slightly larger */
  }
}

/* Wobble Animation */
@keyframes wobble {
  0%, 100% {
    transform: rotate(0deg); /* Neutral */
  }
  25% {
    transform: rotate(1deg); /* Slight tilt right */
  }
  75% {
    transform: rotate(-1deg); /* Slight tilt left */
  }
}

/* Disabled Buttons */
.game-button-container button:disabled {
  background: linear-gradient(to bottom, #4b5563, #374151); /* Muted gradient */
  color: #9ca3af; /* Muted text */
  border-color: #1f2937; /* Muted border */
  box-shadow: none;
  cursor: not-allowed;
  animation: none; /* Disable animations */
  transform: none; /* No scaling or wobbling */
}

/* Optional: Add your overlay text inside the container */
.game-button-container .overlay-text {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: white;
  font-size: 0.8em;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 3px 6px;
  border-radius: 5px;
}


/* ROBOT */

.stake-bet-container {
  display: flex;
  flex-wrap: wrap;
}

.stake-bet-div {
  background-color: #101824; /* Neutral grey */
  color: white;
  font-size: 0.9em;
  text-align: center;
  border: 1px solid black; /* Dark, consistent border */
  margin-top: 0px;
  border-radius: 7px; /* Smaller radius */
  font-weight: 600;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); /* Subtle depth */
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%; /* 50% width for each div */
  box-sizing: border-box; /* Ensures padding is included in width */
  padding: 4px; /* Adds internal spacing */
  flex-grow: 1; /* Ensures the divs can grow if content overflows */
}

.stake-bet-div:hover {
  background-color: #3b4a58; /* Slightly darker grey when hovered */
}

.panel {
  display: block;
  border: 1px solid #121a26; /* Very dark border for contrast */
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 10px;
  background-color: #182232; /* Slightly darker blue */
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Stronger shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-size: 0.8em;
  box-sizing: border-box;
}

.panel:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* More pronounced shadow on hover */
}

.panel.debug {
  background-color: #3d3d3d; /* Slightly darker grey */
  color: #e0e0e0; /* Soft grey text for contrast */
  border: 1px solid #1e1e1e; /* Very dark grey border */
}

.panel.debug:hover {
  background-color: #333333; /* Darker grey on hover */
}

.panel.green {
  background-color: #0b6f37; /* Deeper green */
  color: white;
  font-style: normal;
  border: 1px solid #094e27; /* Very dark green border */
}

.panel.green:hover {
  background-color: #094b26; /* Even darker green on hover */
}

.panel.red {
  background-color: #8b1a1a; /* Deeper red */
  color: white;
  font-style: normal;
  border: 1px solid #6f1212; /* Very dark red border */
}

.panel.red:hover {
  background-color: #6f0f0f; /* Even darker red on hover */
}

/* Flashing effects */
@keyframes flash-green {
  0% {
    background-color: #16a34a; /* Rich green */
  }
  50% {
    background-color: #d1fae5; /* Light green */
  }
  100% {
    background-color: #16a34a;
  }
}

@keyframes flash-red {
  0% {
    background-color: #dc2626; /* Strong red */
  }
  50% {
    background-color: #fca5a5; /* Light red */
  }
  100% {
    background-color: #dc2626;
  }
}

@keyframes flash-orange {
  0% {
    background-color: #ea580c; /* Deep orange */
  }
  50% {
    background-color: #fef08a; /* Soft yellow-orange */
  }
  100% {
    background-color: #ea580c;
  }
}

/* Flashing animations */
@keyframes flash-green {
  0% {
    background-color: #0a6a32; /* Dark green */
  }
  50% {
    background-color: #8fd4ac; /* Light green */
  }
  100% {
    background-color: #0a6a32;
  }
}

@keyframes flash-red {
  0% {
    background-color: #a91e1e; /* Dark red */
  }
  50% {
    background-color: #f36d6d; /* Light red */
  }
  100% {
    background-color: #a91e1e;
  }
}

@keyframes flash-orange {
  0% {
    background-color: #b8470c; /* Deep orange */
  }
  50% {
    background-color: #f9a85b; /* Lighter orange */
  }
  100% {
    background-color: #b8470c;
  }
}

.boost-small {
	font-size: 1.8em;
	font-weight: bold;
	-webkit-text-stroke: 1px white;
	letter-spacing: -2px;
}

.boost-medium {
	font-size: 2.8em;
	font-weight: bold;
	-webkit-text-stroke: 1px white;
	letter-spacing: -2px;
}

.boost-large {
	font-size: 3.8em;
	font-weight: bold;
	-webkit-text-stroke: 1px white;
	letter-spacing: -2px;
}

.boost-small.selected {
  background: linear-gradient(to right, green, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* For Safari */
  animation: sweepingTextGlow 1.66s 6 ease-in-out forwards;
}

.boost-medium.selected {
  background: linear-gradient(to right, yellow, orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* For Safari */
  animation: sweepingTextGlow 1.66s 6 ease-in-out forwards;
}

.boost-large.selected {
  background: linear-gradient(to right, orange, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* For Safari */
  animation: sweepingTextGlow 1.66s 6 ease-in-out forwards;
}


@keyframes sweepingTextGlow {
  0% { text-shadow: 0 0 15px rgba(255, 255, 0, 1); }
  50% { text-shadow: 0 0 5px rgba(255, 255, 0, 0.3); }
  100% { text-shadow: 0 0 15px rgba(255, 255, 0, 1); }
}

.boost-small.selected-blue,
.boost-medium.selected-blue,
.boost-large.selected-blue {
  background: linear-gradient(to right, blue, cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* For Safari */
  text-shadow: 0 0 10px rgba(0, 162, 255, 0.8), 
               0 0 20px rgba(0, 162, 255, 0.6), 
               0 0 30px rgba(0, 162, 255, 0.4);
  animation: sweepingTextGlowBlue 1.66s 6 ease-in-out forwards;
}

@keyframes sweepingTextGlowBlue {
  0% { text-shadow: 0 0 5px rgba(0, 162, 255, 0.5); }
  50% { text-shadow: 0 0 15px rgba(0, 162, 255, 0.8); }
  100% { text-shadow: 0 0 5px rgba(0, 162, 255, 0.5); }
}

.grey {
	color: grey;
}

.red {
	color: red;
}

.orange {
	color: orange;
}

.yellow {
	color: yellow;
}

.blue {
	color: cyan;
}

.glowing {
  animation: sweepingTextGlow 1.66s 6 ease-in-out forwards;
}

.glowing-blue {
  animation: sweepingTextGlowBlue 1.66s 6 ease-in-out forwards;
}

/* Main Error Content */
/* Main Error Content */
#error-content {
  color: #f1f1f1; /* Light text for better contrast against the red background */
  background-color: #8b0000; /* Deep, rich red background */
  font-size: 0.9em; /* Slightly larger for readability */
  padding: 5px;
  border-radius: 8px; /* Rounded corners for a polished look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Soft shadow for depth */
  text-align: center; /* Center the message */
  max-width: 100%; /* Full width of its parent container */
  width: 100%; /* Ensure it takes up the full width */
  min-height: 65px;
  height: 100%; /* Ensure it takes up the full height of the cell */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: pulseError 1s ease-in-out 10; /* Subtle pulsing effect */
  transition: all 0.3s ease-in-out; /* Smooth transitions for changes */
  box-sizing: border-box; /* Makes sure padding doesn't affect width/height */
}

.green-error {
	background-color: #0f6b36 !important;
	color: #f1f1f1 !important;
	animation: pulseErrorGreen 1s ease-in-out 10 !important; /* Subtle pulsing effect */
}

.green-error h1 {
	color: #e1ffe1 !important;
}

.red-error {
	background-color: #8b0000 !important; /* Deep, rich red background */
	color: #f1f1f1 !important; /* Light text for better contrast against the red background */
	animation: pulseError 1s ease-in-out 10 !important; /* Subtle pulsing effect */
}

.blue-error {
  background-color: #0a3d78 !important;
  color: #f1f1f1 !important;
  animation: pulseErrorBlue 1s ease-in-out 10 !important; /* Subtle pulsing effect */
}

.blue-error h1 {
  color: #d1e8ff !important;
}




/* Error Heading */
#error-content h1 {
  font-size: 1.5em;
  margin: 0px;
  color: #ff4d41; /* Red-orange color for the heading */
  text-transform: uppercase; /* Make the heading stand out */
  letter-spacing: 1px; /* Adds a bit of space between the letters */
}

/* Error Message Text */
#error-content p {
  font-size: 1em;
  color: #f1f1f1; /* Lighter text for better contrast */
  margin-top: 5px;
}

/* Pulse Animation for Error */
@keyframes pulseError {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 77, 65, 0.6), 0 0 15px rgba(255, 77, 65, 0.4); /* Red glow */
  }
  50% {
    transform: scale(0.97); /* Slightly enlarge */
    box-shadow: 0 0 20px rgba(255, 77, 65, 0.8), 0 0 30px rgba(255, 77, 65, 0.6); /* Brighter red glow */
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 77, 65, 0.6), 0 0 15px rgba(255, 77, 65, 0.4); /* Return to initial */
  }
}

/* Pulse Animation for Green Error */
@keyframes pulseErrorGreen {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 128, 0, 0.6), 0 0 15px rgba(0, 128, 0, 0.4); /* Green glow */
  }
  50% {
    transform: scale(0.97); /* Slightly shrink */
    box-shadow: 0 0 20px rgba(0, 128, 0, 0.8), 0 0 30px rgba(0, 128, 0, 0.6); /* Brighter green glow */
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 128, 0, 0.6), 0 0 15px rgba(0, 128, 0, 0.4); /* Return to initial */
  }
}

/* Pulse Animation for Green Error */
@keyframes pulseErrorBlue {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 128, 0.6), 0 0 15px rgba(0, 0, 128, 0.4); /* Green glow */
  }
  50% {
    transform: scale(0.97); /* Slightly shrink */
    box-shadow: 0 0 20px rgba(0, 0, 128, 0.8), 0 0 30px rgba(0, 0, 128, 0.6); /* Brighter green glow */
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 128, 0.6), 0 0 15px rgba(0, 0, 128, 0.4); /* Return to initial */
  }
}



/* Overlay Style */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4em;
  text-align: center;
  z-index: 9998;
  visibility: hidden;
  flex-direction: column;
}

.overlay-points {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4em;
  text-align: center;
  z-index: 9999;
  visibility: hidden;
  flex-direction: column;
}

.overlay-images {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to multiple rows */
  gap: 10px; /* Space between images */
  justify-content: center;
}

.overlay-image {
  max-width: 100px;
  max-height: 100px;
  transition: opacity 0.5s ease;
}

.overlay-text {
  margin-bottom: 20px;
  margin-top: 20px;
}

.overlay-dismiss {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4em;
  text-align: center;
  z-index: 9999;
  visibility: hidden;
  flex-direction: column;
}

.overlay-dismiss.darker {
  background-color: rgba(0, 0, 0, 0.97);
}

#overlay-bonus-game {
	font-size: 1.1em;
	font-weight: bold;
	text-shadow: -1px -1px 0 black,
		1px -1px 0 black,
		-1px  1px 0 black,
		1px  1px 0 black;
}

.overlay-dismiss .dismiss-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0077cc; /* Blue color */
  color: white;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.overlay-dismiss .dismiss-button:hover {
  background-color: #005fa3; /* Slightly darker blue on hover */
}

.overlay-dismiss.active {
  visibility: visible;
}

/* NEW BONUSES */
/* Slide-In and Swing Animation */
.slide-in-scale {
  display: inline-block;
  transform: translateX(100%); /* Start off-screen */
  opacity: 0; /* Start transparent */
  transform-origin: top center; /* Pivot point for swinging */
  animation: slideIn 1.66s ease-out forwards, growShrink 1.66s ease-in-out 1.66s infinite forwards;
  vertical-align: middle;
}

@keyframes slideIn {
  0% {
    transform: translateX(200%); /* Start far left */
    opacity: 0;
  }
  100% {
    transform: translateX(0); /* End in position */
    opacity: 1;
  }
}

@keyframes growShrink {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.2); }
}

@keyframes swingPendulum {
  0% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
  100% { transform: rotate(10deg); }
}

.sweet-image-text {
	z-index: 0;
	transform: scaleY(1.3);
	font-size: 9em;
	font-weight: bold;
	color: #101824;
	text-shadow: 
		-1px -1px 0 black,  
		 1px -1px 0 black,
		-1px  1px 0 black,
		 1px  1px 0 black;
}

.sweet-image {
  transform-origin: center; /* Animation grows from the center */
  /*animation: spin-grow 0.7s ease-out, bounce 1s ease 4 1s forwards;*/ /* start spinning and growing first, then bounce infinitely */
  animation: spin-grow 0.7s ease-out, growShrinkSweetImage 1s ease 4 1s forwards;
  min-width: 70px;
  min-height: 70px;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; /* Black outline effect for text */
  font-size: 3em;
  padding-top: 5px;
  padding-bottom: 0px;
}

@keyframes growShrinkSweetImage {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.15); }
}


@keyframes spin-grow {
  0% {
    transform: scale(0) rotate(0deg); /* Start with no size and no rotation */
    opacity: 0; /* Fully transparent */
  }
  40% {
    transform: scale(0.8) rotate(90deg); /* Gradual growth and rotation to 90 degrees */
    opacity: 0.5; /* Half opacity */
  }
  60% {
    transform: scale(1.2) rotate(180deg); /* Grow past full size, rotate halfway */
    opacity: 1; /* Fully opaque */
  }
  100% {
    transform: scale(1) rotate(360deg); /* Full size and complete rotation */
    opacity: 1; /* Fully opaque */
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Default position */
  }
  50% {
    transform: translateY(-10px); /* Move up during bounce */
  }
}

.result-div, .payout-div {
  width: 100%;
  background-color: #4b5563; /* Neutral grey */
  font-size: 1.8em;
  text-align: center;
  color: white;
  border: 2px solid #121a26; /* Dark, consistent border */
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  justify-content: center;
  align-items: center;
  display: none;
  min-height: 120px;
  vertical-align: middle;
  animation: appear-focus 0.6s ease-out;
  margin-bottom: 5px;
}

.payout-div {
  font-size: 1.2em;
  font-weight: 600;
  min-height: 70px;
	text-shadow: 
		-1px -1px 0 black,  
		 1px -1px 0 black,
		-1px  1px 0 black,
		 1px  1px 0 black;
}

.result-div {
	font-size: 3.5em;
    letter-spacing: -3px;
	text-shadow: 
		-1px -1px 0 black,  
		 1px -1px 0 black,
		-1px  1px 0 black,
		 1px  1px 0 black;
}

/* Flashing animations */
@keyframes flash-green-new {
  0%, 100% { background-color: #16a34a; }
  50% { background-color: #d1fae5; }
}

@keyframes flash-red-new {
  0%, 100% { background-color: #dc2626; }
  50% { background-color: #fca5a5; }
}

@keyframes flash-blue-new {
  0%, 100% { background-color: #1c3db9; }
  50% { background-color: #a5b4fc; }
}

/* Win result */
.result-div.win, .payout-div.win {
  background-color: #16a34a;
  border-color: #074d24;
  animation: flash-green-new 1s 8, pulse-effect 1s 4;
}

/* Lose result */
.result-div.lose, .payout-div.lose {
  background-color: #dc2626;
  border-color: #701414;
  animation: flash-red-new 1s 8, pulse-effect 1s 4;
}

/* Insurance result - Now Blue */
.result-div.insurance, .payout-div.insurance {
  background-color: #1c3db9;
  border-color: #0f255f;
  animation: flash-blue-new 1s 8, pulse-effect 1s 4;
}

/* Entry animation */
@keyframes appear-focus {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  40% { transform: scale(0.8) rotate(90deg); opacity: 0.5; }
  60% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
}

@keyframes pulse-effect {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.boost-small {
  font-size: 2em;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
}


.payout-boost-text {
  position: absolute; /* Position the text absolutely within the parent container */
  top: 80%; /* Vertically center the text */
  left: 70%; /* Horizontally center the text */
  transform: translate(-40%, -30%); /* Adjust the position to exactly center it */
  color: white; /* Set text color (change as needed) */
  font-size: 1.5rem; /* Adjust size as needed */
  font-weight: bold; /* Make the text stand out */
  z-index: 1; /* Ensure the text is on top of the image */
	text-shadow: 
		-1px -1px 0 black,  
		 1px -1px 0 black,
		-1px  1px 0 black,
		 1px  1px 0 black;
}

.payout-boost-text.small {
	font-size: 0.8em;
}

.payout-boost-text.medium {
	font-size: 1em;
}

.payout-boost-text.large {
	font-size: 1.2em;
}

.strikethrough {
	text-decoration: line-through;
	text-decoration-color: red;
	text-decoration-thickness: 3px;
}

.cherry-cola-bets {
	display: inline-block;
	margin-left: 5px;
}

.cherry-cola-bets-container {
	display: inline-block;
}

.last-picks-container {
	display: inline-flex;
	flex-direction: row;
	gap: 4px;
	max-width: 100%;
	display: hidden;
	vertical-align: middle;
}
.last-picks-entry {
	display: flex;
	justify-content: space-between;
	padding: 1px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
.last-picks-cola { background-color: brown; color: white; padding: 10px; border-radius: 3px; margin: 1px; }
.last-picks-cherry { background-color: pink; color: black; padding: 10px; border-radius: 3px; margin: 1px; }

.last-picks-win {
	box-shadow: 0px 0px 10px rgba(40, 167, 69, 0.5); /* Green glow effect */
	border: 2px solid #28a745; /* Green border for win */
}

.last-picks-loss {
	box-shadow: 0px 0px 10px rgba(220, 53, 69, 0.5); /* Red glow effect */
	border: 2px solid #dc3545; /* Red border for loss */
}

.last-picks-insurance {
	/*
	box-shadow: 0px 0px 10px rgba(253, 126, 20, 0.5);
	border: 2px solid #fd7e14;
	*/
    box-shadow: 0px 0px 10px rgba(0, 123, 255, 0.5); /* Blue glow effect */
    border: 2px solid #007bff; /* Blue border matching the glow */
}

.latest-entry {
	padding: 12px;
}

.last-picks-entry.latest {
	margin-right: auto;
	border-width: 3px;
	animation: slideInLastPick 1.5s ease-out forwards, growShrinkLastPick 1.4s ease-in-out 1.4s 6;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation: fadeOut 0.5s forwards;
}

.hidden {
  display: none;
}

@keyframes slideInLastPick {
  0% {
    transform: translateX(+400%); /* Start far right */
    opacity: 0;
  }
  100% {
    transform: translateX(0); /* End in position */
    opacity: 1;
  }
}

@keyframes growShrinkLastPick {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.05); }
}


/* ROBOT GRID */
/* Grid container */
/* Dark Theme */
body {
  background: #121212;
  color: #e0e0e0;
  font-family: Verdana;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevents unwanted horizontal scrolling */
  overflow-y: auto;
  font-size: 14px;
}

body.overlay-active * {
    animation-play-state: paused !important;
    transition: none !important;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Ensures columns stay aligned */
  grid-auto-rows: auto; /* Rows will grow independently */
  gap: 8px; /* Reduced gap for a tighter layout */
  /*width: 100%;*/
  /*max-width: 1200px;*/
  margin: 10px;
  transition: transform 0.3s ease-in-out;
}

/* Grid item styling */
.grid-item {
  background: #1e1e1e;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 1px solid #333;
}

.full-width {
  grid-column: span 3; /* Makes these elements take the full width */
}

/* New grid item that spans 2 columns */
.two-column-span {
  grid-column: span 2; /* This makes the item span 2 columns */
}

/* Zoom out on smaller screens instead of stacking */
@media (max-width: 768px) {
  .grid-container {
    transform: scale(0.9); /* Zooms out grid */
    width: 100vw; /* Ensures it still fills screen */
	transform-origin: top left;
  }
}

@media (max-width: 480px) {
  .grid-container {
    transform: scale(0.69); /* Zooms out further */
	transform-origin: top left;
  }
}

/* Base animation for flashing background */
@keyframes flashBackgroundGreen {
  0% { background-color: #008000; } /* Green */
  50% { background-color: #00FF00; } /* Lighter green */
  100% { background-color: #008000; } /* Green again */
}

@keyframes flashBackgroundRed {
  0% { background-color: #8B0000; } /* Dark Red */
  50% { background-color: #FF0000; } /* Bright Red */
  100% { background-color: #8B0000; } /* Dark Red again */
}

@keyframes flashBackgroundOrange {
  0% { background-color: #FF4500; } /* Orange-Red */
  50% { background-color: #FF8C00; } /* Dark Orange */
  100% { background-color: #FF4500; } /* Orange-Red again */
}

/* Class for flashing green */
.flash-green {
  animation: flashBackgroundGreen 2s 10 forwards;
}

/* Class for flashing red */
.flash-red {
  animation: flashBackgroundRed 2s 10 forwards;
}

/* Class for flashing orange */
.flash-orange {
  animation: flashBackgroundOrange 2s 10 forwards;
}


/* FLYING POINTS */
.flying-text-container {
    position: relative;
    width: 100%;  /* Set width of the container */
    height: 86px; /* Set height of the container */
    overflow: hidden; /* Hide any text flying out of the container */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px
}

.flying-text {
    position: absolute;
    font-size: 1.4em;
    font-weight: bold;
    opacity: 1;
    pointer-events: none; /* Ensures no interaction with the flying text */
    background: transparent; /* Transparent background */
    color: white; /* Default text color */
    text-shadow: 1px 1px 0px black, 
                 -1px -1px 0px black,  
                 1px -1px 0px black, 
                 -1px 1px 0px black;
    animation: flyOut 1.7s ease-out forwards;
}

/* Animation to make the text fly out in random directions */
@keyframes flyOut {
    0% {
        transform: translate(0, 0); /* Start from the center of the div */
        opacity: 1;
    }
    100% {
        transform: translate(var(--x), var(--y)); /* Move in random direction */
        opacity: 0; /* Fade out as they move away */
    }
}

/* FOR STATISTICS OVERLAY */
.json-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    border-bottom: 1px solid black;
	font-size: 0.8em;
}

.json-item-cell {
    padding: 2px 2px;
}

.key {
    font-weight: normal;
    min-width: 150px; /* Adjust width as needed */
    text-align: left;
}

.value {
	font-weight: bold;
    text-align: right;
    flex-grow: 1;
}

.value-red {
	color: #FF4D4D;
}

.value-orange {
	color: #FFA500;
}

.value-green {
	color: #32CD32;
}

.value-white {
	color: white;
}

.value-yellow {
	color: #facc15;
}

.glow-points-white {
    text-shadow: 0 0 2px white, 0 0 4px white;
}

.glow-points-yellow {
    text-shadow: 0 0 2px yellow, 0 0 4px gold;
}

.glow-points-orange {
    text-shadow: 0 0 2px orange, 0 0 4px darkorange;
}

.glow-points-red {
    text-shadow: 0 0 2px red, 0 0 4px darkred;
}

.glow-points-blue {
    text-shadow: 0 0 2px cyan, 0 0 4px dodgerblue;
}

.glow-points-green {
    text-shadow: 0 0 2px lime, 0 0 4px green;
}

.winnings {
	font-size: 1.4em;
	text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
	padding-top: 6px;
	box-sizing: border-box;
	letter-spacing: -1px;
}

#cust-credit {
	text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
	font-size: 1.2em;
}

.payout-rates {
	text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
	font-size: 0.8em;
}


/* CHART */
.chart-container {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	width: 500px;
	min-height: 200px;
}
.bar-group {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 12px;
	margin: 0 1px;
}
.bar {
	width: 100%;
	position: absolute;
	bottom: 50%; /* Center bars on x-axis */
	transition: height 0.3s ease-in-out;
}
.house {
	background-color: #67c887;
	transform-origin: bottom;
}
.player {
	background-color: #1c3db9;
	transform-origin: top;
}
.label {
	position: absolute;
	bottom: -25px;
	font-size: 14px;
	font-weight: bold;
}

#chart-credit {
	margin-top: 10px;
	text-shadow: 
		-1px -1px 0 black,
		1px -1px 0 black,
		-1px  1px 0 black,
		1px  1px 0 black;
	font-size: 0.9em;
	font-weight: bold;
}

.blocked {
	pointer-events: none;
	overflow: hidden;
}

.blocked-scroll {
	overflow: hidden;
}

.title-text {
	font-size: 2em;
	font-weight: 600;
	letter-spacing: -4px;
	background: linear-gradient(to right, #8b1a1a, #b22222, #8b1a1a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transform: scaleY(1.75);
	margin-top: 3px;
	
}

.chart-stake {
	font-size: 0.7em;
}

#boost-insurance-lives {
	color: #71aef8;
	display: inline;
	font-size: 1.2em;
	text-shadow: 
		-1px -1px 0 black,
		1px -1px 0 black,
		-1px  1px 0 black,
		1px  1px 0 black;
	margin-left: -13px;
	vertical-align: 13px;
}

.radio-group-boost {
	display: none;
	font-size: 1.5em;
	text-align: left;
	accent-color: #0f6b36;
	position: relative;
	vertical-align: top;
}

.radio-group-boost.blue {
	accent-color: #1c3db9;;
}

#boost-payout-container {
    z-index: 3; /* Ensures text is above background */
}

#boost-insurance-container {
    z-index: 2; /* Ensures text is above background */
}

#boost-payout-container, #boost-insurance-container {
    position: relative; /* Ensures the pseudo-element is positioned inside */
    font-size: 16px;
    font-weight: bold;
    color: white;
    width: 100%; /* Adjust based on your layout */
}

#boost-payout-container::before, 
#boost-insurance-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    width: var(--bg-width, 180px); /* Default to full width */
    height: 22px;
    z-index: -1; /* Ensures it stays behind the text */
    border-radius: 5px;
	opacity: var(--bg-opacity, 0);
	border: 2px solid #facc15;
	box-sizing: border-box;
}

#boost-payout-container::before {
	margin-top: 30px;
}

#boost-insurance-container::before {
	margin-top: 23px;
}

#boost-payout-container::before {
	background-color: var(--bg-color, #0f6b36); /* Uses CSS variable */
}

#boost-insurance-container::before {
	background-color: var(--bg-color, #1c3db9); /* Uses CSS variable */
}


/* BONUS GAME */
.grid-bonus-game {
	display: grid;
	grid-template-columns: repeat(5, 60px);
	gap: 5px;
}
.box-bonus-game {
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid gray;
	cursor: pointer;
	font-weight: bold;
	position: relative;
	border-radius: 5px;
	box-sizing: border-box;
	/*background-color: #182232;*/
	font-size: 1.3em;
	animation: flash-dark-split 1.5s infinite;
}
.selected-bonus-game {
	border-color: #facc15;
	border-width: 3px;
	background-color: #0077cc;
	animation: pulseBonusGame 1.5s infinite ease-in-out !important;
}
.hidden-bonus-game-green.selected-highlight-bonus-game {
	border-color: #facc15;
	border-width: 3px;
	/*background-color: #0077cc;*/
	animation: pulseBonusGame 1.5s infinite ease-in-out, flash-green-split 1.5s infinite ease-in-out !important;	
}

.hidden-bonus-game.selected-highlight-bonus-game {
	border-color: #facc15;
	border-width: 3px;
	/*background-color: #0077cc;*/
	animation: pulseBonusGame 1.5s infinite ease-in-out, flash-red-split 1.5s infinite ease-in-out !important;	
}

.hidden-bonus-game-green {
	transition: opacity 0.5s ease-in-out !important;
	animation: flash-green-split 1.5s infinite ease-in-out !important;
}
.hidden-bonus-game {
	transition: opacity 0.5s ease-in-out !important;
	animation: flash-red-split 1.5s infinite ease-in-out !important;
}

@keyframes pulseBonusGame {
  0% {
	transform: scale(1);
	opacity: 1;
  }
  50% {
	transform: scale(1.2);
	opacity: 0.7;
  }
  100% {
	transform: scale(1);
	opacity: 1;
  }
}


@keyframes flash-dark-split {
  0% {
    background-color: #182232;
  }
  50% {
    background-color: #101624;
  }
  100% {
    background-color: #182232;
  }
}
