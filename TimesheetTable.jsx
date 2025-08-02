import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './TimesheetTable.css';

const TimesheetTable = () => {
  // Sample data
  const [rowData] = useState([
    {
      ref: '001',
      tasks: 'Préparation du terrain',
      predecessor: '',
      unit: 'm²',
      cumulS1: '0',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      cumul: '',
      qteWeekly: '',
      achievementWeekly: '',
      qteTotal: '',
      qteTotalToDo: '',
      achievement: '',
      endDate: '',
      advance: '',
      delay: '',
      mobility: '',
      maintenance: '',
      remark: ''
    },
    {
      ref: '002',
      tasks: 'Excavation',
      predecessor: '001',
      unit: 'm³',
      cumulS1: '0',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      cumul: '',
      qteWeekly: '',
      achievementWeekly: '',
      qteTotal: '',
      qteTotalToDo: '',
      achievement: '',
      endDate: '',
      advance: '',
      delay: '',
      mobility: '',
      maintenance: '',
      remark: ''
    },
    {
      ref: '003',
      tasks: 'Coulage béton',
      predecessor: '002',
      unit: 'm³',
      cumulS1: '0',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      cumul: '',
      qteWeekly: '',
      achievementWeekly: '',
      qteTotal: '',
      qteTotalToDo: '',
      achievement: '',
      endDate: '',
      advance: '',
      delay: '',
      mobility: '',
      maintenance: '',
      remark: ''
    },
    // Add 17 more empty rows
    ...Array.from({ length: 17 }, () => ({
      ref: '',
      tasks: '',
      predecessor: '',
      unit: '',
      cumulS1: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      cumul: '',
      qteWeekly: '',
      achievementWeekly: '',
      qteTotal: '',
      qteTotalToDo: '',
      achievement: '',
      endDate: '',
      advance: '',
      delay: '',
      mobility: '',
      maintenance: '',
      remark: ''
    }))
  ]);

  // Column definitions
  const columnDefs = useMemo(() => [
    {
      headerName: 'Réf',
      field: 'ref',
      width: 60,
      pinned: 'left',
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Tâches',
      field: 'tasks',
      width: 200,
      pinned: 'left',
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Prédécesseur',
      field: 'predecessor',
      width: 100,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Unité',
      field: 'unit',
      width: 70,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Cumul S-1',
      field: 'cumulS1',
      width: 80,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Quantité travaux achevés',
      headerClass: 'group-header',
      children: [
        { 
          headerName: 'Lundi', 
          field: 'monday', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'Mardi', 
          field: 'tuesday', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'Mercredi', 
          field: 'wednesday', 
          width: 80,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'Jeudi', 
          field: 'thursday', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'Vendredi', 
          field: 'friday', 
          width: 80,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'Samedi', 
          field: 'saturday', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        }
      ]
    },
    {
      headerName: 'Cumul.',
      field: 'cumul',
      width: 70,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Qte TX à faire hebdo',
      field: 'qteWeekly',
      width: 90,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Achèv. % hebdo',
      field: 'achievementWeekly',
      width: 90,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Qte TX Total',
      field: 'qteTotal',
      width: 80,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Qte TX Total à faire',
      field: 'qteTotalToDo',
      width: 100,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Achèv. %',
      field: 'achievement',
      width: 80,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'Date de Fin',
      field: 'endDate',
      width: 90,
      cellStyle: { 'border-right': '1px solid #000' }
    },
    {
      headerName: 'ÉCART',
      headerClass: 'group-header',
      children: [
        { 
          headerName: 'AVANCE', 
          field: 'advance', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'RETARD', 
          field: 'delay', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        }
      ]
    },
    {
      headerName: 'MACHINE',
      headerClass: 'group-header',
      children: [
        { 
          headerName: 'MOBILITÉ', 
          field: 'mobility', 
          width: 80,
          cellStyle: { 'border-right': '1px solid #000' }
        },
        { 
          headerName: 'ENTRET', 
          field: 'maintenance', 
          width: 70,
          cellStyle: { 'border-right': '1px solid #000' }
        }
      ]
    },
    {
      headerName: 'Remarque',
      field: 'remark',
      width: 150,
      pinned: 'right',
      cellStyle: { 'border-right': '1px solid #000' }
    }
  ], []);

  const defaultColDef = useMemo(() => ({
    editable: true,
    resizable: true,
    sortable: false,
    filter: false,
    cellStyle: {
      'border-bottom': '1px solid #000',
      'font-size': '11px'
    }
  }), []);

  const gridOptions = useMemo(() => ({
    suppressHorizontalScroll: false,
    suppressRowHoverHighlight: true,
    rowHeight: 25,
    headerHeight: 40,
    getRowStyle: () => ({
      'border-bottom': '1px solid #000'
    })
  }), []);

  return (
    <div className="timesheet-container">
      <div className="company-info">
        COMMUNE MIXTE<br />
        RVAS<br />
        23/04/2014
      </div>
      
      <div className="header">
        <h1>JOURNAL DE CHANTIER :</h1>
        <h1>RAPPORT HEBDOMADAIRE</h1>
      </div>
      
      <div className="info-section">
        <div className="info-left">
          <div className="days-row">
            <div className="info-box">
              <div className="info-label">J1 :</div>
            </div>
            <div className="info-box">
              <div className="info-label">J2 :</div>
            </div>
            <div className="info-box">
              <div className="info-label">J3 :</div>
            </div>
            <div className="info-box">
              <div className="info-label">J4 :</div>
            </div>
            <div className="info-box">
              <div className="info-label">J5 :</div>
            </div>
            <div className="info-box">
              <div className="info-label">J6 :</div>
            </div>
          </div>
          <div className="info-box full-width">
            <div className="info-label">Ressource humaine</div>
          </div>
          <div className="info-box full-width">
            <div className="info-label">Horaire de travail</div>
          </div>
        </div>
        
        <div className="info-right">
          <div className="info-box">
            <div className="info-label">Département</div>
          </div>
          <div className="info-box">
            <div className="info-label">Engagement</div>
          </div>
          <div className="info-box">
            <div className="info-label">Chef chantier</div>
          </div>
          <div className="info-box">
            <div className="info-label">Chef d'équipe</div>
          </div>
        </div>
      </div>
      
      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          onGridReady={(params) => params.api.sizeColumnsToFit()}
        />
      </div>
      
      <div className="footer-info">
        <strong>Fiche de contrôle</strong>
      </div>
    </div>
  );
};

export default TimesheetTable;