function urese(){
    if(localStorage.getItem("Nev")===null){
        document.getElementById("tabla").innerHTML = "<p>Nincs adat!</p>"
    }
    else{
        const name_l = localStorage.getItem("Nev")
        const telepules_l = localStorage.getItem("Telepules")
        const iranyito_l = localStorage.getItem("Iranyito")
        const kozjelleg_l = localStorage.getItem("Kozterulet jellege")
        const hazszam_l = localStorage.getItem("Hazszam")

        document.getElementById("tabla").innerHTML = `<p>Név: ${name_l}</p><p>Település: ${telepules_l}</p><p>Irányító: ${iranyito_l}</p><p>Közjelleg: ${kozjelleg_l}</p><p>Házszám: ${hazszam_l}</p>`
    }
}

function irasd(){
    let nev = document.getElementById("nev").value
    let telepules = document.getElementById("telep").value
    let iranyito = document.getElementById("iranyito").value
    let kozjelleg = document.getElementById("kozjel").value
    let hazszam = document.getElementById("hazszam").value

    localStorage.setItem("Nev",nev)
    localStorage.setItem("Telepules",telepules)
    localStorage.setItem("Iranyito",iranyito)
    localStorage.setItem("Kozterulet jellege",kozjelleg)
    localStorage.setItem("Hazszam",hazszam)

    const name_l = localStorage.getItem("Nev")
    const telepules_l = localStorage.getItem("Telepules")
    const iranyito_l = localStorage.getItem("Iranyito")
    const kozjelleg_l = localStorage.getItem("Kozterulet jellege")
    const hazszam_l = localStorage.getItem("Hazszam")

    document.getElementById("tabla").innerHTML = `<p>Név: ${name_l}</p><p>Település: ${telepules_l}</p><p>Irányító: ${iranyito_l}</p><p>Közjelleg: ${kozjelleg_l}</p><p>Házszám: ${hazszam_l}</p>`
}