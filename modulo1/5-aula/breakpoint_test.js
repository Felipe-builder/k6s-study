/*
Breakpoint Testing
Limites do seu sistema
****
1. Ajustar/Cuidar de pontos fracos do sistema, buscando limites maiores suportados pelo sistema.
2. Ajudar a planejar e verificar a correção de sistema com baixo liite de utilização.
----
Quando executar?
1. Após mudanças significativas na base de código/infraestrutura.
2. Consumo elevado de recursos pelo seu sistema.
3. Carga do sistema cresce continuamente?
---
Considerações antes de realizar o breakpoint testing
1. Atenção a elasticidade de ambientes de nuvem. (Limites do sistema e não na infraestrutura)
2. Aumento de carga gradual para essa modalidade
3. Tipo de teste de ciclo iterativo
4. Interrupção manual ou automática.
---
Seu sistema foi aprovado nos demais tipos de teste?

*/


import http from 'k6/http';
import { sleep } from 'k6';



export const options = {
  executor: 'ramping-arrival-rate', // Assure load increase if the system slows
  stages: [
    { duration: '2h', target: 20000 },  // just slowly ramp-up to a HUGE load
  ],
};

export default function () {
  // Substitua com a URL do endpoint que deseja testar
  const urlRes = http.get('https://test-api.k6.io');
  // Pausa de 1 segundo entre as requisições para simular usuários reais
  sleep(1);
}