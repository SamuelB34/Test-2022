const getData1 = async () => {
    // console.log("Datos Norte");
    await fetch(
        "https://project-35d0c-default-rtdb.firebaseio.com/restaurants.json"
    )
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // console.log(data["Puerta Norte"]);
            const estadoPuertaNorte = data["restaurant1"].type;
            console.log(estadoPuertaNorte);
            // const puertaNorteDiv = document.getElementById("puerta-norte");
            // puertaNorteDiv.innerHTML = estadoPuertaNorte;
        });
};

export default getData1;