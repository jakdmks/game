function updateStatisticsDivs() {
	custCreditDiv.innerHTML = "CREDIT<BR />" + playerCredit.toFixed(0);
	custWinningsDiv.innerHTML = statistics.playerWinnings.toFixed(0);
	custTotalWinningsDiv.innerHTML = statistics.playerTotalWinnings.toFixed(0);
	houseBalanceDebugDiv.innerHTML = "House Balance: " + statistics.houseBalance + " Tokens";
	houseCashDebugDiv.innerHTML = "House Balance: " + (statistics.houseBalance / tokenRateToGBP).toFixed(2) + " GBP";
	custBalanceDebugDiv.innerHTML = "Cust' Balance: " + statistics.playerBalance + " Tokens";
	custCashDebugDiv.innerHTML = "Cust' Balance: " + (statistics.playerBalance / tokenRateToGBP).toFixed(2) + " GBP";
	
	winStreakDiv.innerHTML = "Win Streak: " + winStreak;
	boostAvailDiv.innerHTML = "Boost Available: " + boostAvailable;
	boostAppliedDiv.innerHTML = "Boost Applied: " + boostApplied;
	boostAppliedTypeDiv.innerHTML = "Boost Applied Type: " + boostAppliedType;
	boostLevelDiv.innerHTML = "Boost Level: " + boostLevel;
	boostPctDiv.innerHTML = "Boost Pct: " + (boostRate * 100).toFixed(0) + "%";
	boostInsuranceDiv.innerHTML = "Boost Insurance: " + boostInsurance;
	boostInsuranceMultiplierDiv.innerHTML = "Rate: " + boostInsuranceRate;
	
	payoutPctDiv.innerHTML = "Pair: " + (payoutRate * 100).toFixed(0) + "%" + (payoutBoost === true ? " <span style='color: #67c887;'><em>+" + (boostRate * 100).toFixed(0) + "%</em></span>" : "");
	insurancePctDiv.innerHTML = "Mix: " + (insuranceRate * 100).toFixed(0) + "%" + (insuranceBoost === true ? " <span style='color: #71aef8;'><em>+" + (boostRate * 100).toFixed(0) + "%</em></span>" : "");
	payoutMultiplierDiv.innerHTML = "Win Multiplier: " + payoutRate;
	insuranceMultiplierDiv.innerHTML = "Insurance Multiplier: " + insuranceRate;
	
	payoutBonusDiv.innerHTML = "Last Bet Return Bonus Rate:  " + (payoutBoostRate * 100).toFixed(0) + "%";
	insuranceBonusDiv.innerHTML = "Last Bet Insurance Bonus Rate: " + (insuranceBoostRate * 100).toFixed(0) + "%";
	
	//Player Credit Panel Colour (TODO: Re-implement this...)
	var playerCreditParentDiv = custCreditDiv.parentNode;
	if (playerCredit < 100) {
		playerCreditParentDiv.classList.remove("green");
		playerCreditParentDiv.classList.add("red");		
		creditButtonDiv.style.pointerEvents = "auto";
		creditButtonDiv.style.opacity = "1";
	} else {
		playerCreditParentDiv.classList.add("green");
		playerCreditParentDiv.classList.remove("red");
		creditButtonDiv.style.pointerEvents = "none";
		creditButtonDiv.style.opacity = "0.2";
	}
	
	//Convert Winnings to Credit 
	//convertWinningsToCreditButtonDiv
	if (statistics.playerWinnings > 0) {			
		convertWinningsToCreditButtonDiv.style.pointerEvents = "auto";
		convertWinningsToCreditButtonDiv.style.opacity = "1";
	} else {
		convertWinningsToCreditButtonDiv.style.pointerEvents = "none";
		convertWinningsToCreditButtonDiv.style.opacity = "0.2";
	}
	
	//Displaying Bonus Buttons - move to another function?
	//console.info("boostAvailable", boostAvailable);
	
	if (boostAvailable) {
		
		//console.info("######boostRate", boostRate);
		
		if (boostLevel >= 1) {
			boostGraphic1Span.classList.add("selected");
			payoutBoostIconsDiv.style.display = "inline-block";
			payoutBoostIcon1Div.style.display = "inline-block";
			payoutBoostPct1Div.innerHTML = "+" + ((boostBonusLevelOne - boostInsuranceRate) * 100).toFixed(0) + "%";
			
			if (insuranceRate > 0) {
				insuranceBoostIconsDiv.style.display = "inline-block";
				insuranceBoostIcon1Div.style.display = "inline-block";
				insuranceBoostPct1Div.innerHTML = "+" + ((boostBonusLevelOne - boostInsuranceRate) * 100).toFixed(0) + "%";
			} else {
				insuranceBoostIconsDiv.style.display = "none";
				insuranceBoostIcon1Div.style.display = "none";
			}
			
		}
		if (boostLevel >= 2) {
			boostGraphic2Span.classList.add("selected");
			payoutBoostIcon2Div.style.display = "inline-block";
			payoutBoostPct2Div.innerHTML = "+" + ((boostBonusLevelOne + boostBonusLevelTwoHop - boostInsuranceRate) * 100).toFixed(0) + "%";
			payoutBoostPct1Div.classList.add("strikethrough");
			
			if (insuranceRate > 0) {
				insuranceBoostIcon2Div.style.display = "inline-block";
				insuranceBoostPct2Div.innerHTML = "+" + ((boostBonusLevelOne + boostBonusLevelTwoHop - boostInsuranceRate) * 100).toFixed(0) + "%";
				insuranceBoostPct1Div.classList.add("strikethrough");
			} else {
				insuranceBoostIcon2Div.style.display = "none";
			}
		}
		if (boostLevel === 3) {
			boostGraphic3Span.classList.add("selected");
			payoutBoostIcon3Div.style.display = "inline-block";
			payoutBoostPct3Div.innerHTML = "+" + ((boostBonusLevelOne + boostBonusLevelTwoHop + boostBonusLevelThreeHop - boostInsuranceRate) * 100).toFixed(0) + "%";
			payoutBoostPct2Div.classList.add("strikethrough");
			
			if (insuranceRate > 0) {
				insuranceBoostIcon3Div.style.display = "inline-block";
				insuranceBoostPct3Div.innerHTML = "+" + ((boostBonusLevelOne + boostBonusLevelTwoHop + boostBonusLevelThreeHop - boostInsuranceRate) * 100).toFixed(0) + "%";
				insuranceBoostPct2Div.classList.add("strikethrough");
			} else {
				insuranceBoostIcon3Div.style.display = "none";
			}
		}
	} else {
		payoutBoostIconsDiv.style.display = "none";
		payoutBoostIcon1Div.style.display = "none";
		payoutBoostIcon2Div.style.display = "none";
		payoutBoostIcon3Div.style.display = "none";
		
		insuranceBoostIconsDiv.style.display = "none";
		insuranceBoostIcon1Div.style.display = "none";
		insuranceBoostIcon2Div.style.display = "none";
		insuranceBoostIcon3Div.style.display = "none";
		
		payoutBoostPct1Div.classList.remove("strikethrough");
		insuranceBoostPct1Div.classList.remove("strikethrough");
		payoutBoostPct2Div.classList.remove("strikethrough");
		insuranceBoostPct2Div.classList.remove("strikethrough");
		
		boostGraphic1Span.classList.remove("selected");
		boostGraphic2Span.classList.remove("selected");
		boostGraphic3Span.classList.remove("selected");
	}
	
	winStreakNumSpan.innerHTML = winStreak;
	
	if (boostLevel >= 3) {
		winStreakNumSpan.classList.add("red");
		winStreakNumSpan.classList.add("glowing");
		winStreakNumSpan.classList.remove("orange");
		winStreakNumSpan.classList.remove("yellow");
	} else if (boostLevel >= 2) {
		winStreakNumSpan.classList.remove("red");
		winStreakNumSpan.classList.add("orange");
		winStreakNumSpan.classList.add("glowing");
		winStreakNumSpan.classList.remove("yellow");
	} else if (boostLevel >= 1) {
		winStreakNumSpan.classList.remove("red");
		winStreakNumSpan.classList.remove("orange");
		winStreakNumSpan.classList.add("yellow");
		winStreakNumSpan.classList.add("glowing");
	} else {
		winStreakNumSpan.classList.remove("red", "glowing");
		winStreakNumSpan.classList.remove("orange", "glowing");
		winStreakNumSpan.classList.remove("yellow", "glowing");
	}
}

