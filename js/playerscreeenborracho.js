    //Al pulsar el botón de comenzar la partida cambia al HTML del tablero
    const cambiaPantalla = () => {
        let jugador1 = document.getElementById("Player1").value;
        let jugador2 = document.getElementById("Player2").value;
        if (jugador1 !="" && jugador2 !="")  {
            sessionStorage.setItem("name1",jugador1);
            sessionStorage.setItem("name2",jugador2);
        }
        setTimeout(()=>{
            window.open("../pages/tableroborracho.html","_self");
        },500);
    }
    