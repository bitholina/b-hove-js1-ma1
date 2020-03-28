
// question 1

const cat = {
   
    complain: function() {
        console.log("Meow!");
    }
}
// console.log(cat.complain); or/and cat.complain();

// question 2

const heading = document.querySelector("h3");
console.dir(heading);

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

// question 6

let resultsContainer = document.querySelector(".results");
console.dir(resultsContainer);
resultsContainer.innerHTML = "New paragraph";

// question 7 

function loopThrough(catArray) {
  
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
        }
    }
    
loopThrough(cats);


// question 8 

/*const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
*/
const catNames = "<h5>" + catArray[i].name + "</h5>";

function loopThrough(catArray) {
for (let i = 0; i < catArray.length; i++) {
    const catNames = "<h5>" + catArray[i].name + "</h5>";
    console.log(catNames);
    }
}


// question 9

loopThrough(cats); 

resultsContainer.innerHTML = "<h5>Blob</h5><h5>Harold</h5><h5>Blurt</h5>";

// question 10

const catNamesAndAge = "<div>"+"<h5>" + catArray[i].name + "</h5>" + "<p>" + catArray[i].age + "</p>"+"</div>";
        
function loopThrough(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        const catNamesAndAge = "<div>"+"<h5>" + catArray[i].name + "</h5>" + "<p>" + catArray[i].age + "</p>"+"</div>";
        console.log(catNamesAndAge);
        }
    }