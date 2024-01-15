import { Request, Response } from "express";
//const atau let digunakan untuk mendeklarasikan sebuah variabel
//object/array/function
const luasLingkaran = (request: Request, response:Response) =>{
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const luas = phi * r * r
        return response.status(200).json({
            status: true,
            r,
            luas 
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const kelilingLingkaran = (request: Request, response:Response) =>{
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const keliling = 2* phi * r
        return response.status(200).json({
            status: true,
            r,
            keliling
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const luasPersegi = (request: Request, response:Response) =>{
    try {
        const s : number = Number(request.body.s)
        const s1 : number = Number(request.body.s1)
        const luas = s * s1 
        return response.status(200).json({
            status: true,
            s,s1,
            luas
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const kelilingPersegi = (request: Request, response:Response) =>{
    try {
        const s : number = Number(request.body.s)
        const keliling = s * 4 
        return response.status(200).json({
            status: true,
            s,
            keliling
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const luaspersegipanjang = (request: Request, response:Response) =>{
    try {
        const l : number = Number(request.body.l)
        const p : number = Number(request.body.p)
        const luas = p * l 
        return response.status(200).json({
            status: true,
            l,p,luas,
            luaspersegipanjang
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const kelilingpersegipanjang = (request: Request, response:Response) =>{
    try {
        const l : number = Number(request.body.l)
        const p : number = Number(request.body.p)
        const keliling = 2 * (p + l) 
        return response.status(200).json({
            status: true,
            l,p,keliling,
            kelilingpersegipanjang
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const luasSegitiga = (request: Request, response:Response) =>{
    try {
        const a : number = Number(request.body.a)
        const t : number = Number(request.body.t)
        const keliling = 1/2 * a * t 
        return response.status(200).json({
            status: true,
            a,t,keliling,
            luasSegitiga
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}




export {luasLingkaran}
export {kelilingLingkaran}
export {luasPersegi}
export {kelilingPersegi}
export {luaspersegipanjang}
export {kelilingpersegipanjang}
export {luasSegitiga}


