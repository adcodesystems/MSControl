from pydantic import BaseModel

class HorarioDetalleSaveModel(BaseModel):
    HorarioDetalleId: int
    HorarioId: int
    Items: int
    Hora : int
    Minuto: int
    TipoSecuenciaMarcacionId : int
    FlaInicio: bool
