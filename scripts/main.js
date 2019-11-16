'use strict';

let searchDiv = document.getElementById("search-div"),
    searchBar = document.getElementById("search-bar");

searchBar.focus()
searchBarOnFocus();

searchBar.addEventListener('focus', searchBarOnFocus);

searchBar.addEventListener('focusout', function() {
    searchDiv.style.boxShadow = "none";
    searchDiv.style.borderColor = "rgb(223, 225, 229)";
});

function searchBarOnFocus() {
  searchDiv.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
  searchDiv.style.borderColor = "rgba(223,225,229,0)";
}