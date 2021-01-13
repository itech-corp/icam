const user = false;
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
      name: "Admission en attente",
      url: "/theme/typography",
      icon: "fa fa-history",
    },
    {
      name: "Statistiques",
      url: "/theme/typography",
      icon: "icon-graph",
    },
  ],
};

//le user Dashboard

if (user) {
  expo = {
    items: [
      {
        name: "Tableau de bord",
        url: "/users",
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
        name: "Mon profile",
        url: "/Users/1",
        icon: "icon-user",
      },
      {
        name: "Ma demande d'admission",
        url: "/admission",
        icon: "fa fa-history",
      },
    ],
  };
}

export default expo;
