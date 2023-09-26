from fastapi import APIRouter
from BusinessLayer.Marcacion_Business import *
from EntityLayer.Marcacion.MarcacionEntity import *
Marcacion = APIRouter()



@Marcacion.post("/api/Marcacion_Insert", tags=["Marcacion"])
def Marcacion_Insert(Ent: MarcacionEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.EstadoRegistro = True
        jsonData = Marcacion_Business.SaveMarcacion(Ent)
        return jsonData
    except Exception as e:
        print(e)