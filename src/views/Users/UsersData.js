const usersData = [
  {
    id: 0,
    name: "John Doe",
    fName: "Doe",
    address: "Bonaberi",
    ville: "Douala",
    tel: 699564731,
    email: "test@gmail.com",
    nation: "Camerounais",
    lNaissance: "Japoma",
    dNaissance: "2018/01/01",
    sexe: "M",
    diplomeEtat: {
      diplome: "oui",
      annee: "2017",
      option: "Mecanique",
      pourcentage: "75%",
      etablissement: "Polytech de Yaounde",
      ville: "Yaounde",
      pays: "Cameroun",
    },
    parcours: [
      {
        date: "23/03/2009",
        classe: "terminal",
        section: "A",
        etablissement: "Lycee de Bastos",
        ville: "Yaounde",
        pays: "Cameroun",
      },
      {
        date: "23/03/2009",
        classe: "1er Annee",
        section: "Physique",
        etablissement: "Lycee de Bastos",
        ville: "Yaounde",
        pays: "Cameroun",
      },
      {
        date: "23/03/2009",
        classe: "terminal",
        section: "A",
        etablissement: "Lycee de Bastos",
        ville: "Yaounde",
        pays: "Cameroun",
      },
      {
        date: "23/03/2009",
        classe: "1er Annee",
        section: "Physique",
        etablissement: "Lycee de Bastos",
        ville: "Yaounde",
        pays: "Cameroun",
      },
      {
        date: "23/03/2009",
        classe: "1er Annee",
        section: "Physique",
        etablissement: "Lycee de Bastos",
        ville: "Yaounde",
        pays: "Cameroun",
      },
    ],
    parcousComment: "J'ai passer une annee blanche en 2015",
    activiteExtra: "FootBall",
    infoFamille: {
      FnamePere: "Jean Claud",
      FnameMere: "Jeanne Flora",
      proffesionPere: "Banquier",
      telPere: 623548232,
      proffesionMere: "Secretaire a la BEAC",
      telMere: 621673267,
      address: "Douala, Bepanda",
      nombreFrere: 2,
      nombreSoeur: 1,
      rangFamille: "2em",
    },
    vueIcam: "Site Internet",
    debauche: "Mecanique",
    autreInfo: "J'ai envie d'innover dans mon domaine",

    status: "En cours",
  },
  {
    id: 1,
    name: "Samppa Nori",
    registered: "2018/01/01",
    role: "Member",
    status: "Admis",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Recaler",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    registered: "2018/03/01",
    role: "Member",
    status: "En cours",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    registered: "2018/01/21",
    role: "Staff",
    status: "Admis",
  },
  {
    id: 6,
    name: "Yiorgos Avraamu",
    registered: "2018/01/01",
    role: "Member",
    status: "Admis",
  },
  {
    id: 7,
    name: "Avram Tarasios",
    registered: "2018/02/01",
    role: "Staff",
    status: "Recaler",
  },
  {
    id: 8,
    name: "Quintin Ed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Enéas Kwadwo",
    registered: "2018/03/01",
    role: "Member",
    status: "En cours",
  },
  {
    id: 10,
    name: "Agapetus Tadeáš",
    registered: "2018/01/21",
    role: "Staff",
    status: "Admis",
  },
  {
    id: 11,
    name: "Carwyn Fachtna",
    registered: "2018/01/01",
    role: "Member",
    status: "Admis",
  },
  {
    id: 12,
    name: "Nehemiah Tatius",
    registered: "2018/02/01",
    role: "Staff",
    status: "Recaler",
  },
  {
    id: 13,
    name: "Ebbe Gemariah",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Eustorgios Amulius",
    registered: "2018/03/01",
    role: "Member",
    status: "En cours",
  },
  {
    id: 15,
    name: "Leopold Gáspár",
    registered: "2018/01/21",
    role: "Staff",
    status: "Admis",
  },
  {
    id: 16,
    name: "Pompeius René",
    registered: "2018/01/01",
    role: "Member",
    status: "Admis",
  },
  {
    id: 17,
    name: "Paĉjo Jadon",
    registered: "2018/02/01",
    role: "Staff",
    status: "Recaler",
  },
  {
    id: 18,
    name: "Micheal Mercurius",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Ganesha Dubhghall",
    registered: "2018/03/01",
    role: "Member",
    status: "En cours",
  },
  {
    id: 20,
    name: "Hiroto Šimun",
    registered: "2018/01/21",
    role: "Staff",
    status: "Admis",
  },
  {
    id: 21,
    name: "Vishnu Serghei",
    registered: "2018/01/01",
    role: "Member",
    status: "Admis",
  },
  {
    id: 22,
    name: "Zbyněk Phoibos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Recaler",
  },
  {
    id: 23,
    name: "Einar Randall",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 24,
    name: "Félix Troels",
    registered: "2018/03/21",
    role: "Staff",
    status: "Admis",
  },
  {
    id: 25,
    name: "Aulus Agmundr",
    registered: "2018/01/01",
    role: "Member",
    status: "En cours",
  },
  {
    id: 42,
    name: "Ford Prefex",
    registered: "2001/05/21",
    role: "Alien",
    status: "Ne panique pas!",
  },
];

export default usersData;
