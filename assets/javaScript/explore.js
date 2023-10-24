    // exnav
    var exnavAll=document.getElementById('All');
    var exnavCommerse=document.getElementById('commerse');
    var exnavRepair=document.getElementById('repar');
    var exnavResident=document.getElementById('resident');

    // img
    var imgage1=document.getElementById('img1');
    var imgage2=document.getElementById('img2');
    var imgage3=document.getElementById('img3');
    var imgage4=document.getElementById('img4');
    var imgage5=document.getElementById('img5');
    var imgage6=document.getElementById('img6');

    // title 
    var imgtitle=document.getElementById('eximgtit');
    var imgtitle2=document.getElementById('eximgtit2');
    var imgtitle3=document.getElementById('eximgtit3');
    var imgtitle4=document.getElementById('eximgtit4');
    var imgtitle5=document.getElementById('eximgtit5');
    var imgtitle6=document.getElementById('eximgtit6');


    // icon
    var imgicon=document.getElementById('eximgicon');
    var imgicon2=document.getElementById('eximgicon2');
    var imgicon3=document.getElementById('eximgicon3');
    var imgicon4=document.getElementById('eximgicon4');
    var imgicon5=document.getElementById('eximgicon5');
    var imgicon6=document.getElementById('eximgicon6');



function alll(){
  
    exnavAll.style="background:red;color:white";
    exnavCommerse.style="background:white;color:black";
    exnavRepair.style="background:white;color:black";
    exnavResident.style="background:white;color:black"

    
    imgage1.setAttribute("src","assets/images/work-big-1.jpg")
    imgage2.setAttribute("src","assets/images/work-big-2.jpg")
    imgage3.setAttribute("src","assets/images/work-big-3.jpg")
    imgage4.setAttribute("src","assets/images/work-big-4.jpg")
    imgage5.setAttribute("src","assets/images/work-big-5.jpg")
    imgage6.setAttribute("src","assets/images/work-big-6.jpg")

    imgage1.style="visibility:visible"
    imgage2.style="visibility:visible"
    imgage3.style="visibility:visible"
    imgage4.style="visibility:visible"
    imgage5.style="visibility:visible"
    imgage6.style="visibility:visible"


    imgtitle.style="visibility:visible; color:#102039";
    imgtitle2.style="visibility:visible ;color:#102039";
    imgtitle3.style="visibility:visible ;color:#102039";
    imgtitle4.style="visibility:visible ;color:#102039"; 
    imgtitle5.style="visibility:visible ;color:#102039";
    imgtitle6.style="visibility:visible ;color:#102039";

    imgicon.style="visibility:visible;color:red ; font-size: 2rem;"
    imgicon2.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon3.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon4.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon5.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon6.style="visibility:visible ;color:red ; font-size: 2rem;"
}

function Commerc() {
    exnavAll.style="background:white;color:black";
    exnavCommerse.style="background:red;color:white";
    exnavRepair.style="background:white;color:black";
    exnavResident.style="background:white;color:black";

    imgage1.setAttribute("src","assets/images/work-big-2.jpg")
    imgage2.setAttribute("src","assets/images/work-big-3.jpg")
    imgage3.setAttribute("src","assets/images/work-big-6.jpg")

    imgage1.style="visibility:visible"
    imgage2.style="visibility:visible"
    imgage3.style="visibility:visible"
    imgage4.style="visibility:hidden"; 
    imgage5.style="visibility:hidden"; 
    imgage6.style="visibility:hidden"; 

    imgtitle.style="visibility:visible; color:#102039";
    imgtitle2.style="visibility:visible ;color:#102039";
    imgtitle3.style="visibility:visible ;color:#102039";
    imgtitle4.style="visibility:hidden ;color:#102039"; 
    imgtitle5.style="visibility:hidden ;color:#102039";
    imgtitle6.style="visibility:hidden ;color:#102039";

    imgicon.style="visibility:visible;color:red ; font-size: 2rem;"
    imgicon2.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon3.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon4.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon5.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon6.style="visibility:hidden ;color:red ; font-size: 2rem;"

    
}

function Repair(){
    exnavAll.style="background:white;color:black";
    exnavCommerse.style="background:white;color:black";
    exnavRepair.style="background:red;color:white";
    exnavResident.style="background:white;color:black";

    imgage1.setAttribute("src","assets/images/work-big-5.jpg")
   

    imgage1.style="visibility:visible"
    imgage2.style="visibility:hidden"
    imgage3.style="visibility:hidden"
    imgage4.style="visibility:hidden"; 
    imgage5.style="visibility:hidden"; 
    imgage6.style="visibility:hidden"; 

    imgtitle.style="visibility:visible; color:#102039";
    imgtitle2.style="visibility:hidden ;color:#102039";
    imgtitle3.style="visibility:hidden ;color:#102039";
    imgtitle4.style="visibility:hidden ;color:#102039"; 
    imgtitle5.style="visibility:hidden ;color:#102039";
    imgtitle6.style="visibility:hidden ;color:#102039";

    imgicon.style="visibility:visible;color:red ; font-size: 2rem;"
    imgicon2.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon3.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon4.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon5.style="visibility:hidden ;color:red ; font-size: 2rem;"
    imgicon6.style="visibility:hidden ;color:red ; font-size: 2rem;"
}

function Residential(){
    exnavAll.style="background:white;color:black";
    exnavCommerse.style="background:white;color:black";
    exnavRepair.style="background:white;color:black";
    exnavResident.style="background:red;color:white"

    
    imgage1.setAttribute("src","assets/images/work-big-1.jpg")
    imgage2.setAttribute("src","assets/images/work-big-2.jpg")
    imgage3.setAttribute("src","assets/images/work-big-4.jpg")
    imgage4.setAttribute("src","assets/images/work-big-5.jpg")
    imgage5.setAttribute("src","assets/images/work-big-6.jpg")

    imgage1.style="visibility:visible"
    imgage2.style="visibility:visible"
    imgage3.style="visibility:visible"
    imgage4.style="visibility:visible"
    imgage5.style="visibility:visible"
    imgage6.style="visibility:hidden"


    imgtitle.style="visibility:visible; color:#102039";
    imgtitle2.style="visibility:visible ;color:#102039";
    imgtitle3.style="visibility:visible ;color:#102039";
    imgtitle4.style="visibility:visible ;color:#102039"; 
    imgtitle5.style="visibility:visible ;color:#102039";
    imgtitle6.style="visibility:hidden ;color:#102039";

    imgicon.style="visibility:visible;color:red ; font-size: 2rem;"
    imgicon2.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon3.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon4.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon5.style="visibility:visible ;color:red ; font-size: 2rem;"
    imgicon6.style="visibility:hidden ;color:red ; font-size: 2rem;"
}
