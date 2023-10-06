from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.TipoDocumentoIdentidadEntity import *
import pymysql
class CategoriaDB:

    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoDocumentoIdentidad_SelectAll")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = TipoDocumentoIdentidadItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)