function updatePayoutSplit(newPayoutRate = 0, newInsuranceRate = 0, option="") {
	//console.info("Running updatePayoutSplit()");
	//console.info("newPayoutRate", newPayoutRate);
	//console.info("newInsuranceRate", newInsuranceRate);
	
	payoutSplitCode = option;
	//console.info("payoutSplitCode", payoutSplitCode);
	
	var totalPayoutCheck = -99;
	
	if (option === "SPLIT01") {
		totalPayoutCheck = 2.5;
		split01Div.classList.add("selected");
		split02Div.classList.remove("selected");
		split03Div.classList.remove("selected");
	} else if (option === "SPLIT02") {
		totalPayoutCheck = 2.4;
		split01Div.classList.remove("selected");
		split02Div.classList.add("selected");
		split03Div.classList.remove("selected");
	} else if (option === "SPLIT03") {
		totalPayoutCheck = 2.3;
		split01Div.classList.remove("selected");
		split02Div.classList.remove("selected");
		split03Div.classList.add("selected");
	}
	
	setPayoutSplitGlow();
	
	var check = parseFloat(totalPayoutCheck - newPayoutRate - newInsuranceRate);
	check = check.toFixed(2) * 1;
	
	//console.info("totalPayoutCheck", totalPayoutCheck);
	//console.info("newPayoutRate", newPayoutRate);
	//console.info("newInsuranceRate", newInsuranceRate);
	//console.info("Check", check);
	
	if (check === 0) {
		payoutRate = newPayoutRate;
		insuranceRate = newInsuranceRate;
	} else {
		payoutRate = 0;
		insuranceRate = 0;
	}
	//console.info("payoutRate", payoutRate);
	//console.info("insuranceRate", insuranceRate);
	
	applyBoost("both", false);
	updateStatisticsDivs();
}

function calculateBoost() {
	//console.info("Running calculateBoost()");
	
	boostAvailable = false;
	//boostApplied = false; //JW: Seems to be messing up with the payment-split bars
	boostLevel = 0;
	boostRate = 0;
	
	//FORCE WIN STREAK
	//winStreak = 99;
	//winStreak = 3;
	
	if (winStreak >= boostStreakLevelOne) {
		boostRate = boostBonusLevelOne - boostInsuranceRate;
		boostLevel = 1;
		boostAvailable = true;
		
		if (winStreak >= boostStreakLevelTwo) {
			boostRate = boostRate + boostBonusLevelTwoHop;
			boostLevel = 2;
		}
		
		if (winStreak >= boostStreakLevelThree) {
			boostRate = boostRate + boostBonusLevelThreeHop;
			boostLevel = 3;
		}
	} else {
		boostAvailable = false;
	}
	//console.info("boostRate", boostRate);
}

//TODO: Dom Loaded
var tokenRateToGBP = 1000;
var playerCredit = 0;
var payoutRate = 2;
var insuranceRate = 0.4;
var winStreak = 0;

//Boost
var boostAvailable = false;
var boostApplied = false;
var boostAppliedType = "";
var boostLevel = 0;
var boostRate = 0;
var boostInsurance = false;
var boostInsuranceRateAvailable = 0.2; //0.1
var boostInsuranceRate = 0;
var boostStreakLevelOne = 1;
var boostBonusLevelOne = 0.3; //0.2
var boostStreakLevelTwo = 2;
var boostBonusLevelTwoHop = 0.1;
var boostStreakLevelThree = 3;
var boostBonusLevelThreeHop = 0.1;

var payoutBoostRate = 0;
var insuranceBoostRate = 0;

var payoutSplitCode = "SPLIT02";

//Bag size (should be an even number)
var bagSize = 24;

var errors = [];

var payoutBoost = false;
var insuranceBoost = false;

//When did we last show the end of credit message?
var lastShowOverlayEndOfCreditBetId = 0;

var chartStake = 0;
var chartHouseValue = 0;
var chartPlayerValue = 0;

//TESTING
//boostStreakLevelOne = 0;
	
var statistics = {
	gamesPlayed: 0,
	tokenRateToGBP: 0,
	totalStake: 0,
	houseBalance: 0,
	houseBalanceGBP: 0,
	playerBalance: 0,
	playerBalanceGBP: 0,
	playerWinnings: 0,
	playerWinningsGBP: 0,
	playerCredit: 0,
	playerCreditGBP: 0,
	playerTotalWinnings: 0,
	playerTotalWinningsGBP: 0,
	
	houseHighestBalance: 0,
	houseLowestBalance: 0,
	
	houseHighestBalanceGame: 0,
	houseLowestBalanceGame: 0,
	
	houseBalancePer20Games: 0, // houseBalance / (gamesPlayed / 20)
	houseBalancePer20GamesGBP: 0,
	
	houseBalancePerGame: 0,
	houseBalancePerGameGBP: 0,
	
	
	audit: [] 
}

var chartData = [];
var lastPicks = [];

var custCreditDiv = document.getElementById("cust-credit");
var custWinningsDiv = document.getElementById("cust-winnings");
var custTotalWinningsDiv = document.getElementById("cust-total-winnings");
var houseBalanceDebugDiv = document.getElementById("house-balance-debug");
var houseCashDebugDiv = document.getElementById("house-cash-debug");
var custBalanceDebugDiv = document.getElementById("cust-balance-debug");
var custCashDebugDiv = document.getElementById("cust-cash-debug");

var winStreakDiv = document.getElementById("win-streak");
var boostAvailDiv = document.getElementById("boost-avail");
var boostAppliedDiv = document.getElementById("boost-applied");
var boostAppliedTypeDiv = document.getElementById("boost-applied-type");
var boostLevelDiv = document.getElementById("boost-level");
var boostPctDiv = document.getElementById("boost-pct");
var boostInsuranceDiv = document.getElementById("boost-insurance");
var boostInsuranceMultiplierDiv = document.getElementById("boost-insurance-multiplier");

var payoutPctDiv = document.getElementById("payout-pct");
var insurancePctDiv = document.getElementById("insurance-pct");
var payoutMultiplierDiv = document.getElementById("payout-multiplier");
var insuranceMultiplierDiv = document.getElementById("insurance-multiplier");

