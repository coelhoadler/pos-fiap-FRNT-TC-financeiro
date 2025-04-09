'use client'

import axios from 'axios'
import { ITypeTransaction } from '../../interfaces/transaction'

    
    export const getTypeTransaction = async () => {
        try {
            
            const response = await axios.get(`http://localhost:4000/typeTransaction`)

            if(response.status === 200){
                const data: ITypeTransaction[] = response.data 
                return data
            }
            
        } catch (error) {
            console.error('Error fetching transactions:', error)
            throw error    
        }
    }