# bank_app-elteik

Banki alkalmazást szimuláló program.

# FUNKCIONÁLIS KÖVETELMÉNYEK:

## Admin:

### PROFIL:
* profilok listázása, szűrése, létrehozása, törlése, módosítása

### BANKSZÁMLÁK:
* felhasználó bankszámláinak listázása, szűrése, létrehozása, törlése, módosítása

### BANKKÁRTYÁK:
* bankszámlához tartozó kártyák listázása, szűrése, létrehozása, törlése, módosítása

### TRANZAKCIÓK:
* tranzakció indítása (cél számlaszám, célszemély neve, összeg megadása, dátum(automatikus))

## Bejelentkezett felhasználók:

### PROFIL:
* személyi igazolvány száma 
* születési éve
* neve

### BANKSZÁMLÁK:
* több bankszámlával rendelkezhet, ezek listázása (1-sok)
* egyenlegek megtekintése
* tranzakciók listázása (számlatörténet)
* tranzakció indítása
* bankszámlához tartozik: név, létrehozás dátuma(automatikus), bankszámlaszám, bankkártyák(nem kötelező), egyenleg
* társtulajdonosok listázása (sok-sok)

### BANKKÁRTYÁK:
* listázás, szűrés
* bankkártyához tartozik: bankkártyaszám, név, lejárat dátuma, kártya típusa, bankszámlaszám

### TRANZAKCIÓK:
* listázás, szűrés (számlaszám szerint)
* tranzakció indítása (cél számlaszám, célszemély neve, összeg megadása, dátum(automatikus))

## Vendég:

### PROFIL:
* regisztráció kezdeményezése
* bejelentkezés

## Nem funkcionális követelmények
* biztonságos, jelszavas azonosítás
* gyors, egyszerű

## Szakterületi fogalomjegyzék
* tranzakció: Két bankszámla közötti összegátvitel.

# VÉGPONTOK
* `GET/` Főoldal
* `GET/login` Bejelentkező oldal
* `GET/login` Bejelentkezés/Kijelentkezés
* `POST/register` Regisztrálás
* `GET/persons/getAll` Felhasználók listázása
* `POST/persons/create` Felhasználó létrehozása
* `GET/persons/get/byID/:id` Felhasználó adatlapja
* `PATCH/persons/:id/addAccounts` Bankszámla létrehozása
* `GET/accounts/getAll` Bankszámlák listázása
* `GET/accounts/get/byAccountNumber/:accountNumber` Bankszámlák szűrése számlaszám alapján
* `GET/accounts/get/byId/:id` Bankszámla adatai
* `PATCH/accounts/modify/:id` Bankszámla adatainak módosítása
* `DELETE/accounts/delete/:id` Bankszámla törlése
* `POST/transactions/create` Utalás oldal
* `GET/cards/getAll` Kártyák listázása
* `POST/cards/create` Kártya létrehozása

# HASZNÁLATI ESET DIAGRAM
![use case](images/usecase.png)

