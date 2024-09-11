
/*
Load Testing
1. Quantidade de tráfego.
2. Condições normais e de pico.
3. Garantir funcionamento.

Beneficios
 - Permitir que seu sistema aqueça ou redimensione automaticamente para lidar com o tráfego.
 - permite que você compare o tempo de resposta entre os estágios de carga baixa e carga normal.
*/

// Carga constante
export const options = {
  vus: 100,
  duration: '20m'
};

// Carga variavel

export const options2 = {
  stages: [
    {duration: '5m', target: 100},
    {duration: '10m', target: 100},
    {duration: '5m', target: 0},
  ]
};