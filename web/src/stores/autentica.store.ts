import { action, makeObservable, observable } from 'mobx';

interface Usuario {
  email: string;
  token: string;
}

class AutenticaStore {
  public estaAutenticado = false;
  public usuario: Usuario = { email: '', token: '' };

  constructor() {
    makeObservable(this, {
      estaAutenticado: observable,
      usuario: observable,
      login: action,
      logout: action,
    });
  }

  public login({ email, token }: Usuario) {
    this.estaAutenticado = true;
    this.usuario = { email, token };
  }

  public logout() {
    this.estaAutenticado = false;
    this.usuario = { email: '', token: '' };
  }
}

const autenticaStore = new AutenticaStore();

export default autenticaStore;
