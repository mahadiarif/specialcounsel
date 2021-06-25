/* $(document).ready(function(){
//Temp Fix by Abhishek Location Auto Suggest Error on Job Details..
//PLease Don't remove this code' for more info please contact CIS Support Team
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKaf6N484SZUI6BojKztFkZGSC38uvuuw&libraries=places&language=en"
    $("head").append(s);
}); */

/* global $, document window, location, console, dataLayer */

// active Brand Service Nav adds active to the brand services nav.
activeBrandServiceNav();
// Mobile nav is the functionality for opening the mobile nav
mobileNav();
// Sticky nav sticks the nav to the top on scroll
stickyNav();
// For sliders, initialize them - flickity
flickityInit();
// Styling specifics for active apply 
activeApply();
// Contact us functions
contactUs();
profiles();
// job details transform
jobDetails();
// Resource transofrms

changeResources();
// apply transform
applyTransform();
// privacy policy
privacyPolicy();
//job search header 
jobSearchHeader();
//welcome banner
//welcome();
//nav highlights + active sub nav selector
activeNav();
siteSearch();
locationTransform();
var domain = location.href;

//Base64 for cookies/special characters
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

//use like this
/*
var string = 'Hello World!';
var encodedString = Base64.encode(string);
var decodedString = Base64.decode(encodedString);
*/
//To pass refer for active applies
function getUrlParameterforRef(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

//Passing the tranaction id
$(window).load(function() {
	try {
		var hValue=document.onrecruit_uuid;
		$('.tranid').val(hValue);
		
			  //for INC9536545 hide indeed button for expired jobs
 if(typeof (_jobDetailStatusCode)!=undefined)
 {
	 if(_jobDetailStatusCode==="410")
     {
	 $(".indeed-apply-widget").hide();
	 }
 }
		
	}catch(err){
	}
});
var addText=0;
$(document).ready(function() {
	try{
		var ref='';
		if((_JobUrlReferer!='') && (_JobUrlReferer.indexOf(location.host) != 0)){
				ref=_JobUrlReferer;
		}		
		var applyUrl=$('.apply-btn-dropdown .apply').attr('href');
		applyUrl = applyUrl +'&ref='+encodeURIComponent(ref);
		$('.apply').attr('href',applyUrl);	
		var reference = getUrlParameterforRef('ref');
		if(reference!=''){
			
			$('.job-source').val(reference);	
		}
		var added=0;
		if ( $('.tel-consent').length ){
    let telConsentDetails = '<div class="tel-consent-details"><p>Some examples of why we may text or auto-dial your phone number <i class="dropdown icon"></i></p><ol><li>To better understand the type of work you\'re looking for.</li><li>To let you know about great jobs you might want to apply for.</li><li>To quickly communicate various assignment details to you.</li></ol></div>'
	if(added<1){
		$(telConsentDetails).appendTo('.tel-consent');
		$('.tel-consent-details .dropdown').click(function(){
			$('.tel-consent-details ol').slideToggle();
			$('.tel-consent-details').toggleClass('open');
		});
		added++;
	}
}
		
	}catch(err){
	}
});

function openFileResume(){
	$('.file-upload-btn').click();
}
// on doc ready
$(function(){
	try{
	$('.conventional-upload').attr('onclick',"openFileResume()");
	$('.resume-section .file-upload-btn').attr('onchange',"UploadFile('fileUpload', this)");
	}catch(err){
}
	var $slider = $(".slider");
	var $quoteslider = $(".quote-slider");
	var pathName = window.location.pathname;
	
	mainNavigation();
	jobResultTransforms();
	jobApplyTransforms();
	jobSearchTransforms();
	jobDetailTransforms();
	formTransforms();
	leadershipBios();
	jobLoveSurvey();
	locationsColfix();
	pressRoomNav();
	newSiteFaq();
	sendPassiveApplyEmails();
	//newSiteBanner(); /* removed 10.18.2016
	
	$("nav.container a").each(function(){
	  if(window.location.pathname.match($(this).attr("href"))) {
			$(this).addClass("current");
	   }
    });
	
	/*if($('.row-location-industry #predefinejobdiv').is(':hidden')) {
		console.log("no-jobs");	
	}*/
	
	/***** CCPA *****/
	// Contact Page
	if (/^\/employers\/contact-ajilon\//.test(pathName)) {
		requiredCCPAcheckbox(".contact-us", ".ccpa-checkbox","Please agree to the Terms of of Use, General Privacy Policy, and Cookies Policy above.");
	}
	// Apply
	if (/^\/jobs\/(resume-submission|job-apply)\//.test(pathName)) {
		showMoreCCPAdetails(".ccpa-candidate-info",".agreementDetails");
		requiredCCPAcheckbox(".apply-frm", ".ccpa-checkbox","Please agree to the Candidate Privacy Information Statement above.");
	}
	//Resources
	if (/^\/(job-resources|employers\/employer-resources)\//.test(pathName)) {
		// need to also check for .resource-form and .employers-contact-form
		var possibleFormClasses = [".scfForm"];
		
		$.each(possibleFormClasses, function(index, val){
			if($(val).length){
				requiredCCPAcheckbox(val, ".ccpa-checkbox","Please agree to the Terms of of Use, General Privacy Policy, and Cookies Policy above.");	
			}	
		});
	}
	
	// Add privacy link to job details hook
	if (/^\/jobs\//.test(pathName) && $('#privacy-link').length) {
		$('#privacy-link').html(' <a href="/candidate-privacy/" target="_blank">click here</a>.');
	}
	
	//temp fix
	_buckets.deleteKey('recentlySearched');
	
	//apply
	$.fn.formValidate({
		$submitBtn : ".apply-frm .scfSubmitButton input",
		$frmParentClass :".apply-frm",
		resumeEmptyValidation : true	
	});
	
	//employers home subscribe
	$.fn.formValidate({
		$submitBtn : ".top-talent-subscribe .scfSubmitButton input",
		$frmParentClass :".top-talent-subscribe"
	});
	
	//our candidates subscribe
	$.fn.formValidate({
		$submitBtn : ".top-talent-subscribe--wide .scfSubmitButton input",
		$frmParentClass :".top-talent-subscribe--wide"
	});
	
	//employers home 10 tips
	$.fn.formValidate({
		$submitBtn : ".tips-top-talent--outer .scfSubmitButton input",
		$frmParentClass :".tips-top-talent--outer"
	});
	
	//contact-us
	$.fn.formValidate({
		$submitBtn : ".contact-us .scfSubmitButton input",
		$frmParentClass :".contact-us"
	});
	
	//Gated Content
	$.fn.formValidate({
		$submitBtn : ".gated-frm .scfSubmitButton input",
		$frmParentClass :".gated-frm"
	});
	
	//Salary Guide
	$.fn.formValidate({
		$submitBtn : ".resources-sg .scfSubmitButton input",
		$frmParentClass :".scfForm"
	});
	
	//modals
	$("#btnTopTalent").click(function(){funcModal('.mod--overlay', '.tips-top-talent--outer');});
	$(".btnSalaryG").click(function(){funcModal('.mod--overlay', '.modal-sg--outer');});
	
	
	//resource slider
	if ($slider.length) {
		$slider.fireSlider({
			prev: $('.slider + .controls .prev'),
			next: $('.slider + .controls .next'),
			pager: $('.slider + .controls .pager'),
			pagerTemplate: '<a href="javascript:void(0);" class="pager-dot" data-track="slider dot"></a>',
			slide:	'.slider .slide',
			delay: 800000
		});
	}
	
	//quote slider
	if ($quoteslider.length) {
		$quoteslider.fireSlider({
			prev: $('.quote-slider--controls .icon-prev'),
			next: $('.quote-slider--controls .icon-next'),
			pager: $('.quote-slider-outter .pager'),
			pagerTemplate: '<a href="javascript:void(0);" class="pager-dot" data-track="slider dot"></a>',
			slide:	'.quote-slider .slide',
			delay: 800000
		});
	}
	
	
});

$(window).load(function(){
	//resourceTransforms();
	
});

(function($) {
$.fn.formValidate = function(settings) { 
	settings= $.extend({
		$frmParentClass :".apply-frm",
		$reqTxtClass : ".frm-req",
		$reqSelClass : ".frm-req-sel",
		phoneClass : "txt-phone",
		emailClass : "txt-email",
		zipClass : "txt-zip",
		fnameClass : "txt-fname",
		$reqChkClass: ".req-check",
		activeValidation : true,
		submitValidation : true,
		$submitBtn : ".scfSubmitButton input",
		resumeEmptyValidation : false,
		$activeValidationSelectors : ".form-mvc-cnt input, .form-mvc-cnt select"
	}, settings);
		
	var txtFieldWrap = $(settings.$reqTxtClass),
	selBoxWrap = $(settings.$reqSelClass),
	chkBoxWrap = $(settings.$reqChkClass),
	dataAttribute,
	errorCount,
	fnameValidated = false,
	lnameValidated = false,
	passCookies = false,
	fieldToPass = "all";
	
	
	
	/******** set up data attributes ******/	
	$.each(txtFieldWrap, function(){
		switch (true) {
      		case $(this).hasClass(settings.phoneClass):
        		dataAttribute = settings.phoneClass;
        	break;
      		case $(this).hasClass(settings.emailClass):
        		dataAttribute = settings.emailClass;
        	break;
      		case $(this).hasClass(settings.zipClass):
        		dataAttribute = settings.zipClass;
        	break;
			case $(this).hasClass(settings.fnameClass):
        		dataAttribute = settings.fnameClass;
        	break;
			default:
				dataAttribute = "txt-req";
    	}
		
		$(this).attr("data-field-type", dataAttribute);
		
	});
	
	//select boxes
	$.each($(selBoxWrap), function(){
		if ($(this).hasClass('sel-branch')) {$(this).attr("data-field-type", "sel-branch");}
		else {$(this).attr("data-field-type", "sel-req");}
		
	});
	
	//checkbox boxes
		$.each($(chkBoxWrap), function () {
			var $thisCheckBox = $(this).eq(0);
			$thisCheckBox.attr("data-field-type", "req-check");
			//if ($thisCheckBox.closest("div").find(".scfValidator").length <= 0) {
				
			//}

		});
	
	
	//resume
	$('.scfCustomFileUploadGeneralPanel').attr("data-field-type", "resume-req");
	
	
	/******** active validation (onblur) ********/
	if (settings.activeValidation === true && $(settings.$frmParentClass).length) {
		
		//on blur
		$(settings.$activeValidationSelectors).on("blur", function(){
			var $this = $(this);
			var attr = $this.attr("data-field-type");
			
			if (typeof attr !== typeof undefined && attr !== false) {
				validateField($this, false);
			}
			
		});
		
		
	}
	
	
	/******* Submit validation  ********/
	if(settings.submitValidation === true) {
		$(settings.$submitBtn).click(function(e){
			e.preventDefault();
			errorCount = 0;
			
			$(settings.$frmParentClass+ " input, " +settings.$frmParentClass+ " select").each(function(){
				var $this = $(this);
				var attr = $this.attr("data-field-type");
				
				if (typeof attr !== typeof undefined && attr !== false) {
					validateField($this, true);	
				}
			});
			
			validateResume();
			
			
			if(errorCount <= 0) {
				$(this).unbind('click').click();
				$(this).prop("disabled", true).css({"opacity":".5"});
				if($(this).is("input[type=submit]")){
					$(this).val("Please wait...");
				}else if($(this).is("button")){
					$(this).text("Please wait...");
				}
			}
			else {
				var $firstErr = $(settings.$frmParentClass+ ' .field-err:first');
				
				$(settings.$frmParentClass+ ' .field-err:first').focus();
 				$(window).scrollTop($firstErr.offset().top - 30);
			}
			
			
		});
	}
	
	
	
	/***** Resume Validation ******/
	function validateResume() {
		if(settings.resumeEmptyValidation === true) {
			var $frmValidator = $(".scfCustomFileUploadGeneralPanel").find(".scfValidator:first"),
			$field = $('.scfCustomFileUploadLabel');
			
			//reset 
			$frmValidator.html('');
			
			if($("#lblFilename").text() === "") {
				errorCount++;
				$frmValidator.html('<p class="val-error"><i class="icon icon-error"></i>Oops, please attach your resume.</p>').show();
				$field.addClass("field-err");	
			}
			else {
				$field.removeClass("field-err");		
			}
		}
		
	}//validate resume
	
	
	/******** Validation Magic *********/
	function validateField(field, validateOnSubmit) {
		var nameReg = /.*?/,
		phoneNumberReg =  /^([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10})$/,
		emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		zipcodeReg =  /^([0-9]{5})$/, 
		regTester,
		fieldType,
		$fnameVal,
		$frmLabel = field.parent("div").find("label").text().replace("*", ""),
		fieldMssg = "Oops, please enter your " +$frmLabel.toLowerCase()+ ".",
		$frmValidator = field.parent("div").find(".field-validation-valid:first"),
		fieldVal = field.val();		
		
		switch(field.data("field-type")) {
			case 'txt-email':
				regTester = emailReg;
				break;
			case 'txt-phone':
				regTester = phoneNumberReg;
				break;
			case 'txt-zip':
				regTester = zipcodeReg;
				break;
			case 'txt-fname':	
				fieldType = "fname";
				$frmLabel = "First name";
				regTester = nameReg;
				fieldMssg = "Oops, please enter your first name.";
				break;	
			case 'txt-req':
				regTester = nameReg;
				break;		
			case 'sel-branch':
				fieldType = "select";
				fieldMssg = "Oops, please select a " +$frmLabel.toLowerCase()+ ".";
				break;
			case 'sel-req':
				fieldType = "select";
				fieldMssg = "Oops, please select a " +$frmLabel.toLowerCase()+ ".";
				break;	
			case 'req-check':
					fieldType = "checkbox";
					fieldMssg = "The checkbox above is required.";
					break;				
			default:
				regTester = nameReg;
		}
		
		//reset if on submit
		if(validateOnSubmit === true){$frmValidator.html('')};
		
		
		//check if empty all fields except name combined
		if(fieldVal === "" || fieldVal === "0" ) {
			if(validateOnSubmit === false) return;
			errorCount++;	
			$frmValidator.html('<p class="val-error"><i class="icon icon-error"></i>'+fieldMssg+'</p>').show();
			field.addClass("field-err");
		}
		// added for required checkboxes
			else if (fieldType === "checkbox") {
				if (validateOnSubmit === false) {
					return;
				}
				if (!field.prop("checked")) {
					errorCount++;
					field.parent().parent().find('.field-validation-valid').html('<p class="val-error">' + fieldMssg + '</p>').show();
					field.addClass("field-err");
				} else {
					field.removeClass("field-err");
				}
			}
		//regex all txt fields except name combined 
	else if (fieldType !== "select" && regTester !== undefined && fieldVal !== undefined  && !regTester.test(fieldVal)) {
			errorCount++;
			$frmValidator.html('<p class="val-warning"><i class="icon icon-warning"></i>This is not a valid '+$frmLabel.toLowerCase()+ '.</p>').show();	
			field.addClass("field-err");	
		}
		//all good only if on blur
		else if (validateOnSubmit === false) {
			field.removeClass("field-err");
			$frmValidator.html('<p class="val-good"><i class="icon icon-check-solid"></i> &lsquo;'+$frmLabel +'&rsquo; looks good!</p>').show();
			if(field.data("field-type") === 'sel-branch') {$frmValidator.html('<p class="val-good"><i class="icon icon-check-solid"></i>We\'ll send your info to this branch.</p>').show();}
		}
		else {
			field.removeClass("field-err");	
		}
	
		
		
		
	} // function END
	/******** Validation Magic END *********/	
	
	
	
}
})(jQuery);	


/* Apply Phone Number Consent */
$(document).ready(function(){
	function telConsentToggle(thisObj){
		$(thisObj).attr('aria-expanded', function(index, attr){
			return attr == 'false' ? 'true' : 'false';
		});
		$(thisObj).attr('aria-pressed', function(index, attr){
			return attr == 'false' ? 'true' : 'false';
		});
		$('.tel-consent-details ol').slideToggle();
		$('.tel-consent-details').toggleClass('open');
	}
	
	if ( $('.tel-consent').length ){
		var telConsentDetails = '<div class="tel-consent-details"><p><span class="details-label">Some examples of why we may text or auto-dial your phone number&nbsp;<i class="dropdown icon" aria-label="Click here to toggle examples" role="button" aria-pressed="false" aria-expanded="false" tabindex="0"></i></span></p><ol><li>To better understand the type of work you\'re looking for.</li><li>To let you know about great jobs you might want to apply for.</li><li>To quickly communicate various assignment details to you.</li></ol></div>';
		$(telConsentDetails).appendTo('.tel-consent');
		$('.tel-consent-details .details-label').click(function(e){
			e.stopPropagation(true,true);
			var that = $(".icon",this);
			that.focus();
			telConsentToggle(that);
			});
		$('.tel-consent-details .dropdown').keypress(function(e){
			if ( e.key === 32 || e.key === "Enter" || e.key === "Space" || e.key === " " ){
				var that = $(this);
				telConsentToggle(that);
			}
		});
	}	
});


function mainNavigation() {
	var $html,
	$navButton,
	$navContainer,
	$navSearchRevealButton,
	CONSTANTS = {
            classes: {
                navActive: 'nav-active',
                navScroll: 'nav-scroll',
                searchBarActive: 'search-bar-active'
            }
    };
	
	//mobile nav btn
	this.onNavButtonClick = function(event) {
        $html.toggleClass(CONSTANTS.classes.navActive);
		$navContainer.toggleClass(CONSTANTS.classes.navScroll);
    	
		//desktop reset
		$html.removeClass(CONSTANTS.classes.searchBarActive);
		
		//Make sure navScroll is inactive when navActive is active
		//(ensures dark nav doent appear)
		if ($html.hasClass(CONSTANTS.classes.navActive)) {
			$navContainer.removeClass(CONSTANTS.classes.navScroll);
		}
		
	};
	
	//desktop search btn
	this.onNavSearchRevealButtonClick = function(event) {
        $html.toggleClass(CONSTANTS.classes.searchBarActive);
		
		//mobile reset
		$html.removeClass(CONSTANTS.classes.navActive);
		
		//Make sure navScroll is active
		//(when reducing to mobile size, this class is needed to show dark nav)
		if (!$navContainer.hasClass(CONSTANTS.classes.navScroll)) {
			$navContainer.addClass(CONSTANTS.classes.navScroll);
		}
		
    };
	
	//bind clicks
	 this.bindEvents = function() {
		$navButton.on('click', this.onNavButtonClick.bind(this));
		$navSearchRevealButton.on('click', this.onNavSearchRevealButtonClick)
    }; 
	
	 
	this.init = function() {
		$html = $('html');	
		$navButton = $('.nav-button');
		$navContainer = $(".nav-container");
		$navSearchRevealButton = $('.site-header').find('.search-button');
		this.bindEvents();
	}	
	
	this.init();
}

/*function mainNavigationOLD() {
   
	var $html,
        $htmlBody,
        $navContainer,
        $navButton,
        $navLinks,
        $navSearchRevealButton,
        navLinksWidthLarge,
        navIsLocked = false,
        CONSTANTS = {
            classes: {
                navActive: 'nav-active',
                navHiddenLarge: 'nav-hidden-large',
                navLocked: 'nav-locked',
                searchBarActive: 'search-bar-active'
            }
        },
        lastScrollTop = 0;


    this.toggleNavVisibility = function(navIsShown) {
        if (navIsShown) {
            $html.removeClass(CONSTANTS.classes.navActive);
			$(".nav-container").addClass("nav-scroll");
              
        } else {
            $html.addClass(CONSTANTS.classes.navActive);
			$(".nav-container").removeClass("nav-scroll");
           
        }
    };

    this.onNavButtonClick = function(event) {
	    var navIsShown = $html.hasClass(CONSTANTS.classes.navActive); 

        this.toggleNavVisibility(navIsShown);
    };

    this.onNavSearchRevealButtonClick = function(event) {
        $html.toggleClass(CONSTANTS.classes.searchBarActive);
    };

    this.onNavSearchClearClick = function(event) {
        if (event && event.currentTarget) {
            event.preventDefault();
            $(event.currentTarget).siblings('input[type="text"]').val('');
        }
    };

    this.checkNavStyle = function() {
        var windowWidth = $('.header-container').width(),
            navLinksWidth = navLinksWidthLarge || $('.nav-links-section').width(),
            HEADER_LHS_COMPONENTS_WIDTH = 485;
        
        if (windowWidth > 700) {
            navLinksWidthLarge = navLinksWidth;
        }

        if ((windowWidth - HEADER_LHS_COMPONENTS_WIDTH) > navLinksWidth) {
            $html.removeClass(CONSTANTS.classes.navHiddenLarge);
        } else {
            $html.addClass(CONSTANTS.classes.navHiddenLarge);
        }
    };



    this.onWindowScroll = function(event) {
        var st = $(window).scrollTop();
        
        if ((st >= lastScrollTop && navIsLocked) || st <= lastScrollTop && st === 0) {
            navIsLocked = false;
            $html.removeClass(CONSTANTS.classes.navLocked);
        } else if (st < lastScrollTop && !navIsLocked) {
            if($('body').hasClass('modal-open')) {
                return false;
            } else {
                navIsLocked = true;
                $html.addClass(CONSTANTS.classes.navLocked);
            }
        }
    
        lastScrollTop = st;
    };

    this.bindEvents = function() {
        $navButton.on('click', this.onNavButtonClick.bind(this));
        $navSearchClearButton.on('click', this.onNavSearchClearClick.bind(this));
        $navSearchRevealButton.on('click', this.onNavSearchRevealButtonClick)
       $.subscribe('window_resize', this.checkNavStyle.bind(this));

        $(window).on('scroll', this.onWindowScroll.bind(this));
    };

    this.init = function() {
        $html = $('html'),
        $navContainer = $('.nav-container');
        $navButton = $('.nav-button');
        $navLinks = $navContainer.find('a, button, input');
        $navSearchClearButton = $navContainer.find('.remove-search-item');
        $htmlBody = $('html, body');
        $navSearchRevealButton = $('.site-header').find('.search-button');
        this.bindEvents();
        this.checkNavStyle();
    };
	
	this.init();
}*/


/* Temp JS */
function jobSearchTransforms() {
	
}
// jobSearchTransforms()

function jobDetailTransforms() {
	var jobCity = $("#lblCity").text(),
	jobState = $("#lblState").text(),			
	joblocation = jobCity + jobState;
		
	//joblocation = $("span[itemprop=address]").text();
	//var $applyBtn = $("a[id$='hypApplyJob']");
		
	//add job ref & text to apply button
	//$applyBtn.attr('href', $applyBtn.attr('href') + window.location.search);
	
	
	//Apply with Indeed transforms (.one used to only fire once.....)
	/*$('.indeed-apply-widget').one('DOMNodeInserted', function(){
		if($(".indeed-apply-status-applied").length){$('.indeed-apply-button-label').html('Applied with <img src="/~/media/AdeccoGroup/Brands/Ajilon Brand/USA/media/images/resume-upload-services/indeed-logo.png" />');}
		else{$('.indeed-apply-button-label').html('Apply with <img src="/~/media/AdeccoGroup/Brands/Ajilon Brand/USA/media/images/resume-upload-services/indeed-logo.png" />');}
		$('.indeed-apply-button-inner').removeAttr("id");
	});*/
	
	$('.indeed-apply-widget').appendTo(".apply-btn-dropdown");
	$('.indeed-apply-widget').one('DOMNodeInserted', function(){
		$('.indeed-apply-button-inner').removeAttr("id");
		if($(".indeed-apply-status-applied").length){$('.indeed-apply-button-label').html('Applied with <img src="/~/media/AdeccoGroup/Brands/Ajilon Brand/USA/media/images/resume-upload-services/indeed-logo.png" />');}
		else{$('.indeed-apply-button-label').html('Apply with <img src="/~/media/AdeccoGroup/Brands/Ajilon Brand/USA/media/images/resume-upload-services/indeed-logo.png" />');}
	});
	
	
	//add date above header and remove the surrounding container
	$('.job-details .job--meta_date-posted #posted-date').prependTo('header.panel-header');
	$('.job-details .job--meta_date-posted').remove();
	
	//fix salary + date
	fixDateSalary($('#posted-date'), $('.job--meta_salary .job-details-value span'));
	
	//move job id
	$('.job--meta_reference-job-id div').appendTo('.box-footer');
	$('.job--meta_reference-job-id').remove(); //clean up
	
	socialShare(true);
	
	
	//predefinedjobs h5 txt change
	if(typeof (joblocation) != "undefined") {
		$('.job-details #predefinejobdiv h5').html("Most recent local jobs in <span>" +joblocation+ "</span>"); 
	}
	
}
// jobDetailTransforms() - loaded ONPAGE

function jobResultTransforms() {
	
	
	
	//need to hack the job info (salary, date, etc) to move below job summary...
	/*$(".single-job").each(function(){
		$(this).find(".job--meta").parent(".row").insertAfter(".top-spacing");
	}); v7 - needed to remove due to an issue with the meta info repeating several times */
	
	//add classes to btn search
	$(".btn-search").addClass("btn--white-outline btn--large");
	
	//add "Description" to job desc header
	$('<h2 class="blue">Description</h2>').prependTo(".job--task-specifics");
	
	
	//date + salary changes	+ state abbr capitalize
	$(document).ajaxComplete(function(){
		/*var $radiusSlider = $('.salary-slider-info span'),
		$facetTags = $('.tag__label'),
		$jobsFound = $('.job-results--right .panel-header .col-xs-12 h3'),
		radiusSliderText = specialCaseStateCode($radiusSlider.text()),
		jobsFoundText = specialCaseStateCode($jobsFound.text());
		
		//state abbr capitalize
		$radiusSlider.text(radiusSliderText);
		$jobsFound.text(jobsFoundText);
		
		$facetTags.each(function(){
			var $this = $(this), thisText = specialCaseStateCode($this.text());
			$thisTxt.text(thisText);	
		});*/
		
		
		
		//contract type
		/*var $facetContainer = $(".facet__type--container");
		var contractType = '<button type="button" class="btn btn-default dropdown-toggle facet__button contract__btn" data-toggle="dropdown"><span class="dropdown--label"><span data-bind="text: $root.getFacetDisplayName($data)">Contract Type</span></span></button>' 
		
		if($facetContainer.length) {
			$facetContainer.addClass("dropdown");
			$(".facet__type--container .facet__label--container").after(contractType);
			$(".facet__type--container .facets__nav-tabs").removeClass("nav facets__nav-tabs").addClass("dropdown-menu").attr("role", "menu");
			
		
		}*/
	
		/*$(".single-job").each(function(){
			var $this = $(this);
			fixDateSalary($this.find("[itemprop=datePosted] span"), $this.find('.job--meta-salary span'));
		});*/
	});
	
	//move mobile refine results
	$('.mobile-buttons').prependTo('.job-facets--left');
	
	
}
// jobResultTransforms()


function jobApplyTransforms() {
	//cache vars
	var $mainUploadResumePanel = $(".scfCustomFileUploadGeneralPanel"),
	$myComputerUploadBtn = $(".conventional-upload"),
	myComputerUploadBtnID  = $myComputerUploadBtn.attr('id'),
	$resumeUploadHelpText = $(".scfCustomFileUploadUsefulInfo"),
	$fileNameLabel = $("#lblFilename"),
	fileNameLabelVal = $fileNameLabel.html(),
	fileName = '',
	$lnLabel = $("#lnkDownload"), 
	activateBodyClick = false,
	jobtitle = '<span>' + $("header.panel-header h1").text().replace("New", "") + '</span>',
	joblocation = '<span>' + $('.media-body').first().text() + '</span>',
	jobtype = $("span[itemprop=employmentType]").text(),
	jobId = getParameterByName("id"),
	jobTitle = getParameterByName("jbsrc"),
	$frmValidator = $mainUploadResumePanel.find(".scfValidator:first");
	
	
	
	//autofill fixes:
	$('.txt-fname input').attr("autocomplete", "given-name");
	$('.txt-lname input').attr("autocomplete", "family-name");
	
	
	//add Job ID to ACTIVE apply
    if($("body.job-apply").length){$(".jobid-field input").val(jobId);}
	
	//add Job Title to PASSIVE apply
	
	if($("body.resume-submission").length && jobTitle !== null){
		jobTitle = jobTitle.replace(/_|-/g, " ");
		jobTitle = jobTitle.replace(/non /g, "non-");
		$(".jobtitle-field input").val(jobTitle);
	}
    
	
	//move select branch info
	$(".sel-branch .scfDropListUsefulInfo").appendTo(".sel-branch");
	
	//add terms of use messaging below the submit button
	$(".scfFooterBorder").insertAfter(".scfSubmitButton");
	
	//add validation divs to select fields
	$('<span class="scfValidator"></span>').appendTo(".frm-req-sel .scfDropListGeneralPanel, .scfCustomFileUploadGeneralPanel");
	
	//active job apply - change text in header
	if($("body.job-apply").length) {
		
		//generate "applying for" job string
		$(".apply-for").html('Applying for ' + jobtitle + joblocation );
		if (jobtype != "") {$('<span>'+ jobtype +'</span>').appendTo(".apply-for");} 
		
	}
	
	
	/*********RESUME UPLOAD********/
	
	//add a label to the file input (the same click event is allowed for its label)
	$('<label for="'+myComputerUploadBtnID+'"><div class="computer-logo"></div>My computer</label>').appendTo(".conventional-upload");
	
	
	//add select box for upload services & success div
	$mainUploadResumePanel.prepend('<div class="file-success"><i class="icon icon-check"></i>Success! Your resume is attached.</div><div class="file-select">Attach resume file from...<i class="icon icon-down-bold"></i></div>');
	
	//we need to move that label that shows us what we uploaded
	$fileNameLabel.insertAfter(".scfCustomFileUploadGeneralPanel");
	
	//move the helpful text
	$resumeUploadHelpText.insertAfter(".scfCustomFileUploadGeneralPanel");
	
	//add labels to upload services
	$(".file-upload .dropbox").append("Dropbox");
	$(".file-upload .gdrive").append("Google Drive");
	$(".file-upload .linkedIn").append("LinkedIn");
	
	//if body is clicked remove class above as well...
	$("body").click(function() {	
		if ($mainUploadResumePanel.hasClass("file-select-active") && activateBodyClick === true) {
			$mainUploadResumePanel.removeClass("file-select-active");
			activateBodyClick = false;
		}
	});
	
	//add click event for resume upload
	$(".file-select").click(function(event) {
		//stops from the body click happening above
		event.stopPropagation();
		
		if ($mainUploadResumePanel.hasClass("file-select-active")) {
			$mainUploadResumePanel.removeClass("file-select-active");
			activateBodyClick = false;
		}
		
		else {
			$mainUploadResumePanel.addClass("file-select-active");
			setTimeout(function(){activateBodyClick = true}, 700); 
		}
		
	});
	
	//linkedIn Apply once uploaded, add to label 
	if($lnLabel.length) {
		$lnLabel.appendTo($fileNameLabel);
		showResumeUploaded();
	};
	
	
	//remove resume
	$("body").on("click", ".remove-resume", function(){
		//ensure the body click event doesnt fire
		activateBodyClick = false;
		
		$("#lblFilename").text("");
		$(".file-upload-btn").val("");
		$lnLabel.html();
		
		//reset other panels
		$mainUploadResumePanel.removeClass("file-select-hide").addClass("file-select-active");
		setTimeout(function(){activateBodyClick = true}, 700);  
		$frmValidator.html('<p class="val-warning"><i class="icon icon-warning"></i>Donâ€™t forget to attach a new resume.</p>').show();	
		
		
	});
	
	
}



/* Global uploadFile Function redefined */
function UploadFile(uploadType, el) {
	if (uploadType == 'fileUpload') {
		
		var filePath = $('.file-upload-btn').val(),		
		fileObject = el.files[0];
		//setTimeout(
			//function() {
				var filePath = $('.file-upload-btn').val();
				var fileName = filePath.split('\\').pop();
				//cleaning up Dropbox/Google Drive/LinkedIn selection when user selects conventional file upload
				//$('#lblFilename').text('');
				console.log('filepath='+filePath);
				console.log('file='+fileName);
				//setting textbox value to support required field validation
				//document.getElementsByClassName('scfCustomFileUploadBox')[0].value = filePath;
				$('#lblFilename').text(fileName);
				showResumeUploaded(fileObject.size);	
		//}, 1000);

			
	 }
	 else if (uploadType == 'dropbox') {
		el.preventDefault();
		Dropbox.choose(options);
	 }
	 else if(uploadType == 'gdrive')
	 {
		el.preventDefault();
		
	 }
}

//check resume extension and show upload
function showResumeUploaded(files) {
	var $fileNameLabel = $("#lblFilename"),
	extension=$fileNameLabel.text().substr($fileNameLabel.text().lastIndexOf('.')+1).toLowerCase(),
	$mainUploadResumePanel = $(".scfCustomFileUploadGeneralPanel"),
	$files = files;
	$frmValidator = $mainUploadResumePanel.find(".scfValidator:first");
	$frmValidator.html('');
	
	switch (extension) 
	{
		case "doc":
		case "docx":
		case "htm":
		case "html":
		case "pdf":
		case "rtf":
		case "txt":
		case "wps":
			checkFileSize();				
			break;
		default:
			clearFiles();
			$frmValidator.html('<p class="val-error"><span><i class="icon icon-error"></i>Looks like something went wrong. </span>Files must be .doc, .docx, .htm, .html, .pdf, .rtf, .txt, or .wps format.</p>').show();	
	}
	
	
	
	function checkFileSize() {
		if(typeof ($files) != "undefined" && $files > 3145728) {
			clearFiles();
			$frmValidator.html('<p class="val-error"><span><i class="icon icon-error"></i>Looks like something went wrong. </span>Your File must be 3 MB or less</p>').show();	
		}
		else if (typeof ($files) != "undefined" && $files <= 0) {
			clearFiles();
			$frmValidator.html('<p class="val-error"><span><i class="icon icon-error"></i>Looks like something went wrong. </span>The file uploaded is empty.</p>').show();	
		}
		else {
			//Passes validation
			$frmValidator.html('');
			$mainUploadResumePanel.addClass("file-select-hide").removeClass("file-select-active");  
			$fileNameLabel.append('<span class="remove-resume"><i class="icon icon-close-solid"></i> Remove</span>');		
		}
	}
	
	function clearFiles() {
		$("#lblFilename").text("");
		$(".file-upload-btn").val("");
	}
		
}


function resourceTransforms() {
	
	//need to set "Topics" as default.
	$("#browseIndustries").removeClass("active");
	$("#industries").hide();
	$("#browseTopics").addClass("active");
	$("#topics").show();
	
	//set readmore links
	createReadMore();
	
	
	
	//checks if facet was clicked or pagination and resets reasmore link
	$( "body" ).on( "click", ".listing__facets a, .listing__facets input, .listing__facets .btn--reset, .listing__results .pager a, .listing__results .pager li", function() {
		createReadMore();
	});
	
	//for filter dropdowns..
	$(".listing__selections select").on("change", function(){
		createReadMore();
	});
	
	
	
	
	
	function createReadMore() {	
		//clone "read more button"
		$('.listing__result').each(function(){
			
			//reset for facet/pagination/filter clicks
			$(this).find(".listing__result--content a").remove();
			
			var read_more_link = $(this).find('.listing__result--title a').clone(), 
			read_more_title = $(this).find('.listing__result--title a').text(),
			listing_type = $(this).find('.listing__type span').text(),
			icon = ' <i class="icon icon-arrow-right"></i>',
			starting_text="";
			
			//Make resource singular
			listing_type = listing_type.replace(/s$|s\s$/, "");
			
			switch (listing_type) 
			{
				case "Infographic":
				case "Video":
					starting_text = 'View ';
					break;
				case "Tool":
					starting_text = 'Use ';
					break;
				default:	
					starting_text = 'Read ';
			}
			
			listing_type = listing_type + '&nbsp;';
			
			//Change text of cloned link & Append link below listing content	
			read_more_link.attr("data-track", read_more_title +" read link").find('span').html(starting_text + listing_type + icon);
			read_more_link.appendTo($(this).find('.listing__result--content'));
			
	
		});
	
	}
	
	
	//Resources Landing - Make Resource singular if only one of that type exists
	$(".resource__nav--items a").each(function() {
        var $this = $(this), $itemType = $this.find(".item--type");
		
		if ($this.find(".item--quantity").text() == "1") {
			$itemType.text($itemType.text().replace(/s$|s\s$/, ""));
		}
    }); 
	
	$('.resource__tags--tags a:contains("1 ")').each(function() {
		var $this = $(this);
		
		$this.text($this.text().replace(/s$|s\s$/, ""))
	});
	
	//resources landing add data-track
	$(".resource__nav--tags").each(function() {
		var resourceType = $(this).find("h3").text();
		$(this).find("a").each(function() {
			var resourceText = $(this).text();
		   $(this).attr("data-track", resourceType + " - " + resourceText);
		});
	});
	
}

function formTransforms() {
	//yellow promo subscribe
	if($('.promo--frm-subscribe').length) {
		$('.scfForm').each(function(){
			var emailLabel = $(this).find('.txt-email label').text().toLowerCase();
			$(this).find('.txt-email input').attr('placeholder', "Enter your " + emailLabel);	
		});	
	}
}


function leadershipBios() {
		
		$('.leader--more').click(function(){
			var thisID = $(this).attr('id').split('-');
			$('#leader-'+thisID[1]).show();
			$(this).hide();	
		});
		
		$('.leader--less').click(function(){
			var thisID = $(this).attr('id').split('-');
			$('#leader-'+thisID[1]).hide();
			$('#more-'+thisID[1]).show();	
		});

}

//date + salary transforms 
function fixDateSalary(theDate, theSalary) {
	var $datePostedText = theDate,
	$salaryPostedText =  theSalary,
	dateToday = new Date(),
	datePosted = new Date($datePostedText.text()),
	timeDiff = Math.abs(dateToday.getTime() - datePosted.getTime()),
	diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1),
	notaNum = isNaN(diffDays),
	formatedCurr = $salaryPostedText.text().replace(/(\$[\d,]*)\.[\d]{2}/g,'$1');

		 
	//need this due to multiple ajax calls to prevent the "NaN" bug. (added for ajaxComplete()) 
	if(notaNum === false) {
		
		if(diffDays === 0) {$datePostedText.text("Added today");}
		else if (diffDays === 1) {$datePostedText.text("Added 1 day ago");}
		else {$datePostedText.text("Added " + diffDays + " days ago");}
		
		//we add this here so it only runs once per salary
		$salaryPostedText.text(formatedCurr);
		
	}	
}

