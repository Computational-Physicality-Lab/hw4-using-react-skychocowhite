[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

Student Name: 王堃宇<br>
Student ID: R11922102<br>
Deploy website - [Netlify](https://ssui-hw4-skychocowhite.netlify.app/)

***

## Behavior for Multipage and Leave
In the implmentation, I use `sessionStorage` to save access the shopping cart information and shopping list independently with multiple pages. Therefore, if the user open multiple pages A and B, the shopping list of A and B are different, but the information is still consistent when the page is refreshed. All of the data in the ssesion storage will be removed when the user closed the tab or the window.

***

## Bonus
In **Shopping Cart Page**, I keep the summary and current total of the orderd shirts in the window. When the user scrolls down the cart page, both of the two components keep on the top of the page. To implement this feature, I add the `position: sticky` style on the components.

***

## Discuss about Pure JavaScript and React
After using React, it exactly saves a lot of time writing duplicate codes across javaScript files, but instead, I need to spend more time on configuration to meet my demands. Of course, the usage of React component and `reactstrap` is quite convenient to maintain the source code, I only needed to modify small range of files to add features or fix bugs. Below is the summary of experience for using these two approaches:

1. Pure JavaScript sometimes leads to duplicate codes more often than React.
2. The concept of the component in React makes the maintenance more convenient.
3. It needs time to understand and configure when using React.

***

## Is There any Funny Things?
Still nothing :(