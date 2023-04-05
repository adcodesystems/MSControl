from datetime import datetime
from pydantic import BaseModel

class PersonaNaturalSave(BaseModel):
    MarcacionId: int
    HorarioId: int
    HorarioDetalleId: int
    Secuencia : int
    FlaTardanza: bool
    FlaTolerancia: bool
    FechaMarcacion: datetime
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool