exports.up = async function up(sql) {
  console.log('creating products table');
  await sql`
	CREATE TABLE products (
 id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      name VARCHAR(20) NOT NULL,
      descx VARCHAR(800) NOT NULL,
      price VARCHAR(12) NOT NULL

);`;
};

exports.down = async function down(sql) {
  console.log('removing products table');
  await sql`DROP TABLE products`;
};