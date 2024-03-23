This is a portfolio project built by Abiodun Morounranti Omidami Ifarontimi + all my names

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This is a project I built using react, react-router and CSS. This is a recipes app. you can search any recipes by entering any word from the recipes's full name and you'll see
a list of recipes with searched word in it and if you your searched recipe is part of the
database, it will also be in the returned page.

### The challenge

Users should be able to:

- search for recipes from any page in the app
- add and remove recipes from favorites
- see full details of any available recipe by clicking on its card from the home page
- go to Home page on search form submit
- details link must show the recipes id in browser url

### Links

- Solution URL: [GitHub](https://github.com/ifaronti/Recipes-Api)
- Live Site URL: [netlify](https://ifasrecipesapp.netlify.app/)

## My process
The process for this project was very random at first. This project took a cumulative 8-10hours because I was learning some new React tricks. I couldn't really point to a 
definitive start point. I just knew after I was done with all the logics, I wanted this project to be in my portfolio. So I did the CSS and added a few effects to make it look
more appealing. I love this project!!!!

### Built with
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned
I picked up react-router's basic concepts and went deeper into useContext hook. They are both awesome.


### Continued development
I'll be practicing more react-router-dom hooks and continue to use createContext & useContext. useContext is very awesome as soon as I realized how seamless it is to just
tranfer a state data from one component to others without use of props


### Useful resources

- [useNavigate help](https://bobbyhadz.com/blog/react-redirect-after-form-submit) - I needed a way to navigate to a page on form submit. The short tutorial here helped me
understand that useNavigate can run in a function that handles form submit like I did below

```js
    const goTo = useNavigate()

    function handleSubmit(event){
    event.preventDefault()
    setSearch('some input value here')
    goTo('/') 

    Where '/' represents the home page. I could redirect it to any other page
    by using goTo('/component with defined route')
}
```

- [Overflow](stackoverflow.com) - This is all programmer's best and most resourceful site.
I used this to just check if there are better ways of doing whatever I'm doing.


## Author

 Ifarontimi + all my names

## Acknowledgments
Thanks to freeCodeCamp for directing me to this project. Although there was a tutorial set. I decided to do it on my own to learn React-Router and also practice my hold on 
useContext hook.
