
$(function() {

	$( "<div class='compix' style='position: absolute; top: 0px; margin: 0px auto 0px 0px; left: 0px; right: 0px; z-index: 9999; pointer-events: none; opacity: 0.5; text-align:center;'><div style='margin:0 auto;'><img></img></div></div>" ).insertAfter( ".content" );


	var GetClasses = $('.content').attr("class").toString().split(' ');
	var splitClass = GetClasses[1];

	//change mockup source here for working locally
	var imageUrl = "/compix/"+splitClass;




	//Console
	function addCompixConsole(){
		var consoleMarkup = "<div id='compixConsole' style='padding: 15px;position: absolute;top: 0;left: 0;background: rgba(255,255,255,0.7);font-size: 12px;z-index: 999999;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;'><div class='compixLogo' style='background: url(/compix/compix.png);width: 75px;height: 20px;float: left;margin: 0 0 5px;text-transform: uppercase; margin-bottom: 10px;'></div><label class='compixLeftLabel'><span style='margin-top: 6px;float: left;margin-right: 5px;clear: both;font-family:helvetica,arial;'>Left: </span><input class='compixLeft' type='number' value='' style='float: left;margin-bottom: 10px;padding: 5px;width: 50px;font-family:helvetica,arial;'></label><label class='compixTopLabel'><span style='margin-top: 6px;float: left;margin-right: 5px;clear: both;font-family:helvetica,arial;'>Top: </span><input class='compixTop' type='number' value='' style='float: left;margin-bottom: 10px;padding: 5px;width: 50px;font-family:helvetica,arial;'></label><label for='compixPosition' style='float:left; clear:both; margin-bottom: 10px;'><input type='checkbox' id='compixPosition'><span style='margin-left: 5px;font-family:helvetica,arial;'>Relative</span></label><div class='compixReset' style='color: #fff;background: #00c5e3;padding: 7px 10px;font-family:helvetica,arial;float: left;clear: both;font-weight: bold;text-decoration: none;text-transform: uppercase;cursor: pointer;width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box; clear:both;'>Reset</div></div>";

		$(consoleMarkup).insertAfter('.content');

		$('.compixLeft').on('keyup change', function() {
			var value = $(this).val();	
			localStorage.setItem('compix.Left', value);

			setImageLeft(value);
		});


		$('.compixTop').on('keyup change', function() {
			var value = $(this).val();	
			localStorage.setItem('compix.Top', value);

			setImageTop(value);				
		});

		$('.compixReset').on('click', function() {
			console.log('reset');
			$('.compixLeft').val('');
			$('.compixTop').val('');

			localStorage.removeItem('compix.Left');
			localStorage.removeItem('compix.Top');

			setImageTop(0);
			setImageLeft(null);
		});

		localStorage.setItem('compix.Console', 'on');

		setInitialPosition();

	}

	function setImageTop(top){
		top = top|0;
		//console.log('movingImageTopTo:', top);
		$('.compix img').css('margin-top',top+ 'px');
	}

	function setImageLeft(left){
		//console.log('movingImageLeftTo:', left);
		if(left === null || left === ''){
			$('.compix img').css('margin-left','auto');
		} else {
			$('.compix img').css('margin-left',left+ 'px');
		}	

	}

	function setInitialPosition(){
		var initialTop = localStorage.getItem('compix.Top');
		var initialLeft = localStorage.getItem('compix.Left');

		if (initialTop) {
			setImageTop(initialTop);
			$('.compixTop').val(initialTop|'');
		}

		if (initialLeft) {
			setImageLeft(initialLeft);
			$('.compixLeft').val(initialLeft|'');
		}
	}

	function restoreCompixConsole(){
		var compixEnabled = localStorage.getItem('compix.Console');

		if(compixEnabled) {
			addCompixConsole();
		}

		setInitialPosition();
	}

	function removeCompixConsole(){
		$('#compixConsole').remove();
		localStorage.removeItem('compix.Console');
	}

	function toggleCompixConsole(){
		var compixEnabled = localStorage.getItem('compix.Console');

		if(compixEnabled) {
			removeCompixConsole();
		} else {
			addCompixConsole();
		}
	}



	$(document).on('keydown', function(e) {


			if (e.keyCode == 27) { // Esc: Remove
				removeCompixConsole();
			}

			//add alt key so we don't accidentally trigger compix when writing random things in website inputs
			if (!e.altKey)
				return true;

			switch (e.keyCode) {
			case 68: // d: Desktop
			console.log('getimg');			
			$('.compix img').attr('src', imageUrl + 'Desktop.jpg');

			localStorage.setItem('displayThis', "Desktop");
			break;

			case 84: // t: Tablet
			$('.compix img').attr('src', imageUrl + 'Tablet.jpg');
			localStorage.setItem('displayThis', "Tablet");
			break;

			case 77: // m: Mobile
			$('.compix img').attr('src', imageUrl + 'Mobile.jpg');
			localStorage.setItem('displayThis', "Mobile");
			break;

			case 88: // x: Remove
			removeCompixConsole();
			$('.compix img').removeAttr("src");
			localStorage.setItem('displayThis', null);
			break;

			case 67:
			toggleCompixConsole();
			break;

			default:
			return true;

		}

	});



	//console.log('storage',localStorage.getItem('displayThis'));
	if (localStorage.getItem('displayThis')) {
		var formFactor = localStorage.getItem('displayThis');
		$('.compix img').attr('src', imageUrl + formFactor + '.jpg');
	};


	setTimeout(restoreCompixConsole, 50); //this won't be necessary in the final version
	

});