var payoutBonusDiv = document.getElementById("payout-bonus");
var insuranceBonusDiv = document.getElementById("insurance-bonus");

var payoutBoostIconsDiv = document.getElementById("payout-boost-icons");
var payoutBoostIcon1Div = document.getElementById("payout-boost-icon-1");
var payoutBoostIcon2Div = document.getElementById("payout-boost-icon-2");
var payoutBoostIcon3Div = document.getElementById("payout-boost-icon-3");

var insuranceBoostIconsDiv = document.getElementById("insurance-boost-icons");
var insuranceBoostIcon1Div = document.getElementById("insurance-boost-icon-1");
var insuranceBoostIcon2Div = document.getElementById("insurance-boost-icon-2");
var insuranceBoostIcon3Div = document.getElementById("insurance-boost-icon-3");

var colaInsuranceBonusSmallBtn = document.getElementById("cola-insurance-bonus-small-btn");
var colaPayoutBonusSmallBtn = document.getElementById("cola-payout-bonus-small-btn");
var colaInsuranceBonusLargeBtn = document.getElementById("cola-insurance-bonus-large-btn");
var colaPayoutBonusLargeBtn = document.getElementById("cola-payout-bonus-large-btn");

var colaPayoutBonusSmallDiv = document.getElementById("cola-payout-bonus-small");
var colaInsuranceBonusSmallDiv = document.getElementById("cola-insurance-bonus-small");
var colaPayoutBonusLargeDiv = document.getElementById("cola-payout-bonus-large");
var colaInsuranceBonusLargeDiv = document.getElementById("cola-insurance-bonus-large");

var boostGraphic1Span = document.getElementById("boost-graphic-1");
var boostGraphic2Span = document.getElementById("boost-graphic-2");
var boostGraphic3Span = document.getElementById("boost-graphic-3");

var winStreakNumSpan = document.getElementById("win-streak-num");
var winStreakTextSpan = document.getElementById("win-streak-text");

var errorContainerDiv = document.getElementById("error-container");
var errorContentDiv = document.getElementById("error-content");

var outcomeImages = document.getElementById("outcome-images");
var sweetImage1Div = document.getElementById("sweet-image1");
var sweetImage2Div = document.getElementById("sweet-image2");

var payoutBoostPct1Div = document.getElementById("payout-boost-pct-1");
var payoutBoostPct2Div = document.getElementById("payout-boost-pct-2");
var payoutBoostPct3Div = document.getElementById("payout-boost-pct-3");
var insuranceBoostPct1Div = document.getElementById("insurance-boost-pct-1");
var insuranceBoostPct2Div = document.getElementById("insurance-boost-pct-2");
var insuranceBoostPct3Div = document.getElementById("insurance-boost-pct-3");

var creditButtonDiv = document.getElementById("credit-button");
var convertWinningsToCreditButtonDiv = document.getElementById("convert-winnings-to-credit-button");

var split01Div = document.getElementById("payout-split-bar-250-0");
var split02Div = document.getElementById("payout-split-bar-200-50");
var split03Div = document.getElementById("payout-split-bar-150-100");

var flyingPointsDiv = document.getElementById("flying-points");

updatePayoutSplit(2, 0.4, "SPLIT02"); //2, 0.5
insuranceSwitch(false);
calculateBoost();
updateStatisticsDivs();

var betId = 0;

function addCredit(credit=0) {

	//Add Credit
	playerCredit = (playerCredit * 1) + (credit * 1);
	
	//Maybe move this above?
	chartData = [];
	chartStake = playerCredit;
	//console.info("SETTING CHART STAKE TO", chartStake);
	
	chartHouseValue = 0;
	chartPlayerValue = chartStake;
	
	//Update playerCredit in statistics...
	statistics.playerCredit = playerCredit;
	
	//Setup Messages
	var creditErrors = [];
	creditErrors.push("Added " + credit.toFixed(0) + " Tokens...");
	
	displayErrors(errorContainerDiv, errorContentDiv, "DEPOSIT SUCCESS!", creditErrors, 3000, "green-error");
	
	updateStatisticsDivs();
	return playerCredit;
}

function convertWinnings() {

	var additionalCredit = statistics.playerWinnings;

	playerCredit = playerCredit + additionalCredit;
	//console.info("increased playerCredit by ", additionalCredit);
	
	chartData = [];
	chartStake = playerCredit;
	chartHouseValue = 0;
	chartPlayerValue = chartStake;
	//console.info("SETTING CHART STAKE TO...", chartStake);
	
	statistics.playerWinnings = 0;
	//console.info("Reset playerWinnings to ", statistics.playerWinnings);
	
	//Update playerWinnings and playerCredit...
	statistics.playerWinnings = 0;
	statistics.playerWinningsGBP = 0;
	statistics.playerCredit = playerCredit;
	statistics.playerCreditGBP = playerCredit / tokenRateToGBP;
	
	chartPlayerValue = playerCredit;
	
	//Setup Messages
	var convertErrors = [];
	convertErrors.push("Converted " + additionalCredit.toFixed(0) + " Tokens to Credits...");
	
	displayErrors(errorContainerDiv, errorContentDiv, "TRANSFER SUCCESS!", convertErrors, 3000, "green-error");
	
	updateStatisticsDivs();
	
	return statistics.playerWinnings;
}

function displayErrors(containerDiv, contentDiv, errorHeaderText, errorMessages, displayForMS, className="") {

	//console.info("Running displayErrors...");
	//console.info("errorHeaderText", errorHeaderText);
	//console.info("errorMessages", errorMessages);
	//console.info("displayForMS", displayForMS);
	
	//console.info("***className: " + className);
	
	//Add class if one is specified...
	if (className) {
		contentDiv.className = "";
		//console.info("adding class", className);
		contentDiv.classList.add(className);
	}

	//Set HTML for Header
	contentDiv.innerHTML = "<h1>" + errorHeaderText + "</h1>";
	
	//Set HTML for Messages
	if (errorMessages.length > 0) {
		for (var i = 0; i < errorMessages.length; i++) {
			var errorText = errorMessages[i];
			
			contentDiv.innerHTML = contentDiv.innerHTML + "<div>" + errorText.toUpperCase() + "</div>";
		}
	}
	
	//Display Container
	containerDiv.style.display = "flex";
	
	var tempTimeout = setTimeout(() => {
		containerDiv.style.display = "none";
	}, displayForMS);
	
}

function insuranceSwitch(checked=true) {
	//We always want to let them switch it on... but only off if the winstreak is 0
	if (((winStreak === 0 || winStreak === 1) && !checked) || checked) {
		boostInsurance = checked;
		boostInsuranceRate = boostInsurance ? boostInsuranceRate = boostInsuranceRateAvailable : 0;
		calculateBoost();
		updateStatisticsDivs();
		applyBoost(boostAppliedType, boostApplied);
	} else {
		//console.info("Not allowed...");
		//Forcing the box back to old state...
		var boostInsuranceCheckbox = document.getElementById("boost-insurance-checkbox");
		boostInsuranceCheckbox.checked = !checked;
		
		//Display Error to user
		var insuranceSwitchErrors = [];
		insuranceSwitchErrors.push("Locked at level 2 and above. Non-bet pair resets...");
		
		displayErrors(errorContainerDiv, errorContentDiv, "ATTENTION!", insuranceSwitchErrors, 3000, "red-error");		
	}
}

