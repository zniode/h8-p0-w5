function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var cost = 2000;
    var results = [];
    
    if (arrPenumpang.length === 0) {
      return arrPenumpang;
    }
    
    for (let i = 0; i < arrPenumpang.length; i++) {
      var passenger = arrPenumpang[i];
      var objPassenger = {};
      
      objPassenger.penumpang = passenger[0];
      objPassenger.naikDari = passenger[1];
      objPassenger.tujuan = passenger[2];
      objPassenger.bayar = cost * (rute.indexOf(objPassenger.tujuan) - rute.indexOf(objPassenger.naikDari));
      
      results.push(objPassenger);
    }
    
    return results;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]