from .configMysql import get_connection
import pymysql
from EntityLayer.Catalogo.TipoHorarioEntity import *


class TipoHorario_Data:
    def Get_TipoHorarioItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoHorarioItems", args=())
                resulset = cursor.fetchall()
            conn.close()
           
            list = []
            print(resulset)
            for row in resulset:
                Data_ent = TipoHorarioEntity.CargarItems(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)