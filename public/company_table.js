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
    BuildCompanyTable();
    DisplayCompanyData(oldCompanies);
}

function BuildCompanyTable() {
    var companyTable = document.createElement('table');
    companyTable.innerHTML = '<tr><th>Company Name</th><th>Address</th><th>No. Employees</th>';
    section.appendChild(companyTable);
}

function DisplayCompanyData(jsonObj) {
    var companies = jsonObj['records'];
    for (var i = 0; i < companies.length; i++) {
        var companyName = document.createElement('p');
        companyName.textContent = 'Company Name: ' + companies[i].name;
        section.appendChild(companyName);

        var addressArray = companies[i]['address'];
        var address = document.createElement('p');
        address.textContent = addressArray.street + ", " + addressArray.state + ", " + addressArray.zipCode;
        section.appendChild(address);
    }
}