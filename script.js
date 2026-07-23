const starterTasks = [
  ["Odebrać lampiony i świece — ustalić, kto odbiera", "Para Młoda", "Inne"],
  ["Potwierdzić z kościołem świece i lampiony", "Ty", "Środa"],
  ["Sprawdzić, czy świece pasują do lampionów", "", "Środa"],
  ["Zabrać zapalarkę — kupić albo przygotować", "Para Młoda", "Inne"],
  ["Kupić odżywkę / booster do kwiatów — żeby wytrzymały do soboty", "Para Młoda", "Inne"],
  ["Kupić albo wypożyczyć pojemniki na kwiaty z wodą", "Para Młoda", "Inne"],
  ["Ustalić, gdzie kwiaty będą stały w wodzie", "Para Młoda", "Inne"],
  ["Plan stołów — zrobić", "Para Młoda", "Sala"],
  ["Winietki — wybrać i zamówić", "Para Młoda", "Sala"],
  ["Tablica powitalna — wybrać i zamówić", "Para Młoda", "Sala"],
  ["Księga gości — kupić", "Para Młoda", "Sala"],
  ["Długopisy do księgi — kupić", "Para Młoda", "Sala"],
  ["Napoje — policzyć i kupić", "Adrian", "Sala"],
  ["Przygotować koszyk ratunkowy dla kobiet", "Para Młoda", "Sala"],
  ["Przygotować koszyk ratunkowy dla mężczyzn", "Para Młoda", "Sala"],
  ["Ustalić, jakie czytania będą podczas mszy", "Para Młoda", "Kościół"],
  ["Przypisać osoby do czytań: Karolina, Sara i Klaudia", "Para Młoda", "Kościół"],
  ["Ustalić, kto czyta modlitwę wiernych", "Para Młoda", "Kościół"],
  ["Przygotować teksty czytań do wydruku", "Para Młoda", "Kościół"],
  ["Przekazać teksty osobom czytającym wcześniej", "Para Młoda", "Kościół"],
  ["Wydrukować kopię tekstów do kościoła", "Para Młoda", "Kościół"],
  ["Karolina — pierwsze czytanie", "Karolina", "Kościół"],
  ["Sara — modlitwa wiernych", "Sara", "Kościół"],
  ["Klaudia — drugie lub inne czytanie", "Klaudia", "Kościół"],
  ["Potwierdzić liczbę czytań i ostateczny podział", "Para Młoda", "Kościół"],
  ["Ustalić pieśń na wejście", "Para Młoda", "Kościół"],
  ["Ustalić psalm i osobę wykonującą", "Para Młoda", "Kościół"],
  ["Ustalić Alleluja", "Para Młoda", "Kościół"],
  ["Ustalić pieśń na ofiarowanie", "Para Młoda", "Kościół"],
  ["Ustalić pieśń na komunię", "Para Młoda", "Kościół"],
  ["Ustalić utwór po komunii lub przy podpisach", "Para Młoda", "Kościół"],
  ["Ustalić utwór na wyjście", "Para Młoda", "Kościół"],
  ["Przekazać listę utworów organistce", "Para Młoda", "Kościół"],
  ["Przekazać listę utworów śpiewowi i skrzypcom", "Para Młoda", "Kościół"],
  ["Potwierdzić listę utworów z księdzem", "Para Młoda", "Kościół"],
  ["Zawieźć owoce na salę", "Adrian", "Piątek do południa"],
  ["Dostarczyć napis LED", "", "Piątek do południa"],
  ["Dać znać księdzu / kościelnemu po potwierdzeniu godziny", "Ty", "Inne"],
  ["Udekorować kościół", "Aurelia", "Piątek wieczorem"],
  ["Dostarczyć hortensje do kościoła", "Wandzia i Józio", "Piątek wieczorem"],
  ["Zapewnić hortensjom wodę i chłodne miejsce", "", "Piątek wieczorem"],
  ["Przyciąć łodygi hortensji i przygotować spryskiwacz", "", "Piątek wieczorem"],
  ["Zapytać Aurelię, jak zabezpieczyć hortensje", "", "Piątek wieczorem"],
  ["Odebrać dekoracje z Morynia", "", "Piątek wieczorem"],
  ["Sprawdzić kościół po dekoracji", "Adrian", "Piątek wieczorem"],
  ["Dostarczyć podziękowania dla rodziców i świadków", "Ty", "Sobota"],
  ["Zabrać pudełko na koperty", "Świadek", "Sobota"],
  ["Dostarczyć tort", "Cukiernia", "Sobota"],
  ["Dostarczyć wypieki na słodki stół", "Rodziny", "Sobota"],
  ["Przekazać świadkowi dowody osobiste i dokumenty do kościoła", "Para Młoda", "Sobota"],
  ["Przekazać świadkowi obrączki i instrukcję, by miał je przy sobie", "Para Młoda", "Sobota"],
  ["Przekazać świadkom koperty z gotówką dla usługodawców", "Para Młoda", "Sobota"],
  ["Umieścić koperty od gości w sejfie na sali po życzeniach", "Świadkowie", "Sobota"],
  ["Zabrać torbę awaryjną Panny Młodej", "Świadkowa", "Sobota"],
  ["Zabrać buty na zmianę Panny Młodej na salę", "", "Sobota"],
  ["Zabrać drugą koszulę Pana Młodego na salę", "", "Sobota"],
  ["Odebrać bukiet i butonierki", "", "Sobota"],
  ["Przygotować Pana Młodego do zdjęć fotografa na 12:00", "Pan Młody", "Sobota"],
  ["Przygotować Pannę Młodą do zdjęć fotografa na 13:05", "Panna Młoda", "Sobota"],
  ["Być gotowym na błogosławieństwo o 13:35", "Para Młoda", "Sobota"],
  ["Wyjść pieszo do kościoła o 13:50", "Para Młoda", "Sobota"],
  ["Przekazać zespołowi plan godzin atrakcji i zakończenia wesela", "Para Młoda", "Sobota"],
  ["Ustawić telefon audio na dworze", "", "Sobota"],
  ["Sprawdzić działanie telefonu audio przed przyjazdem gości", "", "Sobota"],
  ["Sprawdzić miejsce animacji i potrzeby animatorów", "", "Sobota"],
  ["Zapewnić animatorom jedzenie i napoje", "", "Sobota"],
  ["Zapłacić makijażystce", "", "Sobota"],
  ["Zapłacić fryzjerowi", "", "Sobota"],
  ["Zapłacić kościołowi / oprawie", "Świadkowa", "Sobota"],
  ["Zapłacić animatorom", "", "Sobota"],
  ["Umówić protokół przedślubny", "Para Młoda", "Inne"],
  ["Odbyć spowiedź przedślubną", "Para Młoda", "Inne"],
  ["Potwierdzić z księdzem wspólne wejście Pary Młodej", "Para Młoda", "Inne"],
  ["Potwierdzić z księdzem dzieci niosące obrączki", "Para Młoda", "Inne"],
  ["Ustalić, kto sprząta płatki róż pod kościołem", "", "Inne"],
  ["Kupić pudełko / poduszkę na obrączki", "", "Inne"],
  ["Ustalić dorosły plan B dla Lucasa i Claudii przy obrączkach", "", "Inne"],
  ["Potwierdzić z kościołem zgodę na białe płatki róż", "", "Inne"],
  ["Przygotować białe płatki róż pod kościół", "Aurelia i Agatka", "Inne"],
  ["Ustalić odbiór bukietu i butonierek", "", "Inne"],
  ["Potwierdzić butonierkę Pana Młodego i świadka", "", "Inne"],
  ["Zapewnić bukiet u Panny Młodej przed zdjęciami", "", "Inne"],
  ["Zamówić napis LED", "", "Inne"],
  ["Kupić iskry / fontanny na pierwszy taniec", "", "Inne"],
  ["Ustalić osobę odpowiedzialną za odpalenie iskier / fontann", "", "Inne"],
  ["Przetestować film dla rodziców: projektor, ekran, dźwięk i pendrive", "", "Inne"],
  ["Przygotować kopię filmu dla rodziców", "", "Inne"],
  ["Przygotować krótką przemowę dla rodziców", "Para Młoda", "Inne"],
  ["Ustalić, kto odpala film i przynosi prezenty dla rodziców", "", "Inne"],
  ["Potwierdzić liczbę animatorów dla około 35 dzieci", "", "Inne"],
  ["Ustalić miejsce animacji i plan B na deszcz", "", "Inne"],
  ["Potwierdzić, czy animatorzy potrzebują stołu i prądu", "", "Inne"],
  ["Sprawdzić w umowie termin płatności końcowej za salę", "", "Inne"],
  ["Sprawdzić w umowie termin płatności końcowej za zespół", "", "Inne"],
  ["Sprawdzić w umowie termin płatności końcowej za fotografa", "", "Inne"],
  ["Sprawdzić w umowie termin płatności końcowej za kamerzystę", "", "Inne"],
  ["Zapłacić za tort przed weselem", "", "Inne"],
  ["Przygotować i opisać koperty z gotówką dla usługodawców", "", "Inne"],
  ["Rozpisać kwoty w kopertach dla usługodawców", "Para Młoda", "Inne"],
  ["Oddzielić koperty usługodawców od kopert od gości", "Para Młoda", "Inne"],
  ["Kupić buty ślubne Panny Młodej", "Panna Młoda", "Inne"],
  ["Kupić bieliznę ślubną Panny Młodej", "Panna Młoda", "Inne"],
  ["Kupić welon / ozdobę do włosów", "Panna Młoda", "Inne"],
  ["Kupić pończochy / rajstopy i zapasowe", "Panna Młoda", "Inne"],
  ["Kupić biżuterię Panny Młodej", "Panna Młoda", "Inne"],
  ["Kupić perfumy Panny Młodej", "Panna Młoda", "Inne"],
  ["Kupić wieszak na suknię do zdjęć", "Panna Młoda", "Inne"],
  ["Przygotować detale Panny Młodej do zdjęć", "Panna Młoda", "Inne"],
  ["Odebrać suknię po końcowej przymiarce", "Panna Młoda", "Inne"],
  ["Wpisać dokładne godziny makijażu i fryzury", "Panna Młoda", "Inne"],
  ["Kupić czarny smoking", "Pan Młody", "Inne"],
  ["Kupić koszulę do spinek", "Pan Młody", "Inne"],
  ["Kupić drugą koszulę na salę", "Pan Młody", "Inne"],
  ["Kupić muchę i szelki", "Pan Młody", "Inne"],
  ["Kupić spinki do mankietów", "Pan Młody", "Inne"],
  ["Kupić formalne buty Pana Młodego", "Pan Młody", "Inne"],
  ["Kupić czarne długie skarpetki i zapasowe", "Pan Młody", "Inne"],
  ["Kupić poszetkę", "Pan Młody", "Inne"],
  ["Kupić perfumy Pana Młodego", "Pan Młody", "Inne"],
  ["Kupić rolkę do ubrań", "", "Inne"],
  ["Ustalić ilość i kupić whisky", "", "Inne"],
  ["Kupić prosecco na toast i prosecco 0%", "", "Inne"],
  ["Przygotować apteczkę i torbę awaryjną", "", "Inne"],
  ["Spakować igłę, nitkę, agrafki i nożyczki", "", "Inne"],
  ["Spakować plastry, leki, chusteczki i kosmetyki awaryjne", "", "Inne"],
  ["Kupić pojemniki cateringowe na jedzenie po weselu", "", "Inne"],
  ["Kupić torby / worki, marker i folię na odbiór rzeczy", "", "Inne"],
  ["Podzielić odbiór jedzenia po weselu na auta", "", "Inne"],
  ["Przypisać odbiór alkoholu i napojów po weselu", "", "Inne"],
  ["Przypisać odbiór dekoracji, księgi, tablicy i telefonu audio po weselu", "", "Inne"],
  ["Przypisać odbiór rzeczy Pary Młodej po weselu", "", "Inne"],
  ["Ustalić godzinę odbioru rzeczy po weselu", "", "Inne"],
  ["Ustalić, czy sala zapewnia pojemniki na jedzenie", "", "Inne"],
  ["Rozliczyć salę po weselu", "", "Inne"],
  ["Skoordynować rodzinne wypieki z Nicole", "Ty i Nicole", "Inne"],
  ["Rozpisać, kto piecze ciasta i kiedy je dostarcza", "Ty i Nicole", "Inne"],
  ["Potwierdzić z salą krojenie, wystawienie i chłodzenie ciast", "", "Inne"],
  ["Potwierdzić realność przyjazdu na salę o 16:30", "Para Młoda", "Inne"],
  ["Ustalić godzinę pierwszego tańca: 17:30 czy 17:45", "Para Młoda", "Inne"],
  ["Przekazać zespołowi właściwą wersję utworu „Kochaj mnie tak”", "Para Młoda", "Inne"],
  ["Ustalić z zespołem listę must play i nie grać", "Para Młoda", "Inne"],
  ["Potwierdzić godzinę przyjazdu i startu zespołu", "Para Młoda", "Inne"],
  ["Ustalić posiłki dla zespołu, fotografa i kamerzysty", "", "Inne"],
  ["Wybrać utwór do tortu", "Para Młoda", "Inne"],
  ["Potwierdzić z salą wystawienie tortu i akcesoria do krojenia", "", "Inne"],
  ["Ustalić sygnały dla foto/video przed tańcem, tortem i atrakcjami", "", "Inne"],
  ["Ustalić zabawy oczepinowe i listę rzeczy zakazanych", "Para Młoda", "Inne"],
  ["Zdecydować o rzucaniu bukietem, welonem, muchą lub krawatem", "Para Młoda", "Inne"],
  ["Przygotować tabliczkę z instrukcją do telefonu audio", "", "Inne"],
  ["Zapewnić telefonowi audio stolik, dekorację, światło i plan B na deszcz", "", "Inne"],
  ["Przekazać kontakt do animatorów sali i świadkom", "", "Inne"],
  ["Ustalić listę osób śpiących na sali i przydział pokoi", "", "Inne"],
  ["Przekazać gościom informacje o noclegu i wymeldowaniu", "", "Inne"],
  ["Ustalić śniadanie następnego dnia", "", "Inne"],
  ["Ustalić transport gości wracających do domów", "", "Inne"],
  ["Przygotować numery do taksówek i kierowców", "", "Inne"],
  ["Wyznaczyć kierowcę auta Pana Młodego", "", "Inne"],
  ["Zatankować auto Pana Młodego dzień wcześniej", "Pan Młody", "Inne"],
  ["Sprawdzić trasę i parkingi przy domu, kościele i sali", "", "Inne"],
  ["Ustalić, kto przejmuje kluczyki na sali", "", "Inne"],
  ["Sprawdzić suknię na przymiarce: chodzenie, siedzenie i taniec", "Panna Młoda", "Inne"],
  ["Nagrać instrukcję podpinania trenu sukni", "Panna Młoda", "Inne"],
  ["Ustalić transport, parowanie i odbiór sukni", "Panna Młoda", "Inne"],
  ["Ustalić inne osoby do makijażu i fryzury", "Panna Młoda", "Inne"],
  ["Przygotować zaproszenie, pierścionek i detale do zdjęć", "Panna Młoda", "Inne"],
  ["Omówić i zaplanować poprawiny", "Para Młoda", "Inne"]
];

