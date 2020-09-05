import React from 'react';
import '../App.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class ElementBuah extends React.Component{
    render(){
        return(
            <>
                <td>{this.props.nama}</td>
                <td>{this.props.harga}</td>
                <td>{this.props.berat/1000} kg</td>
            </>
        )
    }
}

class TableForm extends React.Component{
    render(){
        return(
            <>
                <table id="satu">
                <tr >
                    <th>Nama</th>
                    <th>Harga</th> 
                    <th>Berat</th>
                </tr>
                
                    {dataHargaBuah.map(element =>{
                        return(
                            <tr>
                                <ElementBuah nama={element.nama} harga={element.harga} berat={element.berat}/>
                            </tr>
                        )
                    })}
                </table>
            </>
        )
    }

}

export default TableForm;