import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.json('ok');
  }
}

export default new HomeController();
