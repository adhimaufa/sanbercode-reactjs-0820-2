import React from 'react';
import '../App.css'

function InputForm(){
    return(
        <form className="formStyle">
        <h1 className="h1Style">Form Pembelian Buah</h1>
        <label className = "labelPElanggan"><b>Nama Pelanggan</b></label>
        <input type="text" id="fname" name="fname" placeholder="Kopiko" className="inputNama"/><br/>
        <div className="daftarItem">
          <label className="labelDaftarItem"><b>Daftar Item</b></label>
          <div className="checkboxStyle">
            <input type="checkbox" value="semangka"/>
            <label >Semangka</label><br/>		  
            <input type="checkbox" value="jeruk"/>
            <label >Jeruk</label><br/>
            <input type="checkbox" value="nanas"/>
            <label >Nanas</label><br/>
            <input type="checkbox" value="salak" />
            <label >Salak</label><br/>
            <input type="checkbox" value="anggur"/>
            <label >Anggur</label><br/>
          </div>
        </div>
        <input className="inputKirim" type="submit" value="Kirim" />
    </form>
    );
}

export default InputForm;
