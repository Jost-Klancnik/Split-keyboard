# Split Mehanska Tipkovnica

To je repozitorij za razvoj moje lastne "split" ergonomske mehanske tipkovnice, namenjene programrjem, od zasnove do končnega izdelka.

## O Projektu
Gre za razvoj lastne žične "split" tipkovnice, ki bo delovala z dvema Pro Micro krmilnikoma. Polovici bosta med seboj povezani preko TRRS kabla, "master" stran pa bo z računalnikom povezana preko USB-c-ja. Projekt temelji na odprtokodnih orodjih in bo v celoti dokumentiran v tem repozitoriju.

## Načrt Dela
Projekt je razdeljen na več faz, ki si sledijo v logičnem zaporedju. Spodaj je opisan časovni potek in uporabljena orodja.

### Faza 1: Dizajn in Načrtovanje PCB (Zaključeno)
*   **1.1 - Generiranje postavitve (Ergogen):**
    *   **Opis:** Z orodjem [Ergogen](https://ergogen.xyz/) sem na podlagi YAML konfiguracije definiral fizično postavitev tipk, obliko ohišja (plate) in pozicije za vijake.
    *   **Namen:** Ergogen omogoča hitro in parametrično prototipiranje različnih postavitev, kar je bistveno pospešilo iskanje idealne oblike, prav tako pa omogoča enostavno generiranje celotnega vezja, ko smo enkrat zadovoljni s postavitvijo.
    *   **Časovni okvir:** ~8 ur

*   **1.2 - Električni načrt in "Routing" (KiCad):**
    *   **Opis:** Generirane datoteke iz Ergogena sem uvozil v [KiCad](https://www.kicad.org/), kjer sem dokončal električno shemo. To je vključevalo dodajanje Pro Micro krmilnikov, TRRS priključkov, diod (1N4148) in matrike stikal. Nato sem ročno povezal vse komponente ("routing").
    *   **Namen:** KiCad je standard v svetu odprtokodne elektronike in omogoča popoln nadzor nad dizajnom tiskanega vezja (PCB).
    *   **Časovni okvir:** ~10 ur

### Faza 2: Naročilo in Sestavljanje (Naslednji koraki)
*   **2.1 - Izdelava PCB in nabava komponent:**
    *   **Opis:** Iz KiCada bom izvozil Gerber datoteke in jih poslal v izdelavo pri [JLCPCB](https://jlcpcb.com/). Hkrati bom naročil vse potrebne elektronske komponente (stikala, diode, TRRS konektorji, Pro Micro itd.) preko [AliExpressa](https://www.aliexpress.com/).
    *   **Časovni okvir:** ~2-4 tedne (čakanje na dostavo)

*   **2.2 - Spajkanje in montaža:**
    *   **Opis:** Ko prispejo vse komponente, sledi spajkanje diod, TRRS priključkov in Pro Micro krmilnikov na PCB. Na koncu sledi montaža stikal in ohišja.
    *   **Časovni okvir:** trenutno neznan

### Faza 3: Firmware (QMK)
*   **3.1 - Razvoj in konfiguracija:**
    *   **Opis:** Uporabil bom [QMK Firmware](https://qmk.fm/), ki je odprtokodni standard za programsko opremo tipkovnic. Potrebno bo ustvariti novo tipkovnico znotraj QMK, definirati matriko, pine na Pro Micro krmilnikih in nastaviti komunikacijo med obema polovicama.
    *   **Namen:** QMK ponuja izjemno fleksibilnost, podporo za "split" tipkovnice, več plasti (layers), makre in druge napredne funkcije.
    *   **Časovni okvir:** ~10 ur

*   **3.2 - Nalaganje Firmware-a:**
    *   **Opis:** Pripravljen firmware bom s pomočjo QMK Toolboxa ali preko ukazne vrstice naložil ("flashal") na oba Pro Micro krmilnika.

### Faza 4: Prihodnji razvoj
*   **4.1 - Razvoj konfiguracijske aplikacije:**
    *   **Opis:** V prihodnosti načrtujem razvoj lastne aplikacije (verjetno v Pythonu ali z uporabo spletnih tehnologij), ki bi omogočala spreminjanje postavitve tipk (keymap) v realnem času, brez potrebe po ponovnem nalaganju celotnega firmware-a.

## Infrastruktura in Namestitev

Za razvoj projekta so potrebna določena orodja. Spodaj so navodila za namestitev na različnih operacijskih sistemih.

### Osnovne predpogoji
Pred namestitvijo specifičnih orodij se prepričajte, da imate na sistemu nameščene:
*   **Git:** Za upravljanje z repozitorijem.
*   **Python (verzija 3.8 ali novejša) in Pip:** Potrebno za QMK.
*   **Node.js in NPM:** Potrebno za Ergogen.

---

### Namestitev na Arch Linux
*   **Vsa orodja (All-in-one):**
    ```bash
    # Git, Python, Pip, NodeJS, NPM in osnovna orodja za gradnjo
    sudo pacman -S git python-pip nodejs npm base-devel

    # KiCad
    sudo pacman -S kicad kicad-library kicad-library-3d
    ```
*   **Specifična orodja (po korakih):**
    ```bash
    # Ergogen
    npm install -g ergogen

    # QMK CLI
    pip install qmk
    qmk setup # Sledi navodilom za namestitev odvisnosti
    ```

---

### Namestitev na Windows
*   **Osnovna orodja:**
    *   **Git:** Prenesite in namestite [Git for Windows](https://git-scm.com/download/win).
    *   **Python:** Prenesite in namestite s [python.org](https://www.python.org/downloads/). 
    *   **Node.js:** Prenesite in namestite z [nodejs.org](https://nodejs.org/en/download/).
*   **Specifična orodja:**
    *   **KiCad:** Prenesite in namestite z [uradne strani KiCad](https://www.kicad.org/download/).
    *   **Ergogen & QMK:** Zaženite **Command Prompt** ali **PowerShell** in vpišite ukaze:
        ```powershell
        # Ergogen (preko NPM)
        npm install -g ergogen

        # QMK (preko Pip)
        pip install qmk
        qmk setup
        ```

---

### Namestitev na macOS
*   **Osnovna orodja (preko Homebrew):**
    *   Najprej namestite [Homebrew](https://brew.sh/), če ga še nimate.
    ```bash
    # Git, Python in Node.js
    brew install git python node
    ```
*   **Specifična orodja:**
    *   **KiCad:**
        ```bash
        brew install --cask kicad
        ```
    *   **Ergogen & QMK:**
        ```bash
        # Ergogen (preko NPM)
        npm install -g ergogen

        # QMK (preko Pip)
        pip3 install qmk # Uporabite pip3, da se izognete konfliktu s sistemskim Pythonom
        qmk setup # Sledi navodilom v terminalu
        ```

