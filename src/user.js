
export class User {
    constructor(title,surname,name,city,country, age, email, picture,imHere) {
        this.title = title
        this.surname = surname
        this.name = name
        this.city = city
        this.country = country
        this.age = age
        this.email = email
        this.picture = picture
        imHere = false;
        const userElement = this.generateElement();
    }

    generateElement(title,surname,name,city,country, age, email, picture,imHere){
        const divElement = document.createElement("div")
        divElement.classList.add("user")
        divElement.dataset.present = imHere
        const HTML = `
                        <img src="${picture}">
                        <div class="user--info">
                            <h1>${title} ${surname} ${name}</h1>
                            <p>${age} years old</p>
                            <p>${city}, ${country}</p>
                  </div>
                  <a href="mailto:${email}">
                        <span class="mail">✉</span>
                  </a>`

        divElement.insertAdjacentHTML("afterbegin",HTML)
        return divElement;
    }

    render(userElement){
        const mainElement = document.querySelector("main")
        mainElement.insertAdjacentHTML("afterbegin",userElement)
    }
}
