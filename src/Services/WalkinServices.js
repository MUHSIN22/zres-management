const BASE_URL = process.env.REACT_APP_BASE_URL;

export const walkinServices = {
    getFood: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}WalkIn/GetFoodNames?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    getBeverage: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}WalkIn/GetBeverageNames?CMPid=1
            `)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}