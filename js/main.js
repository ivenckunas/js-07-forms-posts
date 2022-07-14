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

const postContainerEl = document.querySelector(".posts-container");

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
  makePostToHtml(newPostObj, postContainerEl);
  htmlEls.form.reset();
  // arba this.reset()
}

function makePostToHtml(post, dest) {
  const articleEl = document.createElement("div");
  articleEl.className = "post card";
  articleEl.innerHTML = `
    <img src="${post.image}" alt="post picture" />
    <h3 class="post__title">${post.title}</h3>
    <h4 class="post__author">${post.author}</h4>
    <p class="post__date">${post.date}</p>
    <p class="post__text">${post.text}</p>
    `;
  dest.append(articleEl);
}

//   <article class="post card">
//     <img src="https://picsum.photos/id/1016/1000/800" alt="post picture" />
//     <h3 class="post__title">Title</h3>
//     <h4 class="post__author">Autorius</h4>
//     <p class="post__date">Data</p>
//     <p class="post__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eaque ipsam alias sed repellat illo cupiditate nulla praesentium corporis incidunt!</p>
//   </article>;
