import {getCustomRepository, Repository} from "typeorm"
import {User} from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersServices{
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string){
    // Verifica se o usuário existe

    const userExists = await this.usersRepository.findOne({
      email
    })

    if(userExists){
      return userExists;
    }

    // Se existe, retorna user

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    // Se não, salva no db

    return user;
  }

  async findByEmail(email: string){
    const user = await this.usersRepository.findOne({
      email,
    });
    return user;
  }
}

export {UsersServices};