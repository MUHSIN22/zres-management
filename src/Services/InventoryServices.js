const BASE_URL = process.env.REACT_APP_BASE_URL;

export const inventoryServices = {

    getMenu: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}WalkIn/GetAllMenuItemByMenuGroupID?MenuGroupID=1&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStockreport: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GetStockReport?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStockcost: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GetStockCostReport?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getClosestock: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GetClosingStockReport?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getGpstatement: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GetGPReport?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    // masters
    getProductdetails: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}INVT_Product?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getCategorymaster: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Category?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getMeasurementdeatails: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}UOM?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getTaxmaster: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Tax?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getTaxtypedropdown: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}TaxName?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    // transactions

    getTransactionproductdeatails: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Purchase?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getPurchasereturn: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}PurchaseReturn?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getSales: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Sales?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getSalesreturn: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}SalesReturn?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getStockadjustment: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockAdjust?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getPurchaseorder: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}PurchaseOrder?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
  
    getstocktransferrequest: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StkTransferRequest?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getSuppliers: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}PurchaseOrder/GetSupplier?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getGoodreciept :()=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}GoodsReceipt?CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },

    getReordermapping:()=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}ReOrderMapping?CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },

    getReorderFiltereddata : (from,to)=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}ReOrderMapping/SearchByDate?fromdate=${from}&todate=${to}&Cid=2&ProdctId=2&CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },

    getStockreportFilter : (from,to,Cid,Pid) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/stockReportSearchByDate?fromdate=${from}&todate=${to}&Cid=${Cid}&ProdctId=${Pid}&CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },
    getStockcostFilter : (from,to,Cid,Pid)=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/StockCostSearchByDate?fromdate=${from}&todate=${to}&Cid=${Cid}&ProdctId=${Pid}&CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },

    getStockClosingFilter :(from,to,Pid) =>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/ClosingStockSearchByDate?fromdate=${from}&todate=${to}&ProdctId=${Pid}&CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    },
    getStockStatementFilter :(from,to)=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GPStatementSearchByDate?CMPid=1&fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => { resolve(data) })
            .catch(err => reject(err))
        })
    }

} 