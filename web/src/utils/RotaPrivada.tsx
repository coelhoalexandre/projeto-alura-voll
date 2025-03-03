import { Navigate, Outlet } from 'react-router-dom';
import autenticaStore from '../stores/autentica.store';

export default function RotaPrivada() {
  const { estaAutenticado } = autenticaStore;

  return estaAutenticado ? <Outlet /> : <Navigate to='/login' />;
}
