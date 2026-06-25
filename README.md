# Checklista weselna

Prosta wspólna checklista zapisywana w Supabase i hostowana na GitHub Pages.

## 1. Utwórz bazę Supabase

1. Załóż bezpłatny projekt na [Supabase](https://database.new).
2. Otwórz `SQL Editor`, wklej zawartość pliku `supabase-setup.sql` i uruchom.
3. W projekcie kliknij `Connect`.
4. Skopiuj `Project URL` i `Publishable key`.
5. Wklej je do pliku `config.js`.

Nie używaj `Secret key` ani starego klucza `service_role`. Ta wersja działa bez
logowania, dlatego każda osoba mająca link do strony może zmieniać checklistę.

## 2. Uruchom lokalnie

```bash
python3 -m http.server 8000
```

Następnie otwórz `http://localhost:8000`.

## 3. Opublikuj na GitHub Pages

1. Wypchnij pliki do repozytorium GitHub.
2. Wejdź w `Settings` -> `Pages`.
3. Wybierz `Deploy from a branch`.
4. Ustaw branch `main` i folder `/ root`.
5. Zapisz ustawienia.

Po publikacji otwórz adres GitHub Pages na dwóch urządzeniach. Dodanie lub
odhaczenie zadania powinno pojawić się na drugim urządzeniu automatycznie, jeśli
w `config.js` opcja `previewOnly` jest ustawiona na `false`.
