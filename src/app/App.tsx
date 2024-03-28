import { Routes } from "./routes/index"
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
}
