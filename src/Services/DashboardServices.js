const BASE_URL= process.env.REACT_APP_BASE_URL;
export const dashboardServices = {
    // Sales
    getSalesData : () => {
        let from = new Date().toISOString();
        let to = new Date().toISOString();
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetSalesDashBoard?CMPid=1&FromDate=${from}&ToDate=${to}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredSalesData: (from,to,type) => {
        from = new Date(from).toISOString();
        to = new Date(to).toISOString();
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetSalesDashBoard?CMPid=1&FromDate=${from}&ToDate=${to}${type? '&type='+type:''}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    // Marketing Data
    getMarketingData: () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetMarketingDashBoard?CMPid=1&FromDate=2020-01-01&ToDate=2121-01-01`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Inventory data
    getAllInventory : () => {
        let from = new Date().toISOString();
        let to = new Date().toISOString();
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetInventoryDashBoard?CMPid=1&FromDate=${from}&ToDate=${to}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },
    getFilteredInventory : (from,to,type)  => {
        from = new Date(from).toISOString();
        to = new Date(to).toISOString();
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetInventoryDashBoard?CMPid=1&FromDate=${from}&ToDate=${to}${type? '&type='+type:''}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    // Bussiness summary
    getBussinessSummary : (fromDate,toDate) =>{ 
        let from = new Date(fromDate).toISOString();
        let to = new Date(toDate).toISOString();
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DashBoard/GetBusinessSummaryDashBoard?CMPid=1&FromDate=${from}&ToDate=${to}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}