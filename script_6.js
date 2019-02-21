const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

function allH() {

        a = entrepreneurs.values();
        for (const value of a) {
            year = value.year
            if ( year > 1970 && year < 1980){
                console.log(year)
            }
        }

        a = entrepreneurs.values();
        for (const value of a) {
            name = value.first
            last = value.last

            var arraynl = [];
            arraynl =[ {name_prenom : name + last }] ;
            console.log(arraynl);
        }

        a = entrepreneurs.values();
        for (const value of a) {
            year = value.year
            age = (year - 2019);
                console.log(age)
            
        }
        a = entrepreneurs.values();
        hash = [];
        for (const value of a) {
            hash.push(value.last) 

        }
        console.log(hash.sort());

}