const storageKey = "wedding-checklist-v1";
const seedVersion = "2026-06-23-sala";
const assignmentVersion = "2026-06-15-assigned";
const contentVersion = "2026-06-23-kosciol";
const localSeedVersionKey = `${storageKey}-seed-version`;
const cloudSeedVersionKey = `${storageKey}-cloud-seed-version`;
const assignmentVersionKey = `${storageKey}-assignment-version`;
const cloudAssignmentVersionKey = `${storageKey}-cloud-assignment-version`;
const contentVersionKey = `${storageKey}-content-version`;
const dateLabelFormatter = new Intl.DateTimeFormat("pl-PL", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });

function isDateValue(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value || "");
}

function formatDateLabel(value) {
  if (!isDateValue(value)) return "Bez terminu";
  const [year, month, day] = value.split("-").map(Number);
  const label = dateLabelFormatter.format(new Date(year, month - 1, day));
  return label.charAt(0).toLocaleUpperCase("pl") + label.slice(1);
}

function groupKey(task) {
  return isDateValue(task.day) ? task.day : "";
}
const form = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const emptyState = document.querySelector("#emptyState");
const template = document.querySelector("#taskTemplate");
const syncStatus = document.querySelector("#syncStatus");
const searchInput = document.querySelector("#searchInput");
const dayFilter = document.querySelector("#dayFilter");
const ownerFilter = document.querySelector("#ownerFilter");
const visibleCount = document.querySelector("#visibleCount");
const ownerSuggestions = document.querySelector("#ownerSuggestions");
const editDialog = document.querySelector("#editDialog");
const editForm = document.querySelector("#editForm");
const editTaskInput = document.querySelector("#editTaskInput");
const editOwnerInput = document.querySelector("#editOwnerInput");
const editDayInput = document.querySelector("#editDayInput");
const dialogEyebrow = document.querySelector("#dialogEyebrow");
const dialogTitle = document.querySelector("#dialogTitle");
const saveTaskButton = document.querySelector("#saveTaskButton");
const config = window.SUPABASE_CONFIG || {};
const isConfigured = Boolean(config.url && config.publishableKey && window.supabase && !config.previewOnly);
const db = isConfigured ? window.supabase.createClient(config.url, config.publishableKey) : null;
let filter = "all";
let search = "";
let selectedDay = "all";
let selectedOwner = "all";
let editedTask = null;
let draggedTask = null;
let draggedItem = null;
let dropTargetTask = null;
let dropAfter = false;
let dragStartY = 0;
let tasks = loadLocalTasks();

