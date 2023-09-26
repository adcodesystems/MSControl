from DataLayer.Marcacion_Data import *
from EntityLayer.Marcacion.MarcacionEntity import *

class Marcacion_Business:
    def SaveMarcacion(Ent: MarcacionEntity):
        try:
            data = Marcacion_Data.SaveMarcacion(Ent)
            return data
        except Exception as e:
            print(e)