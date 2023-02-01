
/* =========ARRAYS TEIL 2========= */


/* ========Aufgabe 1.1.====== Sort */


let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
  sortierung = languages.sort()

  console.log(sortierung)

  /* (12) ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript']
 */



  /* ======Aufgabe 1.11 - --splice =========== */


  /* let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];
 */

  /* Elemente hinzufügen mit splice()
Um Elemente hinzuzufügen, müssen wir sie als dritten, vierten, fünften Parameter (abhängig davon, wie viele hinzugefügt werden sollen) zur splice() Methode angeben:

Syntax: array.splice(index, Anzahl der zu löschenden Elemente, Element, Element);

 */

let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

console.log(array)


/*  -->> Füge Fotos mit der Nummer 008-010 hinzu.
Gib array in der Konsole aus.*/

array.splice(7, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")

console.log(array)

/*
console.log(array)
0 "imageTeilnehmer000supercode.jpg"
1 "imageTeilnehmer001supercode.jpg"
2 "imageTeilnehmer008supercode.jpg"
3 "imageTeilnehmer009supercode.jpg"
4 "imageTeilnehmer010supercode.jpg"
length 5 */


/*  --- >> Füge Fotos mit der Nummer 014-019 hinzu.
Gib array in der Konsole aus.*/

array.splice(14, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg","imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg")

console.log(array)

/* (11) ['imageTeilnehmer000supercode.jpg', 'imageTeilnehmer001supercode.jpg', 
'imageTeilnehmer008supercode.jpg', 
'imageTeilnehmer009supercode.jpg', 
'imageTeilnehmer010supercode.jpg', 
'imageTeilnehmer014supercode.jpg', 
'imageTeilnehmer015supercode.jpg',
'imageTeilnehmer016supercode.jpg',
'imageTeilnehmer017supercode.jpg', 
'imageTeilnehmer018supercode.jpg', 
'imageTeilnehmer019supercode.jpg'] */


/*--- >> Füge den Rest(000-019) der Fotos hinzu, so dass sie numerisch angezeigt werden.
Gib array in der Konsole aus.*/

array.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg","imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg")

array.splice(10, 0, "imageTeilnehmer011supercode.jpg","imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg")

console.log(array)

array.sort()
console.log(array)


/* (20) ['imageTeilnehmer000supercode.jpg', 'imageTeilnehmer001supercode.jpg', 'imageTeilnehmer002supercode.jpg', 'imageTeilnehmer003supercode.jpg', 'imageTeilnehmer004supercode.jpg', 'imageTeilnehmer005supercode.jpg', 'imageTeilnehmer006supercode.jpg', 'imageTeilnehmer007supercode.jpg', 'imageTeilnehmer008supercode.jpg', 'imageTeilnehmer009supercode.jpg', 'imageTeilnehmer010supercode.jpg', 'imageTeilnehmer011supercode.jpg', 'imageTeilnehmer012supercode.jpg', 'imageTeilnehmer013supercode.jpg', 'imageTeilnehmer014supercode.jpg', 'imageTeilnehmer015supercode.jpg', 'imageTeilnehmer016supercode.jpg', 'imageTeilnehmer017supercode.jpg', 'imageTeilnehmer018supercode.jpg', 'imageTeilnehmer019supercode.jpg'] */




/* ======Aufgabe 1.12 == slice--- ======== */

  
let array2 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
  ];
  

  /*  ==>  Kopiere die Bilder 007-014 und deklariere sie als        Variable copyImg1.
    Gib copyImg1 in der Konsole aus. */

const copyImg1 = array2.slice(7, 15)

console.log(copyImg1)

/* (7) ['imageTeilnehmer007supercode.jpg', 'imageTeilnehmer008supercode.jpg', 'imageTeilnehmer009supercode.jpg', 'imageTeilnehmer010supercode.jpg', 'imageTeilnehmer011supercode.jpg', 'imageTeilnehmer012supercode.jpg', 'imageTeilnehmer013supercode.jpg'] */


/* ==> Kopiere die Bilder 006-011 und deklariere sie als Variable copyImg2.
Gib copyImg2 in der Konsole aus.
 */

const copyImg2 = array2.slice(6, 12)

console.log(copyImg2)

/* (6) ['imageTeilnehmer006supercode.jpg', 'imageTeilnehmer007supercode.jpg', 'imageTeilnehmer008supercode.jpg', 'imageTeilnehmer009supercode.jpg', 'imageTeilnehmer010supercode.jpg', 'imageTeilnehmer011supercode.jpg'] */



/* ==========  Aufgabe 1.3  - Nummer sortieren ===== */

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a,b) => a-b)
console.log(numArray1)

/* (console.log(numArray1)
12) [2, 3, 10, 22, 24, 36, 54, 68, 70, 88, 98, 99] */
