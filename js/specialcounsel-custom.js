$(window).load(function () {
  //$(".indeed-apply-button-container").insertAfter($(".job-detail-list .apply-btn-dropdown"));
  //$(".indeed-apply-button-label").text("Apply with ");
  //$(".indeed-apply-button-container").attr("style", "margin: 0 auto !important;");
  //$(".indeed-apply-button-inner").attr("style", "background-image: none !important;");
  //$(".indeed-apply-button-inner").attr("style", "background: #830101 !important;");
  //$(".indeed-apply-button-inner-left").attr("style", "background: #830101 !important;");
  //$(".indeed-apply-button-cm img").attr("src", "/~/media/adeccogroup/brands/adecco-global-2016/usa/css/img/logo-indeed.png");
  //$("#indeed-ia-1565030052477-0left").attr("style", "background: #830101 !important;");
  //$(".indeed-apply-button-cm").attr("style", "display: inline;");
});
var app = {
  clickLink: 'contact',
  addEventToMyLink: function () {
    console.log('click called')
    $('.contact-link a').attr('href', '/contact-us/');
  }
}
ko.applyBindings(app);

//Passing the tranaction id
$(window).load(function () {
  setTranID();
});

function setTranID() {
  try {
    var hValue = document.onrecruit_uuid;
    $('.tranid').val(hValue);
  } catch (err) {}
}

$(document).ready(function () {
  try {
    //To apply binding
    $(".team-listing .header-nav ul li:eq(1) a").attr("data-bind", "{click: $root.onListChange.bind($data, 'Client Consultant'), afterRender: addEventToMyLink}");
  	 $('#referenceJobID').insertAfter(".apply-btn-dropdown");
  
  } catch (err) {}
  //For adding email to url
	
	   
	
  try {
    var $indeedButton = $(".indeed-apply-widget");
    // Fix Indeed Button		
    $indeedButton.appendTo(".apply-btn-dropdown ul").wrap('<li id="indeed-apply-li"></li>');
    $indeedButton.removeAttr("style");
    if ($(".indeed-apply-widget a").hasClass("indeed-apply-button")) {
      $(".indeed-apply-button-label").text("Apply with ");
      $(".indeed-apply-button-inner").attr("style", "background-image: none !important");
      $(".indeed-apply-button-cm img").attr("src", "/~/media/adeccogroup/brands/adecco-global-2016/usa/css/img/logo-indeed.png");
    }
	  $("body").on("click", ".panel-body .indeed-apply-button", function() {
            $(".box-footer .indeed-apply-widget").click()
        })
    if ($(".job-details").length > 0 && $(".apply").length > 0) {
      var applyUrl = $('.apply').attr('href');
      var jobtitle = $('.job-full .panel-header h1').text();
      jobtitle = jobtitle.replace(/^\s+|\s+$/gm, '');
      var locationC = $('#lblCity').text() + $('#lblState').text();
      var salary = $('#ltSalaryWage').text();
      var category = $('#ltCategory').text();
      console.log(_JobUrlReferer);
      var ref = '';
      if (_JobUrlReferer != '') {
        ref = _JobUrlReferer;
      } else {
        ref = encodeURIComponent(document.referrer);
        if (ref != '') {
          ref = ref.split('/')[2];
        }
      }
      applyUrl = applyUrl + '&jobTitle=' + encodeURIComponent(jobtitle) + '&location=' + encodeURIComponent(locationC) + '&salary=' + encodeURIComponent(salary) + '&category=' + encodeURIComponent(category) + '&ref=' + ref;
      $('.apply').attr('href', applyUrl);
    }


    var jobTitle = getUrlParameter('jobTitle');
    var locationC = getUrlParameter('location');
    var referenceno = getUrlParameter('ID');
    var Category = getUrlParameter('category');
    var Salary = getUrlParameter('salary');
    var reference = getUrlParameter('ref');
    if (ref != '') {
      $('.job-source').val(reference);
    }
    if ((jobTitle != '') && (jobTitle != undefined)) {
      var text = $('.scfTitleBorder').text();
      $('.scfTitleBorder').before('<span class="application">' + text + '</span>');
      $('.scfTitleBorder').text(jobTitle);

      $('.Job-title').val(jobTitle);
      $('.loc_val').val(locationC);
      $('.JobID').val(referenceno);
      $('.category_val').val(Category);
      $('.salary_val').val(Salary);

    }

  } catch (err) {}
});

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

  try {
    var mayaCheck = $('#ApplyRedirectionKey').val();
    if (mayaCheck != '') {
      var src = $('#hypApplyJob').attr('href')
      src = src + '&provider=m';
      $('#hypApplyJob').attr('href', src)
    }
  } catch (e) {}

}