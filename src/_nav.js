let expo = {
  items: [
    {
      title: true,
      name: "Gestion des Candidats",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Tous les candiats",
      url: "/Users",
      icon: "fa fa-database",
    },
    {
      name: "Nouveaux candidats",
      url: "/User_new",
      icon: "fa fa-user-plus",
    },
    {
      name: "Candidats Admis",
      url: "/User_admis",
      icon: "fa fa-check",
    },
    {
      name: "Liste d'attente",
      url: "/User_attente",
      icon: "fa fa-clock-o",
    },
  ],
};

//le user Dashboard

export default expo;
