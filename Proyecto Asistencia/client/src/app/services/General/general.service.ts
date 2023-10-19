import { Injectable } from '@angular/core';
import { apiGeneral } from '../axios-config';
import {
  TipoDocumentoIdentidadItemModel,
  EstadoCivilItemModel,
  TipoSexoItemModel,
  UbigeoItemModel
} from '../../models/GeneralEntity';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  constructor() { }

  async GetTipoDocuemntoIdentidadItems(): Promise<TipoDocumentoIdentidadItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `
      {GHTipoDocumentoIdentidadeItems {TipoDocumentoIdentidadId Alias}}`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadeItems
  }

  async GetTipoDocuemntoIdentidadItem(Id: number): Promise<TipoDocumentoIdentidadItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{ GHTipoDocumentoIdentidadeItem(Id: ${Id}) {TipoDocumentoIdentidadId Alias}}`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadeItem
  }

  async GetTipoSexoItems(): Promise<TipoSexoItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{GHTipoSexoItems { TipoSexoId  Nombre} }`,
    });
    return await response.data.data.GHTipoSexoItems
  }

  async GetTipoSexoItem(Id: number): Promise<TipoSexoItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{GHTipoSexoItem(Id: ${Id}) { TipoSexoId  Nombre} }`,
    });
    return await response.data.data.GHTipoSexoItem
  }


  async GetTipoEstadoCivilItems(): Promise<EstadoCivilItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{GHEstadoCivilItems {EstadoCivilId Nombre}}`,
    });
    return await response.data.data.GHEstadoCivilItems
  }


  async GetTipoEstadoCivilItem(Id: number): Promise<EstadoCivilItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{GHEstadoCivilItem(Id: ${Id})  {EstadoCivilId Nombre}}`,
    });
    return await response.data.data.GHEstadoCivilItem
  }


  async GetUbigeoItemLike(Nombre: string): Promise<UbigeoItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{
        GHGetUbigeoItemLike(Nombre: "${Nombre}") {UbigeoId DesUbigeo}}`,
    });
    return await response.data.data.GHGetUbigeoItemLike;
  }

  async GetUbigeoItem(Id: number): Promise<UbigeoItemModel[]> {
    const response = await apiGeneral.post('gql/General', {
      query: `{GHGetUbigeoItem (Id: ${Id})  {UbigeoId DesUbigeo}}`,
    });
    return await response.data.data.GHGetUbigeoItem
  }


}
