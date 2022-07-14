"use strict";

const htmlEls = {
  form: document.forms[0],
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  date: document.getElementById("date"),
  text: document.getElementById("text"),
  author: document.getElementById("author"),
  submit: document.getElementById("submit"),
};

htmlEls.form.addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();

  const newPostObj = {
    title: htmlEls.title.value,
    image: htmlEls.image.value,
    date: htmlEls.date.value,
    text: htmlEls.text.value,
    author: htmlEls.author.value,
  };
  console.log(newPostObj);
}
