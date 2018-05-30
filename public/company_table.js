"use strict";

/*
   Rapid 7 Candidate Assessment
   Author: Reese Henry
   Date:   5/30/2018
   
   File: company_table.js

   Variables
   =========

   damonPosition
      Holds the int value used to set the Rat Leblanc
      avatar's style.left property


    Function List
    =============

    init
      Do the following when the page loads:
        Set the message area text and images to their
            beginning values.
        Call the function to return the racer avatars
            to the starting line.
        Establish an onclick event listener to start the race.

*/

/* ================================================================= */

var section = document.querySelector('section');

var requestURL = 'http://localhost:8080/api/1/companies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var oldCompanies = request.response;
    BuildCompanyTable(oldCompanies);
}

function BuildCompanyTable(jsonObj) {
    var companies = jsonObj['records'];
    for (var i = 0; i < companies.length; i++) {
        var companyName = document.createElement('p');
        companyName.textContent = 'Company Name: ' + companies[i].name;
        section.appendChild(companyName);

        var addressArray = companies[i]['address'];
        //var addressString;
        //for (var j = 0; j < addressArray.length; j++) {
        //    addressString += addressArray[j].street + ", ";
        //    addressString += addressArray[j].state + ", ";
        //    addressString += addressArray[j].zipCode;
        //}

        var address = document.createElement('p');
        address.textContent = addressArray[j].street + ", " + addressArray[j].state + ", " + addressArray[j].zipCode;
        section.appendChild(address);
    }

}