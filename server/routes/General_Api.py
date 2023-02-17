from fastapi import APIRouter
from BusinessLayer.ModalidadHorario_Business import *
from BusinessLayer.TipoHorario_Business import *

General = APIRouter()


@General.get('/api/General/Get_ModalidadHorarioItems/', tags=["General"])
def Get_ModalidadHorarioItems():
    try:
        jsonData = ModalidadHorario_Business.Get_ModalidadHorarioItems()
        return jsonData
    except:
        print("An exception occurred")

@General.get('/api/General/Get_TipoHorarioItems/', tags=["General"])
def Get_TipoHorarioItems():
    try:
        jsonData = TipoHorario_Business.Get_TipoHorarioItems()
        return jsonData
    except:
        print("An exception occurred")