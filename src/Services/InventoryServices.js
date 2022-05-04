import { data } from "jquery";

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
    getGoodreciept: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}GoodsReceipt?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getReordermapping: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}ReOrderMapping?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },


    getStockreportFilter: (from, to, Cid, Pid) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/stockReportSearchByDate?fromdate=${from}&todate=${to}&Cid=${Cid}&ProdctId=${Pid}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStockcostFilter: (from, to, Cid, Pid) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/StockCostSearchByDate?fromdate=${from}&todate=${to}&Cid=${Cid}&ProdctId=${Pid}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getStockClosingFilter: (from, to, Pid) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/ClosingStockSearchByDate?fromdate=${from}&todate=${to}&ProdctId=${Pid}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStockStatementFilter: (from, to) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockReport/GPStatementSearchByDate?CMPid=1&fromdate=${from}&todate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getTransactionproductdeatailsFilter: (from, to) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Purchase/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getPurchasereturnFilter: (from, to) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}PurchaseReturn/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getSalesFilter: (from, to, sale) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Sales/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1&OrderTypeID=${sale}`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getSalesreturnFilter: (from, to, sale) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}SalesReturn/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1&OrderTypeID=${sale}`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStockadjustmentFilter: (from, to) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockAdjust/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getPurchaseorderFilter: (from, to) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}PurchaseOrder/SearchByDate?FromDate=${from}&ToDate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getStocktransferFilter: (from, to, branchID) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StkTransferRequest/SearchByDate?FromDate=${from}&ToDate=${to}}&BrachId=${branchID}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getGoodrecieptFilter: (from, to, BranchID) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}GoodsReceipt/SearchByDate?FromDate=${from}&ToDate=${to}&BrachId=${BranchID}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getReorderFiltereddata: (from, to, productID) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}ReOrderMapping/SearchByDate?fromdate=${from}&todate=${to}&Cid=2&ProdctId=${productID}&CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    getAllbranchess: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Branch/GetAllBranch/?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getsaleOrdertype: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Sales/OrderType?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    postCategorymaster: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Category?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    CategoryCode: data.categoryCode,
                    Name: data.name,
                    Taxid: data.Taxid,
                    Image: data.Image,
                    Discount: data.Discount,
                    Percentage: null,
                    UserID: 4,
                    CMPid: 1
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    postProductmaster: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}INVT_Product?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    InvtGid: data.groupID,
                    ProductCode: data.ProductCode,
                    PName: data.PName,
                    Cid: data.Cid,
                    UOMid: data.Unit,
                    RackNo: data.RackNo,
                    CreatedBy: "AAA",
                    MaxStockLevel: data.MaxStockLevel,
                    ReorderLevel: data.ReorderLevel,
                    ShortName: data.ShortName,
                    Discount: data.Discount,
                    Image: data.image,
                    Taxid: data.Taxid,
                    HSNCode: data.HSNCode,
                    UserID: 1,
                    CMPid: 1,
                    MenuBlocked: data.MenuBlocked,
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        }
        )
    },
    postMeasurement: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}UOM?CMPid=1`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Unit: data.Unit,
                    Symbol: data.Symbol,
                    Discription: data.Discription,
                    UOMDescription: data.Unit,
                    UserID: 1,
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        }
        )
    },

    postTaxmaster: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Tax?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    TaxCode: data.TaxCode,
                    TaxPercentage: data.TaxPercentage,
                    Taxable: data.Taxable,
                    TypeOfTax: data.TypeOfTax,
                    UserID: 1,
                    CMPid: 1
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getInventorygroupname: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}INVT_Product/GetInventoryGroupName?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    getInventoryunitlist: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}INVT_Product/GetUnit?CMPid=1`)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },
    postMenumanagement: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}MenuManagement?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MenuGroupID: data.MenuCode,
                    ItemName: data.menuName,
                    ItemPrice: data.price,
                    IsActive: data.status,
                    category: data.CategoryName,
                    size: data.optionSelected,
                    Image: data.image,
                    UserID: 1,
                    CMPid: 1
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))
        })
    },

    postPurchasedetails: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Purchase?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    purchase: {
                        "ArrivalDate": data.ArrivalDate,
                        "ArrivalNo": data.ArrivalNo,
                        "InvoiceNo": data.InvoiceNo,
                        "InvoiceDate": data.InvoiceDate,
                        "PaymentType": data.PaymentType,
                        "supplierid": data.supplierid,
                        "Address": data.Address,
                        "GSTNo": data.GSTNo,
                        "GrandTotal": data.GrandTotal,
                        "TotalDiscount": data.Discount,
                        "CMPid": 1,
                    },

                    purchaseDeatails: [
                        { "ProdctId": data.ProdctsId, "Qty": data.Qty, "FreeQty": data.FreeQty, "Rate": data.Rate, "HSNCode": data.HSNCode, "BatchNo": data.BatchNo, "Expiry": data.Expiry, "GST": data.GST, "TaxParam": data.TAX, "Total": data.Total, "UserID": 1, "CMPid": 1 }
                    ]
                })
            })
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => reject(err))

        })
    },
    postStockadjustment: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}StockAdjust?CMPid=1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "ProdctId": 2,
                        "BatchNo": "sads",
                        "QtyAdd": 1,
                        "QtyDeduct": 2,
                        "Stock": 5,
                        "Expiry": "2020-01-01",
                        "Amount": 20.0,
                        "Rate": 12.000,
                        "DeductAmount": 10.0,
                        "UserID": 1,
                        "CMPid": 1,
                        "RefNo": "vgvgh",
                        "Todate": "2321-01-10",
                        "ArrivalDate": "2020-01-01"
                    }
                )
            })
        })
    },
        postPurchaseorder :(data) =>{
            return new Promise((resolve, reject) =>{
                fetch(`${BASE_URL}PurchaseOrder?CMPid=1`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        
                    })
            })
        })
    },
}