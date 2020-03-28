module.exports = {
    jwtSecret: process.env.JWT_SECRET || `pleaseletmeinitssocoldouthere`,
    PORT: process.env.PORT || 5503,
    env: process.env.DB_ENV || "development"
  };
  