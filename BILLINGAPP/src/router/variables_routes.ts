/**
 * Objeto para almacenar las variables de las rutas de acceso
 * @description Este objeto se encarga de almacenar las variables de las rutas de acceso
 * @version 1.0.0
 * @since 1.0.0
 * @category Router
 * @subcategory VariablesRoutes
 * @abstract {BASE} - Ruta base
 * @abstract {FCHILD} - Ruta First Child - Dashboard de la ruta base
 * @abstract {SCHILD} - Ruta Second Child - Users de la ruta base
 * @abstract {UCHILD} - Ruta Third Child - Edit User de la ruta base
 * @abstract {TCHILD} - Ruta Fourth Child - Roles de la ruta base
 * @abstract {RCHILD} - Ruta Fifth Child - Edit Role de la ruta base
 * @abstract {PCHILD} - Ruta Sixth Child - Permissions de la ruta base
 * @abstract {APCHILD} - Ruta Seventh Child - Asign Permission to Rol de la ruta base
 */

const ROUTES = {
  /*Ruta de login */
  LOGIN: {
    BASE: "/",
  },
  /*Ruta padre dashboard*/
  LAYOUT: {
    /*La ruta base del padre es /layout y a partir de ahi se generan las demas rutas  */
    BASE: "/layout",
    get FCHILD() {
      /*Esta es la ruta que se usara para mostrar los modulos dependiendo el usuario en login */
      return `${this.BASE}/dashboard`;
    },
    get SCHILD() {
      return `${this.BASE}/users`;
    },
    get UCHILD() {
      return `${this.BASE}/users-edit`;
    },
    get TCHILD() {
      return `${this.BASE}/roles`;
    },
    get RCHILD() {
      return `${this.BASE}/roles-edit`;
    },
    get PCHILD() {
      return `${this.BASE}/permissions`;
    },
    get APCHILD() {
      return `${this.BASE}/asign-permission-to-rol`;
    },
  },
  /*Ruta segundo padre para listar los modulos */
  MODULES: {
    BASE3: "/dashboard/modules",
    get MFCHILD() {
      return `${this.BASE3}/emisor`;
    },
    get MSCHILD() {
      return `${this.BASE3}/signos`;
    },
    get MTCHILD() {
      return `${this.BASE3}/consultorio`;
    },
    get M4CHILD() {
      return `${this.BASE3}/records`;
    },
    get M5CHILD() {
      return `${this.BASE3}/example`;
    },
  },
  /*Ruta para la pagina de error 404 */
  NOTFOUND: {
    BASE: "*",
  },
};

export default ROUTES;
