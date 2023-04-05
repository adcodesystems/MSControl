from .configMysql import get_connection
from EntityLayer.Marcacion.MarcacionEntity import *
import pymysql
from EntityLayer.Marcacion.MarcacionSaveModel import *
# from DataLayer.HorarioDetalle_Data import *


class Marcacion_Data:
    
    def SaveHorario(Ent: MarcacionModel):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.MarcacionId,
                    Ent.HorarioId,
                    Ent.HorarioDetalleId,
                    Ent.Secuencia,
                    Ent.FlaTardanza,
                    Ent.FlaTolerancia,
                    Ent.FechaMarcacion,
                    Ent.FechaRegistro,
                    Ent.UsuarioRegistro,
                    Ent.EstadoRegistro
                )

                result_args = cursor.callproc("sp_MarcacionInsert", args)
                for result in cursor.fetchall():
                    Ent.MarcacionId = result["v_MarcacionId"]

            # for row in Ent.data:
            #     row.MarcacionId = Ent.MarcacionId
            #     HorarioDetalle_Data.SaveHorarioDetalle(row)

            conn.commit()
            print(result_args[0])
            return Ent.MarcacionId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    # def Post_PersonaNatural_Delete(Id: int):
    #     try:
    #         conn = get_connection()
    #         with conn.cursor() as cursor:
    #             cursor = conn.cursor(pymysql.cursors.DictCursor)
    #             args = (Id,)
    #             result_args = cursor.callproc("sp_PersonaNaturalDelete", args)
    #             conn.commit()
    #         return True
    #     except Exception as e:
    #         print(e)
    #     finally:
    #         cursor.close()
    #         conn.close()

    # def Update_PersonaNatural_Insert(Ent: PersonaNaturalSave):
    #     try:
    #         conn = get_connection()
    #         with conn.cursor() as cursor:
    #             cursor = conn.cursor(pymysql.cursors.DictCursor)
    #             cursor = conn.cursor(pymysql.cursors.DictCursor)
    #             args = (Ent.TipoDocumentoIdentidadId,
    #             Ent.NumDocumento,
    #             Ent.Nombres,
    #             Ent.ApellidoPaterno,
    #             Ent.ApellidoMaterno,
    #             Ent.FechaNacimiento,
    #             Ent.FechaVencimiento,
    #             Ent.TipoSexoId,
    #             Ent.EstadoCivilId,
    #             Ent.Direccion,
    #             Ent.DireccionReferencia,
    #             Ent.UbigeoId,
    #             Ent.FechaRegistro,
    #             Ent.UsuarioRegistro,
    #             Ent.EstadoRegistro)

    #         result_args = cursor.callproc("sp_PersonaNaturalUpdate", args)

    #         conn.commit()
    #         # print(result_args[0])
    #         return True
    #     except Exception as e:
    #         print(e)
    #     finally:
    #         cursor.close()
    #         conn.close()
