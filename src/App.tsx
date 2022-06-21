import './App.css';
import Dialog from './modules/common/dialog/Dialog';
import Table from './modules/common/table/Table';
import Toast from './modules/common/Toaster/Toast';
import checkIcon from './assests/image/icons/check.svg'
import errorIcon from './assests/image/icons/error.svg'
import infoIcon from './assests/image/icons/info.svg'
import warningIcon from './assests/image/icons/warning.svg'
const Headers = [
  {
    label:'Ids',
    field:'id',
    align:'left',
    sortable:true,
  },
  {
    label:'Name',
    field:'title',
    align:'right',
    sortable:false,
  },
  {
    label:'Vehicle',
    field:'car',
    align:'center',
    sortable:true,
  },
  {
    label:'Age',
    field:'age',
    align:'center',
    sortable:true,
  },
];


const MOCK = [
  {id:1, title:'test1', date:'21 march', car:'Volvo1', age:19}, 
  {id:2, title:'test2', date:'22 march', car:'Volvo2', age:18}, 
  {id:3, title:'test3', date:'23 march', car:'Volvo3', age:51}, 
  {id:4, title:'test4', date:'24 march', car:'Volvo4', age:21}, 
  {id:5, title:'test5', date:'25 march', car:'Volvo5', age:14}, 
  {id:6, title:'test6', date:'26 march', car:'Volvo6', age:12}, 
  {id:7, title:'test7', date:'27 march', car:'Volvo7', age:2}, 
  {id:8, title:'test8', date:'28 march', car:'Volvo8', age:13}, 
  {id:9, title:'test9', date:'29 march', car:'Volvo9', age:17}, 
]


const testList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
    icon: checkIcon
  },
  {
    id: 2,
    title: 'Danger',
    description: 'This is an error toast component',
    backgroundColor: '#d9534f',
    icon: errorIcon
  },
  {
    id: 3,
    title: 'Info',
    description: 'This is an info toast component',
    backgroundColor: '#5bc0de',
    icon: infoIcon
},
{
    id: 4,
    title: 'Warning',
    description: 'This is a warning toast component',
    backgroundColor: '#f0ad4e',
    icon: warningIcon
}
];
function App() {
  const footer = (<div>
    this is a copy right
  </div>);
  return (
    <div className="App">
      <Table title={footer} headers={Headers} data={MOCK}/>
      {/* <Dialog/> */}
      <Toast
      toastList={testList}
      position="bottom-right"
      />
    </div>
  );
}

export default App;
