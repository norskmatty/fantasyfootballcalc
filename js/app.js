var bg = 0;
var rank = 1;
var ptPassYard = 0.05;
var ptPassTD = 4;
var ptINT = 2;
var ptRushYard = 0.1;
var ptRushTD = 6;
var ptFumble = 2;
var ptRecept = 0.5;
var ptRecYard = 0.1;
var ptRecTD = 6;

$('#getPoints').on('click', function() {
	ptPassYard = getPassYardPoints();
	ptPassTD = getPassTDPoints();
	ptINT = getINTPoints();
	ptRushYard = getRushYardPoints();
	ptRushTD = getRushTDPoints();
	ptFumble = getFumblePoints();
	ptRecept = getReceptionPoints();
	ptRecYard = getRecYardPoints();
	ptRecTD = getRecTDPoints();

	console.log(ptPassYard);
	console.log(ptPassTD);
	console.log(ptINT);
	console.log(ptRushYard);
	console.log(ptRushTD);
	console.log(ptFumble);
	console.log(ptRecept);
	console.log(ptRecYard);
	console.log(ptRecTD);

	return false;


})

$('#qbs').on('click', function() {
	ptPassYard = getPassYardPoints();
	ptPassTD = getPassTDPoints();
	ptINT = getINTPoints();
	ptRushYard = getRushYardPoints();
	ptRushTD = getRushTDPoints();
	ptFumble = getFumblePoints();
	ptRecept = getReceptionPoints();
	ptRecYard = getRecYardPoints();
	ptRecTD = getRecTDPoints();

	$('#players').html('');
	$('#players').append('<div class="toprow"> <div class="blank"> </div> <div class="passingstats"> Passing Stats </div> <div class="rushingstats"> Rushing Stats </div> <div class="biggerspace"> </div> </div>')
	$('#players').append('<div class="title"> <div class="trank"> No. </div> <div class="tspace"> </div> <div class="tname"> Player </div> <div class="tteam"> Team </div> <div class="tpassyds"> Yds </div> <div class="tpasstouch"> TD </div> <div class="tints"> INT </div> <div class="trushyds"> Yds </div> <div class="trushtouch"> TD </div> <div class="tfumb"> Fum </div> <div class="tfantasypoints"> Points </div>') 
	
	for (var i = 0, len = quarterbacks.length; i < len; i++) {
		calcFantasyQBPoints(quarterbacks[i]);
	};

	quarterbacks.sort(function(a,b) {
		return b.fantpts - a.fantpts;
	});


	for (var i = 0, len = quarterbacks.length; i < len; i++) {
		displayQBPlayer(quarterbacks[i]);
		rank++;
	}

	rank = 1;

	$('#players').css('border', 'solid 2px black');

	return false;
});

$('#rbs').on('click', function() {
	ptPassYard = getPassYardPoints();
	ptPassTD = getPassTDPoints();
	ptINT = getINTPoints();
	ptRushYard = getRushYardPoints();
	ptRushTD = getRushTDPoints();
	ptFumble = getFumblePoints();
	ptRecept = getReceptionPoints();
	ptRecYard = getRecYardPoints();
	ptRecTD = getRecTDPoints();

	$('#players').html('');
	$('#players').append('<div class="toprow"> <div class="blank"> </div> <div class="rbrushingstats"> Rushing Stats </div> <div class="rbreceivingstats"> Receiving Stats </div> <div class="biggerspace"> </div> </div>')
	$('#players').append('<div class="title"> <div class="trank"> No. </div> <div class="tspace"> </div> <div class="tname"> Player </div> <div class="tteam"> Team </div> <div class="trushyds"> Yds </div> <div class="rbtrushtouch"> TD </div> <div class="trecs"> Rec </div> <div class="trecyds"> Yds </div> <div class="trectouch"> TD </div> <div class="tfumb"> Fum </div> <div class="tfantasypoints"> Points </div>') 
	
	for (var i = 0, len = runningbacks.length; i < len; i++) {
		calcFantasyRBPoints(runningbacks[i]);
	};

	runningbacks.sort(function(a,b) {
		return b.fantpts - a.fantpts;
	});


	for (var i = 0, len = runningbacks.length; i < len; i++) {
		displayRBPlayer(runningbacks[i]);
		rank++;
	}

	rank = 1;
	bg = 0;

	$('#players').css('border', 'solid 2px black');

	return false;
});

