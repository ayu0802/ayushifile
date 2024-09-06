const getData = () => {
    fetch("https://api.github.com/users/ayu0802").then((res) => {

        res.json().then ((data) => {
            display(data);

            });
        });
};


getData(); {
    
};

function display(data) {
    console.log(data);
}

function display(data) {
    const parent = document.getElementById("parent");
    console.log(data);

    const title = document.createElement("h4");
    title.innerText = data.login;
    title.setAttribute("class", "card-title");
    parent.appendChild(title);


    const image = document.createElement("img");
    // title.innerText = data.login;
    imasge.setAttribute("src", data.avatar_url");
    image.setAttribute("class", "card-img")    
    parent.appendChild(image);
}





// const ans = getData();
// console.log(ans);

// function display(data) {
//     const parent = document.getElementById("parent");

//     const title1= document.createElement("h4");
//     title1.innerText = data[0].login;
//     parent.appendChild(title1);

//     const title2= document.createElement("h4");
//     title2.innerText = data[1].login;
//     parent.appendChild(title2);
// }