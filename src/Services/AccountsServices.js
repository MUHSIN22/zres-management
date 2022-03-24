const BASE_URL= process.env.REACT_APP_BASE_URL;

export const accountServices = {
    getAccountGroupData : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/AccountGroup?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
        })
      }
}