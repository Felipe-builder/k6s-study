/*
Soak Testing
Confiabilidade em longos períodos de tempo.

1. O sistema não sofre de bugs ou vazamentos de memória.
2. Verifique se as reinicializações inesperados do aplicativo não perdem solicitações
3. Encontre bugs relacionados a condições de corrida que aparecem esporadicamente

----
1. Certificar que seu banco de dados não esgote o espaço de armazenamento alocado e pare.
2. Certifique-se de que seus logs não esgotam o armazenamento em disco alocado;
3. Cerfique-se de que seus serviços externos dos quais você depende não parem de funcionar após a execução
    de uma certa quantidade de solicitações

---
1. Quantidade de usuários. - Soak test deve ser utilizado para atingir 80% do limite.
  EX: se o limite for 500 usuário, então o teste deve ser feito com 400 usuários.
2. Requisitos de infraestrutura. - Verificar o planejamento de custo.
*/

export const options = {
  stages: [
    {duration: '2m', target: 400},
    {duration: '3h56m', target: 400},
    {duration: '2m', target: 0},
  ]
}