//get query string parameter
function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search.toLowerCase());
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


//modal
function funcModal(overlay, lightbox){
	
	$(overlay).fullWidth()
	//$(lightbox).centerAlign();
	
	$(overlay).fadeIn(150, function() {$(lightbox).slideDown(function(){$('.modal_close').addClass('modal_animated');});});
	$('body').addClass("modal-open");			   
	
	$(window).scrollTop(0);
	
	// Close modal
	$('.modal_close, .new-site-go, .mod--overlay').click(function (e) {
		if($(e.target).closest(".mod--outer").length === 0 || $(e.target).is('.modal_close')) {
			$('.modal_close').removeClass('modal_animated');
			$(lightbox).slideUp(function () {$(overlay).fadeOut(150);});
			$('body').removeClass("modal-open");
		}
	});

	// Ensure the lightbox overlay responds to changes in the viewport size.
	$(window).resize(function () {
		$(overlay).fullWidth(); 
		//$(lightbox).centerAlign();
	});	
} 


//center align
(function ($) {
    $.fn.centerAlign = function () {
        return this.each(function (i) {
            var ah = $(this).height(), ph = $(window).height(), mh = Math.ceil((ph - ah) / 2),
			aw = $(this).width(), pw = $(window).width(), mw = Math.ceil((pw - aw) / 2);
            $(this).css({'top': mh,'left': mw});
        });
    };
})(jQuery);

