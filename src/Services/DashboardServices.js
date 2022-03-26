const BASE_URL= process.env.REACT_APP_BASE_URL;
export const dashboardServices = {
    // Sales
    getChartOfSales : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/DashBoard/ChartOfSales?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getTopGrossingItems : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/DashBoard/TopGrossingItem?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getTopSellingItems : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/DashBoard/TopSellingItem?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}