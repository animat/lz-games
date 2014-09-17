<?php
include('../includes/include.php');

$userId = $_SESSION['auth_user_id'];

function openHelpWindow($action, $gameSwf) {
	echo 'javascript:openWin("../includes/help.php?action='.$action.'&game='.$gameSwf.'&path=../", 300, 400);';
}

function gameNotFound() {
	echo '
	<div align="center">
		<br><br><br>
		<strong>Oops!</strong>
		<br><br>
		Sorry, the game you have requested currently cannot be accessed from the database.
	</div>';
}

function displayTeacherToolbar($handle, $gameId, $userId) {
	$actionQuery = "SELECT avail_game_id FROM games_available 
				WHERE avail_game_id = ".$gameId." 
				AND avail_teacher_id = ".$userId;
	$actionResult = $handle->query($actionQuery);
	$actionNumRows = $handle->getNumRows($actionResult);
	echo '
	<div id="toolbar">
      <ul>
        <li>Teacher Options:</li>';
		if ($actionNumRows > 0) {
			echo '
			<li>
				<a href="../customizer/customizer.php?action=edit&gameid='.$_GET['game_id'].'">Edit this game</a>
			</li>
			<li>
				<a href="../teachers/manageGames.php">Return to my games</a>
			</li>';
		} else {
			echo '
			<li>
				<a href="#" id="share">Adopt this game</a>
			</li>
			<li>
				<a href="../teachers/manageGames.php">Return to my games</a>
			</li>';
		}
        echo '
      </ul>
    </div>';
}

function displayGameSwf($gameId, $gameSwf) {
	echo '<div id="flashGame">';
		printNeedFlashError();
		echo '</div>
		
		<script type="text/javascript">
			var game = new SWFObject("../games/'.$gameSwf.'.swf", "game", "600", "400", "8", "#FFFFFF", true);
			game.addVariable("gameid", '.$gameId.');
			game.addVariable("allowScriptAccess", "always");
			game.write("flashGame");
		</script>';
}



$query = 'SELECT g.game_id, gi.game_swf, gi.game 
			FROM games g, games_info gi 
			WHERE g.game_id='.$_GET['game_id'].' 
			AND g.game_info_id = gi.game_info_id';
$result = $handle->query($query);
$numRows = $handle->getNumRows($result);
$row = $handle->fetchArray($result);
$gameId = $row['game_id'];
$gameSwf = $row['game_swf'];
$gameName = $row['game'];


$title = "LinguaZone.com || Play $gameName";
$descrip = "Play LinguaZone.com's $gameName";
$keys = "$gameName, play games, LinguaZone games, language games, play a language game, language activitiy";
$inc = '
<link rel="stylesheet" type="text/css" media="screen" href="../includes/styles/game.css">
<script type="text/javascript" src="../includes/js/swfobject_js_gateway.js"></script>
<script type="text/javascript" src="../includes/js/prototype.lite.js"></script>
<script type="text/javascript" src="../includes/js/moo.ajax.js"></script>
<script type="text/javascript" src="../includes/js/moo.fx.js"></script>
<script type="text/javascript" src="../includes/js/script.js"></script>
<script type="text/javascript">

function share() {
	//alert("game id is '.$_GET['game_id'].'");
	var sharePost = "action=share&gameid="+'.$_GET['game_id'].'+"&userid='.$userId.'";
	new ajax("../games/_backend/backend-games.php", {postBody: sharePost, onComplete: shareAlert} );
}

function shareAlert(request) {
	location.href = "../play/" + request.responseText;
}

function thisMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	return (isIE) ? window[movieName] : document[movieName];
}

function init() {
	';
	if (isset($userId)) {
		$inc .= '
		$("share").onclick = function() {
			share();
			return false;
		}';
	}
	if ($gameSwf == "mantis" || $gameSwf == "leapFrog" || $gameSwf == "fishing" || $gameSwf == "pokerPairs" || $gameSwf == "alphabetTree") {
		$inc .= '
		$("helpMeButton").onclick = function() {
			if ($("game")) {
				$("game").toggleHints();
			} else if ($("flashGame")) {
				$("flashGame").toggleHints();
			} else if (navigator.appName.indexOf("Microsoft") != -1) {
				alert("To get a hint, press the Escape (ESC) key while playing the game");
			} else {
				alert("To get a hint, press the Escape (ESC) key while playing the game");
			}
			return false;
		}
		';
	} else {
		$inc .= '
		$("help").onclick = function() {
			openWin("../includes/help.php?action=gameHelp&game='.$gameSwf.'&path=../", 325, 400);
			return false;
		}
		$("report").onclick = function() {
			openWin("../includes/help.php?action=report&game='.$gameSwf.'&path=../", 325, 400);
			return false;
		}
		$("suggest").onclick = function() {
			openWin("../includes/help.php?action=suggest&game='.$gameSwf.'&path=../", 325, 400);
			return false;
		}
		$("foreign").onclick = function() {
			openWin("../includes/help.php?action=characters&game='.$gameSwf.'&path=../", 325, 400);
			return false;
		}
		';
	}
$inc .= '
}
addEvent(window, "load", init);
</script>
';
$path = "../";
printHeader($title, $descrip, $keys, $inc, $path);

if (!$theSentry->checkLogin(2) ){ $loggedIn = false; } else { $loggedIn = true; $userId = $_SESSION['auth_user_id']; }
?>

<div id="page"> 

  <div class="page_head"><?php insertFlashHeader("../"); ?></div>
  
  <div class="page_body"> 
  
  	<?php if ($loggedIn == true) { displayTeacherToolbar($handle, $_GET['game_id'], $userId); }	?>
  	 
	  <div id="game_window">

		<?php if ($numRows > 0) { displayGameSwf($gameId, $gameSwf); } else { gameNotFound(); } ?>

	</div>
	
	<?php
	if ($gameSwf == "mantis" || $gameSwf == "leapFrog" || $gameSwf == "fishing" || $gameSwf == "pokerPairs" || $gameSwf == "alphabetTree") {
		echo '
		<div>
			<a href="#" id="helpMeButton">
				<img src="../images/games/help-me.jpg" border="0">
			</a>
		</div>';
	} else {
		echo '
		<div id="game_footer">
			<ul>
		    	<li>
					<a href="#" id="help" class="question">Help</a>
				</li>
				<li>
					<a href="#" id="report" class="question">Report a bug</a>
				</li>
				<li>
					<a href="#" id="suggest" class="question">Make a suggestion</a>
				</li>
				<li>
					<a href="#" id="foreign" class="question">How do I type foreign letters?</a>
				</li>
			</ul>
		</div><!--#game_footer-->';
	}
	?>
	
	<div class="clear"></div>
  </div><!--.page_body-->

<?php printFooter('../'); ?>