//full width
(function ($) {
    $.fn.fullWidth = function () {
        return this.each(function (i) {
            var fh = $(window).height(), fw = $(document).width();
            $(this).css({'width': fw,'height': fh});
        });
    };
})(jQuery);

//article survey (Are you in love with your job?)
function jobLoveSurvey() {
	var $survey = $('.job-love-survey'),
	$select = $('.job-love-survey select'),
	$errBox = $('.job-love-survey--err')
	$surveyresultWrap = $('.job-love-survey--results');
	
	//survey results
	$('a.job-love-survey--submit').click(function(){
		var score = 0, errCount = 0, $surveyresult = "";
		
		$errBox.hide();
		$select.removeClass('job-love-survey--select-err');
		
		//collect score
		$select.each(function() {
			$this = $(this),
            $thisScore = parseInt($this.val()); 
			
			if($thisScore === -1) {$this.addClass('job-love-survey--select-err'); errCount++;}
			
			score = score + $thisScore; 
			
        });
		
		if (errCount > 0) {$errBox.show();}
		else {
			if(score > 10) {$surveyresult = $('.job-love-survey--results-one');}
			else if (score < 6) {$surveyresult = $('.job-love-survey--results-three');}
			else {$surveyresult = $('.job-love-survey--results-two');}
			
			$surveyresult.show();
			$surveyresultWrap.show();
			$survey.hide();
		}
		
	});
	
	//reset
	$('a.job-love-survey--retake').click(function(){
		$surveyresultWrap.hide();
		$('.job-love-survey--result').hide();
		$survey.show();
		
		$select.each(function() {
			$(this).val("-1");
		});
		
	});
}


