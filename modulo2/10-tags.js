/**
 * 1. Request
 * 2. Checks
 * 3. Thresholds
 * 4. Metricas customizadas
 * 5. Todas as métricas de um teste
 */

// 1. Inicialização
import http from 'k6/http';
import { check, group } from 'k6';

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

const id = 7;

// 3. Execução
export default function () {
  group('exemple get', function () {
    const res1 = http.get('https://test-api.k6.io/public/crocodiles', {
      tags: {
        type: 'get-all'
      }
    });
    check(res1, {
      'status code is 200 get all': (r) => r.status === 200
    })
  })

  group('exemple crocodiles by id', function() {
    const res2 = http.get('https://test-api.k6.io/public/crocodiles/1/', {
      tags: {
        type: 'get-by-id'
      }
    });
    check(res2, {
      'status code is 200 get id': (r) => r.status === 200
    })
  })

}
// running with "k6 run modulo2/7-thresholds.js" 