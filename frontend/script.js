const headerComponent = function (title) {
    return `
    <header>${title}</header>
    `
}

const sectionComponent = function (id, buttontext, h2text) {
    return `
    <section id="${id}"> 
        <h2>${h2text}</h2>
        <button>${buttontext}</button>
    </section>
    `
}
//idézőjel végére figyelni, backtick helyére figyelni, zárótagek helyére figyelni

const footerComponent = function () {
    return `
    <footer></footer>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity practice")); //az insert ajacenthtml megvárja, amíg lefut a headercomponent

    let sections = ""

    for (let index = 1; index < 5; index++) {
        sections += sectionComponent(`id-${index}`, `Button ${index}`, `Subtitle ${index}`) //id-ba nem tehetünk szóközt, ezért van ott kötőjel
    }

    rootElement.insertAdjacentHTML("beforeend", sections);

    rootElement.insertAdjacentHTML("afterend", footerComponent());
}

window.addEventListener("load", loadEvent) //csak akkor indítsa a loadeventet, amikor a load(az oldal betöltése) már megtörtént

//for: ha nincs adatunk. for of: ha van adatunk. 