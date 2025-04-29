import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AvailabilityRequests extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    request_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_car_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_cars',
        key: 'user_car_id'
      }
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'availability_requests',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "request_id" },
        ]
      },
      {
        name: "user_car_id",
        using: "BTREE",
        fields: [
          { name: "user_car_id" },
        ]
      },
      {
        name: "buyer_id",
        using: "BTREE",
        fields: [
          { name: "buyer_id" },
        ]
      },
    ]
  });
  }
}
