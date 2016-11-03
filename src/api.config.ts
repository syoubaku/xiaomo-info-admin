// export const base="http://api.xiaomo.info:8080/";
export const base = "http://localhost:8080/";

/**
 * 获取后台用户
 * @type {string}
 */
export const loginApi = base + "adminUser/login";
export const getUserApi = base + "adminUser/findByName";
/**
 * 友情链接
 * @type {string}
 */
export const getLinkApi = base + "link/findAll";
export const addLinkApi = base + "link/add";
export const updateLinkApi = base + "link/update";
export const delLinkApi = base + "link/delete";

