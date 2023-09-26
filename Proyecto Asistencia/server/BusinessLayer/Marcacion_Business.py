from DataLayer.Marcacion_Data import *
from EntityLayer.Marcacion.MarcacionSaveModel import *

class Marcacion_Business:
    def SaveMarcacion(Ent: MarcacionSaveModel):
        try:
            data = Marcacion_Data.SaveMarcacion(Ent)
            return data
        except Exception as e:
            print(e)