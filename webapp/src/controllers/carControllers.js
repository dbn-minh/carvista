export const getAllCars = async (req, res) => {
  const cars = await req.models.Cars.findAll();
  res.json(cars);
};

export const getCarById = async (req, res) => {
  const car = await req.models.Cars.findByPk(req.params.id);
  car ? res.json(car) : res.status(404).json({ error: 'Car not found' });
};

export const createCar = async (req, res) => {
  const car = await req.models.Cars.create(req.body);
  res.status(201).json(car);
};

export const updateCar = async (req, res) => {
  const [updated] = await req.models.Cars.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Car updated' }) : res.status(404).json({ error: 'Car not found' });
};

export const deleteCar = async (req, res) => {
  const deleted = await req.models.Cars.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Car deleted' }) : res.status(404).json({ error: 'Car not found' });
};