//Dropbox scripts - START
options = {

    // Required. Called when a user selects an item in the Chooser.
    success: function (files) {
		_fileNameLabel = document.getElementById("lblFilename");
		
        // INC3025877 Issue File upload Validation For Modis
        if (typeof getCookie("modis.us#lang") != "undefined") {
            if (files[0].bytes > 3145728) {
                alert("File exceeds size limit and cannot be submitted.Files must be 3 MB or less.");
                //reset file upload control
                return false;
            }
        }
        //End Validation
        $("input[id*='hdnDownloadink']").val(files[0].link);
        $("input[id*='hdnFilename']").val(files[0].name);

        //display selected filename on front
       //_fileNameLabel.innerHTML = document.getElementById("hdnFilename").value;
        //document.getElementsByClassName('scfCustomFileUploadBox')[0].value = document.getElementById("hdnFilename").value;
		document.getElementById("lblFilename").innerHTML = $("input[id*='hdnFilename']").val();
        document.getElementsByClassName('scfCustomFileUploadBox').value = $("input[id*='hdnFilename']").val(files[0].name);
		
		showResumeUploaded(files[0].bytes);
		
        //cleaning up fupConventionalFileUpload (file upload) value
        //document.getElementById(document.getElementById("hdnFupConventionalFileUploadId").value).value = null;
    },
    cancel: function () {},
    linkType: "direct",
    multiselect: false, 
    extensions: ['.doc', '.docx', '.rtf', '.pdf', '.txt', '.html', '.odt', '.wpd'],
};
//Dropbox scripts - END

//Google Drive - START
 function pickerCallback(data) {
        var url = 'nothing';
		
        if (data.action == google.picker.Action.PICKED) {
          var doc = data[google.picker.Response.DOCUMENTS][0];
          url = doc[google.picker.Document.URL];
		  
		  var file = data.docs[0];
		  console.log(file);
           $("input[id*='hdnDownloadink']").val(url);
                      $("input[id*='hdnFilename']").val(file.name);
                      //display selected filename on front
					  $("#lblFilename").text(file.name);
                      //document.getElementById("lblFilename").innerHTML = document.getElementById("hdnFilename").value;
                      //setting textbox value to support required field validation
                      $("input[id*='scfCustomFileUploadBox'][0]").val(file.name) ;
            showResumeUploaded(file.sizeBytes);         
        }       
        
 }

//Google Drive - END

//job url 
function jobSearchUrl() {
	var keyword = $('.location--left').attr("data-industry").toLowerCase(),
	location =  $('.location--left').attr("data-location").toLowerCase(),
	locationFriendly = $('.location--left').attr("data-location");
	
	locationFriendly = locationFriendly.replace(/\+/g, ", ");
	
	//fix text for h5
	$('.row-location-industry #predefinejobdiv h5').text($('.location--left').attr("data-industry")+ " Jobs in " +locationFriendly);
	
	//replace spaces with plus
	keyword = keyword.replace(/\s+/g, "+");
	
	//testing
	keyword = "";
	location = "jacksonville";
	
	//set up search URL
	//_url = domain+ '?k=' +keyword+ '&l=' +location+ '&pagenum=1&display=10&jobCategories=AJILON-2200%7c';
	_url = domain+ '?k=' +keyword+ '&l=' +location+ '&pagenum=1&display=9';
}

