class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação Negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, CartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._CartaoCredito = 'CartaoCredito';
    }

    get Cartaocredito() {
        return this._CartaoCredito;
    }

    set Cartaocredito(valor) {
        this._CartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada!';
        }
        this._saldo = this._saldo - valor;
    }

}

