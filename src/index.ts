// ini adalah file utama dimana ada proses menjalankan server backend

// memanggil library express
import express, { Request, Response } from "express";
import { validateCube } from "./middleware/validateCube";
import routeBangunDatar from "./route/bangunDatar"

//create wadah untuk inisasi expresss
const app= express()

//mendefinisikan PORT berjalannya server
const PORT = 8000

// allow to read JSON as request
app.use(express.json())

// proses pertama hanlde request
app.get(`/serena`, (request: Request, response: Response) => {

//preoses handle reuquest dengan url: http://localhost:8000/serena method: GET
return response.status(200).json({
    message: `hello world`
})
});

app.get(`/moklet`,(request: Request, response:Response) =>{
    // asumsi data yang dikirim nama dan umur
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `my name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

// request data from parameter
app.get(`/telkom/:gender`,(request: Request, response:Response) =>{
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `my name is ${nama} and im ${gender}`
    return response.status(200).json(message)

})

// read request from body
app.post(`/mokleters`,(request: Request, response:Response) =>{
    // asumsikan data yang dikirim adalah panjang dan lebar
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luaspersegipanjang: number = panjang * lebar
    let message: string = `luas persegi panjang adalah ${luaspersegipanjang}`
    return response.status(200).json(message)
})

//buatlah request untuk mengonversi suhu celcius ke fahrenheit,kelvin, dan reamur menggunakan parameter
//exp: https://localhost:8000/celcius/80
//80 celciusnya
// response data ->
//{
// reamur:?, fahrenfeit:?,kelvin:?
//}
///
app.post(`/nopall`,(request: Request, response:Response) =>{
    // asumsikan data yang dikirim adalah panjang dan lebar
    let fahrenfeit: number = request.body.fahrenfeit
    let kelvin: number = request.body.kelvin
    let reamur: number = request.body.reamur

    let suhu: number = fahrenfeit * kelvin
    let message: string = `luas persegi panjang adalah ${suhu}`
    return response.status(200).json(message)
})

//create request for count volume of long cube
app.post(`/balok`,validateCube,(request: Request, response:Response) =>{
    //read panjang, lebar, tinggi
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)
    
    let volume: number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi,volume
    })

})

//segitiga

// app.post(`/segitiga`,validateCube,(request: Request, response:Response) =>{
//     //read panjang, lebar, tinggi
//     let sisi: number = Number(request.body.sisi)
    
//     let luas: number = 1/2 * sisi * sisi
//     return response.status(200).json({
//         sisi,luas
//     })

// })

//register route of bangun datar
app.use(routeBangunDatar)

//run
app.listen(PORT, ( )=>{
    console.log(`Server running on port ${PORT}`);

})
    