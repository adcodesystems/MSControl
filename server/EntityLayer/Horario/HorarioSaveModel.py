from datetime import datetime
from pydantic import BaseModel

class HorarioSaveModel(BaseModel):
    HorarioId: int
    Nombre: str
    InicioHora : int
    InicioMinutos: int
    TerminoHora : int
    TerminoMinutos: int
    TotalHorasTrabajo: int
    TurnoId : int
    TipoHorarioId : int
    ModalidadHorarioId : int
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool
