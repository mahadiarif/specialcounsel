function legalRecruitmentRouting(value){
    switch ( value ){
        case "Contract Attorneys":
        case "Contract and Direct Hire Legal Support Professionals":
        case "Law Firm Associate Recruiting":
            routing = "branch";
        break;                     
        case "In-House Counsel Recruiting":
            routing = "branch";
        break;                
        case "Law Firm Partner Recruiting":
            routing = "vered.krasna@parkerlynch.com";
        break;
        case "Legal Technology Recruiting":
            routing = "Nicholas.grimm@parkerlynch.com";
        break;
    }
    return routing;
}
$(document).ready(function() {
if ( $('.resource-form').length ){
    //var actOn = false;
    var routing = "";

    // First Question Logic
    $('.r1.routing-q select').change(function(){
                    var selctVal=$(this).val();
					 console.log('tes'+selctVal);
        switch ( $(this).val()){
            case "Legal Recruitment & Staffing":
            case "Legal Recruitment and Staffing":
            // routing a combo of branch and or emails. 
                
                // Hide all 2nd routing questions and remove data field type
                $(".routing-q.r2").hide();
                $(".r2 select").removeAttr("data-field-type");

                // add front-end validation to option and have it fadein
                $(".routing-q.legal-recruitment-staffing select").attr("data-field-type", "sel-req");
                $(".routing-q.legal-recruitment-staffing").fadeIn();     
                routing = "legal recruitment routing";
                console.log('1');
            break;
            
            case "Managed Review / Document Review":
            case "Managed Review - Document Review":
                routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
            break;
            
            case "0":
            // routing to branches
                $(".routing-q.r2").hide();
                routing = "branch";
             
            break;

            case "eDiscovery Technology":
            //route to emails for all
                $(".routing-q.r2").hide();
                $(".r2 select").removeAttr("data-field-type");
                $(".ediscovery-tech.routing-q select").attr("data-field-type", "sel-req");
                $(".ediscovery-tech.routing-q").fadeIn();                
                routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
              
            break;

            case "Legal Consulting & Outsourcing":
            case "Legal Consulting and Outsourcing":
            // send to chrisG no matter what.
                $(".routing-q.r2").hide();
                $(".r2 select").removeAttr("data-field-type");
                $(".routing-q.legal-consulting-outsourcing").attr("data-field-type", "sel-req");
                $(".routing-q.legal-consulting-outsourcing").fadeIn();
                routing = "Dawn.Lockwood@specialcounsel.com, jeannine.whittaker@specialcounsel.com";
              
            break;
        }


        $('.routing-field').val(routing);
       


    

    });
// End first question logic
// If eDiscovery is chosen  
$('.ediscovery-tech.routing-q select').change(function(){
    if (  $(this).val() == "Paper Operations" ){
     routing = "pallieri@d4discovery.com, JSteene@d4discovery.com";
    }
  });






// Change routing if r2 legal recruitment option is available
$('.r2.routing-q.legal-recruitment-staffing select').change(function(){
   routing = legalRecruitmentRouting($(this).val());

    $('.routing-field').val(routing);

   
});










$('.pref-loc select').change(function(){ 
    if ( routing == "legal recruitment routing" || $('.routing-field').val() == "legal recruitment routing" || $('.r1.routing-q select').val() == 'Legal Recruitment and Staffing') {
        routing = legalRecruitmentRouting($(".r2.legal-recruitment-staffing select").val());
        if (routing == 'branch'){
            routing = $(this).val();
        }

    }
    if ( routing == "branch" || $('.routing-field').val() == "branch") {    
           // use branch selected routing
            routing = $(this).val();     
    } 
    
    
    $('.routing-field').val(routing);
 
    
});

}
});