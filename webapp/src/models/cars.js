import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Cars extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    car_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    make: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    engine: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    body_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    base_price: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "car_id" },
        ]
      },
    ]
  });
  }
}
