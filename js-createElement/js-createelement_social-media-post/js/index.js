console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post"); // alterniative --> newPost.className = "post"; --> removes existing classes

document.body.append(newPost);

const newP = document.createElement("p");
newP.classList.add("post__content"); // Add this line

newP.innerText = "New Post!!! sakdjfa lsdkfalskdjf laskdjfalsdkfjsldkfja!!!";
newPost.append(newP);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
// footer.innerText = "footer works";

newPost.append(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.innerText = "@username";

footer.append(span);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.innerText = " ♥ Like";
newButton.setAttribute("data-js", "like-button");
newButton.type = "button";
newButton.addEventListener("click", handleLikeButtonClick);

footer.append(newButton);

// <article class="post">
//       <p class="post__content">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//       </p>
//       <footer class="post__footer">
//         <span class="post__username">@username</span>
//         <button type="button" class="post__button" data-js="like-button">
//           ♥ Like
//         </button>
//       </footer>
//     </article>
