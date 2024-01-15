import  express  from "express"
import { volumeTabung, LPTabung, volumeBalok,LPBalok,volumeKubus,LPKubus} from "../controller/bangunRuang"
const app = express()
// ..allow read a body
app.use(express.json()) 

//fungsi use untuk menerapkan fungsi object.express, maka akan otomatis dijalankan
app.post(`/tabung/volume`,volumeTabung)
app.post(`/tabung/`,LPTabung)
app.post(`/balok/luas`,volumeBalok)
app.post(`/balok/keliling`,LPBalok)
app.post(`/kubus/luas`,volumeKubus)
app.post(`/kubus/keliling`,LPKubus)

export default app