$('#wrs').on('click', function() {
	ptPassYard = getPassYardPoints();
	ptPassTD = getPassTDPoints();
	ptINT = getINTPoints();
	ptRushYard = getRushYardPoints();
	ptRushTD = getRushTDPoints();
	ptFumble = getFumblePoints();
	ptRecept = getReceptionPoints();
	ptRecYard = getRecYardPoints();
	ptRecTD = getRecTDPoints();

	$('#players').html('');
	$('#players').append('<div class="toprow"> <div class="blank"> </div> <div class="rbrushingstats"> Rushing Stats </div> <div class="rbreceivingstats"> Receiving Stats </div> <div class="biggerspace"> </div> </div>')
	$('#players').append('<div class="title"> <div class="trank"> No. </div> <div class="tspace"> </div> <div class="tname"> Player </div> <div class="tteam"> Team </div> <div class="trushyds"> Yds </div> <div class="rbtrushtouch"> TD </div> <div class="trecs"> Rec </div> <div class="trecyds"> Yds </div> <div class="trectouch"> TD </div> <div class="tfumb"> Fum </div> <div class="tfantasypoints"> Points </div>') 
	
	for (var i = 0, len = wideouts.length; i < len; i++) {
		calcFantasyRBPoints(wideouts[i]);
	};

	wideouts.sort(function(a,b) {
		return b.fantpts - a.fantpts;
	});


	for (var i = 0, len = wideouts.length; i < len; i++) {
		displayRBPlayer(wideouts[i]);
		rank++;
	}

	rank = 1;
	bg = 0;

	$('#players').css('border', 'solid 2px black');

	return false;
});

function displayQBPlayer(player) {
	if (bg == 0) {
		$('#players').append('<div class="newPlayer1"> <div class="rank">' + rank + '</div> <div class="space"> </div> <div class="name">' + player.name + '</div> <div class="teamname">' + player.team + '</div> <div class="passyds">' + player.passyards + '</div> <div class="passtouch">' + player.passtds + '</div> <div class="ints">' +  player.ints + '</div> <div class="rushyds">' + player.rushyards + '</div> <div class="rushtouch">' + player.rushtds + '</div> <div class="fumb">' + player.fumblost + '</div> <div class="fantasypoints">' + player.fantpts + '</div> </div>');
		bg = 1;
	}
	else if (bg == 1) {
		$('#players').append('<div class="newPlayer2"> <div class="rank">' + rank + '</div> <div class="space"> </div> <div class="name">' + player.name + '</div> <div class="teamname">' + player.team + '</div> <div class="passyds">' + player.passyards + '</div> <div class="passtouch">' + player.passtds + '</div> <div class="ints">' +  player.ints + '</div> <div class="rushyds">' + player.rushyards + '</div> <div class="rushtouch">' + player.rushtds + '</div> <div class="fumb">' + player.fumblost + '</div> <div class="fantasypoints">' + player.fantpts + '</div> </div>');
		bg = 0;
	}
};

function displayRBPlayer(player) {
	if (bg == 0) {
		$('#players').append('<div class="newPlayer1"> <div class="rank">' + rank + '</div> <div class="space"> </div> <div class="name">' + player.name + '</div> <div class="teamname">' + player.team + '</div> <div class="rushyds">' + player.rushyards + '</div> <div class="rushtouch">' + player.rushtds + '</div> <div class="recs">' +  player.rec + '</div> <div class="recyds">' + player.recyards + '</div> <div class="rectouch">' + player.rectds + '</div> <div class="fumb">' + player.fumblost + '</div> <div class="fantasypoints">' + player.fantpts + '</div> </div>');
		bg = 1;
	}
	else if (bg == 1) {
		$('#players').append('<div class="newPlayer2"> <div class="rank">' + rank + '</div> <div class="space"> </div> <div class="name">' + player.name + '</div> <div class="teamname">' + player.team + '</div> <div class="rushyds">' + player.rushyards + '</div> <div class="rushtouch">' + player.rushtds + '</div> <div class="recs">' +  player.rec + '</div> <div class="recyds">' + player.recyards + '</div> <div class="rectouch">' + player.rectds + '</div> <div class="fumb">' + player.fumblost + '</div> <div class="fantasypoints">' + player.fantpts + '</div> </div>');
		bg = 0;
	}
};

function calcFantasyQBPoints(player) {
	pypts = player.passyards * ptPassYard;
	ptdpts = player.passtds * ptPassTD;
	intpts = player.ints * ptINT;
	fumbpts = player.fumblost * ptFumble;
	rypts = player.rushyards * ptRushYard;
	rtdpts = player.rushtds * ptRushTD;
	player.fantpts = pypts + ptdpts - intpts - fumbpts + rypts + rtdpts;
	player.fantpts = player.fantpts.toFixed(2);
};

function calcFantasyRBPoints(player) {
	recpts = player.rec * ptRecept;
	reydspts = player.recyards * ptRecYard;
	retdpts = player.rectds * ptRecTD;
	fumbpts = player.fumblost * ptFumble;
	rypts = player.rushyards * ptRushYard;
	rtdpts = player.rushtds * ptRushTD;
	player.fantpts = recpts + reydspts + retdpts - fumbpts + rypts + rtdpts;
	player.fantpts = player.fantpts.toFixed(2);
};

