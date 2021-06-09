///COLLECTION TYPE FORM INPUTS
const collectionType = document.getElementById('collection-type');
const collectionTypeDesc = document.getElementById("collection-type-description");
const collectionTypeName = document.getElementById('colletcion-type-name');

const collectionTypeSubmit = document.getElementById("collection-type-submit");


const shouldNavigateAway = false;

const handleCollectionTypeSubmit = async (event) => {
    event.preventDefault();

    let collectionTypeData = {};

    //needs validated
    collectionTypeData.type = collectionType.value;
    collectionTypeData.name = collectionType.value.trim();
    collectionTypeData.desc = collectionTypeDesc.value;

    console.log(collectionTypeData);
}

const validateInputs = () => {
    let isValid = true;
    if (collectionType.value === "Select a Collection Type") isValid = false;

    if (!collectionTypeName) isValid = false;

    isValid ? collectionTypeSubmit.removeAttribute('disabled') : collectionTypeSubmit.setAttribute('disabled', true);
}

//EVENT LISTENERS

document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));
collectionTypeSubmit.addEventListener('click', function (event) {
    // shouldNavigateAway;
    handleCollectionTypeSubmit(event);

})


