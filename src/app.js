import {User} from "./user.js";
export const getData = async () => {
    try {
        //récupérer les données
        const response = await fetch("https://randomuser.me/api/?results=20")
        const data = await response.json()
        console.log(data) // vérifier si mon data me retourne des données JSON.
        //Ne prendre que les données pertinentes en JSON
        for (let person of data.results) {
            const title = person.name.title
            const surname = person.name.first
            const name = person.name.last
            const city = person.location.city
            const country = person.location.country
            const age = person.dob.age
            const email = person.email
            const picture = person.picture.large
            console.log(title,surname,name,age,picture) // vérifier si j'ai bien toutes mes données
            // Permettre l'affichage des utilisateurs à l'aide de la clase User
            const user = new User(title,surname,name,city,country,age,email,picture)
            user.render(user.generateElement(title,surname,name,city,country,age,email,picture,false))

        }
    }catch (e) {
       console.error(e.message)
    }

}
getData()