function jobDetailSearchUrl() {
	var jobCity = $("#body_0_contentcolumn_0_lblCity").text(),
	jobState = $("#body_0_contentcolumn_0_lblState").text(),			
	joblocation = jobCity + jobState;
	_url = domain+ '&k=&l=' +joblocation+ '&pagenum=1&display=9';
}


function locationsColfix() {
	var numItems = $('.locations .list--item').length,
	numRemainder = numItems%3,
	numDivided = parseInt(numItems/3),
	stringCopiled = '<div class="loc-col">',
	stateCount = 0,
	colOneExtra = 0,
	colTwoExtra = 0;
	
	//for uneven # in columns
	switch (numRemainder) 
	{
		case 1:
			colOneExtra = 1;
			break;
		case 2:
			colOneExtra = 1;
			colTwoExtra = 1;
			break;
		default:	
			
	}
	
	
	//get outer HTML instead of whats inside the element
	$.fn.outerHTML = function() {
	  return $('<div />').append(this.eq(0).clone()).html();
	};
	
	//It's magic time
	$('.locations .list--item').each(function() {
		var $thisHtml = $(this).outerHTML();
		
		//debugger;
		stateCount++;
		if (stateCount == numDivided + colOneExtra || stateCount == numDivided + numDivided + colOneExtra + colTwoExtra) {
			stringCopiled = stringCopiled + $thisHtml + '</div><div class="loc-col">';
		}
		else {
			stringCopiled = stringCopiled + $thisHtml;	
		}
			
	});
	
	//add in that last closing div
	stringCopiled = stringCopiled + '</div>';
	
	//finally append and show the container
	$('.locations .list--items').html(stringCopiled).show();
	
	
	
}


function ToggleRefine() {
	($('#jobResponse .faceted-search').is(':hidden')) ? $('#jobResponse .faceted-search').show() : $('#jobResponse .faceted-search').hide();
}

function specialCaseStateCode(str) {
	if (/(, [a-zA-Z]{2})/.test(str)) {
			str = str.replace(/(, [a-zA-Z]{2})/, function(abbr) {return abbr.toUpperCase()});
	}
	return str;
}

function badHireCalc() {
	
	$('.fm-salary-calc .txt-email input').attr("placeholder", "Enter your email");
	
	//Reset Calc
	$('.reset-calc').click(function(){
		$('.field-wrap input, #total-cost').val('');
		$('#total-cost-calc').removeAttr('style');
	});
	
	
	$('#calculate-cost').click(function(){

		var passValidation = true;
		
		//reset total to $0
		$('#total-cost').val("");
		
		//validate
		$('.field-wrap input').each(function() {
	
            //set to 0 if value is nothing
			if($(this).val() == "") {$(this).val("0")}

			var theField = parseFloat($(this).val().replace(/\$|,/g, ""));

			//if not a number or positive number
			if(theField >= 0 && theField < 10000001) {
				$(this).removeClass('field-err');
				$(this).parent('.field-wrap').find('label').removeClass('label-err');	
				$('.label-mssg').css("display", "none");
			}
			else {
				passValidation = false;
				$(this).addClass('field-err');
				$(this).parent('.field-wrap').find('label').addClass('label-err');
			}
        });
		
		

		if(passValidation == true) {

			//hide messaging
			$('.label-mssg').hide();

			//parse string into number and remove commas and dollar signs
			var annualSalary = parseFloat($('#txt-annual-salary').val().replace(/\$|,/g, ""));
			var avgPositionFill = parseFloat($('#txt-avg-position-fill').val().replace(/\$|,/g, ""));
			var hiringManagerSalary = parseFloat($('#txt-hiring-manager-salary').val().replace(/\$|,/g, ""));
			var avgScreen = parseFloat($('#txt-avg-screen').val().replace(/\$|,/g, ""));
			var avgReview = parseFloat($('#txt-avg-review').val().replace(/\$|,/g, ""));
			var advertisementCost = parseFloat($('#txt-advertisement-cost').val().replace(/\$|,/g, ""));
			var screeningCost = parseFloat($('#txt-screening-cost').val().replace(/\$|,/g, ""));
			var lostProductivityCost = parseFloat($('#txt-lost-productivity-cost').val().replace(/\$|,/g, ""));
			var daysHireTrain = parseFloat($('#txt-days-hire-train').val().replace(/\$|,/g, ""));
			
			//console.log(daysHireTrain);
			//here is the magic formula
			var totalCost = ((annualSalary/365)*avgPositionFill)+((hiringManagerSalary/2080)*avgScreen)+(avgReview*(hiringManagerSalary/2080))+advertisementCost+screeningCost+lostProductivityCost+((annualSalary/260)+(hiringManagerSalary/260)*daysHireTrain);
			
			//round decimal to 2
			totalCost = parseFloat(totalCost).toFixed(2);

			//add commas to number
			totalCost = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			
			
			showResults(totalCost);
			
		}

		if (passValidation == false) {
			$('.label-mssg').show();
		}

	});	
	
	function showResults(totalCost) {
		
		$('#total-cost-calc').show();
		 
		//change calculate to recalculate
		$('#total-cost-box a').text('Recalculate');
		 
		//show results
		$('#total-cost').text("$"+totalCost);
	}
}

function pressRoomNav() {
	
	$('.press--nav').click(function(){
		$('.press--nav').removeClass('active');
		if($(this).hasClass('press--nav-news')) {
			$(this).addClass('active');	
			$('.news--items').show();
			$('.press--items').hide();
		}
		else {
			$('.press--nav-press').addClass('active');
			$('.press--items').show();	
			$('.news--items').hide();	
		}
	});	
	
	
		
}

//Set New Cookie
function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value + "; path=/";
}

//Get Cookie
function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
			return unescape(y);
		}
	}
}

function newSiteFaq() {
	$(".new-site-faq-item span, .new-site-faq-item .icon").click(function(){
		var $parent = $(this).parent("div"),
		clicked = $parent.attr('id');
		
		if($parent.hasClass('activefaq')) {
			$("."+clicked).hide();
			$parent.find(".icon").removeClass("icon-minus").addClass("icon-plus");	
			$parent.removeClass('activefaq');
		}
		else {
			$("."+clicked).show();
			$parent.find(".icon").removeClass("icon-plus").addClass("icon-minus");	
			$parent.addClass('activefaq');
		}
			
	});	
}


function newSitePops() {	
	if(!getCookie("new-site-modal")) {
		setCookie("new-site-modal", "1", 30);
	//	funcModal('.mod--overlay', '.new-site--outer');
	}
	
}

function newSiteBanner() {
	if(!getCookie("new-site-banner")) {
		$('.new-site-banner').show();	
	}
	
	$("#new-site-banner--close").click(function(){
		setCookie("new-site-banner", "1", 30);
		$('.new-site-banner').slideUp();	
	});
}

function socialShare(sharingTitle) {
	var shareUrl = window.location.href;
	shareTitle = $('h1').text(),
	shareTitle = shareTitle.replace(/[\s]{2,}/g, "");
	shareElements = '<div class="social-share">' +
	'<a href="http://www.facebook.com/sharer.php?u='+shareUrl+'&utm_source=facebook&utm_medium=sitesocial&utm_campaign=socialshare" target="_blank" data-track="share - facebook"><i class="icon icon-facebook first"></i></a>' +
    '<a href="https://twitter.com/share?url='+shareUrl+'&utm_source=twitter&utm_medium=sitesocial&utm_campaign=socialshare&text='+shareTitle+'" target="_blank" data-track="share - twitter"><i class="icon icon-twitter"></i></a>' +
    '<a href="http://www.linkedin.com/shareArticle?url='+shareUrl+'&utm_source=linkedin&utm_medium=sitesocial&utm_campaign=socialshare&title='+shareTitle+'" target="_blank" data-track="share - linkedin"><i class="icon icon-linkedin"></i></a>' +
    '<a href="https://plus.google.com/share?url='+shareUrl+'&utm_source=googleplus&utm_medium=sitesocial&utm_campaign=socialshare" target="_blank"  data-track="share - google plus"><i class="icon icon-gplus last"></i></a>' +
	'</div>';
	
	if(sharingTitle === true) {
		shareElements = '<div class="media social-share--title">Share This Job</div>' +	shareElements;
	}
	

	$(shareElements).appendTo('footer.box-footer'); 
}

function fxLinks() {
	$('.job--description a').each(function() {
    	var ref = $(this).attr("href");
		if(!ref.match("http")){
			$(this).attr("href", "https://" + ref);
		}	
	});
}

//passive (since this is executed on an action, the function is called in doc.ready)
function sendPassiveApplyEmails() {
	$(".apply-frm .sel-branch select").change(function() {
		//var thisValue = $(".apply-frm .sel-branch select option:selected").text();
		var thisIndex = $(this).prop('selectedIndex');
		
		//console.log("Branch Value: " +thisIndex);
		
		//set value of select to use as an email
		$(".apply-frm .sel-sendto select option:eq("+thisIndex+")").prop('selected', true);
		
		//console.log("selected: " + $(".apply-frm .sel-sendto select").val());
	});
	
}

//active (function called on active apply page)
function recordActiveApplyEmails() {
	
	var recruiterEmail = $("#body_0_contentcolumn_1_hypRecruiter").attr("href"),
		emailCleaned = recruiterEmail.replace("mailto:", ""),
		jobCat = $(".job--meta_category .job-details-value").text(),
		jobTitle = $("header.panel-header h1").text().replace("New", "");
	
	//trim leading/training spaces
	jobCat = jobCat.replace(/^\s+|\s+$/g, '');
	jobTitle = jobTitle.replace(/^\s+|\s+$/g, '');
	
	//console.log("recruiterEmail: "  + recruiterEmail);
	//console.log("emailCleaned: " + emailCleaned);
	//console.log("jobcat: " + jobCat);
	//console.log("jobtitle: " + jobTitle);
	
	$(".sendto-field").val(emailCleaned);
	$(".jobtitle-field").val(jobTitle);
	$(".jobcat-field").val(jobCat);
	//$(".sendto-field select option").val(emailCleaned);
}

function requiredCCPAcheckbox(parent, checkboxClass, message){
	var ccpaCheckbox = $(parent).find(checkboxClass + " input[type=checkbox]").eq(0);

	function checkCCPAbutton(){
		var submitButton = $(".scfSubmitButton input", parent).eq(0);

		if(ccpaCheckbox.is(":not(:checked)")){
			submitButton.prop("disabled", true);
			submitButton.attr("title", message);
		}else{
			submitButton.prop("disabled", false);
			submitButton.removeAttr("title");
		}
	}
	
	checkCCPAbutton();

	ccpaCheckbox.on("click", function(){
		checkCCPAbutton();
	});
}

function showMoreCCPAdetails(triggers, details){
	$(triggers).add(details).on("mouseenter", function(){
		$(details).show();
	}).on("mouseleave", function(){
		$(details).hide();
	});
}

$(document).ready(function () {
	$( ".job-apply form" ).submit(function( event ) {
		$(this).unbind('click').click();
				$(this).prop("disabled", true).css({"opacity":".5"});
				if($(this).is("input[type=submit]")){
					$(this).val("Please wait...");
				}else if($(this).is("button")){
					$(this).text("Please wait...");
				}
	});
	$( ".resume-submission form" ).submit(function( event ) {
		$(this).unbind('click').click();
				$(this).prop("disabled", true).css({"opacity":".5"});
				if($(this).is("input[type=submit]")){
					$(this).val("Please wait...");
				}else if($(this).is("button")){
					$(this).text("Please wait...");
				}
	});
	
});

if ($('.agree-to-terms').length) {
	$('.agree-to-terms label').html('I HAVE READ AND AGREE WITH THE <a href="https://www.specialcounsel.com/terms-of-use/">TERMS OF USE</a>, <a href="https://www.specialcounsel.com/privacy-policy/">PRIVACY</a> AND <a href="https://www.specialcounsel.com/cookie-policy">COOKIE POLICY</a>');
}


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function welcome() {
	if (window.location.pathname == "/" && !getCookie('welcome')) {
		$(document).ready(function () {


			setCookie('welcome', false, 999);
			$('#splash').insertAfter('.page-main');
			var video = '<div class="video-wrap"><div class="video-responsive"><iframe src="https://www.youtube.com/embed/sgdhrwblVi4?rel=0&controls=0&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
			setTimeout(function () {
				$(video).appendTo($('.page-header'));
			}, 3000);

			$('#splash .page-header').css("margin-bottom", "30rem");
			$('.page-main, .site-header').delay(3000).fadeOut();
			$('#splash').delay(3000).fadeIn();
		});
	}

}


$(function () {
	var pathName = window.location.pathname;
	
	//apply
	if ($(".active-apply").length >= 1) {
		$.fn.formValidate({
			$submitBtn: ".active-apply  .scfSubmitButton input",
			$frmParentClass: ".page-main",
			resumeEmptyValidation: true
		});
	}
	if ($(".resume-apply").length >= 1) {
		$.fn.formValidate({
			$submitBtn: ".resume-apply .scfSubmitButton input",
			$frmParentClass: ".page-main",
			resumeEmptyValidation: true
		});
	}
	if ($(".contact-us-form").length >= 1) {
		$.fn.formValidate({
			$submitBtn: ".contact-us-form .scfSubmitButton input",
			$frmParentClass: ".page-main",
			resumeEmptyValidation: false
		});
	}
	if ($(".event-form").length >= 1) {
		$.fn.formValidate({
			$submitBtn: ".event-form .scfSubmitButton input",
			$frmParentClass: ".page-main",
			resumeEmptyValidation: false
		});
	}
	
	// Add privacy link to job details hook
	if (/^\/legal-jobs\//.test(pathName) && $('#privacy-link').length) {
		$('#privacy-link').html(' <a href="/candidate-privacy/" target="_blank">click here</a>.');
	}
	
	if ($(".resource-form").length >= 1) {

		// Smooth scroll to form if #gated resources button in header
		if ($("#gated-form").length >= 1 && $(".page-header a[href='#gated-form']").length >= 1) {
			$(".page-header a[href='#gated-form']").on("click.smoothScroll", function (e) {
				e.preventDefault();
				smoothScroll("#gated-form");
			});
		}

		// Gated Resources form validation
		$.fn.formValidate({
			$submitBtn: ".resource-form .scfSubmitButton input",
			$frmParentClass: ".page-main",
			resumeEmptyValidation: false,
			$reqTxtClass: ".scfSingleLineTextBorder:not('.name\\.Company'), .name\\.Email, .name\\.Phone",
			$reqSelClass: ".scfDropListBorder, .frm-req-sel",
			$activeValidationSelectors: ".resource-form  input, .resource-form  select",
			phoneClass: "scfTelephoneBorder",
			emailClass: "scfEmailBorder"
		});
	}

});

$('link[href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"]').remove();
$('link[href="//cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"]').remove();



// Closure last-height/width
var lastX = window.innerWidth
var lastY = window.innerHeight


window.addEventListener("resize", flickityOnResize)
window.addEventListener("resize", flickityInit)

function mobileNav() {

	$(".mobile-nav-button").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("mobile-sticky");
	});

	$(".mobile-sticky .main-nav-links > li > .icon").on("click",function(e) {
	
		$(".main-nav-links li").removeClass("active-subnav");
		$(this).parent("li").toggleClass("active-subnav");

	});
}

function stickyNav() {
	// Get the header
	var header = document.querySelector(".site-header");
	// Get the offset position of the navbar
	var sticky = header.offsetTop;


	// When the user scrolls the page, execute myFunction
	window.onscroll = function () {
		myFunction()
	};


	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if ($(window).width() > 931) {
			if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			} else {
				header.classList.remove("sticky");
			}
		}
	}
}

function activeNav() {
	var pathURL = window.location.pathname;
	var pathURLParts = pathURL.split('/');

	$(".main-nav-links li[data-section]").each(function () {
		var secName = $(this).attr("data-section");

		if (pathURLParts[1] == secName) {
			$(this).addClass("active-nav");
		}
	});

	$(".main-nav-links a").each(function () {
		var anchorUrl = $(this).attr("href");

		if (pathURL.match(anchorUrl)) {
			$(this).addClass("active");
		}
	});
}
/*
function activeNav() {
	var pathURL = window.location.pathname;

	$(".main-nav-links li[data-section]").each(function () {
		var secName = $(this).attr("data-section");

		if (pathURL.match(secName) && !$('body').attr('[class')) {
			$(this).addClass("active-nav");
		}
	});

	$(".main-nav-links a").each(function () {
		var anchorUrl = $(this).attr("href");

		if (pathURL.match(anchorUrl)) {
			$(this).addClass("active");
		}
	});
}
*/


function flickityInit() {
	if ($(window).width() < 932) {
		if ($('.resource-carousel').length && !$('.resource-carousel').hasClass("flickity-enabled")) {
			$('.resource-carousel').flickity({
				// options
				cellAlign: 'left',
				prevNextButtons: false,
				pageDots: false,
			});
		}
		if ($('.trusted-brand-list').length && !$('.trusted-brand-list').hasClass("flickity-enabled")) {
			$('.trusted-brand-list').flickity({
				// options
				cellAlign: 'left',
				prevNextButtons: false,
				pageDots: false,
			});
		}
	}
	if ($headerCarousel = $('.header-carousel')) {
		// bind event listener first
		$headerCarousel.on('ready.flickity', function () {

		});




		if (!$('.header-carousel').hasClass("flickity-enabled")) {
			$headerCarousel.flickity({
				wrapAround: true,
				adaptiveHeight: true,
				arrowShape: 'M24.94,52,71.13,99.17a2.72,2.72,0,0,0,3.92,0,2.89,2.89,0,0,0,0-4L30.82,50,75.05,4.84a2.87,2.87,0,0,0,0-4,2.77,2.77,0,0,0-2-.84,2.65,2.65,0,0,0-1.95.84L25,48A2.85,2.85,0,0,0,24.94,52Z'
			});

		}

	}
	
	if ($testimonialSlider = $('.testimonial-slider')) {
		if (!$('.testimonial-slider').hasClass("flickity-enabled")) {
			$testimonialSlider.flickity({
				cellAlign: 'center',
				prevNextButtons: false,
				adaptiveHeight: true
			});

		}

	}
}



function flickityOnResize() {
	var x = window.innerWidth
	var y = window.innerHeight
	if (lastX < 932 && 932 < x) {
		$('.flickity-enabled').not('.header-carousel').flickity('destroy');
	}

	lastX = x
	lastY = y
}

function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function activeApply() {
	if (window.location.pathname === '/active-apply/') {
		var jobID = getUrlParameter("ID");
		var jobTitle = getUrlParameter("jobTitle");
		var jobLocation = getUrlParameter("location");
		var jobSalary = getUrlParameter("salary");
		var jobCategory = getUrlParameter("category");

		var jobHeader = '<header class="job-header"><h1>Application for ' + jobTitle + '</h1><p class="location">' + jobLocation + '</p><ul class="position-details"><li class="category">' + jobCategory + '</li><li class="salary">' + jobSalary + '</li></ul></header>';

		$(jobHeader).prependTo('.page-main');
	}
}

function preferredLocationSelect() {
	if ($('.location-wrap').length) {
		$('.location-wrap').hide();
		var newLocationSelect = '<div class="ui sub header">Preferred Location *</div><div class="ui selection dropdown pref-loc"><input name="preferred-location" type="hidden" id="step-3"> <i class="dropdown icon"></i><div class="default text">Select you closest location...</div><div class="menu">';

		$('.location-wrap select option').each(function () {
			newLocationSelect += '<div class="item" data-value="' + $(this).val() + '">' + $(this).text() + '</div>';
		});
		newLocationSelect += '</div></div>';

		$(newLocationSelect).insertBefore('.location-wrap');
		$('.pref-loc').dropdown({
			onChange: function (value, text, $choice) {
				//console.log('value: ' + value + ' | text: ' + text + ' | choice: ' + $choice);
				$('.location-wrap option:selected').removeAttr('selected');
				$('.location-wrap [value=\"' + value + '\"]').attr('selected', true);
			}
		});

	}
}

function styleDropdowns() {
	$('div[role="form"] select').each(function () {

	});
}



function jobDetails() {
	if ($("body").hasClass("job-details")) {
		$('.apply-btn-dropdown').clone().insertBefore("#liReferenceJobID");
		$('.job--task-specifics *').each(function (index, item) {
	/*		if ($.trim($(item).text()) === "" || $.trim($(item).text()) === "&nbsp;") {
				$(item).remove();
			}*/
			$(this).removeAttr('style');
		});
		if ( $(".box-footer").length && $(".gptw-container").length ) {
			$(".gptw-container").insertBefore(".box-footer");
			$(".gptw").addClass("show");
		}
	}
}

