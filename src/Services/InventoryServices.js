const BASE_URL = process.env.REACT_APP_BASE_URL;

export const inventoryServices = {

    getMenu: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}WalkIn/GetAllMenuItemByMenuGroupID?MenuGroupID=1&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    }
} 