function applyBoost(type="", outcome=false) {

	var payoutSplitBar250GreenBoostDiv = document.getElementById("payout-split-bar-250-0-green-boost");
	var payoutSplitBar250RedBoostDiv = document.getElementById("payout-split-bar-250-0-red-boost");
	var payoutSplitBar200GreenBoostDiv = document.getElementById("payout-split-bar-200-50-green-boost");
	var payoutSplitBar200RedBoostDiv = document.getElementById("payout-split-bar-200-50-red-boost");
	var payoutSplitBar150GreenBoostDiv = document.getElementById("payout-split-bar-150-100-green-boost");
	var payoutSplitBar150RedBoostDiv = document.getElementById("payout-split-bar-150-100-red-boost");

	if (type === "payout") {
		//console.info("BOOSTING PAYOUT TO", boostRate);
		payoutBoost = outcome;
		boostApplied = true;
		boostAppliedType = "payout";
		insuranceBoost = false;
		
		payoutSplitBar250GreenBoostDiv.style.width = ((((boostRate * 100) / 300) * 100) + 1).toFixed(0) + "%";
		payoutSplitBar200GreenBoostDiv.style.width = (((boostRate * 100) / 290) * 100).toFixed(0) + "%";
		payoutSplitBar150GreenBoostDiv.style.width = (((boostRate * 100) / 280) * 100).toFixed(0) + "%";
		payoutSplitBar250RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar200RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar150RedBoostDiv.style.width = 0 + "%";
		
		//Display Message
		/*
		var boostErrors = [];
		boostErrors.push("Boosted pair payout by " + (boostRate * 100).toFixed(0) + "%");
		
		displayErrors(errorContainerDiv, errorContentDiv, "BOOST!", boostErrors, 3000, "green-error");
		*/
		
		//Update playerCredit in statistics...
		statistics.playerCredit = playerCredit;
		
	} else if (type === "insurance") {
		//console.info("BOOSTING INSURANCE TO", boostRate);
		boostApplied = true;
		boostAppliedType = "insurance";
		payoutBoost = false;
		insuranceBoost = outcome;
		
		payoutSplitBar250GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar200GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar150GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar250RedBoostDiv.style.width = (((boostRate * 100) / 300) * 100).toFixed(0) + "%";
		payoutSplitBar200RedBoostDiv.style.width = (((boostRate * 100) / 290) * 100).toFixed(0) + "%";
		payoutSplitBar150RedBoostDiv.style.width = (((boostRate * 100) / 280) * 100).toFixed(0) + "%";
		
		//Display Message
		/*
		var boostErrors = [];
		boostErrors.push("Boosted mix insurance by " + (boostRate * 100).toFixed(0) + "%");
		
		displayErrors(errorContainerDiv, errorContentDiv, "BOOST!", boostErrors, 3000, "green-error");
		*/
		
		//Update playerCredit in statistics...
		statistics.playerCredit = playerCredit;
		
		
	} else if (type === "both" && outcome === false) {
		boostApplied = false;
		boostAppliedType = "";
		payoutBoost = outcome;
		insuranceBoost = outcome;
		
		var boostPayoutDivLocal = document.getElementById("boost-payout");
		var insurancePayoutDivLocal = document.getElementById("insurance-payout");
		boostPayoutDivLocal.checked = false;
		insurancePayoutDivLocal.checked = false;
		
		payoutSplitBar250RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar200RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar150RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar250GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar200GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar150GreenBoostDiv.style.width = 0 + "%";
	} else {
		payoutSplitBar250RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar200RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar150RedBoostDiv.style.width = 0 + "%";
		payoutSplitBar250GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar200GreenBoostDiv.style.width = 0 + "%";
		payoutSplitBar150GreenBoostDiv.style.width = 0 + "%";
	}
	
	
	//HERE do the glowing bits?
	setPayoutSplitGlow();
	updateStatisticsDivs();
}

