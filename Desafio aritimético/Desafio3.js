numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter(x => x%2===0); // função de x
impares = numero.filter(x => x%2!=0);

positivos = numero.filter(x => x>0);
negativos = numero.filter(x => x<0);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");