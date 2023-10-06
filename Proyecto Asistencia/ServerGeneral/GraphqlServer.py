from ariadne import QueryType, make_executable_schema, load_schema_from_path
from BusinessLayer.PersonaNatural import PersonaNatural
from BusinessLayer.TipoDocumentoIdentidad import TipoDocumentoIdentidad

type_defs = load_schema_from_path("types.graphql")
query = QueryType()

@query.field("GHPersonaNaturals")
def resolve_GHPersonaNaturals(_, info):
    return PersonaNatural.GetItems()

@query.field("GHTipoDocumentoIdentidades")
def resolve_GHTipoDocumentoIdentidades(_, info):
    list = TipoDocumentoIdentidad.GetItems()
    return list

schema = make_executable_schema(type_defs, query)