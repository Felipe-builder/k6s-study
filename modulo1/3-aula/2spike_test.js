/*
Spike Testing

1. Como o sistema se comporta sob um aumento repentimento de tráfego?
2. O seu sistema irá se recuperar assim que o tráfego diminuir? 


Expectativas:
1. Excelente - Não é degradado durante o evento de trafego
2. Bom - O sistema não apresenta erro, mas fica um pouco mais lento
3. Insatisfatório - O sistema produz erro durante o evento de aumento de trafego, 
    mas volta ao funcionamento normal após o fim do evento
4. Ruim - O sistema trava e não se recupera após o evento de trafego.
*/

export const options = {
  stages: [
    {duration: '10s', target: 100},
    {duration: '1m', target: 100},
    {duration: '10s', target: 1400},
    {duration: '3m', target: 1400},
    {duration: '10s', target: 100},
    {duration: '3m', target: 100},
    {duration: '10m', target: 0},
  ]
}