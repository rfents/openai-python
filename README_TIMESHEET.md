# French Timesheet Table - AG Grid Implementation

This project provides two implementations of a French construction site timesheet table ("Journal de Chantier - Rapport Hebdomadaire") using AG Grid:

1. **Pure HTML/JavaScript version** (`timesheet_table.html`)
2. **React component version** (`TimesheetTable.jsx`)

## Features

- **Complete table structure** matching the original French timesheet format
- **Editable cells** for data entry
- **Grouped columns** for better organization
- **Pinned columns** (Reference and Tasks on the left, Remarks on the right)
- **Responsive design** with mobile-friendly layout
- **Print-ready styling** for physical documents
- **Professional appearance** with proper borders and spacing

## Table Structure

The table includes the following main sections:

### Column Groups:
- **Basic Info**: Reference, Tasks, Predecessor, Unit, Cumul S-1
- **Daily Work Quantities**: Monday through Saturday
- **Progress Tracking**: Cumulative totals, percentages, completion dates
- **Variance Tracking**: Advance/Delay indicators
- **Equipment**: Mobility and Maintenance status
- **Remarks**: General comments

### Header Information:
- Company information (top right)
- Resource allocation boxes (J1-J6)
- Human resources and work hours
- Department and management info

## Usage

### HTML Version (timesheet_table.html)

Simply open the HTML file in any modern web browser:

```bash
# Open directly in browser
open timesheet_table.html
# or
firefox timesheet_table.html
# or
chrome timesheet_table.html
```

**Features:**
- No dependencies required
- Works offline
- Instant loading
- Compatible with all browsers

### React Version

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

3. **Use the component in your React app:**
```jsx
import TimesheetTable from './TimesheetTable';

function App() {
  return (
    <div className="App">
      <TimesheetTable />
    </div>
  );
}
```

## Dependencies

### React Version:
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `ag-grid-react`: ^31.0.2
- `ag-grid-community`: ^31.0.2

### HTML Version:
- AG Grid Community (loaded via CDN)

## Customization

### Data Structure

Each row in the table follows this structure:

```javascript
{
  ref: '001',                    // Reference number
  tasks: 'Task description',     // Task name
  predecessor: '001',            // Predecessor task
  unit: 'm²',                   // Unit of measurement
  cumulS1: '0',                 // Previous week cumulative
  monday: '',                   // Monday quantity
  tuesday: '',                  // Tuesday quantity
  wednesday: '',                // Wednesday quantity
  thursday: '',                 // Thursday quantity
  friday: '',                   // Friday quantity
  saturday: '',                 // Saturday quantity
  cumul: '',                    // Current cumulative
  qteWeekly: '',               // Weekly quantity to do
  achievementWeekly: '',        // Weekly achievement %
  qteTotal: '',                // Total quantity
  qteTotalToDo: '',            // Total quantity to do
  achievement: '',              // Overall achievement %
  endDate: '',                 // Planned end date
  advance: '',                 // Days ahead
  delay: '',                   // Days behind
  mobility: '',                // Equipment mobility
  maintenance: '',             // Equipment maintenance
  remark: ''                   // Comments
}
```

### Styling Customization

For the React version, modify `TimesheetTable.css`:

```css
/* Change header colors */
.ag-theme-alpine {
  --ag-header-background-color: #your-color;
  --ag-header-foreground-color: #your-text-color;
}

/* Adjust font sizes */
.ag-cell {
  font-size: 12px; /* Change as needed */
}
```

For the HTML version, modify the `<style>` section in the HTML file.

### Adding Functionality

You can extend the table with additional features:

1. **Data validation**
2. **Save/Load functionality**
3. **Export to PDF/Excel**
4. **Real-time calculations**
5. **User permissions**

## Browser Support

- Chrome 70+
- Firefox 60+
- Safari 12+
- Edge 80+

## License

This implementation is provided as-is for educational and professional use.

## Contributing

Feel free to submit issues and enhancement requests!