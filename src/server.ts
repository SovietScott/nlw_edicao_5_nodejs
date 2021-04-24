import {http} from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));

/*
  Get = Buscas
  Post = Criação
  Put = Alteração
  Delete = Deletar
  Patch = Alterar informação específica
*/