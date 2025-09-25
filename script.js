function generarNombre() {
    const inicio = ["Aki", "Haru", "Kuro", "Shin", "Mika", "Ryo", "Taka", "Sora"];
    const medio = ["shi", "mi", "ra", "to", "na", "ka", "se", "zu"];
    const fin = ["ko", "ta", "ru", "shi", "ya", "n", "ri", "mo"];

    const parte1 = inicio[Math.floor(Math.random() * inicio.length)];
    const parte2 = medio[Math.floor(Math.random() * medio.length)];
    const parte3 = fin[Math.floor(Math.random() * fin.length)];

    document.getElementById("resultado").innerText = parte1 + parte2 + parte3;
}
