export const getAllUsers = async (req, res) => {
  const users = await req.models.Users.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await req.models.Users.findByPk(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

export const createUser = async (req, res) => {
  const user = await req.models.Users.create(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req, res) => {
  const [updated] = await req.models.Users.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'User updated' }) : res.status(404).json({ error: 'User not found' });
};

export const deleteUser = async (req, res) => {
  const deleted = await req.models.Users.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'User deleted' }) : res.status(404).json({ error: 'User not found' });
};