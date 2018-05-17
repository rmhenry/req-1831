# R7 Candidate Assessment

## Requirements

This repository assumes you have [Node](https://nodejs.org), [Yarn](https://yarnpkg.com/lang/en/docs/install/), and
[Git](https://git-scm.com/) installed.

## Getting Started

Fork this repository and then clone it to your local machine. Using your terminal, CD into the project's directory and
run `yarn setup`.

After this completes you can then run `yarn start`. This will start a really simple Node server running on localhost:8080.
You can confirm this by opening a browser to and navigating to http://localhost:8080.

## Application Context

### Web Pages

The Node server is serving static content from the `/public` direcotry. In that directory you will find two pages, `index.html` and `company.html`.

### API

The Node server has several API end points that return information about companies and people that work at each company. Here are a list of the end points:

* `/api/1/companies` - Returns a collection of companies in the v1 format (without the associated people).
* `/api/1/people` - Returns a collection of people.
* `/api/1/people/:id` - Returns information about a specific person.
* `/api/2/companies` - Return a collection of companies in the v2 format (with the associated people).
* `/api/2/companies/:id` - Returns information about a specific company in the v2 format.

## Exercise

Your task is to create two different views. You may use any framework(s) you'd like (or none at all, whatever you're most comfortable with). In the `/public` directory you will find two files. Using both is optional as long as both views are present in the finished solution.

### 1. List View

A list view which combines the companies from `/api/1/companies` and
`/api/2/companies`. Each company in the list should display the following information:

* Company name (should link to the details page for the company)
* Company address in the standard the format `Street Address, City, State, Zip Code`
* Total number of people associated with the company

The view should include a way to sort the list:

* By company name
* Total number of people associated with the company

### 2. Details View

A details view which lists the information for a specific company. It should contain the following information:

* Company name (as the header for the page)
* Company address in the standard US Postal Address format:
  ```
  Company Name
  Street Address,
  City, State, Zip Code
  ```
* A list of everyone who works at the company with the following:
  * First and last name
  * E-mail address
  * Phone number
* The list of employees should be sortable by:
  * Last name
  * E-mail address
  * Phone number

## Completion

After you've completed the exercise please e-mail your Rapid7 recruiter with a link to the repository. Please make sure
the repository is accessible and not marked private. One of our engineers will follow up to discuss your solution.
