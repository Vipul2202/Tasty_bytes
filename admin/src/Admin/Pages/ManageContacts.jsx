import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Create_user/create_user.css";
import { Tag } from "primereact/tag";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import apiServices from "../../ApiServices/ApiServices";

export default function ManageContact({ setIsActive, isActive }) {
  const [message, setMessage] = useState([]);
  const dt = useRef(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  // =============customer api===========
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiServices.getallcontacts();
      if (response.data.success) {
        setMessage(response.data.data);
      } else {
        toast.error("Failed to fetch contacts.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // -------------delete contact api--------
  const deletecontact = (id) => {
    const data = { _id: id };
    apiServices
      .deleteContact(data)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.msg);
          fetchData();
        } else {
          toast.error(response.data.msg);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // export CSV function
  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  // PDF print function
  const handlePrintPdf = () => {
    import("jspdf").then((jsPDF) => {
      const doc = new jsPDF.default();

      // Prepare the data for the table
      const printableData = message.map((message) => [
        message.name,
        message.email,
        message.contact,
        message.subject,
        message.message,
      ]);

      // Add table content to PDF
      doc.autoTable({
        head: [["Name", "Email", "Contact", "Subject", "Message"]],
        body: printableData,
      });

      // Save the PDF document
      doc.save("message_data.pdf");
    });
  };

  // Excel export function
  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(message);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "message");
    });
  };

  // Save Excel file function
  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  // ========global filter===========
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    subject: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    contact: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    message: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  // Header for the DataTable
  const header = (
    <>
      <div className="flex flex-wrap align-items-center gap-2"></div>
      <div className="">
        <div className="d-flex justify-content-end gap-3 export-buttons">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Keyword Search"
            />
          </span>

          <Button
            type="button"
            icon="pi pi-file"
            className="rounded-circle"
            onClick={() => exportCSV(false)}
            data-pr-tooltip="CSV"
          />
          <Button
            type="button"
            icon="pi pi-file-excel"
            severity="success"
            className="rounded-circle"
            onClick={exportExcel}
            data-pr-tooltip="XLS"
          />
          <Button
            type="button"
            icon="pi pi-file-pdf"
            severity="warning"
            className="rounded-circle"
            onClick={handlePrintPdf}
            data-pr-tooltip="PDF"
          />
        </div>
      </div>
    </>
  );

  // Action button for delete
  const actionTemplate = (rowData) => {
    return (
      <div className="d-flex justify-content-center gap-3">
        <Button
          icon="pi pi-trash"
          className="rounded-circle p-button-danger"
          onClick={() => deletecontact(rowData._id)}
          tooltip="Delete"
        />
      </div>
    );
  };

  // Footer displaying the total number of messages
  const footer = `In total there are ${message ? message.length : 0} messages.`;

  return (
    <main
      id="main"
      className={`main mainWrapper ${isActive === true ? "active" : ""}`}
    >
      <Tooltip target=".export-buttons>button" position="bottom" />
      <div className="card">
        <DataTable
          ref={dt}
          stripedRows
          value={message}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sortMode="multiple"
          sortOrder={-1}
          header={header}
          footer={footer}
          tableStyle={{ minWidth: "60rem" }}
          dataKey="id"
          filters={filters}
          filterDisplay="row"
          loading={loading}
          globalFilterFields={[
            "name",
            "email",
            "contact",
            "subject",
            "message",
          ]}
          emptyMessage="No message found."
        >
          <Column
            field="name"
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: "16rem" }}
            sortable
            header="Name"
          ></Column>
          <Column
            field="email"
            filter
            filterPlaceholder="Search by email"
            style={{ minWidth: "16rem" }}
            sortable
            header="Email"
          ></Column>
          <Column
            field="contact"
            filter
            filterPlaceholder="Search by contact"
            style={{ minWidth: "17rem" }}
            sortable
            header="Contact"
          ></Column>
          <Column
            field="subject"
            filter
            filterPlaceholder="Search by subject"
            style={{ minWidth: "17rem" }}
            sortable
            header="Subject"
          ></Column>
          <Column
            field="message"
            filter
            filterPlaceholder="Search by message"
            style={{ minWidth: "17rem" }}
            sortable
            header="Message"
          ></Column>
          <Column
            header="Actions"
            body={actionTemplate}
            style={{ textAlign: "center", width: "10rem" }}
          />
        </DataTable>
      </div>
      <ToastContainer />
    </main>
  );
}
