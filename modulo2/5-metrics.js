/**
 * K6 já possui métricas integradas
 * -----
 * 1. Contadores
 * 2. Medidores
 * 3. Taxas
 * 5. Tendências 
 * ----
 * RESULT
 *  ▲ SRE_TEAM/blackfriday/k6s k6 run modulo2/5-metrics.js 

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: modulo2/5-metrics.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 33s max duration (incl. graceful stop):
              * default: 1 looping VUs for 3s (gracefulStop: 30s)


     ✓ status code is 200

     checks.........................: 100.00% ✓ 11       ✗ 0  
     data_received..................: 136 kB  45 kB/s
     data_sent......................: 2.6 kB  841 B/s
     http_req_blocked...............: avg=23.02ms  min=2.25µs   med=3.42µs   max=270.75ms p(90)=13.88µs  p(95)=223.87ms
     http_req_connecting............: avg=10.46ms  min=0s       med=0s       max=117.48ms p(90)=0s       p(95)=107.13ms
     http_req_duration..............: avg=115.54ms min=111.32ms med=115.3ms  max=121.6ms  p(90)=119.6ms  p(95)=119.88ms
       { expected_response:true }...: avg=115.54ms min=111.32ms med=115.3ms  max=121.6ms  p(90)=119.6ms  p(95)=119.88ms
     http_req_failed................: 0.00%   ✓ 0        ✗ 22 
     http_req_receiving.............: avg=239.14µs min=56.66µs  med=81.93µs  max=3.02ms   p(90)=190.79µs p(95)=388.42µs
     http_req_sending...............: avg=20.8µs   min=12.06µs  med=14.78µs  max=64.62µs  p(90)=32.02µs  p(95)=51.37µs 
     http_req_tls_handshaking.......: avg=5.36ms   min=0s       med=0s       max=118.09ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=115.28ms min=111.25ms med=115.13ms max=119.74ms p(90)=119.37ms p(95)=119.5ms 
     http_reqs......................: 22      7.209652/s
     iteration_duration.............: avg=277.36ms min=229.81ms med=231.02ms max=739.25ms p(90)=233.26ms p(95)=486.25ms
     iterations.....................: 11      3.604826/s
     vus............................: 1       min=1      max=1
     vus_max........................: 1       min=1      max=1


running (03.1s), 0/1 VUs, 11 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  3s
 */

// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '3s'
}


// 3. Execução
export default function() {
  const res = http.get('http://test.k6.io');
  check(res, {
    'status code is 200': (r) => r.status === 200
  });
}


// running with "k6 run modulo2/5-metrics.js" 