function pickSweets(stake=1, bet=0/*, payoutBoost=false, insuranceBoost=false*/) {

	//Clear Errors
	clearErrors(errorContainerDiv, errorContentDiv);
	
	//Populate Default Chart Data
	if (chartData.length === 0) {
		chartData.push({
			"Game": 0,
			"House": 0,
			"Player": playerCredit
		});
	}

	//console.info("stake", stake);
	//console.info("bet", bet);
	//console.info("payoutBoost", payoutBoost);
	//console.info("insuranceRate", insuranceRate);
	//console.info("insuranceBoost", insuranceBoost);
	
	var payout = 0;
	var housePayout = 0;
	var outcome = "";
	
	if (payoutBoost && !insuranceBoost) {
		payoutBoostRate = boostRate;
		insuranceBoostRate = 0;
	} else if (!payoutBoost && insuranceBoost) {
		payoutBoostRate = 0;
		insuranceBoostRate = boostRate;
	} else {
		payoutBoostRate = 0;
		insuranceBoostRate = 0;
	}
	
	var stakeDiv = document.getElementById("stake");
	var betDiv = document.getElementById("bet");			
	var resultDiv = document.getElementById("result");
	var payoutDiv = document.getElementById("payout");
	var resultDescriptionDiv = document.getElementById("result-description");

	if ((bet === "Cola" || bet === "Cherry") && stake !== 0 && (playerCredit - stake >= 0))
	{
		resultDiv.style.display = "none";
		resultDiv.innerHTML = "";
		resultDiv.classList.remove("win");
		resultDiv.classList.remove("lose");
		resultDiv.classList.remove("insurance");
		
		resultDescriptionDiv.style.display = "none";	
		resultDescriptionDiv.innerHTML = "";
		resultDescriptionDiv.classList.remove("win");
		resultDescriptionDiv.classList.remove("lose");
		resultDescriptionDiv.classList.remove("insurance");
		
		payoutDiv.style.display = "none";
		payoutDiv.innerHTML = "";
		payoutDiv.classList.remove("win");
		payoutDiv.classList.remove("lose");
		payoutDiv.classList.remove("insurance");
		
		stakeDiv.style.display = "none";
		stakeDiv.innerHTML = "";
		betDiv.style.display = "none";
		betDiv.innerHTML = "";
		
		flyingPointsDiv.style.display = "none";
		flyingPointsDiv.innerHTML = "";
		
		outcomeImages.style.visibility = "hidden"
		
		var delayInMs = 700; //1500 Default (1.5s) seems good...
		
		//TODO: At the start of the timer, add a "Betting" overlay...
		
		showOverlay();
		document.body.classList.add("blocked");
		
		var tempTimeout = setTimeout(() => {
		
			stakeDiv.style.display = "flex";
			stakeDiv.innerHTML = "Stake: " + stake;
			
			betDiv.style.display = "flex";
			betDiv.innerHTML = "Bet: " + bet;
			
			flyingPointsDiv.style.display = "flex";
		
			hideOverlay();
		
			//Start of Delay...
			betId++;
		
			playerCredit = playerCredit - stake;
			//console.info("Updating player credit", playerCredit);
		
			//playerCredit = playerCredit - stake;
			custCreditDiv.innerHTML = "Credit: " + playerCredit.toFixed(0) + " Tokens";
		
			//Consider how to randomize (or not randomize) the sweets going in. Pattern may be important
			//Do we make the names even more similar so people maybe think they've won for a sec when they haven't?
			var sweets = [];
			
			for (var i = 0; i < bagSize; i++) {
				if (((i+1) % 2) != 0) {
					sweets.push("Cola");
				} else {
					sweets.push("Cherry");
				}
			}
			
			//Pick first sweet
			var pickIndex1 = Math.floor(Math.random() * sweets.length);
			var pickElement1 = sweets[pickIndex1];
			
			//Remove first sweet
			sweets.splice(pickIndex1, 1);
			
			//Pick first sweet
			var pickIndex2 = Math.floor(Math.random() * sweets.length);
			var pickElement2 = sweets[pickIndex2];
			
			//Remove second sweet
			sweets.splice(pickIndex1, 1);
			
			//pickedSweets object
			var pickedSweets = {
				"Sweet1": pickElement1,
				"Sweet2": pickElement2
			}
			
			//FORCE CHERRY
			/*
			var pickedSweets = {
				"Sweet1": "Cherry",
				"Sweet2": "Cherry"
			};
			*/
			
			//FORCE COLA
			/*
			var pickedSweets = {
				"Sweet1": "Cola",
				"Sweet2": "Cola"
			};
			*/
			
			//FORCE MIXED
			/*
			var pickedSweets = {
				"Sweet1": "Cherry",
				"Sweet2": "Cola"
			};
			*/
			
			//FORCE CORRECT
			/*
			var pickedSweets = {
				"Sweet1": bet,
				"Sweet2": bet
			}
			*/
			
			renderSweets(pickedSweets.Sweet1, pickedSweets.Sweet2);
			
			//TODO: Try: 2 and 0 (with the option for the person to change to 1.5 / 0.5 or whatever slider they fancy?)
			//TODO: Try: 2.0 and 0.1 to 0.2
			//TODO: Just give them 2.2 in total to play with, they can split it how they want (within reason... win must be higher than insurance)
			//TODO: Have I misunderstood... it's fine if the customer balance is higher than the house balance because they put ALL the money in...
			//TODO: ...the problem is when the house balance drops below 0
			
			if (pickedSweets.Sweet1 === pickedSweets.Sweet2) {
				//console.info("Matching");
				if (pickedSweets.Sweet1 === bet) {
					outcome = "win";
					payout = stake * (payoutRate + payoutBoostRate), 2;
					housePayout = stake - payout, 2;
					winStreak++;
					//console.info("Bet wins!");
					//console.info("payoutRate", payoutRate);
					//console.info("payout", payout);
					
					resultDiv.classList.add("win");
					resultDiv.style.display = "flex";
					resultDiv.innerHTML = "WIN!";
					
					resultDescriptionDiv.classList.add("win");
					resultDescriptionDiv.style.display = "block";
					resultDescriptionDiv.innerHTML = "You backed " + bet + ". Picked sweets were both " + pickedSweets.Sweet1 + ". Therefore you won " + payout.toFixed(0) + " Tokens this time.";
					
					payoutDiv.classList.add("win");
					payoutDiv.style.display = "flex";
					payoutDiv.innerHTML = "+" + payout.toFixed(0) + " TOKENS";
					
					var stakeBasedChunkSize = 0;
					if (stake === 100) {
						stakeBasedChunkSize = 25;
					} else if (stake === 500) {
						stakeBasedChunkSize = 100;
					}
					
					//Animate Points
					animatePoints(stake, payoutRate, stakeBasedChunkSize, "green", "", "payout");
					animatePoints(stake, payoutBoostRate, stakeBasedChunkSize, (boostLevel == 1 ? "white" : boostLevel == 2 ? "white" : boostLevel == 3 ? "white" : "white"), (boostLevel == 1 ? "glow-points-yellow" : boostLevel == 2 ? "glow-points-orange" : boostLevel == 3 ? "glow-points-red" : ""), "payout");
					
				} else {
					outcome = "loss";
					housePayout = stake;
					winStreak = 0;
					//console.info("Bet loses.");
					//console.info("payoutRate", payoutRate);
					//console.info("payout", payout);
					
					resultDiv.classList.add("lose");
					resultDiv.style.display = "flex";
					resultDiv.innerHTML = "LOSS";
					
					resultDescriptionDiv.classList.add("lose");
					resultDescriptionDiv.style.display = "block";
					resultDescriptionDiv.innerHTML = "You backed " + bet + ". Picked sweets were both " + pickedSweets.Sweet1 + ". Therefore you didn't win any tokens this time.";
					
					payoutDiv.classList.add("lose");
					payoutDiv.style.display = "flex";
					payoutDiv.innerHTML = "+" + payout.toFixed(0) + " TOKENS";
				}
			} else {	
					//We don't even display this as a loss... even if they don't have insurance... perhaps they should have done.
					outcome = "insurance";
					payout = stake * (insuranceRate + insuranceBoostRate), 2;
					housePayout = stake - payout, 2;
					winStreak = boostInsurance ? winStreak : 0;
					//console.info("Bet loses.");
					//console.info("insuranceRate", insuranceRate);
					//console.info("payout", payout);
					
					resultDiv.classList.add("insurance");
					resultDiv.style.display = "flex";
					resultDiv.innerHTML = insuranceRate != 0 ? "MIX" : "MIX*";
					
					resultDescriptionDiv.classList.add("insurance");
					resultDescriptionDiv.style.display = "block";
					resultDescriptionDiv.innerHTML = insuranceRate != 0 ? "You backed " + bet + ". Picked sweets were mixed, so mix-insurance paid out " + payout.toFixed(0) + " Tokens." : "You backed " + bet + ". Picked sweets were mixed. Whilst insurance would have paid here, there was no cover included in the selected payout split.";
					
					payoutDiv.classList.add("insurance");
					payoutDiv.style.display = "flex";
					payoutDiv.innerHTML = "+" + payout.toFixed(0) + " TOKENS";
					
					var stakeBasedChunkSize = 0;
					if (stake === 100) {
						stakeBasedChunkSize = 10;
					} else if (stake === 500) {
						stakeBasedChunkSize = 50;
					}
					
					//Animate Points
					animatePoints(stake, insuranceRate, stakeBasedChunkSize, "cyan", "", "insurance");
					animatePoints(stake, insuranceBoostRate, stakeBasedChunkSize, (boostLevel == 1 ? "white" : boostLevel == 2 ? "white" : boostLevel == 3 ? "white" : "white"), (boostLevel == 1 ? "glow-points-white" : boostLevel == 2 ? "glow-points-yellow" : boostLevel == 3 ? "glow-points-green" : ""), "insurance");
			}
			
			//Statistics
			var auditObject = {
				"id": betId,
				"bet": bet,
				"stake": stake,
				"payoutRate": payoutRate,
				"payoutBoostRate": payoutBoostRate,
				"insuranceRate": insuranceRate,
				"insuranceBoostRate": insuranceBoostRate,
				"pickedSweets": pickedSweets,
				"outcome": outcome,
				"payout": payout,
				"housePayout": housePayout,
				"boostInsurance": boostInsurance
			}
			
			statistics.audit.push(auditObject);
			
			//Statistics
			statistics.gamesPlayed++;
			statistics.tokenRateToGBP = tokenRateToGBP;
			statistics.totalStake = statistics.totalStake  + stake;
			statistics.houseBalance = statistics.houseBalance + housePayout;
			statistics.houseBalanceGBP = statistics.houseBalance / tokenRateToGBP;
			statistics.playerBalance = statistics.playerBalance + payout - stake;
			statistics.playerBalanceGBP = statistics.playerBalance / tokenRateToGBP;
			statistics.playerWinnings = statistics.playerWinnings + payout;
			statistics.playerWinningsGBP = statistics.playerWinnings / tokenRateToGBP;
			statistics.playerCredit = playerCredit;
			statistics.playerCreditGBP = playerCredit / tokenRateToGBP;
			statistics.playerTotalWinnings = statistics.playerTotalWinnings + payout;
			statistics.playerTotalWinningsGBP = statistics.playerTotalWinnings / tokenRateToGBP;
			
			//Highest/Lowest Point
			statistics.houseHighestBalanceGame = statistics.houseBalance > 0 && statistics.houseBalance > statistics.houseHighestBalance ? statistics.gamesPlayed : statistics.houseHighestBalanceGame;
			statistics.houseLowestBalanceGame = statistics.houseBalance < 0 && statistics.houseBalance < statistics.houseLowestBalance ? statistics.gamesPlayed : statistics.houseLowestBalanceGame;
			
			//Highest/Lowest Value
			statistics.houseHighestBalance = statistics.houseBalance > 0 && statistics.houseBalance * 1 > statistics.houseHighestBalance * 1 ? statistics.houseBalance : statistics.houseHighestBalance;
			statistics.houseLowestBalance = statistics.houseBalance < 0 && statistics.houseBalance * 1 < statistics.houseLowestBalance * 1 ? statistics.houseBalance : statistics.houseLowestBalance;
			
			// houseBalance / (gamesPlayed / 20)
			statistics.houseBalancePer20Games = statistics.houseBalance / (statistics.gamesPlayed / 20); // houseBalance / (gamesPlayed / 20)
			statistics.houseBalancePer20GamesGBP = statistics.houseBalancePer20Games / tokenRateToGBP;
			
			
			statistics.houseBalancePerGame = statistics.houseBalance / statistics.gamesPlayed;
			statistics.houseBalancePerGameGBP = statistics.houseBalance / statistics.gamesPlayed / tokenRateToGBP;
			
			
			//Chart Data Array
			chartHouseValue = chartHouseValue + stake - payout;
			//console.info("chartHouseValue", chartHouseValue);
			
			chartPlayerValue = chartPlayerValue - stake + payout;
			//console.info("chartPlayerValue", chartPlayerValue);
			
			chartData.push({
				"Game": statistics.gamesPlayed,
				"House": chartHouseValue,
				"Player": chartPlayerValue
			});
			
			//Last picks Array
			var lastPicksMaxSize = 7;
			var lastPickRecord = JSON.parse(JSON.stringify(pickedSweets));
			lastPickRecord.Outcome = outcome;
			
			if (lastPicks.length >= lastPicksMaxSize) {
				lastPicks.shift();
			}
			lastPicks.push(lastPickRecord);
			
			//Console output
			//console.info("auditObject", auditObject);
			//console.info("statistics", statistics);
			//console.info("lastPicks", lastPicks);
			
			//Cheeky - unselect their boost each time...
			applyBoost("both", false);
			
			calculateBoost();
			updateStatisticsDivs();
			renderLastPicks();
			
			document.body.classList.remove("blocked");
			
			return pickedSweets;
			//End of Delay
		}, delayInMs);
	} else {
	
		//End of game stats overlay...
		//console.info("playerCredit", playerCredit);
		//console.info("statistics.gamesPlayed", statistics.gamesPlayed);
		//console.info("lastShowOverlayEndOfCreditBetId", lastShowOverlayEndOfCreditBetId);
		//console.info("betId", betId);
		
		if (playerCredit - stake <= 0 && statistics.gamesPlayed > 0) {
			showOverlayEndOfCredit();
		}
		
		var pickSweetsErrors = [];
		
		if (bet !== "Cola" && bet !== "Cherry") {
			pickSweetsErrors.push("Invalid bet, option must be 'Cola' or 'Cherry'...");
		}
		
		if (stake === 0) {
			pickSweetsErrors.push("No stake provided with bet...");
		}
		
		if (playerCredit - stake < 0) {
			pickSweetsErrors.push("Insufficient Credit! Please add more to play or choose a lower stake...");
		}
		
		displayErrors(errorContainerDiv, errorContentDiv, "ATTENTION!", pickSweetsErrors, 3000, "red-error");
		return false;
	}
}

function renderLastPicks() {
	const container = document.getElementById("last-picks-display");
	
	container.innerHTML = ""; // Clear previous content
	
	//Reverse the array before rendering
	//var reversedPicks = [...lastPicks].reverse();
	
	lastPicks.forEach((pick, index) => {
		const isLast = index === lastPicks.length - 1; // Check if it's the last pick
		const isFirst = index === 0; //Check if it's the first pick
		
		//console.info("isFirst", isFirst);
		//console.info("isLast", isLast);
		
		if (!isLast) {
			// Previous Sweets
			const entry = document.createElement("div");
			entry.classList.add("last-picks-entry");

			const sweet1 = document.createElement("span");
			sweet1.classList.add(`last-picks-${pick.Sweet1.toLowerCase()}`);

			const sweet2 = document.createElement("span");
			sweet2.classList.add(`last-picks-${pick.Sweet2.toLowerCase()}`);

			// Add outcome-based class to apply highlighting
			if (pick.Outcome === "win") {
				entry.classList.add("last-picks-win");
			} else if (pick.Outcome === "loss") {
				entry.classList.add("last-picks-loss");
			} else if (pick.Outcome === "insurance") {
				entry.classList.add("last-picks-insurance");
			}

			entry.append(sweet1);
			entry.append(sweet2);
			container.appendChild(entry);
		} else if (isLast) {
			// Latest Pick (Last Element)
			const containerLatest = document.getElementById("last-picks-display-latest");
			containerLatest.innerHTML = ""; // Clear previous content

			const entryLatest = document.createElement("div");
			entryLatest.classList.add("last-picks-entry", "latest");

			const sweet1 = document.createElement("span");
			sweet1.classList.add(`last-picks-${pick.Sweet1.toLowerCase()}`);

			const sweet2 = document.createElement("span");
			sweet2.classList.add(`last-picks-${pick.Sweet2.toLowerCase()}`);

			// Add outcome-based class to apply highlighting
			if (pick.Outcome === "win") {
				entryLatest.classList.add("last-picks-win");
			} else if (pick.Outcome === "loss") {
				entryLatest.classList.add("last-picks-loss");
			} else if (pick.Outcome === "insurance") {
				entryLatest.classList.add("last-picks-insurance");
			}

			sweet1.classList.add("latest-entry");
			sweet2.classList.add("latest-entry");

			entryLatest.appendChild(sweet1);
			entryLatest.appendChild(sweet2);
			containerLatest.appendChild(entryLatest);
		}
	});

}

