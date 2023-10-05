from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.CategoriaEntity import *
import pymysql


class CategoriaDB:
    def Save(Ent: CategoriaEntity):
        try:
            Store: str
            Store = "sp_Categoria_Insert"
            if Ent.Action == ProcessActionEnum.Update:
                Store = "sp_Categoria_Update"
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)

                args = []
                args.append(Ent.CategoriaId)
                args.append(Ent.Nombre)
                args.append(Ent.FechaRegistro)
                args.append(Ent.CodUsuario)
                args.append(Ent.EstadoRegistro)

                cursor.callproc(Store, args)
                Ent.CategoriaId = int(cursor.fetchone()["v_CategoriaId"])

            conn.commit()
            return Ent
        except Exception as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    def GetMainItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_Categoria_Main")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = CategoriaItemEntity.CargarMain(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_Categoria_Delete", args)
                conn.commit()
            return ResponseAPI.Response(True)
        except Exception as e:
            error_code = e.args[0]
            error_entity = next((entity for entity in error_entities if entity['code'] == error_code), None)

            if error_entity:
                print(error_entity['message'])
                return ResponseAPIError.ErrorMensaje(error_entity['messageuser']) 
            else:
                error_message = "Ocurrió un error al eliminar el Registro"
                print(e)
                return ResponseAPIError.ErrorMensaje(error_message) 

        finally:
            cursor.close()
            conn.close()

    def GetCategoriaLikeItems(Nombre :str):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Nombre,)
                cursor.callproc("sp_CategoriaLikeItems", args)
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = CategoriaItemEntity.CargarLike(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)