const { uuid } = require('uuidv4');

const orders = [
  {
    id: uuid(),
    snack_id: 321123,
    snack_name: 'Hamburguer com queijo',
    snack_prince: 12.99,
    cliente_id: 123321,
    cliente_name: 'Fabricio',
    deliver: true,
    address: {
      name: 'Rua Barão do Rio Branco',
      number: 696,
      complement: 'Apartamento 1',
    },
    prince_deliver: 5.99,
    prince_total: 12.99 + 5.99,
  },
  {
    id: uuid(),
    snack_id: 123456,
    snack_name: 'Batata frita',
    snack_prince: 16.00,
    cliente_id: 123456,
    cliente_name: 'Breno',
    deliver: false,
    address: undefined,
    prince_deliver: null,
    prince_total: 16.00,
  },
];

class OrderRepository {
  findAll() {
    return orders;
  }
}

module.exports = new OrderRepository();
