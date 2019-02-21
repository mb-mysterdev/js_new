const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function allB() {


    a = books.values();
    for (const value of a) {
        rented = value.rented
        if (rented > 1) {
            console.log("tout les books ont bien été emprunté au moins une fois  ")
        }
    }


    a = books.values();
    for (const value of a) {
        console.log(Math.max(rented));
    }


    a = books.values();
    for (const value of a) {
        console.log(Math.min(9,2,6,5,19));
    }

    a = books.values();
    hash = [];
    for (const value of a) {
        hash.push(value.id) 
    }
    console.log(hash[2]);


    console.log("Suppression du livre avec l'ID: 133712");
    let indexDelete;
    books.forEach(book => {
      if (book["id"] === 133712) {
        books.splice(books.indexOf(book),1);
      }
    })
    console.log(books);

    console.log("Tri des livres par ordre alphabétique");
console.log(books.sort(function (a, b) {
  return a.title.localeCompare(b.title);
})
);

}