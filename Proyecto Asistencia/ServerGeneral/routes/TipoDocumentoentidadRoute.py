from fastapi import APIRouter
from BusinessLayer.TipoDocumentoIdentidad import *
from EntityLayer.TipoDocumentoIdentidadEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

TipoDocumentoentidadRouter = APIRouter()
ApiName = "TipoDocumentoentidad"


@TipoDocumentoentidadRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: TipoDocumentoIdentidadSaveModel):
    try:
        Ent = TipoDocumentoIdentidad.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = TipoDocumentoIdentidad.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = TipoDocumentoIdentidad.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@TipoDocumentoentidadRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = TipoDocumentoIdentidad.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


