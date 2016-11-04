// export const base="http://api.xiaomo.info:8080/";
export const base = "http://localhost:8080/";

/**
 * 获取后台用户
 * @type {string}
 */
export const loginApi = base + "adminUser/login";
export const getAdminUserApi = base + "adminUser/findByName";
export const getAdminUserAllApi = base + "adminUser/findAll";
export const addAdminUserApi = base + "adminUser/add";
export const updateAdminUserApi = base + "adminUser/update";
export const delAdminUserApi = base + "adminUser/delete";

/**
 * 友情链接
 * @type {string}
 */
export const getLinkApi = base + "link/findAll";
export const addLinkApi = base + "link/add";
export const updateLinkApi = base + "link/update";
export const delLinkApi = base + "link/delete";

/**
 * 作品链接
 * @type {string}
 */
export const getWorksApi = base + "works/findAll";
export const addWorksApi = base + "works/add";
export const updateWorksApi = base + "works/update";
export const delWorksApi = base + "works/delete";


