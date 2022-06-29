const Customer = require("../models/customer");

const getCustomers = (request, response) => {
  Customer.find()
    .then((customers) => response.status(200).json(customers))
    .catch((error) => response.status(500).json(error));
};

const getOneCustomer = (request, response) => {
  const dni = request.params.dni;
  Customer.findOne({ dni: dni })
    .then((customer) => {
      if (customer) {
        return response.status(200).json(customer);
      } else {
        return response.status(404).json("The customer`s dni does not exist");
      }
    })
    .catch((error) => response.status(500).json(error));
};

const deleteCustomer = (request, response) => {
  const dni = request.params.dni;
  Customer.findOneAndDelete({ dni: dni })
    .then((customer) => {
      if (!customer) {
        return response.status(404).json("Customer does not exist");
      } else {
        return response.status(200).json("Customer deleted");
      }
    })
    .catch((error) => response.status(500).json(error));
};

const createCustomer = (request, response) => {
  const customer = request.body;
  if (!customer) {
    return response.status(400).json({
      error: "Customer information is missing",
    });
  }
  const newCustomer = new Customer({
    dni: customer.dni,
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    phone: customer.phone,
  });
  newCustomer
    .save()
    .then((savedCustomer) => {
      response.json(savedCustomer);
    })
    .catch((error) => response.status(500).send(error));
};

const updateCustomer = (request, response) => {
  const dni = request.params.dni;
  const customer = request.body;

  const newCustomerInfo = {
    dni: customer.dni,
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    phone: customer.phone,
    totalSale: customer.totalSale,
    totalPay: customer.totalPay,
  };
  Customer.findOneAndUpdate({ dni: dni }, newCustomerInfo)
    .then((customer) => {
      if (!customer) {
        return response.status(404).json("Customer does not exist");
      } else {
        return response.status(200).json("Customer updated");
      }
    })
    .catch((error) => response.status(500).json(error));
};

module.exports = {
  getCustomers,
  getOneCustomer,
  deleteCustomer,
  updateCustomer,
  createCustomer,
};
