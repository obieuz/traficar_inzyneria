# Jak odpalić?
1. Miej docker desktop z docker compose
2. w terminu w folderu traficar_inzyneria daj komende `docker-compose up`

# Jak zapisać zmiany w bd?
1. w docker deskop wchodzisz w container
2. znajdujesz db
3. klikasz na nie i wchodzisz w exec
4. tam dajesz komende `pg_dump -h localhost -U postgres -d traficar -f backup.sql`
5. z folderu db wyciągasz plik backup.sql
6. zapisujesz i zmieniasz w plikach