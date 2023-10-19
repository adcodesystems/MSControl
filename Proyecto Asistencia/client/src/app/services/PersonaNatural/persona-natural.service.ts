import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PersonaNaturalSaveModel,PersonaNaturalMainModel } from '../../models/PersonaNaturalEntity'
import { apiGeneral } from '../axios-config';

@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {

  constructor() { }

  async GetItems(): Promise<PersonaNaturalMainModel[]> {
    try {
      const response = await apiGeneral.get(`api/PersonaNatural/GetItems`)
      return response.data.Value;
    } catch (err) {
      return [];
    }
  }

  async GetItem(id: number): Promise<PersonaNaturalSaveModel[]> {
    try {
      const response = await apiGeneral.get(`api/PersonaNatural/GetItem/${id}`)
      return response.data.Value;
    } catch (err) {
      return [];
    }
  }



  // async saveItem(item: PersonaNaturalSaveModel): Promise<PersonaNaturalSaveModel> {
  //   try {
  //     const response = await apiGeneral.post(`api/PersonaNatural/Save`, item, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //       return response.data.Value;
  //   } catch (error) {
  //     console.log(error);
  //     return new PersonaNaturalSaveModel();
  //   }
  // }


  async saveItem(item: PersonaNaturalSaveModel): Promise<PersonaNaturalSaveModel> {
    try {
      const response = await apiGeneral.post(`api/PersonaNatural/Save`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data.Value;
    } catch (error) {
      throw error; 
    }
  }
  

}
