from datetime import datetime


class MarcacionEntity:
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



def Cargar(_DB: any):
        c = MarcacionEntity()
        c.MarcacionId = _DB['MarcacionId']
        c.HorarioId = _DB['HorarioId']
        c.HorarioDetalleId = _DB['HorarioDetalleId']
        c.Secuencia = _DB['Secuencia']
        c.FlaTardanza = bool(_DB['FlaTardanza'])
        c.FlaTolerancia = bool(_DB['FlaTolerancia']
        c.FechaMarcacion = _DB['FechaMarcacion']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c