function getPassYardPoints() {
	var value = $('#passing_yards_value').val();
	if (!$.isNumeric(value)) {
		return 0.05;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getPassTDPoints() {
	var value = $('#passing_touch_value').val();
	if (!$.isNumeric(value)) {
		return 4;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getINTPoints() {
	var value = $('#passing_ints_value').val();
	if (!$.isNumeric(value)) {
		return 2;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getRushYardPoints() {
	var value = $('#rushing_yards_value').val();
	if (!$.isNumeric(value)) {
		return 0.1;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getRushTDPoints() {
	var value = $('#rushing_touch_value').val();
	if (!$.isNumeric(value)) {
		return 6;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getFumblePoints() {
	var value = $('#fumble_value').val();
	if (!$.isNumeric(value)) {
		return 2;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getReceptionPoints() {
	var value = $('#receptions_value').val();
	if (!$.isNumeric(value)) {
		return 0.5;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getRecYardPoints() {
	var value = $('#receiving_yards_value').val();
	if (!$.isNumeric(value)) {
		return 0.1;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

function getRecTDPoints() {
	var value = $('#receiving_touch_value').val();
	if (!$.isNumeric(value)) {
		return 6;
	}
	else if ((value > 100) | (value < (-100))) {
		alert('The highest allowed value is 100, sorry.');
		return 100;
	}
	else {
		return value;
	}
};

var quarterbacks = [
	{
		name: 'Cam Newton',
		team: 'CAR',
		passyards: 3837,
		passtds: 35,
		ints: 10,
		fumblost: 4,
		rushyards: 636,
		rushtds: 10,
		fantpts: 0
	},

	{
		name: 'Russell Wilson',
		team: 'SEA',
		passyards: 4024,
		passtds: 34,
		ints: 8,
		fumblost: 4,
		rushyards: 553,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Drew Brees',
		team: 'NO',
		passyards: 4870,
		passtds: 32,
		ints: 11,
		fumblost: 5,
		rushyards: 14,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Philip Rivers',
		team: 'SD',
		passyards: 4792,
		passtds: 29,
		ints: 13,
		fumblost: 2,
		rushyards: 28,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Tom Brady',
		team: 'NE',
		passyards: 4770,
		passtds: 36,
		ints: 7,
		fumblost: 5,
		rushyards: 53,
		rushtds: 3,
		fantpts: 0
	},

	{
		name: 'Carson Palmer',
		team: 'ARI',
		passyards: 4671,
		passtds: 35,
		ints: 11,
		fumblost: 2,
		rushyards: 24,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Matt Ryan',
		team: 'ATL',
		passyards: 4591,
		passtds: 21,
		ints: 16,
		fumblost: 5,
		rushyards: 63,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Eli Manning',
		team: 'NYG',
		passyards: 4432,
		passtds: 35,
		ints: 14,
		fumblost: 4,
		rushyards: 61,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Blake Bortles',
		team: 'JAX',
		passyards: 4428,
		passtds: 35,
		ints: 18,
		fumblost: 5,
		rushyards: 310,
		rushtds: 2,
		fantpts: 0
	},

	{
		name: 'Matthew Stafford',
		team: 'DET',
		passyards: 4262,
		passtds: 32,
		ints: 13,
		fumblost: 2,
		rushyards: 159,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Ryan Tannehill',
		team: 'MIA',
		passyards: 4208,
		passtds: 24,
		ints: 12,
		fumblost: 3,
		rushyards: 141,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Kirk Cousins',
		team: 'WAS',
		passyards: 4166,
		passtds: 29,
		ints: 11,
		fumblost: 3,
		rushyards: 48,
		rushtds: 5,
		fantpts: 0
	},

	{
		name: 'Jameis Winston',
		team: 'TB',
		passyards: 4042,
		passtds: 22,
		ints: 15, 
		fumblost: 2,
		rushyards: 213,
		rushtds: 6,
		fantpts: 0
	},

	{
		name: 'Derek Carr',
		team: 'OAK',
		passyards: 3987,
		passtds: 32,
		ints: 13,
		fumblost: 3,
		rushyards: 138,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Ben Roethlisberger',
		team: 'PIT',
		passyards: 3938,
		passtds: 21,
		ints: 16, 
		fumblost: 0,
		rushyards: 29,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Ryan Fitzpatrick',
		team: 'NYJ',
		passyards: 3905,
		passtds: 31,
		ints: 15,
		fumblost: 2,
		rushyards: 270,
		rushtds: 2,
		fantpts: 0
	},

	{
		name: 'Aaron Rodgers',
		team: 'GB',
		passyards: 3821,
		passtds: 31,
		ints: 8,
		fumblost: 4,
		rushyards: 344,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Sam Bradford',
		team: 'PHI',
		passyards: 3725,
		passtds: 19,
		ints: 14,
		fumblost: 3,
		rushyards: 39,
		rushtds: 0,
		fantpts: 0
	},

	{
		name: 'Jay Cutler',
		team: 'CHI',
		passyards: 3659,
		passtds: 21,
		ints: 11,
		fumblost: 5,
		rushyards: 201,
		rushtds: 1,
		fantpts: 0
	},

	{
		name: 'Alex Smith',
		team: 'KC',
		passyards: 3486,
		passtds: 20,
		ints: 7,
		fumblost: 0,
		rushyards: 498,
		rushtds: 2,
		fantpts: 0
	},

	{

name: 'Andy Dalton',

team: 'CIN',

passyards: 3250,

passtds: 25,

ints: 7,

fumblost: 2,

rushyards: 142,

rushtds: 3,

fantpts: 0

},

{

name: 'Teddy Bridgewater',

team: 'MIN',

passyards: 3231,

passtds: 14,

ints: 9,

fumblost: 3,

rushyards: 192,

rushtds: 3,

fantpts: 0

},

{

name: 'Tyrod Taylor',

team: 'BUF',

passyards: 3035,

passtds: 20,

ints: 6,

fumblost: 1,

rushyards: 568,

rushtds: 4,

fantpts: 0

},

{

name: 'Marcus Mariota',

team: 'TEN',

passyards: 2818,

passtds: 19,

ints: 10,

fumblost: 6,

rushyards: 252,

rushtds: 2,

fantpts: 0

},

{

name: 'Joe Flacco',

team: 'BAL',

passyards: 2791,

passtds: 14,

ints: 12,

fumblost: 2,

rushyards: 23,

rushtds: 3,

fantpts: 0

},

{

name: 'Brian Hoyer',

team: 'HOU',

passyards: 2606,

passtds: 19,

ints: 7,

fumblost: 2,

rushyards: 44,

rushtds: 0,

fantpts: 0

},

{

name: 'Peyton Manning',

team: 'DEN',

passyards: 2249,

passtds: 9,

ints: 17,

fumblost: 0,

rushyards: (-6),

rushtds: 0,

fantpts: 0

},

{

name: 'Josh McCown',

team: 'CLE',

passyards: 2109,

passtds: 12,

ints: 4,

fumblost: 6,

rushyards: 98,

rushtds: 1,

fantpts: 0

},

{

name: 'Nick Foles',

team: 'STL',

passyards: 2052,

passtds: 7,

ints: 10,

fumblost: 2,

rushyards: 20,

rushtds: 1,

fantpts: 0

},

{

name: 'Blaine Gabbert',

team: 'SF',

passyards: 2031,

passtds: 10,

ints: 7,

fumblost: 1,

rushyards: 185,

rushtds: 1,

fantpts: 0

},

{

name: 'Brock Osweiler',

team: 'DEN',

passyards: 1967,

passtds: 10,

ints: 6,

fumblost: 1,

rushyards: 61,

rushtds: 1,

fantpts: 0

},

{

name: 'Andrew Luck',

team: 'IND',

passyards: 1881,

passtds: 15,

ints: 12,

fumblost: 1,

rushyards: 196,

rushtds: 0,

fantpts: 0

},

{

name: 'Matt Hasselbeck',

team: 'IND',

passyards: 1690,

passtds: 9,

ints: 5,

fumblost: 2,

rushyards: 15,

rushtds: 0,

fantpts: 0

},

{

name: 'Colin Kaepernick',

team: 'SF',

passyards: 1615,

passtds: 6,

ints: 5,

fumblost: 1,

rushyards: 256,

rushtds: 1,

fantpts: 0

},

{

name: 'Johnny Manziel',

team: 'CLE',

passyards: 1500,

passtds: 7,

ints: 5,

fumblost: 3,

rushyards: 230,

rushtds: 0,

fantpts: 0

},

{

name: 'Matt Cassel',

team: 'DAL',

passyards: 1276,

passtds: 5,

ints: 7,

fumblost: 0,

rushyards: 78,

rushtds: 0,

fantpts: 0

},

{

name: 'Zach Mettenberger',

team: 'TEN',

passyards: 935,

passtds: 2,

ints: 2,

fumblost: 2,

rushyards: 8,

rushtds: 1,

fantpts: 0

},

{

name: 'Tony Romo',

team: 'DAL',

passyards: 884,

passtds: 5,

ints: 7,

fumblost: 1,

rushyards: 13,

rushtds: 0,

fantpts: 0

}

];

var runningbacks = [
	{
    name: 'Adrian Peterson',
    team: 'MIN',
    rushyards: 1485,
    rushtds: 11,
    rec: 30,
    recyards: 222,
    rectds: 0,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Le\'Veon Bell',
    team: 'PIT',
    rushyards: 556,
    rushtds: 3,
    rec: 24,
    recyards: 136,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Doug Martin',
    team: 'TB',
    rushyards: 1402,
    rushtds: 6,
    rec: 33,
    recyards: 271,
    rectds: 1,
    fumblost: 5,
    fantpts: 0
},

{
    name: 'Todd Gurley',
    team: 'STL',
    rushyards: 1106,
    rushtds: 10,
    rec: 21,
    recyards: 188,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jonathan Stewart',
    team: 'CAR',
    rushyards: 989,
    rushtds: 6,
    rec: 16,
    recyards: 99,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'LeSean McCoy',
    team: 'BUF',
    rushyards: 895,
    rushtds: 3,
    rec: 32,
    recyards: 292,
    rectds: 2,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Chris Johnson',
    team: 'ARI',
    rushyards: 814,
    rushtds: 3,
    rec: 6,
    recyards: 58,
    rectds: 0,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Jamaal Charles',
    team: 'KC',
    rushyards: 364,
    rushtds: 4,
    rec: 21,
    recyards: 177,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Chris Ivory',
    team: 'NYJ',
    rushyards: 1070,
    rushtds: 7,
    rec: 30,
    recyards: 217,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Devonta Freeman',
    team: 'ATL',
    rushyards: 1056,
    rushtds: 11,
    rec: 73,
    recyards: 578,
    rectds: 3,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Matt Forte',
    team: 'CHI',
    rushyards: 898,
    rushtds: 4,
    rec: 44,
    recyards: 389,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Darren McFadden',
    team: 'DAL',
    rushyards: 1089,
    rushtds: 3,
    rec: 40,
    recyards: 328,
    rectds: 0,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Carlos Hyde',
    team: 'SF',
    rushyards: 470,
    rushtds: 3,
    rec: 11,
    recyards: 53,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Latavious Murray',
    team: 'OAK',
    rushyards: 1066,
    rushtds: 6,
    rec: 41,
    recyards: 232,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Justin Forsett',
    team: 'BAL',
    rushyards: 641,
    rushtds: 2,
    rec: 31,
    recyards: 153,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Mark Ingram',
    team: 'NO',
    rushyards: 769,
    rushtds: 6,
    rec: 50,
    recyards: 405,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Christine Michael',
    team: 'SEA',
    rushyards: 192,
    rushtds: 0,
    rec: 2,
    recyards: 14,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Thomas Rawls',
    team: 'SEA',
    rushyards: 830,
    rushtds: 4,
    rec: 9,
    recyards: 76,
    rectds: 1,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'T.J. Yeldon', 
    team: 'JAX',
    rushyards: 740,
    rushtds: 2,
    rec: 36,
    recyards: 279,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Frank Gore',
    team: 'IND',
    rushyards: 967,
    rushtds: 6,
    rec: 34,
    recyards: 267,
    rectds: 1,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Marshawn Lynch',
    team: 'SEA',
    rushyards: 417,
    rushtds: 3,
    rec: 13,
    recyards: 80,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'LaGarrette Blount',
    team: 'NE',
    rushyards: 703,
    rushtds: 6,
    rec: 6,
    recyards: 43,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{ 
    name: 'DeAngelo Williams',
    team: 'PIT',
    rushyards: 907,
    rushtds: 11,
    rec: 40,
    recyards: 367,
    rectds: 0,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Lamar Miller',
    team: 'MIA',
    rushyards: 872,
    rushtds: 8,
    rec: 47,
    recyards: 397,
    rectds: 2,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Ronnie Hillman',
    team: 'DEN',
    rushyards: 863,
    rushtds: 7,
    rec: 24,
    recyards: 111,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Rashad Jennings',
    team: 'NYG',    
    rushyards: 863,
    rushtds: 3,
    rec: 29,
    recyards: 296,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Mike Gillislee',
    team: 'BUF',
    rushyards: 267,
    rushtds: 3,
    rec: 6,
    recyards: 29,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Joseph Randle',
    team: 'DAL',
    rushyards: 315,
    rushtds: 4,
    rec: 10,
    recyards: 86,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Eddie Lacy',
    team: 'GB',
    rushyards: 758,
    rushtds: 3,
    rec: 20,
    recyards: 188,
    rectds: 2,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Jeremy Hill',
    team: 'CIN',
    rushyards: 794,
    rushtds: 11,
    rec: 15,
    recyards: 79,
    rectds: 1,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'C.J. Anderson',
    team: 'DEN',
    rushyards: 720,
    rushtds: 5,
    rec: 25,
    recyards: 183,
    rectds: 0,
    fumblost: 2,
    fantpts: 0
},
    
{
    name: 'Karlos Williams',
    team: 'BUF',
    rushyards: 517,
    rushtds: 7,
    rec: 11,
    recyards: 96,
    rectds: 2,
    fumblost: 1,
    fantpts: 0
},

{     
	name: 'Alfred Morris',
    team: 'WAS',
    rushyards: 751,
    rushtds: 1,
    rec: 10,
    recyards: 55,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Tim Hightower',
    team: 'NO',
    rushyards: 375,
    rushtds: 4,
    rec: 12,
    recyards: 129,
    rectds: 0,
    fumblost: 0
},

{
    name: 'DeMarco Murray',
    team: 'PHI',
    rushyards: 702,
    rushtds: 6,
    rec: 44,
    recyards: 322, 
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Melvin Gordon',
    team: 'SD',
    rushyards: 641,
    rushtds: 0,
    rec: 33,
    recyards: 192,
    rectds: 0,
    fumblost: 4,
    fantpts: 0
},

{
    name: 'Giovani Bernard',
    team: 'CIN',
    rushyards: 730,
    rushtds: 2,    
    rec: 49,
    recyards: 472,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{ 
    name: 'Isaiah Crowell',
    team: 'CLE',
    rushyards: 706,
    rushtds: 4,
    rec: 19,
    recyards: 182,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Shaun Draughn',
    team: 'SF',
    rushyards: 263,
    rushtds: 1,
    rec: 25,
    recyards: 175,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Alfred Blue',
    team: 'HOU',
    rushyards: 698,
    rushtds: 2,
    rec: 15,
    recyards: 109,
    rectds: 1,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Charcandrick West',
    team: 'KC',
    rushyards: 634,
    rushtds: 4,
    rec: 20,
    recyards: 214,
    rectds: 1,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Ryan Mathews',
    team: 'PHI',
    rushyards: 539,
    rushtds: 6,
    rec: 20,
    recyards: 146,
    rectds: 1,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Arian Foster',
    team: 'HOU',
    rushyards: 163,
    rushtds: 1,
    rec: 22,
    recyards: 227,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Matt Jones',    
    team: 'WAS',
    rushyards: 490,
    rushtds: 3,
    rec: 19,
    recyards: 304,
    rectds: 1,
    fumblost: 4,
    fantpts: 0
},

{
    name: 'James Starks',
    team: 'GB',
    rushyards: 601,
    rushtds: 2,
    rec: 43,
    recyards: 392,
    rectds: 3,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Ameer Abdullah',
    team: 'DET',
    rushyards: 597,
    rushtds: 2,
    rec: 25,
    recyards: 183,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Antonio Andrews',
    team: 'TEN',
    rushyards: 520,
    rushtds: 3,
    rec: 21,    
    recyards: 174,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Spencer Ware',
    team: 'KC',
    rushyards: 403,
    rushtds: 6,
    rec: 6,
    recyards: 5,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{ 
    name: 'David Johnson',
    team: 'ARI',
    rushyards: 581,
    rushtds: 8,
    rec: 36,
    recyards: 457,
    rectds: 4,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jeremy Langford',
    team: 'CHI',
    rushyards: 537,
    rushtds: 6,
    rec: 22,
    recyards: 279,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Dion Lewis',
    team: 'NE',
    rushyards: 234,
    rushtds: 2,
    rec: 36,
    recyards: 388,
    rectds: 2,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Charles Sims',
    team: 'TB',
    rushyards: 529,
    rushtds: 0,
    rec: 51,
    recyards: 561,
    rectds: 4,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Tevin Coleman',
    team: 'ATL',
    rushyards: 392,
    rushtds: 1,
    rec: 2,
    recyards: 14,
    rectds: 0,
    fumblost: 3,
    fantpts: 0
},

{
    name: 'Javorius Allen',
    team: 'BAL',
    rushyards: 514,
    rushtds: 1,
    rec: 45,
    recyards: 353,
    rectds: 2,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Terrence West',
    team: 'BAL',
    rushyards: 231,
    rushtds: 0,
    rec: 4,
    recyards: 21,
    rectds: 0,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Andre Ellington',
    team: 'ARI',
    rushyards: 289,
    rushtds: 3,
    rec: 15,
    recyards: 148,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},
    
{
    name: 'Bilal Powell',
    team: 'NYJ',
    rushyards: 313,
    rushtds: 1,
    rec: 47,
    recyards: 388,
    rectds: 2,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Duke Johnson',
    team: 'CLE',
    rushyards: 379,
    rushtds: 0,
    rec: 61,
    recyards: 534,
    rectds: 2,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Khiry Robinson',
    team: 'NO',
    rushyards: 180,
    rushtds: 4,
    rec: 17,
    recyards: 115,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Dexter McCluster',
    team: 'TEN',
    rushyards: 247,
    rushtds: 1,
    rec: 31,
    recyards: 260,
    rectds: 1,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Danny Woodhead',
    team: 'SD',
    rushyards: 336,
    rushtds: 3,
    rec: 80,
    recyards: 755,
    rectds: 6,
    fumblost: 0,
    fantpts: 0 
},

{
    name: 'Darren Sproles',
    team: 'PHI',
    rushyards: 317,
    rushtds: 3,
    rec: 55,
    recyards: 388,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},
    
{
    name: 'Jonathan Grimes',
    team: 'HOU',
    rushyards: 282,
    rushtds: 1,
    rec: 26,
    recyards: 173,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Denard Robinson',
    team: 'JAX',
    rushyards: 266,
    rushtds: 1,
    rec: 21,
    recyards: 164,
    rectds: 0,
    fumblost: 1,
    fantpts: 0
},
    
{
    name: 'Theo Riddick',
    team: 'DET',
    rushyards: 133,
    rushtds: 0,
    rec: 80,
    recyards: 697,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Shane Vereen',    
    team: 'NYG',
    rushyards: 260,
    rushtds: 0,
    rec: 59,
    recyards: 494,
    rectds: 4,
    fumblost: 1,
    fantpts: 0
}

];

var wideouts = [
	{
    name: 'Julio Jones',
    team: 'ATL',
    rushyards: 0,
    rushtds: 0,
    rec: 136,
    recyards: 1871,
    rectds: 8,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Antonio Brown',    
    team: 'PIT',
    rushyards: 28,
    rushtds: 0,
    rec: 136,
    recyards: 1834,
    rectds: 10,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'DeAndre Hopkins',
    team: 'HOU',
    rushyards: 0,
    rushtds: 0,
    rec: 111,
    recyards: 1521,
    rectds: 11,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Brandon Marshall',
    team: 'NYJ',
    rushyards: 0,
    rushtds: 0,
    rec: 109,
    recyards: 1502,
    rectds: 14,
    fumblost: 2,
    fantpts:0,
},

{
    name: 'Odell Beckham, Jr.',
    team: 'NYG',
    rushyards: 3,
    rushtds: 0,
    rec: 96,
    recyards: 1450,
    rectds: 13,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Allen Robinson',
    team: 'JAX',
    rushyards: 0,
    rushtds: 0,
    rec: 80,
    recyards: 1400,
    rectds: 14,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Demaryious Thomas',
    team: 'DEN',
    rushyards: 0,
    rushtds: 0,
    rec: 105,
    recyards: 1304,
    rectds: 6,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'A.J. Green',
    team: 'CIN',
    rushyards: 0,
    rushtds: 0,
    rec: 86,
    recyards: 1297,
    rectds: 10,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Larry Fitzgerald',
    team: 'ARI',
    rushyards: 0,
    rushtds: 0,
    rec: 109,
    recyards: 1215,
    rectds: 9,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'Calvin Johnson',
    team: 'DET',
    rushyards: 0,
    rushtds: 0,
    rec: 88,
    recyards: 1214,
    rectds: 9,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Mike Evans',
    team: 'TB',
    rushyards: 0,
    rushtds: 0,
    rec: 74,
    recyards: 1206,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jarvis Landry',
    team: 'MIA',
    rushyards: 113,
    rushtds: 1,
    rec: 110,
    recyards: 1157,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Brandin Cooks',
    team: 'NO',
    rushyards: 18,
    rushtds: 0,
    rec: 84,
    recyards: 1138,
    rectds: 9,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Emmanuel Sanders',
    team: 'DEN',
    rushyards: 29,
    rushtds: 0,
    rec: 76,
    recyards: 1135,
    rectds: 6,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'T.Y. Hilton',
    team: 'IND',
    rushyards: 0,
    rushtds: 0,
    rec: 69,
    recyards: 1124,
    rectds: 5,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Jeremy Maclin',
    team: 'KC',
    rushyards: 14,
    rushtds: 0,
    rec: 87,
    recyards: 1088,
    rectds: 8,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Amari Cooper',
    team: 'OAK',
    rushyards: -3,
    rushtds: 0,
    rec: 72,
    recyards: 1070,
    rectds: 6,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Doug Baldwin',
    team: 'SEA',
    rushyards: 0,
    rushtds: 0,
    rec: 78,
    recyards: 1069,
    rectds: 14,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Sammy Watkins',
    team: 'BUF',
    rushyards: 1,
    rushtds: 0,
    rec: 60,
    recyards: 1047,
    rectds: 9,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Allen Hurns',
    team: 'JAX',
    rushyards: 0,
    rushtds: 0,
    rec: 64,
    recyards: 1031,
    rectds: 10,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Eric Decker',
    team: 'NYJ',
    rushyards: 0,
    rushtds: 0,
    rec: 80,
    recyards: 1027,
    rectds: 12,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'John Brown',
    team: 'ARI',
    rushyards: 22,
    rushtds: 0,
    rec: 65,
    recyards: 1003,
    rectds: 7,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jordan Matthews',
    team: 'PHI',
    rushyards: 0,
    rushtds: 0,
    rec: 85,
    recyards: 997,
    rectds: 8,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Willie Sneed',
    team: 'NO',
    rushyards: 0,
    rushtds: 0,
    rec: 69,
    recyards: 984,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Travis Benjamin',
    team: 'CLE',
    rushyards: 12,
    rushtds: 0,
    rec: 68,
    recyards: 966,
    rectds: 5,
    fumblost: 2,
    fantpts: 0,
},
    
{
    name: 'Kamar Aiken',
    team: 'BAL',
    rushyards: 0,
    rushtds: 0,
    rec: 75,
    recyards: 944,
    rectds: 5,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Michael Crabtree',
    team: 'OAK',
    rushyards: 0,
    rushtds: 0,
    rec: 85,
    recyards: 922,
    rectds: 9,
    fumblost: 0,
    fantpts: 0
},
    
{
    name: 'James Jones',
    team: 'GB',
    rushyards: 0,
    rushtds: 0,
    rec: 50,
    recyards: 890,
    rectds: 8,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Michael Floyd',
    team: 'ARI',
    rushyards: 0,
    rushtds: 0,
    rec: 52,
    recyards: 849,
    rectds: 6,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Terrence Williams',
    team: 'DAL',
    rushyards: 0,
    rushtds: 0,
    rec: 52,
    recyards: 840,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Randall Cobb',
    team: 'GB',
    rushyards: 50,
    rushtds: 0,
    rec: 79,
    recyards: 829,
    rectds: 6,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Marvin Jones',
    team: 'CIN',
    rushyards: 33,
    rushtds: 0,
    rec: 65,
    recyards: 816,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Golden Tate',
    team: 'DET',
    rushyards: 41,
    rushtds: 0,
    rec: 90,
    recyards: 813,
    rectds: 6,
    fumblost: 1,    
    fantpts: 0
},

{
    name: 'Alshon Jeffrey',
    team: 'CHI',
    rushyards: 0,
    rushtds: 0,
    rec: 54,
    recyards: 807,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Rueben Randle',
    team: 'NYG',
    rushyards: 0,
    rushtds: 0,
    rec: 57,
    recyards: 797,
    rectds: 8,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Anquan Boldin',
    team: 'SF',
    rushyards: 0,
    rushtds: 0,
    rec: 69,
    recyards: 789,
    rectds: 4,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Pierre Garcon',
    team: 'WAS',
    rushyards: 0,
    rushtds: 0,
    rec: 72,
    recyards: 777,
    rectds: 6,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Martavis Bryant',
    team: 'PIT',
    rushyards: 37,
    rushtds: 1,
    rec: 50,
    recyards: 765,
    rectds: 6,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Markus Wheaton',    
    team: 'PIT',
    rushyards: 0,
    rushtds: 0,
    rec: 44,
    recyards: 749,
    rectds: 5,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Ted Ginn, Jr.',
    team: 'CAR',
    rushyards: 60,
    rushtds: 0,
    rec: 44,
    recyards: 739,
    rectds: 10,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Donte Moncrief',
    team: 'IND',
    rushyards: 0,
    rushtds: 0,
    rec: 64,
    recyards: 733,
    rectds: 6,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Keenan Allen',
    team: 'SD',
    rushyards: 0,
    rushtds: 0,
    rec: 67,
    recyards: 725,
    rectds: 4,
    fumblost: 1,
    fantpts: 0
},

{ 
    name: 'Stefan Diggs',
    team: 'MIN',
    rushyards: 13,
    rushtds: 0,
    rec: 52,
    recyards: 720,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Julian Edelman',
    team: 'NE',
    rushyards: 23,
    rushtds: 0,
    rec: 61,
    recyards: 692,
    rectds: 7,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jermaine Kearse',
    team: 'SEA',
    rushyards: 0,
    rushtds: 0,
    rec: 49,
    recyards: 685,
    rectds: 5,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Kenny Britt',
    team: 'STL',
    rushyards: 0,
    rushtds: 0,
    rec: 36,
    recyards: 681,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Steve Smith, Sr.',
    team: 'BAL',
    rushyards: 0,
    rushtds: 0,
    rec: 46,
    recyards: 670,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Tyler Lockett',
    team: 'SEA',
    rushyards: 20,
    rushtds: 0,
    rec: 51,
    recyards: 664,
    rectds: 6,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Torrey Smith',
    team: 'SF',
    rushyards: 0,
    rushtds: 0,
    rec: 33,    
    recyards: 663,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Rishard Matthews',
    team: 'MIA',
    rushyards: 4,
    rushtds: 0,
    rec: 43,
    recyards: 662,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Nate Washington',
    team: 'HOU',    
    rushyards: 0,
    rushtds: 0,
    rec: 47,
    recyards: 658,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Danny Amendola',
    team: 'NE',
    rushyards: 11,
    rushtds: 0,
    rec: 65,
    recyards: 648,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jamison Crowder',
    team: 'WAS',
    rushyards: 2,
    rushtds: 0,
    rec: 59,
    recyards: 604,
    rectds: 2,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Malcom Floyd',
    team: 'SD',
    rushyards: 0,
    rushtds: 0,
    rec: 30,
    recyards: 561,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Robert Woods',
    team: 'BUF',
    rushyards: 0,
    rushtds: 0,
    rec: 47,
    recyards: 552,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{ 
    name: 'Dorial Green Beckham',
    team: 'TEN',
    rushyards: 0,
    rushtds: 0,
    rec: 32,
    recyards: 549,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Vincent Jackson',    
    team: 'TB',
    rushyards: 0,
    rushtds: 0,
    rec: 33,
    recyards: 543,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Cole Beasley',    
    team: 'DAL',
    rushyards: 0,
    rushtds: 0,
    rec: 52,
    recyards: 536,
    rectds: 5,
    fumblost: 2,
    fantpts: 0
},

{
    name: 'DeSean Jackson',
    team: 'WAS',
    rushyards: 0,
    rushtds: 0,
    rec: 30,
    recyards: 528,
    rectds: 4,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Brian Hartline',
    team: 'CLE',
    rushyards: 0,
    rushtds: 0,
    rec: 46,
    recyards: 523,
    rectds: 2,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Marques Colston',
    team: 'NO',
    rushyards: 0,
    rushtds: 0,
    rec: 45,
    recyards: 520,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Brandon LaFell',    
    team: 'NE',
    rushyards: 9,
    rushtds: 0,
    rec: 37,
    recyards: 515,
    rectds: 0,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Roddy White',
    team: 'ATL',
    rushyards: 0,
    rushtds: 0,
    rec: 43,
    recyards: 506,
    rectds: 1,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Andre Johnson',    
    team: 'IND',
    rushyards: 0,
    rushtds: 0,
    rec: 41,
    recyards: 503,
    rectds: 4,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Stevie Johnson',
    team: 'SD',
    rushyards: 0,
    rushtds: 0,
    rec: 45,
    recyards: 497,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'DeVante Parker',
    team: 'MIA',
    rushyards: 0,
    rushtds: 0,
    rec: 26,
    recyards: 494,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
},

{
    name: 'Dontrelle Inman',    
    team: 'SD',
    rushyards: 0,
    rushtds: 0,
    rec: 35,
    recyards: 486,
    rectds: 3,
    fumblost: 1,
    fantpts: 0
},

{
    name: 'Jerricho Cotchery',
    team: 'NYJ',
    rushyards: 16,
    rushtds: 0,
    rec: 39,
    recyards: 485,
    rectds: 3,
    fumblost: 0,
    fantpts: 0
}

]