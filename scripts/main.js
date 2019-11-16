'use strict';

document.getElementById("search-bar").focus()

function searchBarOnFocus() {
  let searchDiv = document.getElementById("search-div");
  searchDiv.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
  searchDiv.style.borderColor = "rgba(223,225,229,0)";
}

searchBarOnFocus();

let searchBar = document.getElementById("search-bar");

searchBar.addEventListener('focus', searchBarOnFocus);

searchBar.addEventListener('focusout', function() {
    let searchDiv = document.getElementById("search-div");
    searchDiv.style.boxShadow = "none";
    searchDiv.style.borderColor = "rgb(223, 225, 229)";
});