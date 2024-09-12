/**
 * 1. Fornecer uma variavel de ambiente para o script
 * 2. Realizar configuações do escopo de options
 */

// 1. Inicialização
import http from 'k6/http';
import { check, group, sleep } from 'k6';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '5s',
  tags: {
    name: 'my-test'
  },
  thresholds: {
    'http_req_duration{type:get-all}': ['p(95) < 1500']
  }
}

// 3. Execução
export default function () {
  group('exemple get', function () {
    const BASE_URL = __ENV.BASE_URL;
    const res1 = http.get(BASE_URL, {
      tags: {
        type: 'get-all'
      }
    });
    check(res1, {
      'status code is 200 get all': (r) => r.status === 200
    })
  })
  sleep(1);


}
// running with  "k6 run -e BASE_URL=https://test-api.k6.io/public/crocodiles modulo2/11-env-variable.js"
// "k6 run -e BASE_URL=https://test-api.k6.io/public/crocodiles modulo2/11-env-variable.js --duration 10s --vus 10"