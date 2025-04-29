import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _AvailabilityRequests from  "./availability_requests.js";
import _CarReviews from  "./car_reviews.js";
import _Cars from  "./cars.js";
import _Notifications from  "./notifications.js";
import _Reports from  "./reports.js";
import _SavedLogs from  "./saved_logs.js";
import _SellerReviews from  "./seller_reviews.js";
import _UserCars from  "./user_cars.js";
import _Users from  "./users.js";

export default function initModels(sequelize) {
  const AvailabilityRequests = _AvailabilityRequests.init(sequelize, DataTypes);
  const CarReviews = _CarReviews.init(sequelize, DataTypes);
  const Cars = _Cars.init(sequelize, DataTypes);
  const Notifications = _Notifications.init(sequelize, DataTypes);
  const Reports = _Reports.init(sequelize, DataTypes);
  const SavedLogs = _SavedLogs.init(sequelize, DataTypes);
  const SellerReviews = _SellerReviews.init(sequelize, DataTypes);
  const UserCars = _UserCars.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  CarReviews.belongsTo(Cars, { as: "car", foreignKey: "car_id"});
  Cars.hasMany(CarReviews, { as: "car_reviews", foreignKey: "car_id"});
  Reports.belongsTo(Cars, { as: "car", foreignKey: "car_id"});
  Cars.hasMany(Reports, { as: "reports", foreignKey: "car_id"});
  SavedLogs.belongsTo(Cars, { as: "car", foreignKey: "car_id"});
  Cars.hasMany(SavedLogs, { as: "saved_logs", foreignKey: "car_id"});
  UserCars.belongsTo(Cars, { as: "car", foreignKey: "car_id"});
  Cars.hasMany(UserCars, { as: "user_cars", foreignKey: "car_id"});
  AvailabilityRequests.belongsTo(UserCars, { as: "user_car", foreignKey: "user_car_id"});
  UserCars.hasMany(AvailabilityRequests, { as: "availability_requests", foreignKey: "user_car_id"});
  AvailabilityRequests.belongsTo(Users, { as: "buyer", foreignKey: "buyer_id"});
  Users.hasMany(AvailabilityRequests, { as: "availability_requests", foreignKey: "buyer_id"});
  CarReviews.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(CarReviews, { as: "car_reviews", foreignKey: "user_id"});
  Notifications.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Notifications, { as: "notifications", foreignKey: "user_id"});
  Reports.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Reports, { as: "reports", foreignKey: "user_id"});
  SavedLogs.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(SavedLogs, { as: "saved_logs", foreignKey: "user_id"});
  SellerReviews.belongsTo(Users, { as: "seller", foreignKey: "seller_id"});
  Users.hasMany(SellerReviews, { as: "seller_reviews", foreignKey: "seller_id"});
  SellerReviews.belongsTo(Users, { as: "buyer", foreignKey: "buyer_id"});
  Users.hasMany(SellerReviews, { as: "buyer_seller_reviews", foreignKey: "buyer_id"});
  UserCars.belongsTo(Users, { as: "owner", foreignKey: "owner_id"});
  Users.hasMany(UserCars, { as: "user_cars", foreignKey: "owner_id"});

  return {
    AvailabilityRequests,
    CarReviews,
    Cars,
    Notifications,
    Reports,
    SavedLogs,
    SellerReviews,
    UserCars,
    Users,
  };
}
