from datetime import datetime
from pydantic import BaseModel
from EntityLayer.Horario.HorarioDetalleSaveModel import HorarioDetalleSaveModel

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
    Detalle: list[HorarioDetalleSaveModel]