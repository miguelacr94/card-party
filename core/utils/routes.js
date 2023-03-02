import { Icons } from "./icons";

export class Routes {
  static home = "/";
  static invitations = "/invitations";
  static celebrations = "/celebrations";
  static store = "/store";

  static toDetail(id) {
    return `${this.store}/product/${id}`;
  }
}

export const routes = [
  {
    name: "Inicio",
    path: Routes.home,
  },
  {
    name: "Invitaciones",
    path: Routes.invitations,
    subItems: [
      {
        name: "Invitación Estática",
        path: "/static",
      },
      {
        name: "Invitación Interactiva",
        path: "/interactive",
      },
      {
        name: "Invitación Animada",
        path: "/animated",
      },
    ],
  },
  {
    name: "Tipo de celebración",
    path: Routes.celebrations,
    subItems: [
      {
        name: 'Bautizos',
        path: '/bautizos'
      },
      {
        name: 'Primera comunión',
        path: '/primeraComunion'
      },
      {
        name: "Bodas",
        path: "/weddings",
        icon: Icons.ring
      },
      {
        name: "Baby shower",
        path: "/weddings",
        icon: Icons.baby
      },
      {
        name: "15 años",
        path: "/15-years",
        icon: Icons.fi
      },
      {
        name: "Infantiles de Niñas",
        path: "/15-years",
        icon: Icons.birthDay
      },
      {
        name: "Infantiles de Niños",
        path: "/15-years",
        icon: Icons.birthDay
      },
      {
        name: "Adulto",
        path: "/15-years",
      },
      {
        name: "Revelación de Sexo",
        path: "/15-years",
      },

      {
        name: "Graduación",
        path: "/15-years",
        icon: Icons.graduation
      },
      {
        name: "Otros Motivos",
        path: "/15-years",
      },

    ],
  },

  {
    name: "kit Gráficos",
    path: Routes.celebrations,

  },
  {
    name: "Cursos",
    path: Routes.celebrations,

  },


];

export const footerRoutes = [];

//cambio