function loadLocalTasks() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    let savedTasks = JSON.parse(saved);
    if (localStorage.getItem(localSeedVersionKey) !== seedVersion) {
      savedTasks = mergeStarterTasks(savedTasks);
      localStorage.setItem(localSeedVersionKey, seedVersion);
    }
    if (localStorage.getItem(assignmentVersionKey) !== assignmentVersion) {
      savedTasks = assignMissingOwners(savedTasks);
      localStorage.setItem(assignmentVersionKey, assignmentVersion);
    }
    if (localStorage.getItem(contentVersionKey) !== contentVersion) {
      savedTasks = migrateSalaTasks(savedTasks);
      savedTasks = migrateChurchTasks(savedTasks);
      localStorage.setItem(contentVersionKey, contentVersion);
    }
    localStorage.setItem(storageKey, JSON.stringify(savedTasks));
    return savedTasks;
  }
  localStorage.setItem(localSeedVersionKey, seedVersion);
  localStorage.setItem(assignmentVersionKey, assignmentVersion);
  localStorage.setItem(contentVersionKey, contentVersion);
  return assignMissingOwners(starterTasks.map(([text, owner, day], index) => ({ id: index + 1, text, owner, day, done: false })));
}

function normalizeTaskText(text) {
  return text.trim().toLocaleLowerCase("pl");
}

