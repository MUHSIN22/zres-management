import jsPDF from "jspdf";

export const exportPDF = (header,name,data) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = new Date().toLocaleDateString() + " " + name;
    const headers = [header];

    // const data = ledger.map((item,index) => [
    //   index,item.EntryNo,
    //   new Date(item.EntryDate).toLocaleDateString(),
    //   item.AccountName,
    //   item.Debit,
    //   item.Credit
    //   ]
    // )
    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(new Date().toLocaleDateString()+"_"+name+".pdf")
  }