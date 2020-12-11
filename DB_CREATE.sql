CREATE TABLE Uzytkownik(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    login varchar(16) not null,
    haslo varchar(16) not null,
    mail varchar(32) not null,
    id_Parent int
    );

CREATE TABLE Notatka(
	Id_Notatki int not null AUTO_INCREMENT PRIMARY KEY,
	Id_Wlasciciela int not null,
	Przedmiot text,
	Tresc text,
	FOREIGN KEY (Id_Wlasciciela) REFERENCES Uzytkownik(id) 
	);