function mergeStarterTasks(existingTasks) {
  const existingTexts = new Set(existingTasks.map((task) => normalizeTaskText(task.text)));
  const missingTasks = starterTasks
    .filter(([text]) => !existingTexts.has(normalizeTaskText(text)))
    .map(([text, owner, day], index) => ({
      id: Date.now() + index,
      text,
      owner,
      day,
      done: false
    }));
  return [...existingTasks, ...missingTasks];
}

function inferOwner(text) {
  const value = normalizeTaskText(text);
  if (value.includes("panny młodej") || value.includes("sukni") || value.includes("makijażu") || value.includes("fryzury")) return "Panna Młoda";
  if (value.includes("pana młodego") || value.includes("smokingu") || value.includes("kluczyki")) return "Pan Młody";
  if (value.includes("hortensj")) return "Aurelia";
  if (value.includes("płatki") && !value.includes("potwierdzić") && !value.includes("sprząta")) return "Aurelia i Agatka";
  if (value.includes("zawieźć") || value.includes("odebrać dekoracje") || value.includes("telefon audio") || value.includes("odbiór")) return "Adrian";
  if (value.includes("torbę awaryjną") || value.includes("koszyk ratunkowy") || value.includes("apteczkę") || value.includes("spakować")) return "Świadkowa";
  if (value.startsWith("zapłacić makijażystce") || value.startsWith("zapłacić fryzjerowi") || value.startsWith("zapłacić animatorom")) return "Świadkowie";
  return "Para Młoda";
}

