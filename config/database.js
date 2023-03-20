module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf5g3tg2i3mnvcvjnn10-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_1yxp'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '4vqvVt6OAnzZfnnPjSeSO6HvSe3BugWF'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
