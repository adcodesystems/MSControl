from fastapi import APIRouter
from BusinessLayer.PersonaNatural import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

PersonaNaturalRouter = APIRouter()
ApiName = "PersonaNatural"


@PersonaNaturalRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: PersonaNaturalSaveModel):
    try:
        print(Ent)
        Ent.FechaNacimiento = datetime.now()
        Ent.FechaRegistro = datetime.now()
        Ent.FechaVencimiento = datetime.now()
        Ent = PersonaNatural.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@PersonaNaturalRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = PersonaNatural.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@PersonaNaturalRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData = PersonaNatural.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)
