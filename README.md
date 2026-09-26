# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![Static Badge](https://img.shields.io/badge/https%3A%2F%2Fimg.shields.io%2Fbadge%2FDifficulty-newbie-%236abecd?style=for-the-badge&logo=Frontend%20mentor&label=Diffilcuty&labelColor=%23555555&color=%236abecd)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Meeting landing page solution](./assets/meeting_app.jpg)



### Links

- Solution URL: [meeting landing page solution](https://github.com/Darionas/meet-landing-page)
- Live Site URL: [meeting landing page live site](https://darionas.github.io/meet-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

But created with :heart:


### What I learned

In the solution I have made interactives buttons. So I had to add JavaScript to this solution. When you click button its respond with loading modal which was created with `<dialog>` element. That element was new for me. I learned what attributes, methods this element has. Here is example of modal dialogs using invoker commands:

`HTML`
```
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>

```

No JavaScript is required for opening and closing when using invoker commands. The browser handles those actions automatically.

`CSS`
A `<dialog>` can be selected using its element name (like any other element), and you can also match its state using pseudo-classes such as `:modal` and `:open`.

The CSS `::backdrop` pseudo-element can be used to style the backdrop of a modal dialog, which is displayed behind the `<dialog>` element when the dialog is displayed using the `HTMLDialogElement.showModal()` method. This pseudo-element could be used, for example, to blur, darken, or otherwise obfuscate the inert content behind the modal dialog.

If a browser does not support dialog invoker commands, use JavaScript as a fallback.
`JS`
```
const dialogElem = document.getElementById("my-dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

You can leave the command and commandfor attributes in the HTML as progressive enhancement. Newer browsers use them, while older browsers use the JavaScript fallback. 

### Continued development

I am taking part in My learning path on Frontend mentor.

### Useful resources

- [Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) - This helped me to create modal element.

### AI Collaboration

- GitHub Copilot

## Author

- Frontend Mentor - [@Darionas](https://www.frontendmentor.io/profile/Darionas)
- GitHub - [Darionas](https://github.com/Darionas)

## Acknowledgments

- Thank you to all Frontend Mentor team for opportunity to try, practice, train yourself in different level challenges and gain invaluable experience.
- Thank you to all supporters to inspire me to keep improving and coding. 
