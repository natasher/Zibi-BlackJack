# Feedback

Howgh!

1. Używamy języka **angielskiego** zamiast polskiego w kodzie.

2. Odpalając komendę `git log --all` widzę tylko jeden *commit* na głównej gałęzi.
    [Graf produkcyjny dla gałęzi w git](https://nvie.com/img/git-model@2x.png) oraz
    [Więcej na ten temat](https://nvie.com/posts/a-successful-git-branching-model/).

    Na nasze potrzeby będziemy korzystać z branch`y:
    - main (lub master)
    - develop (tutaj prace developerskie)
    - feature (tutaj konkretne zadanie do wykonanie, np. zmień logo)

    Gdy etap składający się z jednego bądź wielu feature, uznamy za zakończony
    wtedy robimy merge do master/main.

    Gdy będę robił refactor Twojego kodu, będę jeszcze stosował konwencję pisania
    commitów [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

3. Styl kodu - ważne jest trzymanie się jednego "wcięcia"/tab/spacji tzw. indent.
    W Twoim kodzie w linijce 80 i 88 funkcje `dodajUczestników` i `rozdajKarty`
    nie dość, że nie trzymają się wartości "wcięcia" (tab = 2 spaces) to sa na
    poziomie wcięcia równym 1 spacji gdy reszta kodu rozpoczyna się bez spacji.
    A prawdziwy bałagan wcięć jest w `rozdajKarty` - brak czytelności.

4. Dane `tailaTestowa` powinny znajdować się w osobnym pliku, tak samo jak inne funkcje.
  Zwiększa to czytelność kodu, łatwość jego utrzymania oraz dalszy rozwój.

5. Zamiast `let` warto częściej używać `const` w takich miejscach jak l. 65,
    w tej pętli taliaRandom.length się nie zmienia, a `let` jest mylące,
    a tak BTW to i tak nie korzystasz z zmiennej `el` - w l. 67 dalej używasz
    `tailaRandom.length` co spowalnia pętle (oczywiście w tym przypadku niezauważalnie
    ale wyobraź sobie 10k elementów).

6. [Koncepty](http://itcraftsman.pl/uzyteczne-koncepty-projektowe-kiss-dry-yagni-tda-oraz-separation-of-concerns/) do zastosowania:
  - DRY: Don't Repeat Yourself
    `uczestnicy[uczestnik]` powtórzone kilka razy, może warto wydzielić jedna zmienną
    zamiast za każdym razem wyciągać dany index z tablicy? Tutaj znowu wchodzi performance.
  - KISS: Keep It Simple Stupid
    Tutaj +/-, kod nie jest przekombinowany czy "przeintelektualizowany"
    ale można go napisać czytelniej.