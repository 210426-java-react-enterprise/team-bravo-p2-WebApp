/*
GET from API
- Request => user input - title
- response (display)
    - title
    - year
    - mppaRating
    - length
    - genre
    - descrip
    - prodCompany
- User input
    - owned - checkbox
    - watched - check box
    - userRating - radio 1 - 10
    - userComment - textArea
    - tradeable - checkbox
*/


//CollectionItem FORM INPUTS
const collectionItem = document.getElementById('collectionItem')
const collectionItemOwned = document.getElementById('collectionItemOwned')
const collectionItemWatched = document.getElementById('collectionItemWatched')
const collectionItemUserRating = document.getElementById('collectionItemUserRating')
const collectionItemUserComment = document.getElementById('collectionItemUserComment')
const collectionItemTradeable = document.getElementById('collectionItemTradeable')

const shouldNavigateAway = false;

console.log(JSON.parse(sessionStorage.collectionTypes))
const handleCollectionItemSubmit = async (event) => {
    event.preventDefault();

    let collectionItemData = {};

    collectionItemData.owned = collectionItem.value;
    collectionItemData.watched = collectionItemWatched.value;
    collectionItemData.userrating = collectionItemUserRating.value;
    collectionItemData.usercomment = collectionItemUserComment.value; //must be trim if optional input?
    collectionItemData.usertradeable = collectionItemTradeable.value;

    console.log(collectionItemData);
}


const validateInputs = () => {
    let isValid = true;
    
    var itemOwned = collectionItemOwned.value; 
    var userRating = collectionItemUserRating.value;
    var userComment = collectionItemUserComment.value;
    var usertradeable = collectionItemTradeable.value;
    

    isValid ? collectionTypeSubmit.removeAttribute('disabled') : collectionTypeSubmit.setAttribute('disabled', true);

    if(userRating < 1 || userRating > 10 ) {
        alert("That is not a valid entry.")
        return false;
    } return (true);


}

// type="checkbox"
//                   class="form-check-input"
//                   id="collectionItemOwned"

function validateFunction(){
    var checkbox = collectionItemOwned;

    if(checkbox.checked == true){
        return 1;
    } else {
        return 0;
    }
}

//EVENT LISTENERS

document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));
collectionItemSubmit.addEventListener('click', function (event) {
    // shouldNavigateAway;
    handleCollectionItemSubmit(event);


})

