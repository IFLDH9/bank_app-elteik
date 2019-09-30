# bank_app-elteik

Banki alkalmazást szimuláló program.

# Funkcionális követelmények:

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
* tranzakciók listázása
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
