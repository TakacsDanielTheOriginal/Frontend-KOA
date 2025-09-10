function kuld(){
    let nev = document.getElementById("nev").value
    let telepules = document.getElementById("telepules").value
    let iranyito = document.getElementById("iranyito").value
    let kozteruletjellege = document.getElementById("kozjelleg").value
    let hazszam = document.getElementById("hazszam").value

    document.getElementById("kartya").innerHTML = `<p>Név: ${nev}</p><p>Település: ${telepules}</p><p>Irányítószám: ${iranyito}</p><p>Közterületjellege: ${kozteruletjellege}</p><p>Házszám: ${hazszam}</p>`
}