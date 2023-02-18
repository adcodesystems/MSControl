from DataLayer.HorarioDetalle_Data import *
from EntityLayer.Horario.HorarioDetalleEntity import *

class HorarioDetalle_Business:
    def SaveHorarioDetalle(Ent: HorarioDetalleEntity):
        try:
            data = HorarioDetalle_Data.SaveHorarioDetalle(Ent)
            return data
        except Exception as e:
            print(e)
