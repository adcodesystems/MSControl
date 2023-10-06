from DataLayer.TipoDocumentoIdentidadDB import *
from EntityLayer.TipoDocumentoIdentidadEntity import *
class TipoDocumentoIdentidad:
  
    def GetItems():
        try:
            return CategoriaDB.GetItems()
        except Exception as e:
            print(e)
