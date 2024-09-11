// 1. Inicialização
import http from 'k6/http';
import { check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

// 2. Configuração
export const options = {
  vus: 1,
  duration: '3s'
}

const calls = new Counter('quantity_of_calls');
const myGauge = new Gauge('blocked_time')
const myRate = new Rate('http_res_rate_200')
const myTrend = new Trend('http_res_trand_waiting')

// 3. Execução
export default function() {
  const res = http.get('http://test.k6.io');
  // contador
  calls.add(1)
  // medidor
  myGauge.add(res.timings.blocked);
  // taxa
  myRate.add(res.status === 200);
  //tendencia
  myTrend.add(res.timings.waiting);

}


// running with "k6 run modulo2/6-metrics-2.js" 