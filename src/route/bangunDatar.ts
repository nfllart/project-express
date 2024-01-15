import  express  from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingpersegipanjang, luasLingkaran, luasPersegi, luasSegitiga, luaspersegipanjang } from "../controller/bangunDatar"
const app = express()
// ..allow read a body
app.use(express.json()) 

//fungsi use untuk menerapkan fungsi object.express, maka akan otomatis dijalankan
app.post(`/lingkaran/luas`,luasLingkaran)
app.post(`/lingkaran/keliling`,kelilingLingkaran)
app.post(`/persegi/luas`,luasPersegi)
app.post(`/persegi/keliling`,kelilingPersegi)
app.post(`/persegipanjang/luas`,luaspersegipanjang)
app.post(`/persegipanjang/keliling`,kelilingpersegipanjang)
app.post(`/segitiga/luas`,luasSegitiga)


export default app