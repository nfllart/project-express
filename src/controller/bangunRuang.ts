import { Request, Response } from "express";

const volumeTabung = (request: Request, response:Response) =>{
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const r1 : number = Number(request.body.r1)
        const t : number = Number(request.body.t)
        const volume = phi * r * r1 * t
        return response.status(200).json({
            status: true,
            r,r1,t,volume,
            volumeTabung 
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const LPTabung = (request: Request, response:Response) =>{
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const t : number = Number(request.body.t)
        const LP = 2* phi * r *(r + t)
        return response.status(200).json({
            status: true,
            r,t,LP,
            LPTabung 
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const volumeBalok = (request: Request, response:Response) =>{
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const volume = p * l * t
        return response.status(200).json({
            status: true,
            p,l,t,volume,
            volumeBalok
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const LPBalok = (request: Request, response:Response) =>{
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const LP = 2 *((p*l) + (p *t) + (l*t))
        return response.status(200).json({
            status: true,
            p,l,t,LP,
            LPBalok
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const volumeKubus = (request: Request, response:Response) =>{
    try {
        const s : number = Number(request.body.s)
        const volume = s*s*s*s 
        return response.status(200).json({
            status: true,
            s,
            volumeBalok
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
const LPKubus = (request: Request, response:Response) =>{
    try {
        const s : number = Number(request.body.s)
        const volume = 6*s*s 
        return response.status(200).json({
            status: true,
            s,
            LPKubus
        })
    } catch (error) {
    
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}
export {volumeTabung}
export {LPTabung}
export {volumeBalok}
export {LPBalok}
export {volumeKubus}
export {LPKubus}