function renderSweets(sweet1="", sweet2="") {
	if ((sweet1 === "Cherry" || sweet1 === "Cola") && (sweet2 === "Cherry" || sweet2 === "Cola")) {
		outcomeImages.style.visibility = "visible"
		
		var additionalMarginSweet1 = -5;
		if (sweet1 === "Cola") {
			additionalMarginSweet1 = additionalMarginSweet1 + 10;
		}
		
		var additionalMarginSweet2 = 10;
		if (sweet2 === "Cola") {
			additionalMarginSweet2 = additionalMarginSweet2 + 10;
		}
		
		sweetImage1Div.innerHTML = "<div class='sweet-image' style='display: block; margin-left: " + additionalMarginSweet1 + "px' id='sweet-image1-image'><img src='images/" + sweet1.toLowerCase() + ".png' alt='" + sweet1.toLowerCase() + " Icon' height='100px'></div>";
		sweetImage2Div.innerHTML = "<div class='sweet-image' style='display: block; margin-left: " + additionalMarginSweet2 + "px' id='sweet-image2-image'><img src='images/" + sweet2.toLowerCase() + ".png' alt='" + sweet2.toLowerCase() + " Icon' height='100px'></div>";
	}
}

function clearErrors(containerDiv=null, contentDiv=null) {
	//console.info("Running clearErrors");
	//errors = [];
	contentDiv.innerHTML = "";
	containerDiv.style.display = "none";
}

function renderJson(jsonData, displayContainerId) {
	var displayContainer = document.getElementById(displayContainerId);
	displayContainer.innerHTML = "";
	
	Object.entries(jsonData).forEach(([key, value]) => {
		var item = document.createElement("div");
		item.className = "json-item";
		
		var propKey = document.createElement("div");
		propKey.innerHTML = key;
		propKey.className = "json-item-cell key";
		item.appendChild(propKey);
		
		var propValue = document.createElement("div");
		propValue.innerHTML = value;
		propValue.className = "json-item-cell value";
		item.appendChild(propValue);
		
		displayContainer.appendChild(item);
	});
}

function showOverlayEndOfCredit() {
	
	document.body.classList.add("blocked-scroll");
	
	var overlayStatistics = JSON.parse(JSON.stringify(statistics));
	//console.info("overlayStatistics", overlayStatistics);
	
	delete overlayStatistics.audit;
	//console.info("overlayStatistics", overlayStatistics);
	
	overlayStatistics.gamesPlayed = overlayStatistics.gamesPlayed.toFixed(0);
	overlayStatistics.totalStake = overlayStatistics.totalStake.toFixed(0);
	overlayStatistics.houseBalance = overlayStatistics.houseBalance.toFixed(0);
	overlayStatistics.houseBalanceGBP = overlayStatistics.houseBalanceGBP.toFixed(2);
	overlayStatistics.playerBalance = overlayStatistics.playerBalance.toFixed(0);
	overlayStatistics.playerBalanceGBP = overlayStatistics.playerBalanceGBP.toFixed(2);
	overlayStatistics.playerWinnings = overlayStatistics.playerWinnings.toFixed(0);
	overlayStatistics.playerWinningsGBP = overlayStatistics.playerWinningsGBP.toFixed(2);
	overlayStatistics.playerCredit = overlayStatistics.playerCredit.toFixed(0);
	overlayStatistics.playerCreditGBP = overlayStatistics.playerCreditGBP.toFixed(2);
	overlayStatistics.playerTotalWinnings = overlayStatistics.playerTotalWinnings.toFixed(0);
	overlayStatistics.playerTotalWinningsGBP = overlayStatistics.playerTotalWinningsGBP.toFixed(2);
	overlayStatistics.houseHighestBalance = overlayStatistics.houseHighestBalance.toFixed(0);
	overlayStatistics.houseLowestBalance = overlayStatistics.houseLowestBalance.toFixed(0);
	overlayStatistics.houseHighestBalanceGame = overlayStatistics.houseHighestBalanceGame.toFixed(0);
	overlayStatistics.houseLowestBalanceGame = overlayStatistics.houseLowestBalanceGame.toFixed(0);
	overlayStatistics.houseBalancePer20Games = overlayStatistics.houseBalancePer20Games.toFixed(0);
	overlayStatistics.houseBalancePer20GamesGBP = overlayStatistics.houseBalancePer20GamesGBP.toFixed(2);
	overlayStatistics.houseBalancePerGame = overlayStatistics.houseBalancePerGame.toFixed(0);
	overlayStatistics.houseBalancePerGameGBP = overlayStatistics.houseBalancePerGameGBP.toFixed(2);
	
	renderJson(overlayStatistics, "overlay-end-of-credit-content");
	
	var overlayEndOfCredit = document.getElementById("overlay-end-of-credit");
	overlayEndOfCredit.style.visibility = "visible";
}

function hideOverlayEndOfCredit() {
	//console.info("Running hideOverlayEndOfCredit()");
	
	document.body.classList.remove("blocked-scroll");
	
	var overlayEndOfCredit = document.getElementById("overlay-end-of-credit");
	overlayEndOfCredit.style.visibility = "hidden";
}

function showOverlayChart() {
	
	document.body.classList.add("blocked-scroll");
	
	hideOverlayEndOfCredit()
	//console.info("chartData", chartData);
	drawChart(chartData);
	
	var overlayChart = document.getElementById("overlay-chart");
	overlayChart.style.visibility = "visible";
}

function hideOverlayChart() {
	//console.info("Running hideOverlayChart()");
	
	document.body.classList.remove("blocked-scroll");
	
	var overlayChart = document.getElementById("overlay-chart");
	overlayChart.style.visibility = "hidden";
}

function showOverlay() {
	//console.info("Running showOverlay()");
	
	var overlay = document.getElementById("overlay");
	var imagesContainer = document.getElementById("overlay-images");
	var images = ["images/cherry.png", "images/cola.png"];
	//var totalInstances = bagSize;
	var totalInstances = 4;
	var iteration = 0;
	
	// Clear any existing images (if this is called multiple times)
	imagesContainer.innerHTML = "";
	
	// Create and append the image elements dynamically
	for (let i = 0; i < totalInstances; i++) {
		var img = document.createElement("img");
		img.src = images[i % images.length]; // Alternate between image1 and image2
		img.className = "overlay-image";
		imagesContainer.appendChild(img);
	}

	// Show the overlay
	overlay.style.visibility = "visible";
	
	// Start the image update loop
	var intervalId = setInterval(() => {
		var imgElements = document.querySelectorAll(".overlay-image");
		imgElements.forEach((img, index) => {
			// Alternate images based on the iteration
			var newIndex = (iteration + index) % images.length;
			img.src = images[newIndex];
		});
		iteration++;
	}, 150);

	// Save the interval ID so we can clear it when hiding the overlay
	overlay.dataset.intervalId = intervalId;
}

function hideOverlay() {
	//console.info("Running hideOverlay()");
	
	var overlay = document.getElementById("overlay");
	overlay.style.visibility = "hidden";
	
	// Clear the interval for image updates
	var intervalId = overlay.dataset.intervalId;
	if (intervalId) {
		clearInterval(intervalId);
		delete overlay.dataset.intervalId;
	}
}

