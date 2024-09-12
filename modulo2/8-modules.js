// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';

// 2. Configuração
export const options = {
  vus: 4,
  duration: '5s',
}
// 3. Execução
export default function() {
  const res1 = http.get('http://test-api.k6.io/public/crocodiles');
  
  check(res1, {
    'status code is 200 get all': (r) => r.status === 200
  })
}


// running with "k6 run modulo2/7-thresholds.js" 