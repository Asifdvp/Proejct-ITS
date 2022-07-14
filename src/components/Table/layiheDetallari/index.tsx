import './index.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

const layihe = ['T No', 'Tapşırığin adı', 'Icraçı', 'Icra müddəti', 'Son icra tarixi', 'Başlama tarixi', 'Bitmə tarixi', 'Icra faizi', 'Status', 'Tapşırığin qeydləri']
function createData(
  tapnomre:number,
  tapadi:string,
  icraci:string,
  icramuddeti:any,
  sonicratarixi:any,
  baslamatarixi:any,
  Bitmetarixi:any,
  Icrafaizi:string,
  status:string,
  tapsiriqeyd:string
) {
  return { tapnomre, tapadi,icraci, icramuddeti, sonicratarixi,baslamatarixi, Bitmetarixi, Icrafaizi, status, tapsiriqeyd };
}

const rows = [
  createData(2, 'Front end hissenin esas ekrani','Ramil Qenberli', '10 gun', '12.12.2022',  '12.12.2022', '12.12.2022', '100%', 'Davam edir', 'Tam vaxtinda edildi okaydir'),
  createData(2, 'Front end hissenin esas ekrani','Ramil Qenberli', '10 gun', '12.12.2022',  '12.12.2022', '12.12.2022', '100%', 'Davam edir', 'Tam vaxtinda edildi okaydir'),
  createData(2, 'Front end hissenin esas ekrani','Ramil Qenberli', '10 gun', '12.12.2022',  '12.12.2022', '12.12.2022', '100%', 'Davam edir', 'Tam vaxtinda edildi okaydir'),
  createData(2, 'Front end hissenin esas ekrani','Ramil Qenberli', '10 gun', '12.12.2022',  '12.12.2022', '12.12.2022', '100%', 'Davam edir', 'Tam vaxtinda edildi okaydir')
  // createData('Front Developer', 'Sadiq Axundov', 6.0),
  // createData('Back Developer', 'Elvin Karimov', 4.3),
  // createData('Front Developer', 'Ramil Qenberli', 3.9),
];
const LayiheDetallariTable = () => {
  return (
    <Container maxWidth='lg'>
      <Paper>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {layihe.map((row, index) => (index % 2 == 0 ? <TableCell className='borderDelete borderfontsize tablefirstcolumn' align='left' >{row}</TableCell> :
                  <TableCell className='borderDelete borderfontsize tablesecondcolumn' align='left' >{row}</TableCell>))}
                {/* <TableCell className='borderDelete borderfontsize tablefirstcolumn' align='left' >Vəzifə</TableCell>
              <TableCell className='borderDelete borderfontsize tablesecondcolumn' align="inherit">Ad və soyad</TableCell> */}
                {/* <TableCell className='borderDelete' align="left"></TableCell> */}

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                index % 2 == 0 ?
                  <TableRow className='B'
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className='borderDelete tablefirstcolumn insidecolumn' align='left'>
                      {row.tapnomre}
                    </TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.tapadi}</TableCell>
                    <TableCell className='borderDelete tableicraci' align="right">{row.icraci}</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.icramuddeti }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.sonicratarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.baslamatarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.Bitmetarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.Icrafaizi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.status }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.tapsiriqeyd }</TableCell>

                  </TableRow> :
                  <TableRow className='A'
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className='borderDelete tablefirstcolumn insidecolumn' component="th" scope="row">
                      {row.tapnomre}
                    </TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.tapadi }</TableCell>
                    <TableCell className='borderDelete tabledeleteicon' align="right">{row.icraci}</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.icramuddeti }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.sonicratarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.baslamatarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.Bitmetarixi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.Icrafaizi }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.status }</TableCell>
                    <TableCell className='borderDelete tablesecondcolumn insidecolumn' align="left">{row.tapsiriqeyd }</TableCell>

                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
}

export default LayiheDetallariTable;