function copyDivContent(originalId, newParentId) {
	// Get the original div by its ID
	const originalDiv = document.getElementById(originalId);
	if (!originalDiv) {
		console.error("Original div not found!");
		return;
	}

	// Clone the original div, including all child nodes
	const clonedDiv = originalDiv.cloneNode(true);

	// Generate a new ID for the cloned div to prevent duplication of IDs
	clonedDiv.id = originalId + "-clone"; // You can customize the new ID pattern

	// Get the new parent element where the cloned div will be placed
	const newParent = document.getElementById(newParentId);
	if (!newParent) {
		console.error("New parent div not found!");
		return;
	}
	
	// Clear existing content
	newParent.innerHTML = "";

	// Append the cloned div to the new parent
	newParent.appendChild(clonedDiv);
}

function createFlyingText(content, textColor, className="") {
	const container = document.querySelector(".flying-text-container");
	const flyingText = document.createElement("div");
	flyingText.classList.add("flying-text");
	
	if (className) {
		flyingText.classList.add(className);
	}
	
	flyingText.innerHTML = content;
	flyingText.style.color = textColor;

	// Randomize the X and Y direction for the flying text
	const randomX = (Math.random() - 0.5) * 300; // Random X direction (further distance)
	const randomY = (Math.random() - 0.5) * 300; // Random Y direction (further distance)

	// Set the random values to CSS custom properties for animation
	flyingText.style.setProperty("--x", `${randomX}px`);
	flyingText.style.setProperty("--y", `${randomY}px`);

	// Append the flying text to the container
	container.appendChild(flyingText);

	// Remove the element after animation ends
	flyingText.addEventListener("animationend", () => {
		flyingText.remove();
	});
}

function animatePoints(stake, rate, splitPointsAt, textColor, className="", boostType="") {

	//Animate Points
	var tempPayout = stake * rate;
	if (tempPayout > 0) {
		
		var tempPayoutChunks = ((tempPayout / splitPointsAt).toFixed(0) * 1);
		//console.info(">> tempPayoutChunks", tempPayoutChunks);
		
		for (var i = 0; i < tempPayoutChunks; i++) {
			createFlyingText("+" + splitPointsAt.toFixed(0), textColor, className);
		}
		
		//Render Icons too if boostType is set
		for (var i = 0; i < tempPayoutChunks; i++) {
			if (boostType === "payout" && payoutBoostRate > 0) {
				createFlyingText("<img src='images/flame-png.png' height='30px' alt='Flame Icon' style='opacity: 0.5'>", textColor, className);
			} else if (boostType === "insurance" && insuranceBoostRate > 0) {
			createFlyingText("+" + splitPointsAt.toFixed(0), textColor, className);
				createFlyingText("<img src='images/green-cross-png.png' height='30px' alt='Green Cross Icon' style='opacity: 0.5'>", textColor, className);
			}
		}
		
		var remainder = ((tempPayout % splitPointsAt).toFixed(0) * 1);
		if (remainder !== 0) {
			createFlyingText("+" + remainder, textColor, className);
		}
	}

}

function setPayoutSplitGlow() {
	//console.info("Running setPayoutSplitGlow");
	//console.info("boostRate", boostRate);
	//console.info("payoutBoostRate", payoutBoostRate);
	//console.info("insuranceBoostRate", insuranceBoostRate);
	//console.info("payoutSplitCode", payoutSplitCode);
	//console.info("boostLevel", boostLevel);
	
	if (boostRate > 0) {
		if (payoutSplitCode === "SPLIT01") {
			if (boostLevel == 1 && boostApplied) {
				split01Div.classList.add("yellow-glow");
			} else if (boostLevel == 2 && boostApplied) {
				split01Div.classList.add("orange-glow");
			} else if (boostLevel == 3 && boostApplied) {
				split01Div.classList.add("red-glow");
			} else {
				split01Div.classList.remove("yellow-glow");
				split01Div.classList.remove("orange-glow");
				split01Div.classList.remove("red-glow");
			}
		} else if (payoutSplitCode === "SPLIT02") {
			if (boostLevel == 1 && boostApplied) {
				split02Div.classList.add("yellow-glow");
			} else if (boostLevel == 2 && boostApplied) {
				split02Div.classList.add("orange-glow");
			} else if (boostLevel == 3 && boostApplied) {
				split02Div.classList.add("red-glow");
			} else {
				split02Div.classList.remove("yellow-glow");
				split02Div.classList.remove("orange-glow");
				split02Div.classList.remove("red-glow");
			}
		} else if (payoutSplitCode === "SPLIT03") {
			if (boostLevel == 1 && boostApplied) {
				split03Div.classList.add("yellow-glow");
			} else if (boostLevel == 2 && boostApplied) {
				split03Div.classList.add("orange-glow");
			} else if (boostLevel == 3 && boostApplied) {
				split03Div.classList.add("red-glow");
			} else {
				split03Div.classList.remove("yellow-glow");
				split03Div.classList.remove("orange-glow");
				split03Div.classList.remove("red-glow");
			}
		}
	} else {
		split01Div.classList.remove("yellow-glow");
		split01Div.classList.remove("orange-glow");
		split01Div.classList.remove("red-glow");
		
		split02Div.classList.remove("yellow-glow");
		split02Div.classList.remove("orange-glow");
		split02Div.classList.remove("red-glow");
		
		split03Div.classList.remove("yellow-glow");
		split03Div.classList.remove("orange-glow");
		split03Div.classList.remove("red-glow");
	}
}

function drawChart(data) {
	const chart = document.getElementById("chart");
	const chartStakeDiv = document.getElementById("chart-credit");
	
	chart.innerHTML = "";
	const maxValue = 10000; // Set the absolute max to 10,000
	
	var currentMarginBottom = 5;

	var firstBar = true;
	data.forEach(({ Game, House, Player }) => {
		const barGroup = document.createElement("div");
		barGroup.classList.add("bar-group");
		
		const houseBar = document.createElement("div");
		houseBar.classList.add("bar", "house");
		houseBar.style.height = `${(Math.abs(House) / maxValue) * 250}px`;
		houseBar.style.transform = House >= 0 ? "translateY(0)" : "translateY(100%)";
		houseBar.style.backgroundColor = House < 0 ? "#8b1a1a" : "#67c887";
		
		if (House < 0 && parseInt(((Math.abs(House) / maxValue) * 250) + 5) > currentMarginBottom) {
			currentMarginBottom = parseInt((Math.abs(House) / maxValue) * 250) + 5;
			//console.info("currentMarginBottom", currentMarginBottom);
		}
		chart.style.marginBottom = `${currentMarginBottom}px`;
		
		const playerBar = document.createElement("div");
		playerBar.classList.add("bar", "player");
		playerBar.style.height = `${(Math.abs(Player) / maxValue) * 250}px`;
		playerBar.style.transform = Player >= 0 ? "translateY(0)" : "translateY(-100%)";
		playerBar.style.backgroundColor = firstBar ? "#0f277f" : "#1c3db9";
		
		if (House >= 0 && Player >= 0) {
			playerBar.style.bottom = `${parseInt(houseBar.style.height)}px`; // Player bar directly above the House bar
		}

		const label = document.createElement("div");
		label.classList.add("label");

		barGroup.appendChild(houseBar);  
		barGroup.appendChild(playerBar);
		barGroup.appendChild(label);
		chart.appendChild(barGroup);
		
		chartStakeDiv.innerHTML = chartStake.toFixed(0) + " Tokens staked";
		
		firstBar = false;
	});
}