function assignMissingOwners(taskListToAssign) {
  return taskListToAssign.map((task) => task.owner ? task : { ...task, owner: inferOwner(task.text) });
}

function migrateSalaTasks(taskListToMigrate) {
  const replacements = new Map([
    ["Zawieźć alkohol i napoje na salę", ["Alkohol — policzyć i przygotować do transportu", "Adrian"]],
    ["Spisać ilości alkoholu i napojów z salą", ["Napoje — policzyć i przygotować do transportu", "Adrian"]],
    ["Zawieźć plan stołów, winietki i tablicę powitalną", ["Plan stołów — przygotować i sprawdzić", "Para Młoda"]],
    ["Zawieźć księgę gości i długopisy", ["Księga gości — przygotować", "Para Młoda"]],
    ["Przygotować damski i męski koszyk ratunkowy", ["Przygotować koszyk ratunkowy dla kobiet", "Para Młoda"]],
    ["Napoje — policzyć i przygotować do transportu", ["Napoje — policzyć i kupić", "Adrian"]],
    ["Plan stołów — przygotować i sprawdzić", ["Plan stołów — zrobić", "Para Młoda"]],
    ["Winietki — przygotować i sprawdzić", ["Winietki — wybrać i zamówić", "Para Młoda"]],
    ["Tablica powitalna — przygotować", ["Tablica powitalna — wybrać i zamówić", "Para Młoda"]],
    ["Księga gości — przygotować", ["Księga gości — kupić", "Para Młoda"]],
    ["Długopisy do księgi — kupić lub przygotować", ["Długopisy do księgi — kupić", "Para Młoda"]]
  ]);
  const removedTexts = new Set([
    "Alkohol — policzyć i przygotować do transportu",
    "Zrobić jedną listę rzeczy do zawiezienia na salę"
  ]);
  const migrated = taskListToMigrate.filter((task) => !removedTexts.has(task.text)).map((task) => {
    const replacement = replacements.get(task.text);
    if (!replacement) return task;
    return { ...task, text: replacement[0], owner: replacement[1], day: "Sala" };
  });
  const existingTexts = new Set(migrated.map((task) => normalizeTaskText(task.text)));
  const additions = starterTasks
    .filter(([text, , day]) => day === "Sala" && !existingTexts.has(normalizeTaskText(text)))
    .map(([text, owner, day], index) => ({
      id: Date.now() + index,
      text,
      owner,
      day,
      done: false
    }));
  const seen = new Set();
  return [...migrated, ...additions].filter((task) => {
    const key = normalizeTaskText(task.text);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function migrateChurchTasks(taskListToMigrate) {
  const removedTexts = new Set([
    "Wybrać pieśni na mszę",
    "Rozpisać czytania dla Karoliny, Sary i Klaudii",
    "Przygotować i wydrukować teksty czytań oraz modlitwę wiernych"
  ]);
  const retainedTasks = taskListToMigrate.filter((task) => !removedTexts.has(task.text));
  const existingTexts = new Set(retainedTasks.map((task) => normalizeTaskText(task.text)));
  const additions = starterTasks
    .filter(([text, , day]) => day === "Kościół" && !existingTexts.has(normalizeTaskText(text)))
    .map(([text, owner, day], index) => ({
      id: Date.now() + 100 + index,
      text,
      owner,
      day,
      done: false
    }));
  return [...retainedTasks, ...additions];
}

function saveLocalTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function setSyncStatus(text, state = "") {
  syncStatus.textContent = text;
  syncStatus.className = `sync-status ${state}`.trim();
}

async function loadCloudTasks() {
  if (!db) return;
  setSyncStatus("Łączenie...");

  const { data, error } = await db.from("tasks").select("*").order("created_at");
  if (error) {
    console.error(error);
    setSyncStatus("Błąd synchronizacji", "error");
    return;
  }

  if (data.length === 0) {
    const initialTasks = tasks.map(({ text, owner, day, done }) => ({ text, owner, day, done }));
    const { error: insertError } = await db.from("tasks").insert(initialTasks);
    if (insertError) {
      console.error(insertError);
      setSyncStatus("Błąd synchronizacji", "error");
      return;
    }
    return loadCloudTasks();
  }

  if (localStorage.getItem(cloudSeedVersionKey) !== seedVersion) {
    const cloudTexts = new Set(data.map((task) => normalizeTaskText(task.text)));
    const missingTasks = starterTasks
      .filter(([text]) => !cloudTexts.has(normalizeTaskText(text)))
      .map(([text, owner, day]) => ({ text, owner, day, done: false }));
    if (missingTasks.length) {
      const { error: insertError } = await db.from("tasks").insert(missingTasks);
      if (insertError) {
        console.error(insertError);
        setSyncStatus("Nie dodano nowych zadań", "error");
        return;
      }
      localStorage.setItem(cloudSeedVersionKey, seedVersion);
      return loadCloudTasks();
    }
    localStorage.setItem(cloudSeedVersionKey, seedVersion);
  }

  if (localStorage.getItem(cloudAssignmentVersionKey) !== assignmentVersion) {
    const tasksWithoutOwners = data.filter((task) => !task.owner);
    const results = await Promise.all(tasksWithoutOwners.map((task) =>
      db.from("tasks").update({ owner: inferOwner(task.text) }).eq("id", task.id)
    ));
    const assignmentError = results.find((result) => result.error)?.error;
    if (assignmentError) {
      console.error(assignmentError);
      setSyncStatus("Nie przypisano osób", "error");
      return;
    }
    localStorage.setItem(cloudAssignmentVersionKey, assignmentVersion);
    if (tasksWithoutOwners.length) return loadCloudTasks();
  }

  tasks = assignMissingOwners(data);
  saveLocalTasks();
  setSyncStatus("Zapis online", "online");
  render();
}

async function addTask(task) {
  if (!db) {
    tasks.push({ ...task, id: Date.now() });
    saveLocalTasks();
    render();
    return true;
  }

  const { data, error } = await db.from("tasks").insert(task).select().single();
  if (error) {
    console.error(error);
    setSyncStatus("Nie zapisano", "error");
    return false;
  }
  tasks.push(data);
  saveLocalTasks();
  setSyncStatus("Zapis online", "online");
  render();
  return true;
}

async function updateTask(task, previousTask = null) {
  if (!db) {
    saveLocalTasks();
    render();
    return;
  }

  const { error } = await db.from("tasks").update({
    text: task.text,
    owner: task.owner,
    day: task.day,
    done: task.done
  }).eq("id", task.id);
  if (error) {
    if (previousTask) Object.assign(task, previousTask);
    console.error(error);
    setSyncStatus("Nie zapisano", "error");
    render();
    return;
  }
  saveLocalTasks();
  setSyncStatus("Zapis online", "online");
  render();
}

async function deleteTask(task) {
  if (!db) {
    tasks = tasks.filter((entry) => entry.id !== task.id);
    saveLocalTasks();
    render();
    return;
  }

  const previousTasks = tasks;
  tasks = tasks.filter((entry) => entry.id !== task.id);
  render();
  const { error } = await db.from("tasks").delete().eq("id", task.id);
  if (error) {
    tasks = previousTasks;
    console.error(error);
    setSyncStatus("Nie usunięto", "error");
    render();
    return;
  }
  saveLocalTasks();
  setSyncStatus("Zapis online", "online");
}

function render() {
  taskList.replaceChildren();
  const visible = tasks.filter((task) => {
    const matchesStatus = filter === "all" || (filter === "done" ? task.done : !task.done);
    const matchesDay = selectedDay === "all" || groupKey(task) === selectedDay;
    const matchesOwner = selectedOwner === "all" || (selectedOwner === "" ? !task.owner : task.owner === selectedOwner);
    const haystack = normalizeTaskText(`${task.text} ${task.owner} ${task.day}`);
    return matchesStatus && matchesDay && matchesOwner && haystack.includes(search);
  });

  const groupKeys = [...new Set(visible.map(groupKey))].sort((a, b) => {
    if (a === b) return 0;
    if (a === "") return -1;
    if (b === "") return 1;
    return a.localeCompare(b);
  });

  groupKeys.forEach((key) => {
    const dayTasks = visible.filter((task) => groupKey(task) === key);
    if (!dayTasks.length) return;

    const group = document.createElement("section");
    group.className = "day-group";
    const heading = document.createElement("h2");
    const countLabel = document.createElement("span");
    heading.className = "day-heading";
    heading.textContent = formatDateLabel(key);
    countLabel.textContent = `${dayTasks.length} zadań`;
    heading.append(countLabel);
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-to-section";
    addButton.textContent = "Dodaj";
    addButton.setAttribute("aria-label", `Dodaj zadanie do: ${formatDateLabel(key)}`);
    addButton.addEventListener("click", () => openAddDialog(key));
    heading.append(addButton);
    group.append(heading);

    dayTasks.forEach((task) => {
      const item = template.content.firstElementChild.cloneNode(true);
      item.classList.toggle("done", task.done);
      const checkbox = item.querySelector("input");
      checkbox.checked = task.done;
      item.querySelector("strong").textContent = task.text;
      const ownerText = task.owner ? `Odpowiedzialny: ${task.owner}` : "Nie przypisano osoby";
      const legacyHint = !isDateValue(task.day) && task.day ? ` · dawna kategoria: ${task.day}` : "";
      item.querySelector("small").textContent = ownerText + legacyHint;

      checkbox.addEventListener("change", () => {
        const previousTask = { ...task };
        task.done = checkbox.checked;
        render();
        updateTask(task, previousTask);
      });

      item.querySelector(".edit").addEventListener("click", () => openEditDialog(task));
      item.querySelector(".delete").addEventListener("click", () => deleteTask(task));
      setupDragAndDrop(item, task);
      group.append(item);
    });
    taskList.append(group);
  });

  emptyState.hidden = visible.length > 0;
  const done = tasks.filter((task) => task.done).length;
  document.querySelector("#progressText").textContent = `${done} z ${tasks.length}`;
  document.querySelector("#progressBar").style.width = tasks.length ? `${done / tasks.length * 100}%` : "0%";
  visibleCount.textContent = `Widoczne: ${visible.length}`;
  updateOwnerFilter();
  updateDayFilter();
}

function setupDragAndDrop(item, task) {
  const handle = item.querySelector(".drag-handle");
  item.dataset.taskId = String(task.id);

  handle.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    draggedTask = task;
    draggedItem = item;
    dragStartY = event.clientY;
    dropTargetTask = null;
    item.classList.add("dragging");
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (draggedTask !== task || Math.abs(event.clientY - dragStartY) < 3) return;
    event.preventDefault();
    const targetItem = document.elementFromPoint(event.clientX, event.clientY)?.closest(".task");
    if (!targetItem || targetItem === draggedItem) {
      dropTargetTask = null;
      clearDropIndicators();
      return;
    }
    const targetTask = tasks.find((entry) => String(entry.id) === targetItem.dataset.taskId);
    if (!targetTask || targetTask.day !== draggedTask.day) return;
    dropTargetTask = targetTask;
    dropAfter = event.clientY > targetItem.getBoundingClientRect().top + targetItem.offsetHeight / 2;
    clearDropIndicators();
    targetItem.classList.add(dropAfter ? "drop-after" : "drop-before");
  });

  handle.addEventListener("pointerup", () => {
    const sourceTask = draggedTask;
    const targetTask = dropTargetTask;
    const placeAfter = dropAfter;
    draggedItem?.classList.remove("dragging");
    draggedTask = null;
    draggedItem = null;
    dropTargetTask = null;
    clearDropIndicators();
    if (sourceTask && targetTask) moveTask(sourceTask, targetTask, placeAfter);
  });

  handle.addEventListener("pointercancel", () => {
    draggedItem?.classList.remove("dragging");
    draggedTask = null;
    draggedItem = null;
    dropTargetTask = null;
    clearDropIndicators();
  });
}

function clearDropIndicators() {
  document.querySelectorAll(".drop-before, .drop-after").forEach((item) => {
    item.classList.remove("drop-before", "drop-after");
  });
}

function moveTask(sourceTask, targetTask, placeAfter) {
  const sourceIndex = tasks.indexOf(sourceTask);
  if (sourceIndex === -1) return;
  tasks.splice(sourceIndex, 1);
  const targetIndex = tasks.indexOf(targetTask);
  tasks.splice(targetIndex + (placeAfter ? 1 : 0), 0, sourceTask);
  saveLocalTasks();
  draggedTask = null;
  render();
}

function updateOwnerFilter() {
  const currentValue = ownerFilter.value;
  const owners = [...new Set(tasks.map((task) => task.owner).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pl"));
  ownerFilter.replaceChildren(new Option("Wszystkie osoby", "all"), new Option("Nieprzypisane", ""));
  owners.forEach((owner) => ownerFilter.add(new Option(owner, owner)));
  ownerFilter.value = owners.includes(currentValue) || currentValue === "" ? currentValue : "all";
  ownerSuggestions.replaceChildren(...owners.map((owner) => {
    const option = document.createElement("option");
    option.value = owner;
    return option;
  }));
}

function updateDayFilter() {
  const currentValue = dayFilter.value;
  const dates = [...new Set(tasks.filter((task) => isDateValue(task.day)).map((task) => task.day))].sort((a, b) => a.localeCompare(b));
  const hasUndated = tasks.some((task) => !isDateValue(task.day));
  dayFilter.replaceChildren(new Option("Wszystkie terminy", "all"));
  if (hasUndated) dayFilter.add(new Option("Bez terminu", ""));
  dates.forEach((date) => dayFilter.add(new Option(formatDateLabel(date), date)));
  const values = ["all", ...(hasUndated ? [""] : []), ...dates];
  dayFilter.value = values.includes(currentValue) ? currentValue : "all";
}

function openEditDialog(task) {
  editedTask = task;
  dialogEyebrow.textContent = "Zmiana zadania";
  dialogTitle.textContent = "Edytuj zadanie";
  saveTaskButton.textContent = "Zapisz zmiany";
  editTaskInput.value = task.text;
  editOwnerInput.value = task.owner;
  editDayInput.value = isDateValue(task.day) ? task.day : "";
  editDialog.showModal();
  editTaskInput.focus();
}

function openAddDialog(day) {
  editedTask = null;
  dialogEyebrow.textContent = "Nowy punkt";
  dialogTitle.textContent = `Dodaj do: ${formatDateLabel(day)}`;
  saveTaskButton.textContent = "Dodaj zadanie";
  editTaskInput.value = "";
  editOwnerInput.value = "";
  editDayInput.value = day;
  editDialog.showModal();
  editTaskInput.focus();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = form.querySelector("button");
  submitButton.disabled = true;

  const wasAdded = await addTask({
    text: document.querySelector("#taskInput").value.trim(),
    owner: document.querySelector("#ownerInput").value.trim(),
    day: document.querySelector("#dayInput").value,
    done: false
  });

  if (wasAdded) {
    form.reset();
    document.querySelector("#taskInput").focus();
  }
  submitButton.disabled = false;
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    button.classList.add("active");
    filter = button.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", () => {
  search = normalizeTaskText(searchInput.value);
  render();
});

dayFilter.addEventListener("change", () => {
  selectedDay = dayFilter.value;
  render();
});

ownerFilter.addEventListener("change", () => {
  selectedOwner = ownerFilter.value;
  render();
});

editForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!editedTask) {
    const wasAdded = await addTask({
      text: editTaskInput.value.trim(),
      owner: editOwnerInput.value.trim(),
      day: editDayInput.value,
      done: false
    });
    if (wasAdded) editDialog.close();
    return;
  }
  const previousTask = { ...editedTask };
  editedTask.text = editTaskInput.value.trim();
  editedTask.owner = editOwnerInput.value.trim();
  editedTask.day = editDayInput.value;
  editDialog.close();
  await updateTask(editedTask, previousTask);
  editedTask = null;
});

document.querySelector(".cancel-edit").addEventListener("click", () => editDialog.close());
document.querySelector(".dialog-close").addEventListener("click", () => editDialog.close());

if (db) {
  db.channel("tasks-changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "tasks" }, loadCloudTasks)
    .subscribe();
  loadCloudTasks();
} else {
  setSyncStatus(config.previewOnly ? "Podgląd lokalny" : "Tryb lokalny");
  render();
}
