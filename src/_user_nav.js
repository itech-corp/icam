let expo = {
  items: [
    {
      title: true,
      name: "Espace Etudiant",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Mon profile",
      url: "#",
      icon: "icon-user",
    },
    {
      name: "Ma demande d'admission",
      url: "/admission",
      icon: "fa fa-history",
    },
  ],
};

export default expo;
