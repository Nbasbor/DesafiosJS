let valor = parseInt(gets());

  let cem = valor/100;
  let c = Math.floor(cem);

     

    let sc = valor - (c*100);
    let cinquenta = Math.floor(sc/50);
    let scinquenta = sc - (cinquenta*50);
    let vinte= Math.floor(scinquenta/20);
    let svinte = scinquenta - (vinte*20);
    let dez = Math.floor(svinte/10);
    let sdez = svinte -(dez*10);
    let cinco = Math.floor(sdez/5);
    let scinco = sdez - (cinco*5);
    let dois = Math.floor(scinco/2);
    let sdois = scinco - (dois*2);
    let um = Math.floor(sdois/1);
    let sum = sdois - (um*1);


     console.log(valor)
     console.log(c + ' nota(s) de R$ 100,00')
     console.log(cinquenta + ' nota(s) de R$ 50,00')
     console.log(vinte + ' nota(s) de R$ 20,00')
     console.log(dez + ' nota(s) de R$ 10,00')
     console.log(cinco + ' nota(s) de R$ 5,00')
     console.log(dois + ' nota(s) de R$ 2,00')
     console.log(um + ' nota(s) de R$ 1,00')