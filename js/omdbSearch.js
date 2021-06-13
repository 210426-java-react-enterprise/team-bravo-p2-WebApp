const omdbSearchInit = () => {
    ///COLLECTION TYPE FORM INPUTS
    const movieTitle = document.getElementById('collectionItemSearch');
    const collectionSearchSubmit = document.getElementById("collectionSearchSubmit");
    const searchItemBack = document.getElementsByClassName('searchItemBack');

    // const shouldNavigateAway = false;

    // let addAPIItem;

    const handleCollectionTypeSubmit = async (event) => {
        event.preventDefault();

        let searchTerm = movieTitle.value.trim().replaceAll(" ", "+");

        let searchResults = await movieSearchAPI.omdbMultiSearch(searchTerm);

        sessionStorage.setItem("searchResults", JSON.stringify(searchResults));

        let collection = JSON.parse(sessionStorage.searchResults);

        for (movie of collection) {

            let movieCard = `<div class="card search-card-body mt-3" id='${movie.imdbId}'>
                             <div class="card-body">
                                <img src="${movie.Poster}" class="card-img-top searchImage" alt="...">
                                <h4 class="card-title">${movie.Title}</h4>
                                <h5 class="card-title">${movie.Year}</h5>
                                <h5 class="card-title">${movie.Type}</h5>
                                <button type="button" value="${movie.imdbId}" id="addAPIItem" class="btn btn-primary addAPIItem">Add</button>
                                </div>
                            </div>`

            let searchResultsContainer = document.getElementById('collectionSearchContainer');
            searchResultsContainer.innerHTML += movieCard;
        }

        let addAPIItem = document.getElementsByClassName('addAPIItem');
        console.log(addAPIItem[0]);

        for (let i = 0; i < addAPIItem.length; i++) {
            // console.log(addAPIItem[i])
            addAPIItem[i].addEventListener('click', function (event) {
                event.preventDefault();
                let moviereturn = movieSearchAPI.omdbImdbSearch(addAPIItem[i].value)
                console.log(moviereturn)
                // console.log(addAPIItem[i].value);
            })
        }

        // addAPIItem.forEach((button) => console.log(button))



    }

    const validateInputs = () => {
        // console.log('in validate')
        let isValid = true;

        if (!movieTitle.value.trim()) isValid = false;

        isValid ? collectionSearchSubmit.removeAttribute('disabled') : collectionSearchSubmit.setAttribute('disabled', true);
    }

    //EVENT LISTENERS

    // searchItemBack.addEventListener('click', function (event) {
    //     collectionTypeContainer.classList.remove('d-none');
    //     searchItemContainer.classList.add('d-none');
    // })

    document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));

    collectionSearchSubmit.addEventListener('click', function (event) {
        // shouldNavigateAway;
        handleCollectionTypeSubmit(event);

    })


}
omdbSearchInit();
