import axios from "axios";

const baseUrl = "http://localhost:38719";
//zres.clubsoft.co.in/AccountGroup
export default {
  basicCrud(url = baseUrl) {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
  // INVENTORY API
  // productmasterApi

  ProductMasterApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/INVT_Product?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/INVT_Product?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/INVT_Product?CMPid=1" + id, updateRecord),
      delete: (id, CMPid) =>
        axios.delete(baseUrl + `/api/v1/INVT_Product?id=${id}&CMPid=1`),
    };
  },

  // category master

  CategoryMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/Category?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/Category?CMPid=1", newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  // tax master

  TaxMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/Tax?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/Tax?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/Tax?CMPid=1" + id, updateRecord),
      delete: (id) =>
        axios.delete(baseUrl + `/api/v1/Tax?Taxid =${id}&CMPid=1`),
    };
  },

  // Measurement master

  MesurementMasterAPi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/UOM?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/UOM?CMPid=1", newRecord),

      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/UOM?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete(baseUrl + `/api/v1/UOM?UOMid=${id}&CMPid=1`),
    };
  },

  // ACCOUNT API

  // account group
  AccountGroupApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/AccountGroup?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/AccountGroup?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/AccountGroup?CMPid=1" + id, updateRecord),
      delete: (id, CMPid) =>
        axios.delete(baseUrl + `/api/v1/AccountGroup?id=${id}&CMPid=1`),
    };
  },

  // account Head
  AccountHeadApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/AccountHead?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/AccountHead?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/AccountHead?CMPid=1" + id, updateRecord),
      delete: (id, CMPid) =>
        axios.delete(baseUrl + `/api/v1/AccountHead?id=${id}&CMPid=1`),
    };
  },

  // ACCOUTN >> TRANSACTION >> JOURNAL

  JournalApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/Journal?CMPid=1"),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/Journal?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/Journal?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete("/api/v1/Journal?CMPid=1", id),
      searchData: (fromDate, toDate) =>
        axios.get(
          baseUrl +
            `/api/v1/Journal/search?fromdate=${fromDate}&todate=${toDate}&CMPid=1`
        ),
    };
  },

  // ACCOUTN >> TRANSACTION >> CONTRA

  ContraApi(url = baseUrl) {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/v1/Contra?CMPid=1"),

      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/Contra?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/Contra?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete("/api/v1/Contra?CMPid=1", id),
      searchData: (fromDate, toDate) =>
        axios.get(
          baseUrl +
            `/api/v1/Contra/search?fromdate=${fromDate}&todate=${toDate}&CMPid=1`
        ),
    };
  },

  // ledger api
  LedgerApi(url = baseUrl) {
    return {
      fetchAll: (fromdate, todate) =>
        axios.get(
          baseUrl +
            `api/v1/Ledger/Search?Account=2&fromdate=${fromdate}&todate=${todate}&CMPid=1`
        ),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) =>
        axios.post(baseUrl + "/api/v1/Ledger?CMPid=1", newRecord),
      update: (id, updateRecord) =>
        axios.put(baseUrl + "/api/v1/Ledger?CMPid=1" + id, updateRecord),
      delete: (id) => axios.delete("/api/v1/Ledger?CMPid=1", id),
      searchData: (fromdate, toDate, accountNameId) =>
        axios.get(
          baseUrl +
            `/api/v1/Ledger/Search?Account=${accountNameId}&fromdate=${fromdate}&todate=${toDate}&CMPid=1`
        ),
    };
  },

  // TrialBalance

  TrialBalanceApi(url = baseUrl) {
    return {
      searchData: (fromdate, toDate, accountNameId) =>
        axios.get(
          baseUrl +
            `/api/v1/TrialBalance/search?fromdate=${fromdate}&todate=${toDate}&CMPid=1`
        ),
    };
  },
};

// basicCrud(url = baseUrl + "dcandidate/")

// ledger api
