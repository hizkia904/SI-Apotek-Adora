import express from "express";
import mysql from "mysql";
import cors from "cors";
// import session from "express-session";
// import expressMySqlSession from "express-mysql-session";

// const MySQLStore = expressMySqlSession(session);

const app = express();

//app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(cors());
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "si apotek adora",
  connectionLimit: "20",
});

// const sessionStore = new MySQLStore({}, pool);

// app.use(
//   session({
//     key: "picasso",
//     secret: "vinci",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// sessionStore
//   .onReady()
//   .then(() => {
//     console.log("MySqlStore ready");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const dbConnect = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      } else {
        resolve(conn);
      }
    });
  });
};

const checkUsernameAndPassword = (conn, masukan) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "select username,role from user where username=? and password=?",
      masukan,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

app.post("/login", async (req, res) => {
  try {
    const conn = await dbConnect();
    const { username, password } = req.body;
    const hasil = await checkUsernameAndPassword(conn, [username, password]);
    if (hasil.length === 0) {
      res.send("Maaf Username atau Password and salah");
    } else {
      res.send("Login Berhasil");
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(8080, () => {
  console.log("Server running!");
});
