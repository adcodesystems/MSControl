from fastapi import APIRouter
from BusinessLayer.TipoDocumentoIdentidad import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

TipoDocumentoIdentidadRouter = APIRouter()
ApiName = "TipoDocumentoIdentidad"


@TipoDocumentoIdentidadRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = TipoDocumentoIdentidad.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
