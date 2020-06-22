// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const quotes =[
      '"Pride is not the opposite of shame, but it\'s source. True humility is the only antidote to shame." - General Iroh',
      '"It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale." – General Iroh',
      '"Sometimes the best way to solve your own problems is to help someone else." - General Iroh',
      '"You must look within yourself to save yourself from your other self. Only then will your true self reveal itself." – General Iroh',
      '"The past can be a great teacher." – Aang',
      '"When we hit our lowest point, we are open to the greatest change." – Aang',
      '"It’s easy to do nothing, it’s hard to forgive. – Aang"'
  ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quotesContainer = document.getElementById('quote-container');
  quotesContainer.innerText = quote;
}

/**
 * Change cat image in the page.
 */
function changeCat() {
  num_images = 5;

  // Pick a random quote.
  const index = Math.floor(Math.random() * num_images);
  const path = 'images/cats/'
  const image_name = 'cat_' + index + '.jpeg'
  const src = path + image_name;

  // Add it to the page.
  const catImage = document.getElementById('cat-image');
  catImage.src = src;
}

// Loads /data content from server and displays comments to the web page.
function getComments() {
  const languagesDropdown = document.getElementById("languages");
  const language = languagesDropdown.options[languagesDropdown.selectedIndex].value;
  const commentsContainer = document.getElementById('comments-container');
  fetch('/data?lang='+language).then(response => response.json()).then((comments) => {
    for (let i = 0; i < comments.length; i++){
      const comment = document.createElement("P");
      comment.innerHTML = comments[i];
      comment.classList.add("comment");  
      commentsContainer.appendChild(comment);
    }
  });
}

// Performs initialization on main page.
function loadPage(){
  getComments();
}
