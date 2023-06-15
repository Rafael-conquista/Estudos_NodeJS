import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Conquista',
      email: 'teste@teste.com',
      idade: '20',
      peso: 78,
      altura: 1.7,
    });

    res.json({ novoAluno });
  }
}

export default new HomeController();