function applyTransform() {
	if ($("body").is(".active-apply, .passive-apply")) {
		$('.scfFooterBorder').insertAfter('.scfSubmitButtonBorder');
	}
	var $mainUploadResumePanel = $(".scfCustomFileUploadGeneralPanel"),
		$myComputerUploadBtn = $(".conventional-upload input"),
		myComputerUploadBtnID = $myComputerUploadBtn.attr('id'),
		$resumeUploadHelpText = $(".scfCustomFileUploadUsefulInfo"),
		$fileNameLabel = $("#lblFilename"),
		fileNameLabelVal = $fileNameLabel.html(),
		fileName = '',
		$lnLabel = $("#lnkDownload"),
		activateBodyClick = false,
		jobtitle = '<span>' + $("header.panel-header h1").text().replace("New", "") + '</span>',
		joblocation = '<span>' + $('.media-body').first().text() + '</span>',
		jobtype = $("span[itemprop=employmentType]").text(),
		jobId = getParameterByName("id"),
		jobTitle = getParameterByName("jbsrc"),
		$frmValidator = $mainUploadResumePanel.find(".scfValidator:first");

	//add a label to the file input (the same click event is allowed for its label)
	//$('<label for="' + myComputerUploadBtnID + '"><div class="computer-logo"></div>My computer</label>').appendTo(".conventional-upload");


	//add select box for upload services & success div
	//$mainUploadResumePanel.prepend('<div class="file-success"><i class="icon icon-check"></i>Success! Your resume is attached.</div><div class="file-select">Attach resume file from...<i class="icon icon-down-bold"></i></div>');

	//we need to move that label that shows us what we uploaded
	$fileNameLabel.insertAfter(".scfCustomFileUploadGeneralPanel");

	//move the helpful text
	//$resumeUploadHelpText.insertAfter(".scfCustomFileUploadGeneralPanel");

	//add labels to upload services
	//$(".file-upload .dropbox").append("Dropbox");
	//$(".file-upload .gdrive").append("Google Drive");
	//$(".file-upload .linkedIn").append("LinkedIn");

	//if body is clicked remove class above as well...
	$("body").click(function () {
		if ($mainUploadResumePanel.hasClass("file-select-active") && activateBodyClick === true) {
			$mainUploadResumePanel.removeClass("file-select-active");
			activateBodyClick = false;
		}
	});

	//add click event for resume upload
	$(".file-select").click(function (event) {
		//stops from the body click happening above
		event.stopPropagation();

		if ($mainUploadResumePanel.hasClass("file-select-active")) {
			$mainUploadResumePanel.removeClass("file-select-active");
			activateBodyClick = false;
		} else {
			$mainUploadResumePanel.addClass("file-select-active");
			setTimeout(function () {
				activateBodyClick = true
			}, 700);
		}

	});

	//linkedIn Apply once uploaded, add to label 
	if ($lnLabel.length) {
		$lnLabel.appendTo($fileNameLabel);
		showResumeUploaded();
	}


	//remove resume
	$("body").on("click", ".remove-resume", function () {
		//ensure the body click event doesnt fire
		activateBodyClick = false;

		$("#lblFilename").text("");
		$("#hdnDownloadink, #hdnFilename, #hdnLinkedInResumeName, .conventional-upload input, .scfCustomFileUploadBox").val("");
		$lnLabel.html();

		//reset other panels
		$mainUploadResumePanel.removeClass("file-select-hide").addClass("file-select-active");
		setTimeout(function () {
			activateBodyClick = true
		}, 700);
		$frmValidator.html('<p class="val-warning"><i class="icon icon-warning"></i>Donâ€™t forget to attach a new resume.</p>').show();


	});

}

function profiles() {
	if (window.location.pathname === '/about-us/meet-our-team/') {
		$(window).load(function () {
			$('.selection').dropdown();
		});
	}
}

function contactUs() {
	if (window.location.pathname === '/contact-us/') {
		var routing;

		$(document).ready(function () {
			$('.selection').dropdown();
			preferredLocationSelect();

			$('.pref-loc').dropdown({
			
				onChange: function (value, text, $choice, routing) {
				//	console.log('value: ' + value + ' | text: ' + text + ' | choice: ' + $choice + ' | ROUTING: ' + routing);
				
				if ( routing !== "" ){ 
						if ( routing === "branch" ){
							routing = $('#step-3').val();
						}
						$('.routing-input input').val(routing);
					}
					$('.location-wrap option:selected').removeAttr('selected');
					$('.location-wrap select').val(value);
					$('.location-wrap [value=\"'+ value +']\"').attr('selected','selected');
					
				}
			});

	
		});
		$('.scfSubmitButton').hover(function(){
			if ( routing === "branch" ){
				routing = $('#step-3').val();
			}
			if (routing == "attorney-recruiting") {
				$('#question-attorney-recruiting').val();
				switch (value) {
					case "Contract Attorneys":
					case "Contract &amp; Direct Hire Legal Support Professionals":
					case "Law Firm Associate Recruiting":
						routing = "branch";
						break;
					case "In-House Counsel Recruiting":
						routing = "sarah.breen@parkerlynch.com";
						break;
					case "Law Firm Partner Recruiting":
						routing = "vered.krasna@parkerlynch.com";
						break;
					case "Legal Technology Recruiting":
						routing = "Nicholas.grimm@parkerlynch.com";
						break;
				}
			}
			
			$('.routing-input').val(routing);
		});
		

		$('.question-1 .button-yellow').click(function (e) {
			e.preventDefault();
			var value = $('#question-1').val();

			if (value.length >= 1) {
			

				switch (value) {
					case "managed-review":
						routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
						$('.question-1, .val-error').fadeOut(300, function () {
							$('.contact-us-progress-bar li.active').toggleClass('active completed').html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13 10" style="enable-background:new 0 0 13 10;" xml:space="preserve"><path class="st0" d="M0.2,5.5C0.1,5.4,0,5.2,0,5.2s0.1-0.2,0.2-0.3l0.7-0.7c0.2-0.2,0.5-0.2,0.7,0l0.1,0.1l2.8,2.9 c0.1,0.1,0.2,0.1,0.3,0l6.7-6.9h0.1c0.2-0.2,0.5-0.2,0.7,0l0.7,0.7c0.2,0.2,0.2,0.5,0,0.7l-8,8.3C4.8,9.9,4.7,10,4.5,10S4.2,9.9,4.2,9.9L0.2,5.7L0.2,5.5z"/></svg>');
							$('.contact-us-progress-bar li:nth-child(2)').addClass('active');
							$('.question-3').fadeIn(200, function () {
								$('.first-service-choice').val(value);
								$('.question-3').find('[data-value=' + value + ']').remove();
							});

						});
						break;
					case "attorney-recruiting":
						routing = value;
						$('.question-1 .button-yellow, .val-error').fadeOut(100, function () {
							$('.question-2.' + value).fadeIn();
							$('.first-service-choice').val(value);
							$('.question-3').find('[data-value=' + value + ']').remove();
						});
						break;
					case "technology-ediscovery":
						routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
						$('.question-1 .button-yellow, .val-error').fadeOut(100, function () {
							$('.question-2.' + value).fadeIn();
							$('.first-service-choice').val(value);
							$('.question-3').find('[data-value=' + value + ']').remove();
						});
						break;
					case "legal-consulting":
						routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
						$('.question-1 .button-yellow, .val-error').fadeOut(100, function () {
							$('.question-2.' + value).fadeIn();
							$('.first-service-choice').val(value);
							$('.question-3').find('[data-value=' + value + ']').remove();
						});
						break;
				}

			} else {
				$(".question-1 .val-error").hide().fadeIn();
			}
			//console.log("routing: " + routing );
		});
		$('.question-2 .button-yellow').click(function (e) {
			routing = routing;
			e.preventDefault();
			var $this = $(this),
				nextQuestion = ".question-3",
				value = $this.parents('.question-2').find('input').val();

			if (value.length >= 1) {
				$('.contact-us-progress-bar li.active').toggleClass('active completed').html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13 10" style="enable-background:new 0 0 13 10;" xml:space="preserve"><path class="st0" d="M0.2,5.5C0.1,5.4,0,5.2,0,5.2s0.1-0.2,0.2-0.3l0.7-0.7c0.2-0.2,0.5-0.2,0.7,0l0.1,0.1l2.8,2.9 c0.1,0.1,0.2,0.1,0.3,0l6.7-6.9h0.1c0.2-0.2,0.5-0.2,0.7,0l0.7,0.7c0.2,0.2,0.2,0.5,0,0.7l-8,8.3C4.8,9.9,4.7,10,4.5,10S4.2,9.9,4.2,9.9L0.2,5.7L0.2,5.5z"/></svg>');
				$('.contact-us-progress-bar li:nth-child(2)').addClass('active');
				$('.talent-type').val(value);

				if (routing == "attorney-recruiting") {
					switch (value) {
						case "Contract Attorneys":
								routing = "nicole.gable@specialcounsel.com, shannon.adams@specialcounsel.com";
								break;
						case "Contract &amp; Direct Hire Legal Support Professionals":
						case "Contract & Direct Hire Legal Support Professionals":
						case "Law Firm Associate Recruiting":
							routing = "branch";
							break;
						case "In-House Counsel Recruiting":
							routing = "sarah.breen@parkerlynch.com";
							break;
						case "Law Firm Partner Recruiting":
							routing = "vered.krasna@parkerlynch.com";
							break;
						case "Legal Technology Recruiting":
							routing = "shannon.adams@specialcounsel.com, Nicholas.grimm@parkerlynch.com";
							break;
					}
				}

		

		
				$('[class^="question-"]').not(nextQuestion).fadeOut(200, function () {
					$(nextQuestion).fadeIn();
				});

			} else {
			
				$(".question-2 .val-error").hide().fadeIn();
			}
			//console.log("routing: " + routing );
		});


		$('.question-3 .button-yellow').click(function (e) {
			e.preventDefault();
			routing = routing;
			var value = $('#question-3').val() || "none";

			e.preventDefault();
			//if (value.length >= 1) {
			$('.contact-us-progress-bar li.active').toggleClass('active completed').html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13 10" style="enable-background:new 0 0 13 10;" xml:space="preserve"><path class="st0" d="M0.2,5.5C0.1,5.4,0,5.2,0,5.2s0.1-0.2,0.2-0.3l0.7-0.7c0.2-0.2,0.5-0.2,0.7,0l0.1,0.1l2.8,2.9 c0.1,0.1,0.2,0.1,0.3,0l6.7-6.9h0.1c0.2-0.2,0.5-0.2,0.7,0l0.7,0.7c0.2,0.2,0.2,0.5,0,0.7l-8,8.3C4.8,9.9,4.7,10,4.5,10S4.2,9.9,4.2,9.9L0.2,5.7L0.2,5.5z"/></svg>');
			$('.contact-us-progress-bar li:nth-child(3)').addClass('active');
			$('.other-services-choice input').val(value);
			$('.contact-form-wrap').fadeOut(200, function () {
				
				$('.sel-branch label, .sel-branch select').css('display', 'none');
				$('.sel-branch').css({
					'margin-top': '0.7rem',
					'display': 'block'
			});
				$('.contact-us-form').fadeIn();
			});
			//console.log("routing: " + routing );
		});


	}
}


function activeBrandServiceNav() {
		if ($('[class^="brand-services-"]').length) {
			$('[class^="brand-services-"] a[href^="' + location.pathname + '"]').addClass('active').removeAttr('href');
				}			
}

function smoothScroll(whereTo, extraOffset) {
	
	extraOffset = extraOffset || 0;
	// Add sticky nav before scrolling, to accurately account for height
	$(".site-header").addClass("sticky");
	var $siteHeaderHeight = $(window).width() >= 932 ? 100 : 0;
	$("html, body").animate({
		scrollTop: $(whereTo).eq(0).offset().top - $siteHeaderHeight + extraOffset
	}, 300);
}





function privacyPolicy(){
	if (document.location.pathname.indexOf('/privacy-policy/') === 0) {
		$(".privacy-policy-faqs li a").on("click.smoothScroll", function(){
			smoothScroll($(this).attr("href"));
		});
	}	
}

function jobSearchHeader() {
	if (document.location.pathname.indexOf('/legal-jobs/') == 0) {
		$('.job-search-keyword-input').append('<div class="browse-all-link">Browse All</div>');
		$('.browse-all-link').bind("click", function () {
			$('#all-jobs-menu').slideDown();
			$('html, body').animate({
				scrollTop: ($('#all-jobs-menu').offset().top - 250 )
			},500);
		});

		$(".job-search-keyword input").focus(function() {
			$('.job-search-keyword-input .browse-all-link').hide('slow');       
			//return false;
		  });
		  
		
	   $('.job-search-keyword input').blur(function(){
		  if( !$(this).val() ) {
				$('.job-search-keyword-input .browse-all-link').show('slow');
		  }
		});



	}
}
/* location transform 
 * ==============
 * Wrap each branch detail with the class of the type of branch it is
 * - Branch options so far -
 * - .legaltalent
 * - .attorneyrecruiting
 */
