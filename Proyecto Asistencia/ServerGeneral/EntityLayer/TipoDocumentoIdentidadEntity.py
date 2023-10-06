from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoDocumentoIdentidadSaveModel(BaseModel):
    TipoDocumentoIdentidadId: int 
    Codigo: str 
    Alias: str 
    Descripcion: str
    EsEmpresa: bool 

class TipoDocumentoIdentidadItemModel(BaseModel):
    TipoDocumentoIdentidadId: int = 0
    Codigo: str = ""
    Alias: str = ""
    Descripcion: str = ""
    EsEmpresa: bool = False

    def Cargar(_DB):
        c = TipoDocumentoIdentidadItemModel()
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"]
        c.Codigo = _DB["Codigo"]
        c.Alias = _DB["Alias"]
        c.Descripcion = _DB["Descripcion"]
        c.EsEmpresa = bool(ord(_DB["EsEmpresa"]))
        return c
