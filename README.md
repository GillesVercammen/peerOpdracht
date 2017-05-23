# STAPPEN OM HET PROJECT TE STARTEN

1. installeer wamp/mamp: 
http://www.wampserver.com/en/ wamp voor windows
https://www.mamp.info/en/ mamp voor mac

2. start de wamp/mamp server op localhost 8080 of localhost 8000 (rechtsonder in de windowstaakbalk zal een icoontje verschijnen dat groen moet zien, indien rood of oranje is er iets fout)

3. verplaatst de peerOpdracht folder in de C:\wamp64\www folder (default)

4. open je webbrowser in ga naar: http://localhost:8000/peeropdracht/

5. Als alles goed gegaan is zie je nu de loginpagin. klik gewoon op inloggen en je wordt geredirect naar de serverinfo pagina waar jullie op moeten werken

6. Open nu jullie favoriete texteditor (mijn is visual code). en open de peerOpdracht folder in C:\wamp64\www. 

7. Werk enkel in the serverinfo.html / controllers.js / app.js file

8. Bekijk de voorbeeldcode + commentaar en volg een tutorial en ga aan de slag!

8. TIP: voor grafieken neem een kijkje naar de ng-chart dependency (google is your friend)


# TE VOLGEN TUTORIAL

https://www.w3schools.com/angular/default.asp

# HIGH LEVEL INFO HOE ANGULAR WERKT

Angular wordt gebruikt om SPA's te maken, SPA staat voor single page application.
Heel de applicatie wordt eigenlijk in 1 div in de index.html geladen. deze div wordt voorzien van ui-view.
In de app.js vind je de core van de applicatie terug, dit is de routing. De routing zorgt ervoor dat de juist url's met de juiste view(html paginas) en controllers gekoppelt worden.
In de routing wordt gezegd: default pagina dat de user moet zien, in ons geval /login, die bevat als view: login.html en als controller LoginCtrl. 
Dit doe joe dan voor elke pagina dat je nodig hebt, deze pagina wordt dan telken ingeladen in die ene div in de index.html.

De html pagina's in angular zijn gewone html pagina's zoals jullie kennen met als enige verschil dat er angular directives zijn toegevoegd. 
Dit zijn functionaliteiten die aan een html tag kunnen toevoegd worden. Lees hier meer over in de tutorials.

elke pagina heeft een aparte controller, een controller is simpel gezegd een container van javascript code die enkel uitgevoerd zal worden op die pagina.
Dus de LoginCtrl zal enkel gebruikt worden in de login pagina, en de ServerInfoCtrl wordt enkel gebruikt op de serverinfo pagina. 

Schrijf momenteel alle logica en functionaliteit uit in de serverInfoCtrl.


In geval van vragen, Contacteer ons op facebook of stuur ons een email!
Veel succes


