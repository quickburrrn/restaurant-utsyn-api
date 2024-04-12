CREATE TABLE `Ansatte` (
  `AnsattID` INT AUTO_INCREMENT,
  `Rolle` VARCHAR(25),
  `Fornavn` VARCHAR(25),
  `Etternavn` VARCHAR(25),
  `Brukernavn` VARCHAR(25),
  `Passord` VARCHAR(40),
  PRIMARY KEY (`AnsattID`)
);

CREATE TABLE `Åpningstid` (
  `ÅpningstidID` INT,
  `Dag` VARCHAR(10),
  `Åpningstid` TIME,
  `Stengetid` TIME,
  PRIMARY KEY (`ÅpningstidID`)
);

CREATE TABLE `Reservasjoner` (
  `ReservasjonsID` INT AUTO_INCREMENT,
  `Dato` DATE,
  `Tid` TIME,
  `Antall_gjester` INT,
  `Fornavn` VARCHAR(45),
  `Etternavn` VARCHAR(45),
  `Telefonnummer` VARCHAR(10),
  `Epost` VARCHAR(45),
  `ExtraInfo` VARCHAR(250),
  PRIMARY KEY (`ReservasjonsID`)
);