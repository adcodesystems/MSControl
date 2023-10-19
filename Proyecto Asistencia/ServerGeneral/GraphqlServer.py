from ariadne import QueryType, make_executable_schema, load_schema_from_path
from BusinessLayer.PersonaNatural import PersonaNatural
from BusinessLayer.TipoDocumentoIdentidad import TipoDocumentoIdentidad
from BusinessLayer.TipoSexo import TipoSexo
from BusinessLayer.EstadoCivil import EstadoCivil
from BusinessLayer.Ubigeo import Ubigeo

type_defs = load_schema_from_path("types.graphql")
query = QueryType()


@query.field("GHPersonaNaturals")
def resolve_GHPersonaNaturals(_, info):
    return PersonaNatural.GetItems()


@query.field("GHTipoDocumentoIdentidadeItems")
def resolve_GHTipoDocumentoIdentidadeItems(_, info):
    list = TipoDocumentoIdentidad.GetItems()
    return list

@query.field("GHTipoDocumentoIdentidadeItem")
def resolve_GHTipoDocumentoIdentidadeItem(_self, info, Id):
    list = TipoDocumentoIdentidad.GetItem(Id)
    return list

@query.field("GHTipoSexoItems")
def resolve_GHTipoSexoItems(_, info):
    list = TipoSexo.GetItems()
    return list

@query.field("GHTipoSexoItem")
def resolve_GHTipoSexoItem(_self, info, Id):
    list = TipoSexo.GetItem(Id)
    return list

@query.field("GHEstadoCivilItems")
def resolve_GHTipoEstadoCivilItems(_, info):
    list = EstadoCivil.GetItems()
    return list

@query.field("GHEstadoCivilItem")
def resolve_GHEstadoCivilItem(_self, info, Id):
    list = EstadoCivil.GetItem(Id)
    return list

@query.field("GHGetUbigeoItemLike")
def resolve_GHGetUbigeoItemLike(_self, info, Nombre):
    list = Ubigeo.GetItemLike(Nombre)
    return list

@query.field("GHGetUbigeoItem")
def resolve_GHGetUbigeoItem(_self, info, Id):
    list = Ubigeo.GetItem(Id)
    return list

schema = make_executable_schema(type_defs, query)
