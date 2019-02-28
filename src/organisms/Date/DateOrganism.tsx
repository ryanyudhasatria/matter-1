import * as React from 'react';
// import Select, { components } from 'react-select';
import { css, cx } from 'emotion';

// import { IconAtom, TextAtom } from '../../atoms';
import { SelectOrganism } from '../../organisms/Select/SelectOrganism';

// import * as angleDown from './angle-down.png';
// import * as angleDownGray from './angle-down-gray.png';

// @ts-ignore
import COLORS from '../../constants/colors';

// interface listDays {
//     //untuk array tanggal
//     days?: string;
// }
// interface listMonths {
//     //untuk array bulan
//     months?: string;
// }
// interface listYears {
//     //untuk array tahun
//     years?: string;
// }

const listMonths = [
    {value: 'Januari', label: 'Januari'},
    {value: 'Februari', label: 'Februari'},
    {value: 'Maret', label: 'Maret'},
    {value: 'April', label: 'April'},
    {value: 'Mei', label: 'Mei'},
    {value: 'Juni', label: 'Juni'},
    {value: 'Juli', label: 'Juli'},
    {value: 'Agustus', label: 'Agustus'},
    {value: 'September', label: 'September'},
    {value: 'Oktober', label: 'Oktober'},
    {value: 'November', label: 'November'},
    {value: 'Desember', label: 'Desember'},
]

const listDays = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
    {value: '11', label: '11'},
    {value: '12', label: '12'},
    {value: '13', label: '13'},
    {value: '14', label: '14'},
    {value: '15', label: '15'},
    {value: '16', label: '16'},
    {value: '17', label: '17'},
    {value: '18', label: '18'},
    {value: '19', label: '19'},
    {value: '20', label: '20'},
    {value: '21', label: '21'},
    {value: '22', label: '22'},
    {value: '23', label: '23'},
    {value: '24', label: '24'},
    {value: '25', label: '25'},
    {value: '26', label: '26'},
    {value: '27', label: '27'},
    {value: '28', label: '28'},
    {value: '29', label: '29'},
    {value: '30', label: '30'},
    {value: '31', label: '31'},
]
class DateOrganism extends React.PureComponent<any, any> {

   render(){
       return (
           <div className={cx('flex', css``)}>
                <Days />
                <Months />
                <Years 
                    minYear={this.props.minYear}
                    maxYear={this.props.maxYear}
                />
           </div>
        )
   }

}

class Days extends React.Component {
    render(){
        return (
            <SelectOrganism 
                type="text"
                label="Hari"
                placeholder="pilih hari"
                icon="calendar"
                className={cx('ma3 w-30', css`min-width: 8rem`)}
                options={listDays}
                onChange={() => {}}
            />
        )
    }
}

class Months extends DateOrganism {    
    render(){
        return (
            <SelectOrganism 
                type="text"
                label="Bulan"
                placeholder="pilih bulan"
                icon="calendar"
                className={cx('ma3 w-30', css`min-width: 8rem`)}                          
                options={listMonths}            
                onChange={() => {}}
            />
        )
    }
}

class Years extends DateOrganism {
    render(){                
        const {
            minYear,
            maxYear,
        } = this.props;

        let years = [];
        for (let i = minYear; i <= maxYear; i++){
            years.push(
                i
            ) //{value: i, label: i}
        }
       
        return (
            <SelectOrganism 
                type="text"
                label="Tahun"
                placeholder="pilih tahun"
                icon="calendar"
                className={cx('ma3 w-30', css`min-width: 8rem`)}
                options={
                    years.map(data => {
                        return ({
                            value: data,
                            label: data, 
                        })
                    })
                }                
                onChange={() => {}}
            />
        )
    }
}

export {DateOrganism}
