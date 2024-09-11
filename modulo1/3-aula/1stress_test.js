/*
Stress Testing


1. Como o sistema se comporta em condições extremas?
2. Qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferência?
3. O ponto de ruptura do seu sistema?
4. O sistema se recupera sem intervenção manual após o término do teste de estress?

Expectativas:
1. Rapidez com que os mecanismos de dimensionamento automático reagem ao aumento de carga.
2. Se houver alguma falha durante os eventos de dimensionamento.
*/

export const options = {
  stages: [
    {duration: '2m', target: 100},
    {duration: '5m', target: 100},
    {duration: '2m', target: 200},
    {duration: '5m', target: 200},
    {duration: '2m', target: 300},
    {duration: '5m', target: 300},
    {duration: '2m', target: 400},
    {duration: '5m', target: 400},
    {duration: '10m', target: 0},
  ]
}