module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ed1badf36a6bb502296cc0ed2b08eb0'),
  },
});
