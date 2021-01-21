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
      name: "Nouveaux",
      url: "/User_new",
      icon: "fa fa-user-plus",
      badge: {
        variant: "info",
        text: "6",
      },
    },
    {
      name: "Candidats Admis",
      url: "/User_admis",
      icon: "fa fa-check",
      badge: {
        variant: "success",
        text: "6",
      },
    },
    {
      name: "Liste d'attente",
      url: "/User_attente",
      icon: "fa fa-clock-o",
      badge: {
        variant: "danger",
        text: "6",
      },
    },
  ],
};

//le user Dashboard

export default expo;
