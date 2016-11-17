# Bilverkstad

Skoluppgift i grupp med fokus på backend.

Projekt medlemmar

Jarl
Patricio
Martin 
Mayra
Faj

Scenario

En bilverkstad vill kunna lagra (skapa, läsa, ändra och ta bort) information om följande i
en databas:

1) Vilka fordon som för tillfället är under reparation (reg. nr, modell etc)
mongoDB: "rest/repairsCar/active"

2) Kunder (personnummer, adress etc)
mongoDB: "rest/customer"

3) Vilka kunder som lämnat in vilka fordon.
mongoDB: "rest/repairsCar"

4) Vilken skador/fel som ska åtgärdas på varje fordon.
mongoDB: "rest/repairsCar"

5) Vilka anställda man har
mongoDB: "rest/employee"

6) Vilka anställda som arbetar/har arbetat med varje fordon
mongoDB: "rest/repairsCar"

7) Vilka reservdelar man har i lager och vilka fordonsmodeller de passar
mongoDB: "rest/sparePart"

8) Om en reparation/åtgärd av ett fordon är kommande, pågående eller avslutad.
mongoDB: "rest/repairsCar"

9) Arbetstid nedlagd på ett visst fordon. (BEHÖVS)
mongoDB: "rest/repairsCar"

10) Vilka tider olika anställda har semester.
mongoDB: "rest/employee/vacation"

:+1: :metal: 

Generellt (mongoDB): Det går att se ett specifikt element på alla routes om man inkluderar mongos id efter modulnamnet.