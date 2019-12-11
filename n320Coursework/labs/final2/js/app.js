
function getFoodId(id) {
    window.location.href = "detailPage.html?id=" + id;

}


var appetizerArray = [];
var entreeArray = [];
var drinkArray = [];
var dessertArray = [];

function getData() {
    $.getJSON("data/data.json", function (data) {
        //success one 
        appetizerArray = data.appetizers;
        entreeArray = data.entrees;
        drinkArray = data.drinks;
        dessertArray = data.desserts;

        $.each(appetizerArray, function (idx, listName) {
            $(".content2").append(

                `<div class="food" >
                    <div class="flexWrapper" id = "food_${idx}">
                        <div class="image">
                            <img src="${listName.photo}">
                        </div>
                        <div class="bio">                       <h1>${listName.name}</h1>
                            <p>Description: ${listName.description}</p>
                            <p>Nutrition: 
                            ${listName.nutrition.calories}
                            ${listName.nutrition.protein}
                            ${listName.nutrition.carbs}
                            ${listName.nutrition.fat}
                            </p>
                            <p>Servings: ${listName.serving}</p>
                            <p>Price: ${listName.price}</p>

                            <p>Back to <a href="index.html">MENU</a></p>
                        </div>
                    </div>
                </div>`


            )
        });
        $.each(entreeArray, function (idx, listName) {
            $(".content2").append(

                `<div class="food" id = "food_${idx}">
                    <div class="flexWrapper">
                        <div class="image">
                            <img src="${listName.photo}">
                        </div>
                        <div class="bio">                       <h1>${listName.name}</h1>
                            <p>Description: ${listName.description}</p>
                            <p>Nutrition: 
                            ${listName.nutrition.calories}
                            ${listName.nutrition.protein}
                            ${listName.nutrition.carbs}
                            ${listName.nutrition.fat}
                            </p>
                            <p>Servings: ${listName.serving}</p>
                            <p>Price: ${listName.price}</p>
                            <p>Back to <a href="index.html">MENU</a></p>
                        </div>
                    </div>
                </div>`


            )
        });
        $.each(drinkArray, function (idx, listName) {
            $(".content2").append(

                `<div class="food" id = "food_${idx}">
                    <div class="flexWrapper">
                        <div class="image">
                            <img src="${listName.photo}">
                        </div>
                        <div class="bio">                       <h1>${listName.name}</h1>
                            <p>Description: ${listName.description}</p>
                            <p>Nutrition: 
                            ${listName.nutrition.calories}
                            ${listName.nutrition.protein}
                            ${listName.nutrition.carbs}
                            ${listName.nutrition.fat}
                            </p>
                            <p>Servings: ${listName.serving}</p>
                            <p>Price: ${listName.price}</p>
                            <p>Back to <a href="index.html">MENU</a></p>
                        </div>
                    </div>
                </div>`


            )
        });
        $.each(dessertArray, function (idx, listName) {
            $(".content2").append(

                `<div class="food" id = "food_${idx}">
                    <div class="flexWrapper">
                        <div class="image">
                            <img src="${listName.photo}">
                        </div>
                        <div class="bio">                       <h1>${listName.name}</h1>
                            <p>Description: ${listName.description}</p>
                            <p>Nutrition: 
                            ${listName.nutrition.calories}
                            ${listName.nutrition.protein}
                            ${listName.nutrition.carbs}
                            ${listName.nutrition.fat}
                            </p>
                            <p>Servings: ${listName.serving}</p>
                            <p>Price: ${listName.price}</p>
                            <p>Back to <a href="index.html">MENU</a></p>
                        </div>
                    </div>
                </div>`


            )
        });
        console.log(appetizerArray);








    }).fail(function (err) {
        console.log(err);
    });

};







$(document).ready(function () {
    getData();
    // init();
    // getFoodId(id);
    var path = location.href;
    var url = new URL(path);
    id = url.searchParams.get("id");
    $(".food").css("display", "none");
    // $("#"+ id).css("display", "inline-block");
    console.log(id);

})