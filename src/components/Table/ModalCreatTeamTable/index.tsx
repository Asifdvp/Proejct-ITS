

// import './index.css';
import './index.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
function createData(
    vəzifə: string,
    name: string,

) {
    return { vəzifə, name };
}

const rows = [
    createData('Front Developer', 'Ramil Qenberli'),
    createData('Front Developer', 'Ramil Qenberli'),
    createData('Front Developer', 'Ramil Qenberli'),
    createData('Back Developer', 'Mahir Israfilov'),
    // createData('Front Developer', 'Ramil Qenberli', 3.9),
];

interface Props {
    title?: string
}
const komandayarat = ['Rol', 'Əməkdaş'];
const ModalCreatTeamTable: React.FC<Props> = (props) => {
    return (
        <Container maxWidth='sm'>
            <Paper>

                <TableContainer component={Paper} sx={{
                    height: '200px',
                    "&::-webkit-scrollbar": {
                        width: '6px',
                        height:'56px '
                    },
                      "&::-webkit-scrollbar-track": {
                        // backgroundColor: "orange"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#D9D9D9",
                        // borderRadius: 1
                      }
                }}>
                    <Table sx={{height: "max-content" }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {komandayarat.map((row, index) => (index % 2 == 0 ? <TableCell className='borderDelete borderfontsize tablefirstcolumn' align='left' >{row}</TableCell> :
                                    <TableCell className='borderDelete borderfontsize tablesecondcolumn' align='left' >{row}</TableCell>))}
                                <TableCell className='borderDelete borderfontsize tablesecondcolumn' align='left' ></TableCell>
                                {/* <TableCell className='borderDelete borderfontsize tablefirstcolumn' align='left' >Vəzifə</TableCell>
              <TableCell className='borderDelete borderfontsize tablesecondcolumn' align="inherit">Ad və soyad</TableCell> */}
                                {/* <TableCell className='borderDelete' align="left"></TableCell> */}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                index % 2 == 0 ?
                                    <TableRow className='B'
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='borderDelete tablefirstcolumn insidecolumn' align='left'>
                                            {row.vəzifə}
                                        </TableCell>
                                        <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.name}</TableCell>
                                        <TableCell className='borderDelete tabledeleteicon' align="right">{<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25195 4.50195H3.75195H15.752" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.2539 4.5V15C14.2539 15.3978 14.0959 15.7794 13.8146 16.0607C13.5333 16.342 13.1517 16.5 12.7539 16.5H5.25391C4.85608 16.5 4.47455 16.342 4.19325 16.0607C3.91194 15.7794 3.75391 15.3978 3.75391 15V4.5M6.00391 4.5V3C6.00391 2.60218 6.16194 2.22064 6.44325 1.93934C6.72455 1.65804 7.10608 1.5 7.50391 1.5H10.5039C10.9017 1.5 11.2833 1.65804 11.5646 1.93934C11.8459 2.22064 12.0039 2.60218 12.0039 3V4.5" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>}</TableCell>
                                    </TableRow> :
                                    <TableRow className='A'
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='borderDelete tablefirstcolumn insidecolumn' component="th" scope="row">
                                            {row.vəzifə}
                                        </TableCell>
                                        <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.name}</TableCell>
                                        <TableCell className='borderDelete tabledeleteicon' align="right">{<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25195 4.50195H3.75195H15.752" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.2539 4.5V15C14.2539 15.3978 14.0959 15.7794 13.8146 16.0607C13.5333 16.342 13.1517 16.5 12.7539 16.5H5.25391C4.85608 16.5 4.47455 16.342 4.19325 16.0607C3.91194 15.7794 3.75391 15.3978 3.75391 15V4.5M6.00391 4.5V3C6.00391 2.60218 6.16194 2.22064 6.44325 1.93934C6.72455 1.65804 7.10608 1.5 7.50391 1.5H10.5039C10.9017 1.5 11.2833 1.65804 11.5646 1.93934C11.8459 2.22064 12.0039 2.60218 12.0039 3V4.5" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>}</TableCell>
                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>

    );
}

export default ModalCreatTeamTable;