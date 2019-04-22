<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=0 // no quotes!!
waitTime=120; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="9932CD";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=160; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="yellow";
hdrBGColor="9932CD";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#FFFF99";
linkTarget="_top";
linkAlign="center";
barBGColor="9932CD";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="yellow";
barVAlign="center";
barWidth=20; // no quotes!!
barText="SITE MENU"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Site Menu"] //create header
ssmItems[1]=["Home", "Title.html", ""]
ssmItems[2]=["Abstract", "Abstract.html",""]
ssmItems[3]=["Acknowledgements", "Acks.html", ""]
ssmItems[4]=["Introduction", "Introduction.html", ""]
ssmItems[5]=["Hypothesis", "Hypothesis.html", ""]
ssmItems[6]=["Procedure", "Procedure.html", ""]
ssmItems[7]=["Data", "Data.html",""]
ssmItems[8]=["Statistics", "Stats.html", ""]
ssmItems[9]=["Charts", "Charts.html", ""]
ssmItems[10]=["Conclusions", "Conclusions.html", ""]
ssmItems[11]=["Pictures", "Pictures.html", ""]
ssmItems[12]=["Journal", "Journal.html", ""]
ssmItems[13]=["Works Cited", "Works.html", ""]
ssmItems[14]=["Recommendations", "Recommendations.html", ""]

ssmItems[15]=["Email Us", "", ""] //create header

ssmItems[16]=["Email Emilia", "mailto:cgrigsby1@hotmail.com?subject=Aluminum Toxicity Study", "",1, "no"] //create two column row
ssmItems[17]=["Email Chris", "mailto:cgrigsby1@hotmail.com?subject=Aluminum Toxicity Study", "",1]

ssmItems[18]=["External Links", "", ""] //create header
ssmItems[19]=["Amador Valley HS", "http://www.pleasanton.k12.ca.us/amador/default.html", "_new"]
ssmItems[20]=["Project CreekWatch", "http://www.pleasanton.k12.ca.us/amador/creek/index.html", "_new"]
ssmItems[21]=["Past Projects", "http://www.pleasanton.k12.ca.us/amador/Creek/AP98/AP98.html", "_new"]

buildMenu();

//-->