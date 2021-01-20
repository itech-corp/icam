let expo = {
  items: [
    {
      name: "Tableau de bord",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      title: true,
      name: "Theme",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Liste des Etudiant",
      url: "/Users",
      icon: "icon-user",
    },
    {
      name: "Etudiants Admis",
      url: "/User_admis",
      icon: "fa fa-history",
    },
    {
      name: "Liste d'attente",
      url: "/User_attente",
      icon: "icon-graph",
    },
  ],
};

//le user Dashboard

export default expo;
