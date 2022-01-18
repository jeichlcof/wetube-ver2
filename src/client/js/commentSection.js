import { response } from "express";

const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const addComments = (text) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComments = document.createElement("li");
  const icon = document.createElement("i");
  icon.className = "fas fa comment";
  const span = document.createElement("span");
  span.innerText = `${text}`;
  const span2 = document.createElement("span");
  span2.innerText = "❌";
  newComments.appendChild(icon);
  newComments.appendChild(span);
  newComments.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(textarea.value);
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  const { status } = await fetch(`/api/videos/${videoId}/view`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      text,
    },
  });

  textarea.value = "";
  const json = await response.json();

  if (status === 201) {
    console.log("creat fake comments");
  }
};

if (form) {
  btn.addEventListener("submit", handleSubmit);
}
