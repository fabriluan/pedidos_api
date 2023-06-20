const OrderRepository = require('../../repositories/OrderRepository');

class OrderController {
  index(request, response) {
    const contato = OrderRepository.findAll();

    response.json(contato);
  }
}

module.exports = new OrderController();
