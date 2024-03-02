import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalculadoraComponent extends Component {
    @tracked display = '';

    // Método para manejar la entrada de números y puntos decimales
    @action
    presionarBoton(valor) {
        this.display += valor;
    }

    // Método para manejar las operaciones; se añade la operación al display
    @action
    presionarOperacion(operacion) {
        if (this.display.slice(-1).match(/[+\-*/]/)) {
            // Evita la repetición de operadores si el último carácter es ya un operador
            return;
        }
        this.display += operacion;
    }

    // Método para calcular el resultado
    @action
    calcularResultado() {
        try {
            // 'eval' puede ser peligroso si se usa con datos no confiables; asegúrate de sanitizar la entrada
            // En este caso, como controlamos la entrada (números y operadores), se considera seguro
            let resultado = eval(this.display);
            this.display = resultado.toString();
        } catch (e) {
            this.display = 'Error';
        }
    }

    // Método para limpiar el display
    @action
    limpiarPantalla() {
        this.display = '';
    }
}
