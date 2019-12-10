import { Injectable } from '@angular/core';
import {Card} from "../domain/card";
import {HttpClient} from "@angular/common/http";
import {PersonalData} from "../domain/personal-data";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  persons: PersonalData[] = [];
  filteredPersons: PersonalData[] = this.persons;

  constructor(
    private http: HttpClient
  ){}

  async getPersons(){
    const persons = await (this.http.get('bank/persons/getAll')
      .toPromise() as Promise<any[]>);
    this.filteredPersons = this.persons = persons.map(this.createPersonalDataModel);
  }

  async getPersonalDataByID(personalDataID: number): Promise<PersonalData>{
    const personalData = await (this.http.get(`bank/persons/get/byID/${personalDataID}`)
      .toPromise() as Promise<any>);
    return this.createPersonalDataModel(personalData);
  }

  async createPersonalData (personalData: PersonalData): Promise<any>{
    console.log(personalData);
    await this.http.post('users', personalData).toPromise();
  }

  async modifyPersonalData (personalData: PersonalData): Promise<any>{
    await this.http.patch(`bank/persons/modify/${personalData.id}`, personalData).toPromise();
  }

  async deletePersonalData (personalData: PersonalData): Promise<any>{
    await this.http.delete(`bank/persons/delete/${personalData.id}`).toPromise();
    this.getPersons();
  }

  private createPersonalDataModel(personalData: any): PersonalData{
    return {
      ...personalData,
    } as PersonalData;
  }

  filterChange(filterValue: string) {
    if(typeof filterValue === 'string'){
      if(filterValue === ''){
        this.filteredPersons = this.persons;
      }else{
        this.filteredPersons = this.persons.filter(person => {
          return person.idCardNumber.includes(filterValue);
        });
      }
    }
  }
}
