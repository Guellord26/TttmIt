import axios from 'axios'

const URL_ROOT_REGISTER = "https://cors-anywhere.herokuapp.com/https://ttm.jungostudy.com/auth/signin"
const URL_ROOT_LOGIN = "https://cors-anywhere.herokuapp.com/https://ttm.jungostudy.com/auth/login"
const URL_ROOT_LISTE_STATUT = "https://cors-anywhere.herokuapp.com/https://ttm.jungostudy.com/auth/statut/"
const URL_ROOT_LISTE_EPT = "https://cors-anywhere.herokuapp.com/https://ttm.jungostudy.com/auth/compagnie/"

//============ cette methode permet de créer un User =============//

    export const createUser = (data)=>{
     
        return axios.post(URL_ROOT_REGISTER, data)
      
    }

//============ cette methode permet de conncter un User =============//

    export const loginUser = (data)=>{
        
        return axios.post(URL_ROOT_LOGIN, data)
    }
//============ cette methode requiper le profil du User =============//

    // export const getProfil = (data)=>{
        
    //     return axios.get(URL_ROOT_PROFILE)
    // }
//============ cette methode requiper lq liste des etreprise =============//

export const getListeEpt = (data)=>{
        
    return axios.get(URL_ROOT_LISTE_EPT)
}
//============ cette methode requiper lq liste des statut =============//

export const getListeStatut = (data)=>{
        
    return axios.get(URL_ROOT_LISTE_STATUT + data)
}

