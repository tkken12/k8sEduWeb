// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import ToolkitProvider from "react-bootstrap-table2-toolkit";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.scss';
// import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.scss'

// const TableBody = ( props => { 

//     return (
//         <ToolkitProvider
//             bootstrap4
//             keyField          = { "No"                                  }
//             data              = { props.data                            }
//             columns           = { props.columns                         } 
//             paginationFactory = { paginationFactory( {sizePerPage: 5} ) }
//         >
//             {
//                 prop => {
//                     return (
//                         <div>
//                             <BootstrapTable
//                                 defaultSorted = { [{ dataField: "No", order: "asc" }] }
//                                 // selectRow     = { selectRow() }
//                                 // rowClasses    = { rowClasses  }
//                                 data          = { props.data  } 
//                                 columns       = { props.columns }
//                                 pagination    = { 
//                                                     paginationFactory(
//                                                                         { sizePerPage      : 10,
//                                                                           paginationSize   : 1,
//                                                                           alwaysShowAllBtns: true 
//                                                                         }
//                                                                      )
//                                                 }
//                                 { ...prop.baseProps }
//                             />
//                         </div>
//                     )
//                 }
//             }
//         </ToolkitProvider>
//     )
// })

// export default TableBody