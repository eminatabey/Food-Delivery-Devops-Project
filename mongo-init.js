db = db.getSiblingDB("food_delivery");

if (db.users.find({ email: "admin@admin.com" }).count() === 0) {
  db.users.insertOne({
    name: "Admin",
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date()
  });
}