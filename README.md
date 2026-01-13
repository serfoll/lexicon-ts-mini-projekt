# Projektuppgift: Grunden till din Webb-App

Välkommen till din första stora TypeScript-utmaning! I den här uppgiften ska du bygga fundamentet till en applikation. 

**Viktig ordning:** Fokusera i första hand på logiken och att få kopplingen mellan TypeScript och HTML att fungera. Spara design och styling till sist!

---

## Instruktioner

### 1. Välj ett Tema
Välj vad din app ska handla om. Du kan skapa något helt eget (t.ex. en receptsida, ett spel eller en butik) eller använda **Musikspelaren** som referens.

### 2. Skapa din datastruktur (Interfaces & Types)
* **Huvud-Interface:** Definiera ett interface för ditt primära objekt.
* **Under-Interface:** Skapa ett interface för ett objekt som ligger inuti ditt huvudobjekt (t.ex. en `Album`-typ inuti `Song`).
* **Optional Property (`?`):** Markera minst en egenskap som valfri.
* **Union Type:** Skapa en egen typ för att begränsa en status (t.ex. `type Status = "Playing" | "Paused"`).

### 3. Skapa Mock Data
* Skapa en variabel som innehåller en **lista (Array)** av objekt som följer dina interfaces.
* Se till att minst ett av dina objekt saknar det värde du markerade som valfritt (`?`).

### 4. Förbered HTML & Koppla TS (Fokusera på Logiken)
Nu ska du se till att "maskineriet" fungerar:
* Skapa enkla behållare i `index.html` med unika **ID:n**.
* Hämta elementen i din TS-fil med `document.getElementById()`.
* Använd **Type Assertion** (`as HTML...`) för rätt elementtyp.
* **Mål:** Du ska kunna hämta information från ett av objekten i din lista (t.ex. det första) och skriva ut det på sidan... (t.ex. via `.textContent`).

---

## Design & Presentation (Görs när logiken fungerar)

När du ser att din data skrivs ut korrekt på sidan är det dags att börja styla:

* **Skapa en komponent:** Designa ett visuellt element (t.ex. ett kort eller en box) i din CSS-fil som representerar ditt objekt.

---

## Checklista
- [ ] Mitt projekt har fungerande logik innan jag började med CSS.
- [ ] Jag har minst två sammankopplade Interfaces och en Union Type (Union type behöver inte vara sammankopplat i detta läge.)
- [ ] Jag kan hämta element från HTML och ändra deras innehåll via TypeScript.
- [ ] TypeScript ger inga felmeddelanden i min kod.
