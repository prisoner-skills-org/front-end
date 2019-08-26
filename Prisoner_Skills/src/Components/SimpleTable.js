import  'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';


 let columns = 
 [
,{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'Name',
  text: 'Prison Name'
}, {
  dataField: 'Workers',
  text: 'Workers'
},{
dataField: 'location',
  text: 'location'
},{

}];

export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } />