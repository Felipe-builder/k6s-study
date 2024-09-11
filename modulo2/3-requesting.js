// 1. Inicialização
import { http } from "k6";

// 3. Execução
export default function() {
  http.get('http://test.k6.io');
}


// running with "k6 run modulo2/3-requesting.js" 