function locationTransform() {
	if (document.location.pathname.indexOf('/locations/') == 0) {

		//if is city page and has branch details variable already in markup: add email to meta 
		if (isEmpty($('.locator__aside--details')) && typeof branch_details !== 'undefined') {
						

			var i = 0;
			$('.locator__aside--branch').each(function () {

				if (branch_details[i]["BranchEmail"] !== "") {

					var branchAddress = $(this).find('.branch__meta--address');
					// you are here - put this email in
					var emailHTML = '<div id="body_0_scimain_1_BranchResults__EmailField" class="branch__email" data-bind="visible: BranchEmail"><svg version="1.1" id="emailSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve"><g><path class="fill" d="M12,9.7V2.3L7.9,6L12,9.7z"></path>       <path class="fill" d="M6,7.7L4.8,6.6l-4.1,3.7h10.6L7.2,6.6L6,7.7z"></path><path class="fill" d="M11.3,1.7H0.7L6,6.4L11.3,1.7z"></path><path class="fill" d="M0,2.3v7.4L4.1,6L0,2.3z"></path></g></svg><div class="branch--label">Email</div><span data-bind="text:BranchEmail">' + branch_details[i]["BranchEmail"] + '</span></div>';
					$(emailHTML).insertAfter(branchAddress);
				}
				i++;
			});
			// If CIty page only has 1 branch, change directions to view more to bring to branch page.
	
	


		}



		var phoneSVG = '<svg version="1.1" id="phoneSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve"> <g><path class="fill" d="M9.1,7.9c-0.4-0.4-0.9-0.4-1.3,0C7.6,8.2,7.3,8.5,7,8.8c-0.1,0.1-0.1,0.1-0.2,0C6.5,8.8,6.3,8.7,6.1,8.6C5.3,8,4.6,7.3,3.9,6.5C3.6,6.2,3.3,5.7,3.1,5.3c0-0.1,0-0.2,0-0.2C3.5,4.7,3.8,4.5,4,4.2c0.4-0.4,0.4-0.9,0-1.3C3.8,2.6,3.6,2.4,3.3,2.2C3.1,1.9,2.9,1.7,2.6,1.4c-0.4-0.4-0.9-0.4-1.3,0C1.1,1.7,0.8,2,0.5,2.3C0.2,2.6,0,2.9,0,3.3c0,0.6,0.1,1.2,0.3,1.8c0.4,1.2,1.1,2.2,1.9,3.2c1.1,1.3,2.4,2.3,3.9,3.1C6.9,11.7,7.6,12,8.4,12c0.5,0,1-0.1,1.4-0.5c0.3-0.3,0.5-0.5,0.8-0.8c0.4-0.4,0.4-0.9,0-1.3C10.1,8.9,9.6,8.4,9.1,7.9z"/><path class="fill" d="M8.6,5.9l0.9-0.2C9.4,4.9,9,4.2,8.4,3.6C7.8,2.9,7,2.5,6.1,2.4L5.9,3.3c0.7,0.1,1.3,0.4,1.8,0.9C8.2,4.7,8.5,5.3,8.6,5.9z"/><path class="fill" d="M10.1,1.9C9,0.9,7.7,0.2,6.2,0L6.1,0.9c1.3,0.2,2.4,0.8,3.4,1.7c0.9,0.9,1.4,2,1.7,3.2L12,5.6C11.8,4.2,11.1,3,10.1,1.9z"/></g></svg>';
		var addressSVG = '<svg version="1.1" id="addressSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13 13" style="enable-background:new 0 0 13 13;" xml:space="preserve"> <path class="fill" d="M6.5,0C3.9,0,1.8,2.1,1.8,4.7c0,3.2,4.2,8,4.4,8.2c0.2,0.2,0.5,0.2,0.6,0c0.2-0.2,4.4-4.9,4.4-8.2C11.2,2.1,9.1,0,6.5,0z M6.5,7.1C5.2,7.1,4.1,6,4.1,4.7c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4C8.9,6,7.8,7.1,6.5,7.1z"/></svg>';
		var emailSVG = '<svg version="1.1" id="emailSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve"><g><path class="fill" d="M12,9.7V2.3L7.9,6L12,9.7z"/><path class="fill" d="M6,7.7L4.8,6.6l-4.1,3.7h10.6L7.2,6.6L6,7.7z"/><path class="fill" d="M11.3,1.7H0.7L6,6.4L11.3,1.7z"/><path class="fill" d="M0,2.3v7.4L4.1,6L0,2.3z"/></g></svg>';

		$('.branch__meta--phone, .branch__phone').prepend(phoneSVG);
		$('.branch__meta--address > div , .branch__address').prepend(addressSVG);
		$('.branch__email').prepend(emailSVG);

		if ($('.locator__aside--branch').length) {


			if ( branch_details.length === 1 && $('#body_0_scimain_0_rptBreadcrumb_liBreadcrumb_3').length === 0 ){
				$(".details__actions button").remove();
				var newButton = '<a href="'+ document.location.pathname + branch_details[0]["BranchCode"] + '" class="btn btn-success" style="-webkit-appearance: none" type="button">View Details</a>';
				$('div.details__actions').append(newButton);						
			} 
			var i = 0;
			$('.locator__aside--branch').each(function () {
				
				var $this = $(this),
					branchName = convertToSlug($this.find(".branch__name--title span").text()),
					$thisViewMoreLink = $(".branch__more .btn", $this),
					subDirectory = "";

				$thisViewMoreLink.text('View Details');
				
				

				// add slug as class
				$this.addClass(branchName);
				// remove current link destination
				$thisViewMoreLink.off("click");
				// add new link destination
				var branchURL = branch_details[i]["SeoBranchUrl"]
				$($thisViewMoreLink).replaceWith('<a class="btn" href="'+ branchURL +'" style="text-decoration: none">View Details</a>');
			
				i++;
			});

			if ($locatorAside = $('.locator__aside--details')) {
				$locatorAside.each(function () {
					var branchName = convertToSlug($(this).find(".branch__name").text());
					$(this).addClass(branchName);



				});


			}

			/* Brand Details Toggle */
			if ($('.branch__basics').length && !isEmpty($('.branch__basics .copy-container'))) {

				var readMoreLink = '<a href="#" class="location-read-more">Read More</a>';
				$(readMoreLink).appendTo('.location-header p:last-of-type');
				var showLess = '<p><a href="#" class="location-show-less">Show Less</a></p>';
				$(showLess).appendTo('.branch__basics .copy-container');

				$('.branch__basics .location-read-more').click(function (e) {
					e.preventDefault();				
					$('.branch__basics').toggleClass('open');					
					$(this).hide();	
					$('.branch__basics .copy-container').slideToggle();
				});
				
				$('.branch__basics .location-show-less').click(function(e) {
					e.preventDefault();
					$('.branch__basics').toggleClass('open');	
					$('.branch__basics .copy-container').slideToggle();
					$('.branch__basics .location-read-more').fadeIn();
				});
			}
			/*
			if ($('.branch__basics--brief').length && !isEmpty($('.branch__basics--brief .copy-container'))) {
				var readMoreLink = '<a href="#" class="location-read-more">Read More</a>';
				$(readMoreLink).appendTo('.location-header p:last-of-type');
				$('.branch__basics--brief .location-read-more').click(function (e) {
					e.preventDefault();
					$('.branch__basics--brief .copy-container').slideToggle();
				});
			}
			*/





		}



	}
}


function isEmpty(el) {
	return !$.trim(el.html())
}


function convertToSlug(Text) {
	return Text
		.toLowerCase()
		.replace(/ /g, '')
		.replace(/[^\w-]+/g, '');
}

function siteSearch(){
	$('.site-header .utility-nav:not(.search-open) .site-search i.icon').click(function(){
		$('.site-header .utility-nav').toggleClass('search-open');
		dataLayer.push({'event':'ga.event','eventCategory':'Site Search','eventAction':'Click','eventLabel':"Open"});
	});
	$('.site-header .utility-nav.search-open .site-search i.icon').click(function(e){
		e.preventDefault();
		if ( $('#site-search').val() !== ""){
			window.location =  '/search-results/?' +  $('#site-search').serialize();
		}
			
	})
	$('#site-search').keypress(function(event){
		if(event.keyCode == 13){
			event.preventDefault();
			dataLayer.push({'event':'ga.event','eventCategory':'Site Search','eventAction':'Searching Term','eventLabel':$('#site-search').val()});
			window.location =  '/search-results/?' +  $('#site-search').serialize();
		}
	  });


	  const $menu = $('#site-search');

	  $(document).mouseup(function (e) {
		 if (!$menu.is(e.target) // if the target of the click isn't the container...
		 && $menu.has(e.target).length === 0) // ... nor a descendant of the container
		 {
		   $('.site-header .utility-nav').removeClass('search-open');
		}
	   });
}

if ( document.location.pathname.indexOf("/legal-jobs/search/") == 0 ){
	$('div.single-job').each(function(){
		var jobLink = $(this).find('h2 a').attr('href');
		$(this).wrapInner('<a class="job-link" href="' + jobLink + '"></a>');
	});
}

var objDOM;

$(".sub-page-condensed .read-more-button a").click(function(e) {      
    e.preventDefault();
    //var $container = $(this).parents('.sub-page-condensed').eq(0);
    $(this).parents('.sub-page-condensed').css('max-height','none');
    //$(this).parents('.sub-page-condensed').animate({'maxHeight': 'none'}, 250);
    //$container.animate({'maxHeight': 'none'}, 250);
    $(this).parents('.read-more-button').remove();
});

 
 function changeResources() {
	if (document.location.pathname.indexOf('/resources/listing/') === 0) {
		$('label[for="topics-select"]').prepend("<p>Resource Topic</p>").insertAfter('.listing__facets--sort');
		resourceCardTransform();
		$('.type__list li, label[for="topics-select"], #listingResultsCollection .pager li').click(resourceCardTransform);
	}
}
function resourceCardTransform() {
	$('.listing__result').each(function () {
		var linkUrl = "";
		var resourceNode = $(this).find('.listing__type');
		var details = $(this).find('.resource-details');
		$(resourceNode).prependTo(details);



		var resourceType = $(this).find('.listing__type').text().replace(/\s\s+/g, '');
		var downloadLink = $(this).find('.read-more-link').text();
		if ((resourceType == "Sales Sheets" || resourceType == "Case Studies" || resourceType == "Brochures") && downloadLink == "Download PDF") {
			if ( $(this).find(".read-more-link a").data("download") ){
				linkUrl = $(this).find(".read-more-link a").data("download");
			}

		} else if ($(this).find('.listing__result--title > a').attr("href")) {

			linkUrl = $(this).find('.listing__result--title > a').attr("href");
		}
		if ( linkUrl != ""){
			$(this).bind("click", function () {
				window.location = linkUrl;
			});
		}
		


	});

}